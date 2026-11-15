(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ru="170",Em=0,vh=1,Am=2,cf=1,Cm=2,mi=3,Ji=0,je=1,Qn=2,Yi=0,er=1,xh=2,yh=3,Sh=4,ha=5,ds=100,Rm=101,Dm=102,Pm=103,Qc=104,Im=200,vi=201,Nm=202,Lm=203,tl=204,el=205,Om=206,Um=207,Fm=208,km=209,Vm=210,Bm=211,zm=212,Hm=213,Gm=214,nl=0,il=1,sl=2,sr=3,rl=4,ol=5,al=6,cl=7,lf=0,Wm=1,qm=2,$i=0,Xm=1,jm=2,Ym=3,$m=4,Zm=5,Km=6,Jm=7,uf=300,rr=301,or=302,ll=303,ul=304,Ia=306,hl=1e3,ps=1001,dl=1002,_n=1003,Qm=1004,To=1005,mn=1006,hc=1007,ji=1008,Ei=1009,hf=1010,df=1011,jr=1012,ou=1013,Ms=1014,xi=1015,Qr=1016,au=1017,cu=1018,ar=1020,ff=35902,pf=1021,mf=1022,Bn=1023,gf=1024,_f=1025,nr=1026,cr=1027,vf=1028,lu=1029,xf=1030,uu=1031,hu=1033,ia=33776,sa=33777,ra=33778,oa=33779,fl=35840,pl=35841,ml=35842,gl=35843,_l=36196,vl=37492,xl=37496,yl=37808,Sl=37809,Ml=37810,Tl=37811,wl=37812,bl=37813,El=37814,Al=37815,Cl=37816,Rl=37817,Dl=37818,Pl=37819,Il=37820,Nl=37821,aa=36492,Ll=36494,Ol=36495,yf=36283,Ul=36284,Fl=36285,kl=36286,tg=3200,eg=3201,ng=0,ig=1,bn="",Pe="srgb",_r="srgb-linear",Na="linear",ue="srgb",Ns=7680,Mh=519,sg=512,rg=513,og=514,Sf=515,ag=516,cg=517,lg=518,ug=519,Th=35044,wh="300 es",yi=2e3,da=2001;class vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,Vl=180/Math.PI;function to(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function rn(i,t,e){return Math.max(t,Math.min(e,i))}function hg(i,t){return(i%t+t)%t}function fc(i,t,e){return(1-e)*i+e*t}function Rr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class se{constructor(t=0,e=0){se.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,s,r,o,a,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],y=s[1],S=s[4],x=s[7],E=s[2],w=s[5],A=s[8];return r[0]=o*_+a*y+c*E,r[3]=o*m+a*S+c*w,r[6]=o*f+a*x+c*A,r[1]=l*_+u*y+h*E,r[4]=l*m+u*S+h*w,r[7]=l*f+u*x+h*A,r[2]=d*_+p*y+g*E,r[5]=d*m+p*S+g*w,r[8]=d*f+p*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pc.makeScale(t,e)),this}rotate(t){return this.premultiply(pc.makeRotation(-t)),this}translate(t,e){return this.premultiply(pc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new Ht;function Mf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dg(){const i=Yr("canvas");return i.style.display="block",i}const bh={};function Br(i){i in bh||(bh[i]=!0,console.warn(i))}function fg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mg(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bn?Na:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Eh=[.64,.33,.3,.6,.15,.06],Ah=[.2126,.7152,.0722],Ch=[.3127,.329],Rh=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[_r]:{primaries:Eh,whitePoint:Ch,transfer:Na,toXYZ:Rh,fromXYZ:Dh,luminanceCoefficients:Ah,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:Eh,whitePoint:Ch,transfer:ue,toXYZ:Rh,fromXYZ:Dh,luminanceCoefficients:Ah,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let Ls;class gg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ls===void 0&&(Ls=Yr("canvas")),Ls.width=t.width,Ls.height=t.height;const n=Ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ti(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _g=0,Tf=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=to(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mc(s[o].image)):r.push(mc(s[o]))}else r=mc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function mc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vg=0;class Ie extends vr{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=ps,s=ps,r=mn,o=ji,a=Bn,c=Ei,l=Ie.DEFAULT_ANISOTROPY,u=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=to(),this.name="",this.source=new Tf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hl:t.x=t.x-Math.floor(t.x);break;case ps:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hl:t.y=t.y-Math.floor(t.y);break;case ps:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=uf;Ie.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,x=(p+1)/2,E=(f+1)/2,w=(u+d)/4,A=(h+_)/4,C=(g+m)/4;return S>x&&S>E?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=w/n,r=A/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=C/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=A/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xg extends vr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ie(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends xg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wf extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yg extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||l!==p||u!==g){let m=1-a;const f=c*d+l*p+u*g+h*_,y=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const E=Math.sqrt(S),w=Math.atan2(E,f*y);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const x=a*y;if(c=c*m+d*x,l=l*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-a*p,t[e+2]=l*g+u*p+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ph.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return gc.copy(this).projectOnVector(t),this.sub(gc)}reflect(t){return this.sub(gc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new B,Ph=new xr;class eo{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),bo.subVectors(this.max,Dr),Os.subVectors(t.a,Dr),Us.subVectors(t.b,Dr),Fs.subVectors(t.c,Dr),Ui.subVectors(Us,Os),Fi.subVectors(Fs,Us),ss.subVectors(Os,Fs);let e=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-ss.z,ss.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,ss.z,0,-ss.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-ss.y,ss.x,0];return!_c(e,Os,Us,Fs,bo)||(e=[1,0,0,0,1,0,0,0,1],!_c(e,Os,Us,Fs,bo))?!1:(Eo.crossVectors(Ui,Fi),e=[Eo.x,Eo.y,Eo.z],_c(e,Os,Us,Fs,bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const li=[new B,new B,new B,new B,new B,new B,new B,new B],Nn=new B,wo=new eo,Os=new B,Us=new B,Fs=new B,Ui=new B,Fi=new B,ss=new B,Dr=new B,bo=new B,Eo=new B,rs=new B;function _c(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){rs.fromArray(i,r);const a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),c=t.dot(rs),l=e.dot(rs),u=n.dot(rs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Sg=new eo,Pr=new B,vc=new B;class no{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pr.subVectors(t,this.center);const e=Pr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pr.copy(t.center).add(vc)),this.expandByPoint(Pr.copy(t.center).sub(vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new B,xc=new B,Ao=new B,ki=new B,yc=new B,Co=new B,Sc=new B;class du{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xc.copy(t).add(e).multiplyScalar(.5),Ao.copy(e).sub(t).normalize(),ki.copy(this.origin).sub(xc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ao),a=ki.dot(this.direction),c=-ki.dot(Ao),l=ki.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xc).addScaledVector(Ao,d),p}intersectSphere(t,e){ui.subVectors(t.center,this.origin);const n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,n,s,r){yc.subVectors(e,t),Co.subVectors(n,t),Sc.crossVectors(yc,Co);let o=this.direction.dot(Sc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,t);const c=a*this.direction.dot(Co.crossVectors(ki,Co));if(c<0)return null;const l=a*this.direction.dot(yc.cross(ki));if(l<0||c+l>o)return null;const u=-a*ki.dot(Sc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,n,s,r,o,a,c,l,u,h,d,p,g,_,m){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,d,p,g,_,m)}set(t,e,n,s,r,o,a,c,l,u,h,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),o=1/ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,g=l*u,_=l*h;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,g=l*u,_=l*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mg,t,Tg)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Vi.crossVectors(n,hn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Vi.crossVectors(n,hn)),Vi.normalize(),Ro.crossVectors(hn,Vi),s[0]=Vi.x,s[4]=Ro.x,s[8]=hn.x,s[1]=Vi.y,s[5]=Ro.y,s[9]=hn.y,s[2]=Vi.z,s[6]=Ro.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],S=n[7],x=n[11],E=n[15],w=s[0],A=s[4],C=s[8],M=s[12],v=s[1],R=s[5],P=s[9],I=s[13],L=s[2],H=s[6],U=s[10],W=s[14],V=s[3],Y=s[7],J=s[11],nt=s[15];return r[0]=o*w+a*v+c*L+l*V,r[4]=o*A+a*R+c*H+l*Y,r[8]=o*C+a*P+c*U+l*J,r[12]=o*M+a*I+c*W+l*nt,r[1]=u*w+h*v+d*L+p*V,r[5]=u*A+h*R+d*H+p*Y,r[9]=u*C+h*P+d*U+p*J,r[13]=u*M+h*I+d*W+p*nt,r[2]=g*w+_*v+m*L+f*V,r[6]=g*A+_*R+m*H+f*Y,r[10]=g*C+_*P+m*U+f*J,r[14]=g*M+_*I+m*W+f*nt,r[3]=y*w+S*v+x*L+E*V,r[7]=y*A+S*R+x*H+E*Y,r[11]=y*C+S*P+x*U+E*J,r[15]=y*M+S*I+x*W+E*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*p-n*c*p)+_*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*u-r*c*u)+m*(+e*l*h-e*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+f*(-s*a*u-e*c*h+e*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=h*m*l-_*d*l+_*c*p-a*m*p-h*c*f+a*d*f,S=g*d*l-u*m*l-g*c*p+o*m*p+u*c*f-o*d*f,x=u*_*l-g*h*l+g*a*p-o*_*p-u*a*f+o*h*f,E=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,w=e*y+n*S+s*x+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=y*A,t[1]=(_*d*r-h*m*r-_*s*p+n*m*p+h*s*f-n*d*f)*A,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*A,t[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*p-n*c*p)*A,t[4]=S*A,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*A,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*p+e*c*p)*A,t[8]=x*A,t[9]=(g*h*r-u*_*r-g*n*p+e*_*p+u*n*f-e*h*f)*A,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*f+e*a*f)*A,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*p-e*a*p)*A,t[12]=E*A,t[13]=(u*_*s-g*h*s+g*n*d-e*_*d-u*n*m+e*h*m)*A,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*A,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,g=r*h,_=o*u,m=o*h,f=a*h,y=c*l,S=c*u,x=c*h,E=n.x,w=n.y,A=n.z;return s[0]=(1-(_+f))*E,s[1]=(p+x)*E,s[2]=(g-S)*E,s[3]=0,s[4]=(p-x)*w,s[5]=(1-(d+f))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+S)*A,s[9]=(m-y)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ks.set(s[0],s[1],s[2]).length();const o=ks.set(s[4],s[5],s[6]).length(),a=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ln.copy(this);const l=1/r,u=1/o,h=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,e.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=yi){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===yi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===da)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=yi){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*l,p=(n+s)*u;let g,_;if(a===yi)g=(o+r)*h,_=-2*h;else if(a===da)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ks=new B,Ln=new Ee,Mg=new B(0,0,0),Tg=new B(1,1,1),Vi=new B,Ro=new B,hn=new B,Ih=new Ee,Nh=new xr;class Ai{constructor(t=0,e=0,n=0,s=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class fu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wg=0;const Lh=new B,Vs=new xr,hi=new Ee,Do=new B,Ir=new B,bg=new B,Eg=new xr,Oh=new B(1,0,0),Uh=new B(0,1,0),Fh=new B(0,0,1),kh={type:"added"},Ag={type:"removed"},Bs={type:"childadded",child:null},Mc={type:"childremoved",child:null};class an extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const t=new B,e=new Ai,n=new xr,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Ht}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(Oh,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Lh.copy(t).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oh,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Do.copy(t):Do.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Ir,Do,this.up):hi.lookAt(Do,Ir,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(hi),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ag),Mc.child=t,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,t,bg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Eg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}an.DEFAULT_UP=new B(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new B,di=new B,Tc=new B,fi=new B,zs=new B,Hs=new B,Vh=new B,wc=new B,bc=new B,Ec=new B,Ac=new Me,Cc=new Me,Rc=new Me;class Vn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),di.subVectors(n,e),Tc.subVectors(t,e);const o=On.dot(On),a=On.dot(di),c=On.dot(Tc),l=di.dot(di),u=di.dot(Tc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ac.setScalar(0),Cc.setScalar(0),Rc.setScalar(0),Ac.fromBufferAttribute(t,e),Cc.fromBufferAttribute(t,n),Rc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ac,r.x),o.addScaledVector(Cc,r.y),o.addScaledVector(Rc,r.z),o}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),di.subVectors(t,e),On.cross(di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),di.subVectors(this.a,this.b),On.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;zs.subVectors(s,n),Hs.subVectors(r,n),wc.subVectors(t,n);const c=zs.dot(wc),l=Hs.dot(wc);if(c<=0&&l<=0)return e.copy(n);bc.subVectors(t,s);const u=zs.dot(bc),h=Hs.dot(bc);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(zs,o);Ec.subVectors(t,r);const p=zs.dot(Ec),g=Hs.dot(Ec);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Hs,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Vh.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Vh,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(zs,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Po={h:0,s:0,l:0};function Dc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=hg(t,1),e=rn(e,0,1),n=rn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Dc(o,r,t+1/3),this.g=Dc(o,r,t),this.b=Dc(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=bf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Jt.fromWorkingColorSpace(qe.copy(this),t),Math.round(rn(qe.r*255,0,255))*65536+Math.round(rn(qe.g*255,0,255))*256+Math.round(rn(qe.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Pe){Jt.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Po);const n=fc(Bi.h,Po.h,e),s=fc(Bi.s,Po.s,e),r=fc(Bi.l,Po.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new ce;ce.NAMES=bf;let Cg=0;class io extends vr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=to(),this.name="",this.blending=er,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=el,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tl&&(n.blendSrc=this.blendSrc),this.blendDst!==el&&(n.blendDst=this.blendDst),this.blendEquation!==ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pu extends io{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new B,Io=new se;class vn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Th,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Io.fromBufferAttribute(this,e),Io.applyMatrix3(t),this.setXY(e,Io.x,Io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Th&&(t.usage=this.usage),t}}class Ef extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Af extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xn extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rg=0;const Mn=new Ee,Pc=new an,Gs=new B,dn=new eo,Nr=new eo,Ue=new B;class Xn extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mf(t)?Af:Ef)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Pc.lookAt(t),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xn(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(dn.min,Nr.min),dn.expandByPoint(Ue),Ue.addVectors(dn.max,Nr.max),dn.expandByPoint(Ue)):(dn.expandByPoint(Nr.min),dn.expandByPoint(Nr.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ue.fromBufferAttribute(a,l),c&&(Gs.fromBufferAttribute(t,l),Ue.add(Gs)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new B,c[C]=new B;const l=new B,u=new B,h=new B,d=new se,p=new se,g=new se,_=new B,m=new B;function f(C,M,v){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),u.sub(l),h.sub(l),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[C].add(_),a[M].add(_),a[v].add(_),c[C].add(m),c[M].add(m),c[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,M=y.length;C<M;++C){const v=y[C],R=v.start,P=v.count;for(let I=R,L=R+P;I<L;I+=3)f(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const S=new B,x=new B,E=new B,w=new B;function A(C){E.fromBufferAttribute(s,C),w.copy(E);const M=a[C];S.copy(M),S.sub(E.multiplyScalar(E.dot(M))).normalize(),x.crossVectors(w,M);const R=x.dot(c[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,R)}for(let C=0,M=y.length;C<M;++C){const v=y[C],R=v.start,P=v.count;for(let I=R,L=R+P;I<L;I+=3)A(t.getX(I+0)),A(t.getX(I+1)),A(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new B,r=new B,o=new B,a=new B,c=new B,l=new B,u=new B,h=new B;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new vn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new Ee,os=new du,No=new no,zh=new B,Lo=new B,Oo=new B,Uo=new B,Ic=new B,Fo=new B,Hh=new B,ko=new B;class Je extends an{constructor(t=new Xn,e=new pu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Fo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Ic.fromBufferAttribute(h,t),o?Fo.addScaledVector(Ic,u):Fo.addScaledVector(Ic.sub(e),u))}e.add(Fo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(No.containsPoint(os.origin)===!1&&(os.intersectSphere(No,zh)===null||os.origin.distanceToSquared(zh)>(t.far-t.near)**2))&&(Bh.copy(r).invert(),os.copy(t.ray).applyMatrix4(Bh),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,E=S;x<E;x+=3){const w=a.getX(x),A=a.getX(x+1),C=a.getX(x+2);s=Vo(this,f,t,n,l,u,h,w,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=Vo(this,o,t,n,l,u,h,y,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,E=S;x<E;x+=3){const w=x,A=x+1,C=x+2;s=Vo(this,f,t,n,l,u,h,w,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,S=m+1,x=m+2;s=Vo(this,o,t,n,l,u,h,y,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Dg(i,t,e,n,s,r,o,a){let c;if(t.side===je?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ji,a),c===null)return null;ko.copy(a),ko.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ko);return l<e.near||l>e.far?null:{distance:l,point:ko.clone(),object:i}}function Vo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Lo),i.getVertexPosition(c,Oo),i.getVertexPosition(l,Uo);const u=Dg(i,t,e,n,Lo,Oo,Uo,Hh);if(u){const h=new B;Vn.getBarycoord(Hh,Lo,Oo,Uo,h),s&&(u.uv=Vn.getInterpolatedAttribute(s,a,c,l,h,new se)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,a,c,l,h,new se)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,c,l,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new B,materialIndex:0};Vn.getNormal(Lo,Oo,Uo,d.normal),u.face=d,u.barycoord=h}return u}class so extends Xn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xn(l,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(h,2));function g(_,m,f,y,S,x,E,w,A,C,M){const v=x/A,R=E/C,P=x/2,I=E/2,L=w/2,H=A+1,U=C+1;let W=0,V=0;const Y=new B;for(let J=0;J<U;J++){const nt=J*R-I;for(let xt=0;xt<H;xt++){const Vt=xt*v-P;Y[_]=Vt*y,Y[m]=nt*S,Y[f]=L,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[f]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(xt/A),h.push(1-J/C),W+=1}}for(let J=0;J<C;J++)for(let nt=0;nt<A;nt++){const xt=d+nt+H*J,Vt=d+nt+H*(J+1),j=d+(nt+1)+H*(J+1),$=d+(nt+1)+H*J;c.push(xt,Vt,$),c.push(Vt,j,$),V+=6}a.addGroup(p,V,M),p+=V,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function lr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=lr(i[e]);for(const s in n)t[s]=n[s]}return t}function Pg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Ig={clone:lr,merge:Ze};var Ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends io{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ng,this.fragmentShader=Lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=Pg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rf extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new B,Gh=new se,Wh=new se;class fn extends Rf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,Gh,Wh),e.subVectors(Wh,Gh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(dc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ws=-90,qs=1;class Og extends an{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Ws,qs,t,e);s.layers=this.layers,this.add(s);const r=new fn(Ws,qs,t,e);r.layers=this.layers,this.add(r);const o=new fn(Ws,qs,t,e);o.layers=this.layers,this.add(o);const a=new fn(Ws,qs,t,e);a.layers=this.layers,this.add(a);const c=new fn(Ws,qs,t,e);c.layers=this.layers,this.add(c);const l=new fn(Ws,qs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Df extends Ie{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:rr,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ug extends Ts{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Df(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new so(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:Yi});r.uniforms.tEquirect.value=e;const o=new Je(s,r),a=e.minFilter;return e.minFilter===ji&&(e.minFilter=mn),new Og(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Nc=new B,Fg=new B,kg=new Ht;class us{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Nc.subVectors(n,e).cross(Fg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kg.getNormalMatrix(t),s=this.coplanarPoint(Nc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new no,Bo=new B;class Pf{constructor(t=new us,e=new us,n=new us,s=new us,r=new us,o=new us){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],y=s[13],S=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-p,x-f).normalize(),n[1].setComponents(c+r,d+l,m+p,x+f).normalize(),n[2].setComponents(c+o,d+u,m+g,x+y).normalize(),n[3].setComponents(c-o,d-u,m-g,x-y).normalize(),n[4].setComponents(c-a,d-h,m-_,x-S).normalize(),e===yi)n[5].setComponents(c+a,d+h,m+_,x+S).normalize();else if(e===da)n[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Bo.x=s.normal.x>0?t.max.x:t.min.x,Bo.y=s.normal.y>0?t.max.y:t.min.y,Bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function If(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vg(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ro extends Xn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const y=f*d-o;for(let S=0;S<l;S++){const x=S*h-r;g.push(x,-y,0),_.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){const S=y+l*f,x=y+l*(f+1),E=y+1+l*(f+1),w=y+1+l*f;p.push(S,x,w),p.push(x,E,w)}this.setIndex(p),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,l_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,u_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,h_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g_="gl_FragColor = linearToOutputTexel( gl_FragColor );",__=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,C_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,I_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,z_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,m0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,A0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,X0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,j0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ov=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,av=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:Bg,alphahash_pars_fragment:zg,alphamap_fragment:Hg,alphamap_pars_fragment:Gg,alphatest_fragment:Wg,alphatest_pars_fragment:qg,aomap_fragment:Xg,aomap_pars_fragment:jg,batching_pars_vertex:Yg,batching_vertex:$g,begin_vertex:Zg,beginnormal_vertex:Kg,bsdfs:Jg,iridescence_fragment:Qg,bumpmap_pars_fragment:t_,clipping_planes_fragment:e_,clipping_planes_pars_fragment:n_,clipping_planes_pars_vertex:i_,clipping_planes_vertex:s_,color_fragment:r_,color_pars_fragment:o_,color_pars_vertex:a_,color_vertex:c_,common:l_,cube_uv_reflection_fragment:u_,defaultnormal_vertex:h_,displacementmap_pars_vertex:d_,displacementmap_vertex:f_,emissivemap_fragment:p_,emissivemap_pars_fragment:m_,colorspace_fragment:g_,colorspace_pars_fragment:__,envmap_fragment:v_,envmap_common_pars_fragment:x_,envmap_pars_fragment:y_,envmap_pars_vertex:S_,envmap_physical_pars_fragment:I_,envmap_vertex:M_,fog_vertex:T_,fog_pars_vertex:w_,fog_fragment:b_,fog_pars_fragment:E_,gradientmap_pars_fragment:A_,lightmap_pars_fragment:C_,lights_lambert_fragment:R_,lights_lambert_pars_fragment:D_,lights_pars_begin:P_,lights_toon_fragment:N_,lights_toon_pars_fragment:L_,lights_phong_fragment:O_,lights_phong_pars_fragment:U_,lights_physical_fragment:F_,lights_physical_pars_fragment:k_,lights_fragment_begin:V_,lights_fragment_maps:B_,lights_fragment_end:z_,logdepthbuf_fragment:H_,logdepthbuf_pars_fragment:G_,logdepthbuf_pars_vertex:W_,logdepthbuf_vertex:q_,map_fragment:X_,map_pars_fragment:j_,map_particle_fragment:Y_,map_particle_pars_fragment:$_,metalnessmap_fragment:Z_,metalnessmap_pars_fragment:K_,morphinstance_vertex:J_,morphcolor_vertex:Q_,morphnormal_vertex:t0,morphtarget_pars_vertex:e0,morphtarget_vertex:n0,normal_fragment_begin:i0,normal_fragment_maps:s0,normal_pars_fragment:r0,normal_pars_vertex:o0,normal_vertex:a0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:l0,clearcoat_normal_fragment_maps:u0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:d0,opaque_fragment:f0,packing:p0,premultiplied_alpha_fragment:m0,project_vertex:g0,dithering_fragment:_0,dithering_pars_fragment:v0,roughnessmap_fragment:x0,roughnessmap_pars_fragment:y0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:M0,shadowmap_vertex:T0,shadowmask_pars_fragment:w0,skinbase_vertex:b0,skinning_pars_vertex:E0,skinning_vertex:A0,skinnormal_vertex:C0,specularmap_fragment:R0,specularmap_pars_fragment:D0,tonemapping_fragment:P0,tonemapping_pars_fragment:I0,transmission_fragment:N0,transmission_pars_fragment:L0,uv_pars_fragment:O0,uv_pars_vertex:U0,uv_vertex:F0,worldpos_vertex:k0,background_vert:V0,background_frag:B0,backgroundCube_vert:z0,backgroundCube_frag:H0,cube_vert:G0,cube_frag:W0,depth_vert:q0,depth_frag:X0,distanceRGBA_vert:j0,distanceRGBA_frag:Y0,equirect_vert:$0,equirect_frag:Z0,linedashed_vert:K0,linedashed_frag:J0,meshbasic_vert:Q0,meshbasic_frag:tv,meshlambert_vert:ev,meshlambert_frag:nv,meshmatcap_vert:iv,meshmatcap_frag:sv,meshnormal_vert:rv,meshnormal_frag:ov,meshphong_vert:av,meshphong_frag:cv,meshphysical_vert:lv,meshphysical_frag:uv,meshtoon_vert:hv,meshtoon_frag:dv,points_vert:fv,points_frag:pv,shadow_vert:mv,shadow_frag:gv,sprite_vert:_v,sprite_frag:vv},ht={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Jn={basic:{uniforms:Ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new ce(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ze([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ze([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new ce(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ze([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ze([ht.points,ht.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ze([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ze([ht.common,ht.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ze([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ze([ht.sprite,ht.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ze([ht.common,ht.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ze([ht.lights,ht.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Jn.physical={uniforms:Ze([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const zo={r:0,b:0,g:0},cs=new Ai,xv=new Ee;function yv(i,t,e,n,s,r,o){const a=new ce(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function _(y){let S=!1;const x=g(y);x===null?f(a,c):x&&x.isColor&&(f(x,1),S=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===Ia)?(u===void 0&&(u=new Je(new so(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:lr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),cs.copy(S.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xv.makeRotationFromEuler(cs)),u.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ue,(h!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Je(new ro(2,2),new cn({name:"BackgroundMaterial",uniforms:lr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,S){y.getRGB(zo,Cf(i)),n.buffers.color.setClear(zo.r,zo.g,zo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(a,c)},render:_,addToRenderList:m}}function Sv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,R,P,I,L){let H=!1;const U=h(I,P,R);r!==U&&(r=U,l(r.object)),H=p(v,I,P,L),H&&g(v,I,P,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(v,R,P,I),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,R,P){const I=P.wireframe===!0;let L=n[v.id];L===void 0&&(L={},n[v.id]=L);let H=L[R.id];H===void 0&&(H={},L[R.id]=H);let U=H[I];return U===void 0&&(U=d(c()),H[I]=U),U}function d(v){const R=[],P=[],I=[];for(let L=0;L<e;L++)R[L]=0,P[L]=0,I[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:P,attributeDivisors:I,object:v,attributes:{},index:null}}function p(v,R,P,I){const L=r.attributes,H=R.attributes;let U=0;const W=P.getAttributes();for(const V in W)if(W[V].location>=0){const J=L[V];let nt=H[V];if(nt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),J===void 0||J.attribute!==nt||nt&&J.data!==nt.data)return!0;U++}return r.attributesNum!==U||r.index!==I}function g(v,R,P,I){const L={},H=R.attributes;let U=0;const W=P.getAttributes();for(const V in W)if(W[V].location>=0){let J=H[V];J===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(J=v.instanceColor));const nt={};nt.attribute=J,J&&J.data&&(nt.data=J.data),L[V]=nt,U++}r.attributes=L,r.attributesNum=U,r.index=I}function _(){const v=r.newAttributes;for(let R=0,P=v.length;R<P;R++)v[R]=0}function m(v){f(v,0)}function f(v,R){const P=r.newAttributes,I=r.enabledAttributes,L=r.attributeDivisors;P[v]=1,I[v]===0&&(i.enableVertexAttribArray(v),I[v]=1),L[v]!==R&&(i.vertexAttribDivisor(v,R),L[v]=R)}function y(){const v=r.newAttributes,R=r.enabledAttributes;for(let P=0,I=R.length;P<I;P++)R[P]!==v[P]&&(i.disableVertexAttribArray(P),R[P]=0)}function S(v,R,P,I,L,H,U){U===!0?i.vertexAttribIPointer(v,R,P,L,H):i.vertexAttribPointer(v,R,P,I,L,H)}function x(v,R,P,I){_();const L=I.attributes,H=P.getAttributes(),U=R.defaultAttributeValues;for(const W in H){const V=H[W];if(V.location>=0){let Y=L[W];if(Y===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Y=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Y=v.instanceColor)),Y!==void 0){const J=Y.normalized,nt=Y.itemSize,xt=t.get(Y);if(xt===void 0)continue;const Vt=xt.buffer,j=xt.type,$=xt.bytesPerElement,at=j===i.INT||j===i.UNSIGNED_INT||Y.gpuType===ou;if(Y.isInterleavedBufferAttribute){const st=Y.data,tt=st.stride,Lt=Y.offset;if(st.isInstancedInterleavedBuffer){for(let Ut=0;Ut<V.locationSize;Ut++)f(V.location+Ut,st.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ut=0;Ut<V.locationSize;Ut++)m(V.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let Ut=0;Ut<V.locationSize;Ut++)S(V.location+Ut,nt/V.locationSize,j,J,tt*$,(Lt+nt/V.locationSize*Ut)*$,at)}else{if(Y.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)f(V.location+st,Y.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let st=0;st<V.locationSize;st++)m(V.location+st);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let st=0;st<V.locationSize;st++)S(V.location+st,nt/V.locationSize,j,J,nt*$,nt/V.locationSize*st*$,at)}}else if(U!==void 0){const J=U[W];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(V.location,J);break;case 3:i.vertexAttrib3fv(V.location,J);break;case 4:i.vertexAttrib4fv(V.location,J);break;default:i.vertexAttrib1fv(V.location,J)}}}}y()}function E(){C();for(const v in n){const R=n[v];for(const P in R){const I=R[P];for(const L in I)u(I[L].object),delete I[L];delete R[P]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const P in R){const I=R[P];for(const L in I)u(I[L].object),delete I[L];delete R[P]}delete n[v.id]}function A(v){for(const R in n){const P=n[R];if(P[v.id]===void 0)continue;const I=P[v.id];for(const L in I)u(I[L].object),delete I[L];delete P[v.id]}}function C(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Mv(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Tv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ei&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==xi&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:E,maxSamples:w}}function wv(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new us,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const y=r?0:n,S=y*4;let x=f.clippingState||null;c.value=x,x=u(g,d,S,p);for(let E=0;E!==S;++E)x[E]=e[E];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,x=p;S!==_;++S,x+=4)o.copy(h[S]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function bv(i){let t=new WeakMap;function e(o,a){return a===ll?o.mapping=rr:a===ul&&(o.mapping=or),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ll||a===ul)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ug(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ev extends Rf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ks=4,qh=[.125,.215,.35,.446,.526,.582],fs=20,Lc=new Ev,Xh=new ce;let Oc=null,Uc=0,Fc=0,kc=!1;const hs=(1+Math.sqrt(5))/2,Xs=1/hs,jh=[new B(-hs,Xs,0),new B(hs,Xs,0),new B(-Xs,0,hs),new B(Xs,0,hs),new B(0,hs,-Xs),new B(0,hs,Xs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Yh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Oc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oc,Uc,Fc),this._renderer.xr.enabled=kc,t.scissorTest=!1,Ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Qr,format:Bn,colorSpace:_r,depthBuffer:!1},s=$h(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Av(r)),this._blurMaterial=Cv(r,t,e)}return s}_compileMaterial(t){const e=new Je(this._lodPlanes[0],t);this._renderer.compile(e,Lc)}_sceneToCubeUV(t,e,n,s){const a=new fn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Xh),u.toneMapping=$i,u.autoClear=!1;const p=new pu({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new Je(new so,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Xh),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):y===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const S=this._cubeSize;Ho(s,y*S,f>2?S:0,S,S),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===rr||t.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ho(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Lc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jh[(s-r-1)%jh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Je(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):fs;m>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);const f=[];let y=0;for(let A=0;A<fs;++A){const C=A/_,M=Math.exp(-C*C/2);f.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const x=this._sizeLods[s],E=3*x*(s>S-Ks?s-S+Ks:0),w=4*(this._cubeSize-x);Ho(e,E,w,3*x,2*x),c.setRenderTarget(e),c.render(h,Lc)}}function Av(i){const t=[],e=[],n=[];let s=i;const r=i-Ks+1+qh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ks?c=qh[o-i+Ks-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),S=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,C=w>2?0:-1,M=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(M,_*g*w),S.set(d,m*g*w);const v=[w,w,w,w,w,w];x.set(v,f*g*w)}const E=new Xn;E.setAttribute("position",new vn(y,_)),E.setAttribute("uv",new vn(S,m)),E.setAttribute("faceIndex",new vn(x,f)),t.push(E),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $h(i,t,e){const n=new Ts(i,t,e);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ho(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Cv(i,t,e){const n=new Float32Array(fs),s=new B(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Zh(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Kh(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ll||c===ul,u=c===rr||c===or;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Yh(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Yh(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Br("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pv(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let S=0,x=y.length;S<x;S+=3){const E=y[S+0],w=y[S+1],A=y[S+2];d.push(E,w,w,A,A,E)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,x=y.length/3-1;S<x;S+=3){const E=S+0,w=S+1,A=S+2;d.push(E,w,w,A,A,E)}}else return;const m=new(Mf(d)?Af:Ef)(d,1);m.version=_;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Iv(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function h(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*_[y];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Nv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lv(i,t,e){const n=new WeakMap,s=new Me;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const w=new Float32Array(x*E*4*h),A=new wf(w,x,E,h);A.type=xi,A.needsUpdate=!0;const C=S*4;for(let v=0;v<h;v++){const R=m[v],P=f[v],I=y[v],L=x*E*4*v;for(let H=0;H<R.count;H++){const U=H*C;p===!0&&(s.fromBufferAttribute(R,H),w[L+U+0]=s.x,w[L+U+1]=s.y,w[L+U+2]=s.z,w[L+U+3]=0),g===!0&&(s.fromBufferAttribute(P,H),w[L+U+4]=s.x,w[L+U+5]=s.y,w[L+U+6]=s.z,w[L+U+7]=0),_===!0&&(s.fromBufferAttribute(I,H),w[L+U+8]=s.x,w[L+U+9]=s.y,w[L+U+10]=s.z,w[L+U+11]=I.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new se(x,E)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ov(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Nf extends Ie{constructor(t,e,n,s,r,o,a,c,l,u=nr){if(u!==nr&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===nr&&(n=Ms),n===void 0&&u===cr&&(n=ar),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lf=new Ie,Jh=new Nf(1,1),Of=new wf,Uf=new yg,Ff=new Df,Qh=[],td=[],ed=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function yr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Qh[s];if(r===void 0&&(r=new Float32Array(s),Qh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function La(i,t){let e=td[t];e===void 0&&(e=new Int32Array(t),td[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Uv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function kv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function Vv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function Bv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Ne(e,n))return;id.set(n),i.uniformMatrix2fv(this.addr,!1,id),Le(e,n)}}function zv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Ne(e,n))return;nd.set(n),i.uniformMatrix3fv(this.addr,!1,nd),Le(e,n)}}function Hv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Ne(e,n))return;ed.set(n),i.uniformMatrix4fv(this.addr,!1,ed),Le(e,n)}}function Gv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function qv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function Xv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function jv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function $v(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function Zv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function Kv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jh.compareFunction=Sf,r=Jh):r=Lf,e.setTexture2D(t||r,s)}function Jv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uf,s)}function Qv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ff,s)}function tx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Of,s)}function ex(i){switch(i){case 5126:return Uv;case 35664:return Fv;case 35665:return kv;case 35666:return Vv;case 35674:return Bv;case 35675:return zv;case 35676:return Hv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return qv;case 35669:case 35673:return Xv;case 5125:return jv;case 36294:return Yv;case 36295:return $v;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return tx}}function nx(i,t){i.uniform1fv(this.addr,t)}function ix(i,t){const e=yr(t,this.size,2);i.uniform2fv(this.addr,e)}function sx(i,t){const e=yr(t,this.size,3);i.uniform3fv(this.addr,e)}function rx(i,t){const e=yr(t,this.size,4);i.uniform4fv(this.addr,e)}function ox(i,t){const e=yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ax(i,t){const e=yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cx(i,t){const e=yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function lx(i,t){i.uniform1iv(this.addr,t)}function ux(i,t){i.uniform2iv(this.addr,t)}function hx(i,t){i.uniform3iv(this.addr,t)}function dx(i,t){i.uniform4iv(this.addr,t)}function fx(i,t){i.uniform1uiv(this.addr,t)}function px(i,t){i.uniform2uiv(this.addr,t)}function mx(i,t){i.uniform3uiv(this.addr,t)}function gx(i,t){i.uniform4uiv(this.addr,t)}function _x(i,t,e){const n=this.cache,s=t.length,r=La(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Lf,r[o])}function vx(i,t,e){const n=this.cache,s=t.length,r=La(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Uf,r[o])}function xx(i,t,e){const n=this.cache,s=t.length,r=La(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ff,r[o])}function yx(i,t,e){const n=this.cache,s=t.length,r=La(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Of,r[o])}function Sx(i){switch(i){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ox;case 35675:return ax;case 35676:return cx;case 5124:case 35670:return lx;case 35667:case 35671:return ux;case 35668:case 35672:return hx;case 35669:case 35673:return dx;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return yx}}class Mx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ex(e.type)}}class Tx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sx(e.type)}}class wx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function sd(i,t){i.seq.push(t),i.map[t.id]=t}function bx(i,t,e){const n=i.name,s=n.length;for(Vc.lastIndex=0;;){const r=Vc.exec(n),o=Vc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){sd(e,l===void 0?new Mx(a,i,t):new Tx(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new wx(a),sd(e,h)),e=h}}}class ca{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);bx(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function rd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ex=37297;let Ax=0;function Cx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const od=new Ht;function Rx(i){Jt._getMatrix(od,Jt.workingColorSpace,i);const t=`mat3( ${od.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case Na:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ad(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Cx(i.getShaderSource(t),o)}else return s}function Dx(i,t){const e=Rx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Px(i,t){let e;switch(t){case Xm:e="Linear";break;case jm:e="Reinhard";break;case Ym:e="Cineon";break;case $m:e="ACESFilmic";break;case Km:e="AgX";break;case Jm:e="Neutral";break;case Zm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Go=new B;function Ix(){Jt.getLuminanceCoefficients(Go);const i=Go.x.toFixed(4),t=Go.y.toFixed(4),e=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function Lx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ox(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function zr(i){return i!==""}function cd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ld(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(i){return i.replace(Ux,kx)}const Fx=new Map;function kx(i,t){let e=qt[t];if(e===void 0){const n=Fx.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bl(e)}const Vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace(Vx,Bx)}function Bx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cm?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Hx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rr:case or:t="ENVMAP_TYPE_CUBE";break;case Ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case or:t="ENVMAP_MODE_REFRACTION";break}return t}function Wx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lf:t="ENVMAP_BLENDING_MULTIPLY";break;case Wm:t="ENVMAP_BLENDING_MIX";break;case qm:t="ENVMAP_BLENDING_ADD";break}return t}function qx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xx(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=zx(e),l=Hx(e),u=Gx(e),h=Wx(e),d=qx(e),p=Nx(e),g=Lx(r),_=s.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zr).join(`
`),f.length>0&&(f+=`
`)):(m=[hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),f=[hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?qt.tonemapping_pars_fragment:"",e.toneMapping!==$i?Px("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Dx("linearToOutputTexel",e.outputColorSpace),Ix(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),o=Bl(o),o=cd(o,e),o=ld(o,e),a=Bl(a),a=cd(a,e),a=ld(a,e),o=ud(o),a=ud(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=y+m+o,x=y+f+a,E=rd(s,s.VERTEX_SHADER,S),w=rd(s,s.FRAGMENT_SHADER,x);s.attachShader(_,E),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(_).trim(),I=s.getShaderInfoLog(E).trim(),L=s.getShaderInfoLog(w).trim();let H=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,w);else{const W=ad(s,E,"vertex"),V=ad(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+W+`
`+V)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(I===""||L==="")&&(U=!1);U&&(R.diagnostics={runnable:H,programLog:P,vertexShader:{log:I,prefix:m},fragmentShader:{log:L,prefix:f}})}s.deleteShader(E),s.deleteShader(w),C=new ca(s,_),M=Ox(s,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Ex)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ax++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let jx=0;class Yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $x(t),e.set(t,n)),n}}class $x{constructor(t){this.id=jx++,this.code=t,this.usedTimes=0}}function Zx(i,t,e,n,s,r,o){const a=new fu,c=new Yx,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,v,R,P,I){const L=P.fog,H=I.geometry,U=M.isMeshStandardMaterial?P.environment:null,W=(M.isMeshStandardMaterial?e:t).get(M.envMap||U),V=W&&W.mapping===Ia?W.image.height:null,Y=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,nt=J!==void 0?J.length:0;let xt=0;H.morphAttributes.position!==void 0&&(xt=1),H.morphAttributes.normal!==void 0&&(xt=2),H.morphAttributes.color!==void 0&&(xt=3);let Vt,j,$,at;if(Y){const le=Jn[Y];Vt=le.vertexShader,j=le.fragmentShader}else Vt=M.vertexShader,j=M.fragmentShader,c.update(M),$=c.getVertexShaderID(M),at=c.getFragmentShaderID(M);const st=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),Lt=I.isInstancedMesh===!0,Ut=I.isBatchedMesh===!0,re=!!M.map,Gt=!!M.matcap,Te=!!W,k=!!M.aoMap,lt=!!M.lightMap,ct=!!M.bumpMap,It=!!M.normalMap,dt=!!M.displacementMap,Ct=!!M.emissiveMap,ft=!!M.metalnessMap,D=!!M.roughnessMap,T=M.anisotropy>0,z=M.clearcoat>0,K=M.dispersion>0,et=M.iridescence>0,Z=M.sheen>0,Rt=M.transmission>0,mt=T&&!!M.anisotropyMap,Mt=z&&!!M.clearcoatMap,Kt=z&&!!M.clearcoatNormalMap,rt=z&&!!M.clearcoatRoughnessMap,Tt=et&&!!M.iridescenceMap,Ot=et&&!!M.iridescenceThicknessMap,Ft=Z&&!!M.sheenColorMap,wt=Z&&!!M.sheenRoughnessMap,$t=!!M.specularMap,Wt=!!M.specularColorMap,fe=!!M.specularIntensityMap,N=Rt&&!!M.transmissionMap,pt=Rt&&!!M.thicknessMap,X=!!M.gradientMap,Q=!!M.alphaMap,vt=M.alphaTest>0,gt=!!M.alphaHash,Bt=!!M.extensions;let we=$i;M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(we=i.toneMapping);const Ge={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:Vt,fragmentShader:j,defines:M.defines,customVertexShaderID:$,customFragmentShaderID:at,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ut,batchingColor:Ut&&I._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&I.instanceColor!==null,instancingMorph:Lt&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:_r,alphaToCoverage:!!M.alphaToCoverage,map:re,matcap:Gt,envMap:Te,envMapMode:Te&&W.mapping,envMapCubeUVHeight:V,aoMap:k,lightMap:lt,bumpMap:ct,normalMap:It,displacementMap:d&&dt,emissiveMap:Ct,normalMapObjectSpace:It&&M.normalMapType===ig,normalMapTangentSpace:It&&M.normalMapType===ng,metalnessMap:ft,roughnessMap:D,anisotropy:T,anisotropyMap:mt,clearcoat:z,clearcoatMap:Mt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:rt,dispersion:K,iridescence:et,iridescenceMap:Tt,iridescenceThicknessMap:Ot,sheen:Z,sheenColorMap:Ft,sheenRoughnessMap:wt,specularMap:$t,specularColorMap:Wt,specularIntensityMap:fe,transmission:Rt,transmissionMap:N,thicknessMap:pt,gradientMap:X,opaque:M.transparent===!1&&M.blending===er&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:vt,alphaHash:gt,combine:M.combine,mapUv:re&&_(M.map.channel),aoMapUv:k&&_(M.aoMap.channel),lightMapUv:lt&&_(M.lightMap.channel),bumpMapUv:ct&&_(M.bumpMap.channel),normalMapUv:It&&_(M.normalMap.channel),displacementMapUv:dt&&_(M.displacementMap.channel),emissiveMapUv:Ct&&_(M.emissiveMap.channel),metalnessMapUv:ft&&_(M.metalnessMap.channel),roughnessMapUv:D&&_(M.roughnessMap.channel),anisotropyMapUv:mt&&_(M.anisotropyMap.channel),clearcoatMapUv:Mt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:wt&&_(M.sheenRoughnessMap.channel),specularMapUv:$t&&_(M.specularMap.channel),specularColorMapUv:Wt&&_(M.specularColorMap.channel),specularIntensityMapUv:fe&&_(M.specularIntensityMap.channel),transmissionMapUv:N&&_(M.transmissionMap.channel),thicknessMapUv:pt&&_(M.thicknessMap.channel),alphaMapUv:Q&&_(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(It||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(re||Q),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:tt,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:xt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:re&&M.map.isVideoTexture===!0&&Jt.getTransfer(M.map.colorSpace)===ue,decodeVideoTextureEmissive:Ct&&M.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(M.emissiveMap.colorSpace)===ue,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qn,flipSided:M.side===je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Bt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&M.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function f(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)v.push(R),v.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(y(v,M),S(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function y(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function S(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const v=g[M.type];let R;if(v){const P=Jn[v];R=Ig.clone(P.uniforms)}else R=M.uniforms;return R}function E(M,v){let R;for(let P=0,I=u.length;P<I;P++){const L=u[P];if(L.cacheKey===v){R=L,++R.usedTimes;break}}return R===void 0&&(R=new Xx(i,v,M,r),u.push(R)),R}function w(M){if(--M.usedTimes===0){const v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function A(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:E,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:C}}function Kx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),t++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||Jx),n.length>1&&n.sort(d||dd),s.length>1&&s.sort(d||dd)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Qx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new fd,i.set(n,[o])):s>=r.length?(o=new fd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ty(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new ce};break;case"SpotLight":e={position:new B,direction:new B,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function ey(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ny=0;function iy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function sy(i){const t=new ty,e=ey(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const s=new B,r=new Ee,o=new Ee;function a(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,S=0,x=0,E=0,w=0,A=0;l.sort(iy);for(let M=0,v=l.length;M<v;M++){const R=l[M],P=R.color,I=R.intensity,L=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=P.r*I,h+=P.g*I,d+=P.b*I;else if(R.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(R.sh.coefficients[U],I);A++}else if(R.isDirectionalLight){const U=t.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,V=e.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=R.shadow.matrix,y++}n.directional[p]=U,p++}else if(R.isSpotLight){const U=t.get(R);U.position.setFromMatrixPosition(R.matrixWorld),U.color.copy(P).multiplyScalar(I),U.distance=L,U.coneCos=Math.cos(R.angle),U.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),U.decay=R.decay,n.spot[_]=U;const W=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,W.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=W.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=H,x++}_++}else if(R.isRectAreaLight){const U=t.get(R);U.color.copy(P).multiplyScalar(I),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=U,m++}else if(R.isPointLight){const U=t.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),U.distance=R.distance,U.decay=R.decay,R.castShadow){const W=R.shadow,V=e.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=U,g++}else if(R.isHemisphereLight){const U=t.get(R);U.skyColor.copy(R.color).multiplyScalar(I),U.groundColor.copy(R.groundColor).multiplyScalar(I),n.hemi[f]=U,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==y||C.numPointShadows!==S||C.numSpotShadows!==x||C.numSpotMaps!==E||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=y,C.numPointShadows=S,C.numSpotShadows=x,C.numSpotMaps=E,C.numLightProbes=A,n.version=ny++)}function c(l,u){let h=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const S=l[f];if(S.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(S.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function pd(i){const t=new sy(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ry(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new pd(i),t.set(s,[a])):r>=o.length?(a=new pd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class oy extends io{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ay extends io{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ly=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uy(i,t,e){let n=new Pf;const s=new se,r=new se,o=new Me,a=new oy({depthPacking:eg}),c=new ay,l={},u=e.maxTextureSize,h={[Ji]:je,[je]:Ji,[Qn]:Qn},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:cy,fragmentShader:ly}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Xn;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Je(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cf;let f=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Yi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=f!==mi&&this.type===mi,L=f===mi&&this.type!==mi;for(let H=0,U=w.length;H<U;H++){const W=w[H],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const Y=V.getFrameExtents();if(s.multiply(Y),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,V.mapSize.y=r.y)),V.map===null||I===!0||L===!0){const nt=this.type!==mi?{minFilter:_n,magFilter:_n}:{};V.map!==null&&V.map.dispose(),V.map=new Ts(s.x,s.y,nt),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const J=V.getViewportCount();for(let nt=0;nt<J;nt++){const xt=V.getViewport(nt);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),P.viewport(o),V.updateMatrices(W,nt),n=V.getFrustum(),x(A,C,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===mi&&y(V,C),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,R)};function y(w,A){const C=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ts(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,C,p,_,null)}function S(w,A,C,M){let v=null;const R=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)v=R;else if(v=C.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const P=v.uuid,I=A.uuid;let L=l[P];L===void 0&&(L={},l[P]=L);let H=L[I];H===void 0&&(H=v.clone(),L[I]=H,A.addEventListener("dispose",E)),v=H}if(v.visible=A.visible,v.wireframe=A.wireframe,M===mi?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const P=i.properties.get(v);P.light=C}return v}function x(w,A,C,M,v){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===mi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const I=t.update(w),L=w.material;if(Array.isArray(L)){const H=I.groups;for(let U=0,W=H.length;U<W;U++){const V=H[U],Y=L[V.materialIndex];if(Y&&Y.visible){const J=S(w,Y,M,v);w.onBeforeShadow(i,w,A,C,I,J,V),i.renderBufferDirect(C,null,I,J,w,V),w.onAfterShadow(i,w,A,C,I,J,V)}}}else if(L.visible){const H=S(w,L,M,v);w.onBeforeShadow(i,w,A,C,I,H,null),i.renderBufferDirect(C,null,I,H,w,null),w.onAfterShadow(i,w,A,C,I,H,null)}}const P=w.children;for(let I=0,L=P.length;I<L;I++)x(P[I],A,C,M,v)}function E(w){w.target.removeEventListener("dispose",E);for(const C in l){const M=l[C],v=w.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const hy={[nl]:il,[sl]:al,[rl]:cl,[sr]:ol,[il]:nl,[al]:sl,[cl]:rl,[ol]:sr};function dy(i,t){function e(){let N=!1;const pt=new Me;let X=null;const Q=new Me(0,0,0,0);return{setMask:function(vt){X!==vt&&!N&&(i.colorMask(vt,vt,vt,vt),X=vt)},setLocked:function(vt){N=vt},setClear:function(vt,gt,Bt,we,Ge){Ge===!0&&(vt*=we,gt*=we,Bt*=we),pt.set(vt,gt,Bt,we),Q.equals(pt)===!1&&(i.clearColor(vt,gt,Bt,we),Q.copy(pt))},reset:function(){N=!1,X=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,pt=!1,X=null,Q=null,vt=null;return{setReversed:function(gt){if(pt!==gt){const Bt=t.get("EXT_clip_control");pt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const we=vt;vt=null,this.setClear(we)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?st(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(gt){X!==gt&&!N&&(i.depthMask(gt),X=gt)},setFunc:function(gt){if(pt&&(gt=hy[gt]),Q!==gt){switch(gt){case nl:i.depthFunc(i.NEVER);break;case il:i.depthFunc(i.ALWAYS);break;case sl:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case rl:i.depthFunc(i.EQUAL);break;case ol:i.depthFunc(i.GEQUAL);break;case al:i.depthFunc(i.GREATER);break;case cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=gt}},setLocked:function(gt){N=gt},setClear:function(gt){vt!==gt&&(pt&&(gt=1-gt),i.clearDepth(gt),vt=gt)},reset:function(){N=!1,X=null,Q=null,vt=null,pt=!1}}}function s(){let N=!1,pt=null,X=null,Q=null,vt=null,gt=null,Bt=null,we=null,Ge=null;return{setTest:function(le){N||(le?st(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(le){pt!==le&&!N&&(i.stencilMask(le),pt=le)},setFunc:function(le,Pn,ai){(X!==le||Q!==Pn||vt!==ai)&&(i.stencilFunc(le,Pn,ai),X=le,Q=Pn,vt=ai)},setOp:function(le,Pn,ai){(gt!==le||Bt!==Pn||we!==ai)&&(i.stencilOp(le,Pn,ai),gt=le,Bt=Pn,we=ai)},setLocked:function(le){N=le},setClear:function(le){Ge!==le&&(i.clearStencil(le),Ge=le)},reset:function(){N=!1,pt=null,X=null,Q=null,vt=null,gt=null,Bt=null,we=null,Ge=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,S=null,x=null,E=null,w=null,A=new ce(0,0,0),C=0,M=!1,v=null,R=null,P=null,I=null,L=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,W=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=W>=2);let Y=null,J={};const nt=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Vt=new Me().fromArray(nt),j=new Me().fromArray(xt);function $(N,pt,X,Q){const vt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(N,gt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<X;Bt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(pt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return gt}const at={};at[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(sr),ct(!1),It(vh),st(i.CULL_FACE),k(Yi);function st(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function tt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Lt(N,pt){return h[N]!==pt?(i.bindFramebuffer(N,pt),h[N]=pt,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pt),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ut(N,pt){let X=p,Q=!1;if(N){X=d.get(pt),X===void 0&&(X=[],d.set(pt,X));const vt=N.textures;if(X.length!==vt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Bt=vt.length;gt<Bt;gt++)X[gt]=i.COLOR_ATTACHMENT0+gt;X.length=vt.length,Q=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Q=!0);Q&&i.drawBuffers(X)}function re(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Gt={[ds]:i.FUNC_ADD,[Rm]:i.FUNC_SUBTRACT,[Dm]:i.FUNC_REVERSE_SUBTRACT};Gt[Pm]=i.MIN,Gt[Qc]=i.MAX;const Te={[Im]:i.ZERO,[vi]:i.ONE,[Nm]:i.SRC_COLOR,[tl]:i.SRC_ALPHA,[Vm]:i.SRC_ALPHA_SATURATE,[Fm]:i.DST_COLOR,[Om]:i.DST_ALPHA,[Lm]:i.ONE_MINUS_SRC_COLOR,[el]:i.ONE_MINUS_SRC_ALPHA,[km]:i.ONE_MINUS_DST_COLOR,[Um]:i.ONE_MINUS_DST_ALPHA,[Bm]:i.CONSTANT_COLOR,[zm]:i.ONE_MINUS_CONSTANT_COLOR,[Hm]:i.CONSTANT_ALPHA,[Gm]:i.ONE_MINUS_CONSTANT_ALPHA};function k(N,pt,X,Q,vt,gt,Bt,we,Ge,le){if(N===Yi){_===!0&&(tt(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),N!==ha){if(N!==m||le!==M){if((f!==ds||x!==ds)&&(i.blendEquation(i.FUNC_ADD),f=ds,x=ds),le)switch(N){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,S=null,E=null,w=null,A.set(0,0,0),C=0,m=N,M=le}return}vt=vt||pt,gt=gt||X,Bt=Bt||Q,(pt!==f||vt!==x)&&(i.blendEquationSeparate(Gt[pt],Gt[vt]),f=pt,x=vt),(X!==y||Q!==S||gt!==E||Bt!==w)&&(i.blendFuncSeparate(Te[X],Te[Q],Te[gt],Te[Bt]),y=X,S=Q,E=gt,w=Bt),(we.equals(A)===!1||Ge!==C)&&(i.blendColor(we.r,we.g,we.b,Ge),A.copy(we),C=Ge),m=N,M=!1}function lt(N,pt){N.side===Qn?tt(i.CULL_FACE):st(i.CULL_FACE);let X=N.side===je;pt&&(X=!X),ct(X),N.blending===er&&N.transparent===!1?k(Yi):k(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(N){v!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),v=N)}function It(N){N!==Em?(st(i.CULL_FACE),N!==R&&(N===vh?i.cullFace(i.BACK):N===Am?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),R=N}function dt(N){N!==P&&(U&&i.lineWidth(N),P=N)}function Ct(N,pt,X){N?(st(i.POLYGON_OFFSET_FILL),(I!==pt||L!==X)&&(i.polygonOffset(pt,X),I=pt,L=X)):tt(i.POLYGON_OFFSET_FILL)}function ft(N){N?st(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function D(N){N===void 0&&(N=i.TEXTURE0+H-1),Y!==N&&(i.activeTexture(N),Y=N)}function T(N,pt,X){X===void 0&&(Y===null?X=i.TEXTURE0+H-1:X=Y);let Q=J[X];Q===void 0&&(Q={type:void 0,texture:void 0},J[X]=Q),(Q.type!==N||Q.texture!==pt)&&(Y!==X&&(i.activeTexture(X),Y=X),i.bindTexture(N,pt||at[N]),Q.type=N,Q.texture=pt)}function z(){const N=J[Y];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(N){Vt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Vt.copy(N))}function wt(N){j.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function $t(N,pt){let X=l.get(pt);X===void 0&&(X=new WeakMap,l.set(pt,X));let Q=X.get(N);Q===void 0&&(Q=i.getUniformBlockIndex(pt,N.name),X.set(N,Q))}function Wt(N,pt){const Q=l.get(pt).get(N);c.get(pt)!==Q&&(i.uniformBlockBinding(pt,Q,N.__bindingPointIndex),c.set(pt,Q))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,J={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,S=null,x=null,E=null,w=null,A=new ce(0,0,0),C=0,M=!1,v=null,R=null,P=null,I=null,L=null,Vt.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:tt,bindFramebuffer:Lt,drawBuffers:Ut,useProgram:re,setBlending:k,setMaterial:lt,setFlipSided:ct,setCullFace:It,setLineWidth:dt,setPolygonOffset:Ct,setScissorTest:ft,activeTexture:D,bindTexture:T,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:Tt,texImage3D:Ot,updateUBOMapping:$t,uniformBlockBinding:Wt,texStorage2D:Kt,texStorage3D:rt,texSubImage2D:Z,texSubImage3D:Rt,compressedTexSubImage2D:mt,compressedTexSubImage3D:Mt,scissor:Ft,viewport:wt,reset:fe}}function md(i,t,e,n){const s=fy(n);switch(e){case pf:return i*t;case gf:return i*t;case _f:return i*t*2;case vf:return i*t/s.components*s.byteLength;case lu:return i*t/s.components*s.byteLength;case xf:return i*t*2/s.components*s.byteLength;case uu:return i*t*2/s.components*s.byteLength;case mf:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case hu:return i*t*4/s.components*s.byteLength;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(t,8)/4;case fl:case ml:return Math.max(i,8)*Math.max(t,8)/2;case _l:case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case aa:case Ll:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yf:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fl:case kl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fy(i){switch(i){case Ei:case hf:return{byteLength:1,components:1};case jr:case df:case Qr:return{byteLength:2,components:1};case au:case cu:return{byteLength:2,components:4};case Ms:case ou:case xi:return{byteLength:4,components:1};case ff:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function py(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new se,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return p?new OffscreenCanvas(D,T):Yr("canvas")}function _(D,T,z){let K=1;const et=ft(D);if((et.width>z||et.height>z)&&(K=z/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Z=Math.floor(K*et.width),Rt=Math.floor(K*et.height);h===void 0&&(h=g(Z,Rt));const mt=T?g(Z,Rt):h;return mt.width=Z,mt.height=Rt,mt.getContext("2d").drawImage(D,0,0,Z,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Rt+")."),mt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),D;return D}function m(D){return D.generateMipmaps}function f(D){i.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(D,T,z,K,et=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Z=T;if(T===i.RED&&(z===i.FLOAT&&(Z=i.R32F),z===i.HALF_FLOAT&&(Z=i.R16F),z===i.UNSIGNED_BYTE&&(Z=i.R8)),T===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.R8UI),z===i.UNSIGNED_SHORT&&(Z=i.R16UI),z===i.UNSIGNED_INT&&(Z=i.R32UI),z===i.BYTE&&(Z=i.R8I),z===i.SHORT&&(Z=i.R16I),z===i.INT&&(Z=i.R32I)),T===i.RG&&(z===i.FLOAT&&(Z=i.RG32F),z===i.HALF_FLOAT&&(Z=i.RG16F),z===i.UNSIGNED_BYTE&&(Z=i.RG8)),T===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RG8UI),z===i.UNSIGNED_SHORT&&(Z=i.RG16UI),z===i.UNSIGNED_INT&&(Z=i.RG32UI),z===i.BYTE&&(Z=i.RG8I),z===i.SHORT&&(Z=i.RG16I),z===i.INT&&(Z=i.RG32I)),T===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),z===i.UNSIGNED_INT&&(Z=i.RGB32UI),z===i.BYTE&&(Z=i.RGB8I),z===i.SHORT&&(Z=i.RGB16I),z===i.INT&&(Z=i.RGB32I)),T===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),z===i.UNSIGNED_INT&&(Z=i.RGBA32UI),z===i.BYTE&&(Z=i.RGBA8I),z===i.SHORT&&(Z=i.RGBA16I),z===i.INT&&(Z=i.RGBA32I)),T===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),T===i.RGBA){const Rt=et?Na:Jt.getTransfer(K);z===i.FLOAT&&(Z=i.RGBA32F),z===i.HALF_FLOAT&&(Z=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Z=Rt===ue?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(D,T){let z;return D?T===null||T===Ms||T===ar?z=i.DEPTH24_STENCIL8:T===xi?z=i.DEPTH32F_STENCIL8:T===jr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ms||T===ar?z=i.DEPTH_COMPONENT24:T===xi?z=i.DEPTH_COMPONENT32F:T===jr&&(z=i.DEPTH_COMPONENT16),z}function E(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==_n&&D.minFilter!==mn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function w(D){const T=D.target;T.removeEventListener("dispose",w),C(T),T.isVideoTexture&&u.delete(T)}function A(D){const T=D.target;T.removeEventListener("dispose",A),v(T)}function C(D){const T=n.get(D);if(T.__webglInit===void 0)return;const z=D.source,K=d.get(z);if(K){const et=K[T.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(D),Object.keys(K).length===0&&d.delete(z)}n.remove(D)}function M(D){const T=n.get(D);i.deleteTexture(T.__webglTexture);const z=D.source,K=d.get(z);delete K[T.__cacheKey],o.memory.textures--}function v(D){const T=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let et=0;et<T.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(T.__webglFramebuffer[K][et]);else i.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)i.deleteFramebuffer(T.__webglFramebuffer[K]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const z=D.textures;for(let K=0,et=z.length;K<et;K++){const Z=n.get(z[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(D)}let R=0;function P(){R=0}function I(){const D=R;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),R+=1,D}function L(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function H(D,T){const z=n.get(D);if(D.isVideoTexture&&dt(D),D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){const K=D.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,D,T);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+T)}function U(D,T){const z=n.get(D);if(D.version>0&&z.__version!==D.version){j(z,D,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+T)}function W(D,T){const z=n.get(D);if(D.version>0&&z.__version!==D.version){j(z,D,T);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+T)}function V(D,T){const z=n.get(D);if(D.version>0&&z.__version!==D.version){$(z,D,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+T)}const Y={[hl]:i.REPEAT,[ps]:i.CLAMP_TO_EDGE,[dl]:i.MIRRORED_REPEAT},J={[_n]:i.NEAREST,[Qm]:i.NEAREST_MIPMAP_NEAREST,[To]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[hc]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},nt={[sg]:i.NEVER,[ug]:i.ALWAYS,[rg]:i.LESS,[Sf]:i.LEQUAL,[og]:i.EQUAL,[lg]:i.GEQUAL,[ag]:i.GREATER,[cg]:i.NOTEQUAL};function xt(D,T){if(T.type===xi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===mn||T.magFilter===hc||T.magFilter===To||T.magFilter===ji||T.minFilter===mn||T.minFilter===hc||T.minFilter===To||T.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Y[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Y[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Y[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,J[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,J[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,nt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_n||T.minFilter!==To&&T.minFilter!==ji||T.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Vt(D,T){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",w));const K=T.source;let et=d.get(K);et===void 0&&(et={},d.set(K,et));const Z=L(T);if(Z!==D.__cacheKey){et[Z]===void 0&&(et[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),et[Z].usedTimes++;const Rt=et[D.__cacheKey];Rt!==void 0&&(et[D.__cacheKey].usedTimes--,Rt.usedTimes===0&&M(T)),D.__cacheKey=Z,D.__webglTexture=et[Z].texture}return z}function j(D,T,z){let K=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=i.TEXTURE_3D);const et=Vt(D,T),Z=T.source;e.bindTexture(K,D.__webglTexture,i.TEXTURE0+z);const Rt=n.get(Z);if(Z.version!==Rt.__version||et===!0){e.activeTexture(i.TEXTURE0+z);const mt=Jt.getPrimaries(Jt.workingColorSpace),Mt=T.colorSpace===bn?null:Jt.getPrimaries(T.colorSpace),Kt=T.colorSpace===bn||mt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let rt=_(T.image,!1,s.maxTextureSize);rt=Ct(T,rt);const Tt=r.convert(T.format,T.colorSpace),Ot=r.convert(T.type);let Ft=S(T.internalFormat,Tt,Ot,T.colorSpace,T.isVideoTexture);xt(K,T);let wt;const $t=T.mipmaps,Wt=T.isVideoTexture!==!0,fe=Rt.__version===void 0||et===!0,N=Z.dataReady,pt=E(T,rt);if(T.isDepthTexture)Ft=x(T.format===cr,T.type),fe&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Ft,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ft,rt.width,rt.height,0,Tt,Ot,null));else if(T.isDataTexture)if($t.length>0){Wt&&fe&&e.texStorage2D(i.TEXTURE_2D,pt,Ft,$t[0].width,$t[0].height);for(let X=0,Q=$t.length;X<Q;X++)wt=$t[X],Wt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,wt.width,wt.height,Tt,Ot,wt.data):e.texImage2D(i.TEXTURE_2D,X,Ft,wt.width,wt.height,0,Tt,Ot,wt.data);T.generateMipmaps=!1}else Wt?(fe&&e.texStorage2D(i.TEXTURE_2D,pt,Ft,rt.width,rt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Tt,Ot,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,rt.width,rt.height,0,Tt,Ot,rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Wt&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ft,$t[0].width,$t[0].height,rt.depth);for(let X=0,Q=$t.length;X<Q;X++)if(wt=$t[X],T.format!==Bn)if(Tt!==null)if(Wt){if(N)if(T.layerUpdates.size>0){const vt=md(wt.width,wt.height,T.format,T.type);for(const gt of T.layerUpdates){const Bt=wt.data.subarray(gt*vt/wt.data.BYTES_PER_ELEMENT,(gt+1)*vt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,gt,wt.width,wt.height,1,Tt,Bt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,wt.width,wt.height,rt.depth,Tt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ft,wt.width,wt.height,rt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,wt.width,wt.height,rt.depth,Tt,Ot,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Ft,wt.width,wt.height,rt.depth,0,Tt,Ot,wt.data)}else{Wt&&fe&&e.texStorage2D(i.TEXTURE_2D,pt,Ft,$t[0].width,$t[0].height);for(let X=0,Q=$t.length;X<Q;X++)wt=$t[X],T.format!==Bn?Tt!==null?Wt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,wt.width,wt.height,Tt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Ft,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,wt.width,wt.height,Tt,Ot,wt.data):e.texImage2D(i.TEXTURE_2D,X,Ft,wt.width,wt.height,0,Tt,Ot,wt.data)}else if(T.isDataArrayTexture)if(Wt){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ft,rt.width,rt.height,rt.depth),N)if(T.layerUpdates.size>0){const X=md(rt.width,rt.height,T.format,T.type);for(const Q of T.layerUpdates){const vt=rt.data.subarray(Q*X/rt.data.BYTES_PER_ELEMENT,(Q+1)*X/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,Tt,Ot,vt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Tt,Ot,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,rt.width,rt.height,rt.depth,0,Tt,Ot,rt.data);else if(T.isData3DTexture)Wt?(fe&&e.texStorage3D(i.TEXTURE_3D,pt,Ft,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Tt,Ot,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,rt.width,rt.height,rt.depth,0,Tt,Ot,rt.data);else if(T.isFramebufferTexture){if(fe)if(Wt)e.texStorage2D(i.TEXTURE_2D,pt,Ft,rt.width,rt.height);else{let X=rt.width,Q=rt.height;for(let vt=0;vt<pt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Ft,X,Q,0,Tt,Ot,null),X>>=1,Q>>=1}}else if($t.length>0){if(Wt&&fe){const X=ft($t[0]);e.texStorage2D(i.TEXTURE_2D,pt,Ft,X.width,X.height)}for(let X=0,Q=$t.length;X<Q;X++)wt=$t[X],Wt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Tt,Ot,wt):e.texImage2D(i.TEXTURE_2D,X,Ft,Tt,Ot,wt);T.generateMipmaps=!1}else if(Wt){if(fe){const X=ft(rt);e.texStorage2D(i.TEXTURE_2D,pt,Ft,X.width,X.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Ot,rt)}else e.texImage2D(i.TEXTURE_2D,0,Ft,Tt,Ot,rt);m(T)&&f(K),Rt.__version=Z.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function $(D,T,z){if(T.image.length!==6)return;const K=Vt(D,T),et=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+z);const Z=n.get(et);if(et.version!==Z.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const Rt=Jt.getPrimaries(Jt.workingColorSpace),mt=T.colorSpace===bn?null:Jt.getPrimaries(T.colorSpace),Mt=T.colorSpace===bn||Rt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Kt=T.isCompressedTexture||T.image[0].isCompressedTexture,rt=T.image[0]&&T.image[0].isDataTexture,Tt=[];for(let Q=0;Q<6;Q++)!Kt&&!rt?Tt[Q]=_(T.image[Q],!0,s.maxCubemapSize):Tt[Q]=rt?T.image[Q].image:T.image[Q],Tt[Q]=Ct(T,Tt[Q]);const Ot=Tt[0],Ft=r.convert(T.format,T.colorSpace),wt=r.convert(T.type),$t=S(T.internalFormat,Ft,wt,T.colorSpace),Wt=T.isVideoTexture!==!0,fe=Z.__version===void 0||K===!0,N=et.dataReady;let pt=E(T,Ot);xt(i.TEXTURE_CUBE_MAP,T);let X;if(Kt){Wt&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,$t,Ot.width,Ot.height);for(let Q=0;Q<6;Q++){X=Tt[Q].mipmaps;for(let vt=0;vt<X.length;vt++){const gt=X[vt];T.format!==Bn?Ft!==null?Wt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,gt.width,gt.height,Ft,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,$t,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,gt.width,gt.height,Ft,wt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,$t,gt.width,gt.height,0,Ft,wt,gt.data)}}}else{if(X=T.mipmaps,Wt&&fe){X.length>0&&pt++;const Q=ft(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,$t,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Tt[Q].width,Tt[Q].height,Ft,wt,Tt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$t,Tt[Q].width,Tt[Q].height,0,Ft,wt,Tt[Q].data);for(let vt=0;vt<X.length;vt++){const Bt=X[vt].image[Q].image;Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,Bt.width,Bt.height,Ft,wt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,$t,Bt.width,Bt.height,0,Ft,wt,Bt.data)}}else{Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ft,wt,Tt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$t,Ft,wt,Tt[Q]);for(let vt=0;vt<X.length;vt++){const gt=X[vt];Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,Ft,wt,gt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,$t,Ft,wt,gt.image[Q])}}}m(T)&&f(i.TEXTURE_CUBE_MAP),Z.__version=et.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function at(D,T,z,K,et,Z){const Rt=r.convert(z.format,z.colorSpace),mt=r.convert(z.type),Mt=S(z.internalFormat,Rt,mt,z.colorSpace),Kt=n.get(T),rt=n.get(z);if(rt.__renderTarget=T,!Kt.__hasExternalTextures){const Tt=Math.max(1,T.width>>Z),Ot=Math.max(1,T.height>>Z);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,Mt,Tt,Ot,T.depth,0,Rt,mt,null):e.texImage2D(et,Z,Mt,Tt,Ot,0,Rt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),It(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,rt.__webglTexture,0,ct(T)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,rt.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(D,T,z){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const K=T.depthTexture,et=K&&K.isDepthTexture?K.type:null,Z=x(T.stencilBuffer,et),Rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=ct(T);It(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,Z,T.width,T.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,Z,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Z,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,D)}else{const K=T.textures;for(let et=0;et<K.length;et++){const Z=K[et],Rt=r.convert(Z.format,Z.colorSpace),mt=r.convert(Z.type),Mt=S(Z.internalFormat,Rt,mt,Z.colorSpace),Kt=ct(T);z&&It(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Mt,T.width,T.height):It(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,Mt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(T.depthTexture);K.__renderTarget=T,(!K.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const et=K.__webglTexture,Z=ct(T);if(T.depthTexture.format===nr)It(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(T.depthTexture.format===cr)It(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Lt(D){const T=n.get(D),z=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const K=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){const et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),T.__depthDisposeCallback=et}T.__boundDepthTexture=K}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");tt(T.__webglFramebuffer,D)}else if(z){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=i.createRenderbuffer(),st(T.__webglDepthbuffer[K],D,!1);else{const et=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),st(T.__webglDepthbuffer,D,!1);else{const K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(D,T,z){const K=n.get(D);T!==void 0&&at(K.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Lt(D)}function re(D){const T=D.texture,z=n.get(D),K=n.get(T);D.addEventListener("dispose",A);const et=D.textures,Z=D.isWebGLCubeRenderTarget===!0,Rt=et.length>1;if(Rt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=T.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer[mt]=[];for(let Mt=0;Mt<T.mipmaps.length;Mt++)z.__webglFramebuffer[mt][Mt]=i.createFramebuffer()}else z.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer=[];for(let mt=0;mt<T.mipmaps.length;mt++)z.__webglFramebuffer[mt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let mt=0,Mt=et.length;mt<Mt;mt++){const Kt=n.get(et[mt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&It(D)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let mt=0;mt<et.length;mt++){const Mt=et[mt];z.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[mt]);const Kt=r.convert(Mt.format,Mt.colorSpace),rt=r.convert(Mt.type),Tt=S(Mt.internalFormat,Kt,rt,Mt.colorSpace,D.isXRRenderTarget===!0),Ot=ct(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Tt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,z.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),st(z.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),xt(i.TEXTURE_CUBE_MAP,T);for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Mt=0;Mt<T.mipmaps.length;Mt++)at(z.__webglFramebuffer[mt][Mt],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Mt);else at(z.__webglFramebuffer[mt],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(T)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let mt=0,Mt=et.length;mt<Mt;mt++){const Kt=et[mt],rt=n.get(Kt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),xt(i.TEXTURE_2D,Kt),at(z.__webglFramebuffer,D,Kt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m(Kt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(mt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,K.__webglTexture),xt(mt,T),T.mipmaps&&T.mipmaps.length>0)for(let Mt=0;Mt<T.mipmaps.length;Mt++)at(z.__webglFramebuffer[Mt],D,T,i.COLOR_ATTACHMENT0,mt,Mt);else at(z.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,mt,0);m(T)&&f(mt),e.unbindTexture()}D.depthBuffer&&Lt(D)}function Gt(D){const T=D.textures;for(let z=0,K=T.length;z<K;z++){const et=T[z];if(m(et)){const Z=y(D),Rt=n.get(et).__webglTexture;e.bindTexture(Z,Rt),f(Z),e.unbindTexture()}}}const Te=[],k=[];function lt(D){if(D.samples>0){if(It(D)===!1){const T=D.textures,z=D.width,K=D.height;let et=i.COLOR_BUFFER_BIT;const Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(D),mt=T.length>1;if(mt)for(let Mt=0;Mt<T.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Mt=0;Mt<T.length;Mt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Mt]);const Kt=n.get(T[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,et,i.NEAREST),c===!0&&(Te.length=0,k.length=0,Te.push(i.COLOR_ATTACHMENT0+Mt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Te.push(Z),k.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Mt=0;Mt<T.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Mt]);const Kt=n.get(T[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ct(D){return Math.min(s.maxSamples,D.samples)}function It(D){const T=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function dt(D){const T=o.render.frame;u.get(D)!==T&&(u.set(D,T),D.update())}function Ct(D,T){const z=D.colorSpace,K=D.format,et=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==_r&&z!==bn&&(Jt.getTransfer(z)===ue?(K!==Bn||et!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),T}function ft(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=P,this.setTexture2D=H,this.setTexture2DArray=U,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=Ut,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=It}function my(i,t){function e(n,s=bn){let r;const o=Jt.getTransfer(s);if(n===Ei)return i.UNSIGNED_BYTE;if(n===au)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ff)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hf)return i.BYTE;if(n===df)return i.SHORT;if(n===jr)return i.UNSIGNED_SHORT;if(n===ou)return i.INT;if(n===Ms)return i.UNSIGNED_INT;if(n===xi)return i.FLOAT;if(n===Qr)return i.HALF_FLOAT;if(n===pf)return i.ALPHA;if(n===mf)return i.RGB;if(n===Bn)return i.RGBA;if(n===gf)return i.LUMINANCE;if(n===_f)return i.LUMINANCE_ALPHA;if(n===nr)return i.DEPTH_COMPONENT;if(n===cr)return i.DEPTH_STENCIL;if(n===vf)return i.RED;if(n===lu)return i.RED_INTEGER;if(n===xf)return i.RG;if(n===uu)return i.RG_INTEGER;if(n===hu)return i.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===oa)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===vl||n===xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_l||n===vl)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yl||n===Sl||n===Ml||n===Tl||n===wl||n===bl||n===El||n===Al||n===Cl||n===Rl||n===Dl||n===Pl||n===Il||n===Nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ml)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Al)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Il)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===Ll||n===Ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===aa)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yf||n===Ul||n===Fl||n===kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class gy extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ms extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _y={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_y)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ie,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new cn({vertexShader:vy,fragmentShader:xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Je(new ro(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sy extends vr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const _=new yy,m=e.getContextAttributes();let f=null,y=null;const S=[],x=[],E=new se;let w=null;const A=new fn;A.viewport=new Me;const C=new fn;C.viewport=new Me;const M=[A,C],v=new gy;let R=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let $=S[j];return $===void 0&&($=new Bc,S[j]=$),$.getTargetRaySpace()},this.getControllerGrip=function(j){let $=S[j];return $===void 0&&($=new Bc,S[j]=$),$.getGripSpace()},this.getHand=function(j){let $=S[j];return $===void 0&&($=new Bc,S[j]=$),$.getHandSpace()};function I(j){const $=x.indexOf(j.inputSource);if($===-1)return;const at=S[$];at!==void 0&&(at.update(j.inputSource,j.frame,l||o),at.dispatchEvent({type:j.type,data:j.inputSource}))}function L(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",H);for(let j=0;j<S.length;j++){const $=x[j];$!==null&&(x[j]=null,S[j].disconnect($))}R=null,P=null,_.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,y=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",L),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ts(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,at=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=m.stencil?cr:nr,at=m.stencil?ar:Ms);const tt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ts(d.textureWidth,d.textureHeight,{format:Bn,type:Ei,depthTexture:new Nf(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(j){for(let $=0;$<j.removed.length;$++){const at=j.removed[$],st=x.indexOf(at);st>=0&&(x[st]=null,S[st].disconnect(at))}for(let $=0;$<j.added.length;$++){const at=j.added[$];let st=x.indexOf(at);if(st===-1){for(let Lt=0;Lt<S.length;Lt++)if(Lt>=x.length){x.push(at),st=Lt;break}else if(x[Lt]===null){x[Lt]=at,st=Lt;break}if(st===-1)break}const tt=S[st];tt&&tt.connect(at)}}const U=new B,W=new B;function V(j,$,at){U.setFromMatrixPosition($.matrixWorld),W.setFromMatrixPosition(at.matrixWorld);const st=U.distanceTo(W),tt=$.projectionMatrix.elements,Lt=at.projectionMatrix.elements,Ut=tt[14]/(tt[10]-1),re=tt[14]/(tt[10]+1),Gt=(tt[9]+1)/tt[5],Te=(tt[9]-1)/tt[5],k=(tt[8]-1)/tt[0],lt=(Lt[8]+1)/Lt[0],ct=Ut*k,It=Ut*lt,dt=st/(-k+lt),Ct=dt*-k;if($.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ct),j.translateZ(dt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),tt[10]===-1)j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ft=Ut+dt,D=re+dt,T=ct-Ct,z=It+(st-Ct),K=Gt*re/D*ft,et=Te*re/D*ft;j.projectionMatrix.makePerspective(T,z,K,et,ft,D),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Y(j,$){$===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices($.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let $=j.near,at=j.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(at=_.depthFar)),v.near=C.near=A.near=$,v.far=C.far=A.far=at,(R!==v.near||P!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,P=v.far),A.layers.mask=j.layers.mask|2,C.layers.mask=j.layers.mask|4,v.layers.mask=A.layers.mask|C.layers.mask;const st=j.parent,tt=v.cameras;Y(v,st);for(let Lt=0;Lt<tt.length;Lt++)Y(tt[Lt],st);tt.length===2?V(v,A,C):v.projectionMatrix.copy(A.projectionMatrix),J(j,v,st)};function J(j,$,at){at===null?j.matrix.copy($.matrixWorld):(j.matrix.copy(at.matrixWorld),j.matrix.invert(),j.matrix.multiply($.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Vl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let nt=null;function xt(j,$){if(u=$.getViewerPose(l||o),g=$,u!==null){const at=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let st=!1;at.length!==v.cameras.length&&(v.cameras.length=0,st=!0);for(let Lt=0;Lt<at.length;Lt++){const Ut=at[Lt];let re=null;if(p!==null)re=p.getViewport(Ut);else{const Te=h.getViewSubImage(d,Ut);re=Te.viewport,Lt===0&&(t.setRenderTargetTextures(y,Te.colorTexture,d.ignoreDepthValues?void 0:Te.depthStencilTexture),t.setRenderTarget(y))}let Gt=M[Lt];Gt===void 0&&(Gt=new fn,Gt.layers.enable(Lt),Gt.viewport=new Me,M[Lt]=Gt),Gt.matrix.fromArray(Ut.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ut.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(re.x,re.y,re.width,re.height),Lt===0&&(v.matrix.copy(Gt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),st===!0&&v.cameras.push(Gt)}const tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const Lt=h.getDepthInformation(at[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,s.renderState)}}for(let at=0;at<S.length;at++){const st=x[at],tt=S[at];st!==null&&tt!==void 0&&tt.update(st,$,l||o)}nt&&nt(j,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const Vt=new If;Vt.setAnimationLoop(xt),this.setAnimationLoop=function(j){nt=j},this.dispose=function(){}}}const ls=new Ai,My=new Ee;function Ty(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Cf(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,y,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===je&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===je&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),S=y.envMap,x=y.envMapRotation;S&&(m.envMap.value=S,ls.copy(x),ls.x*=-1,ls.y*=-1,ls.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(My.makeRotationFromEuler(ls)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===je&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wy(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){const x=S.program;n.uniformBlockBinding(y,x)}function l(y,S){let x=s[y.id];x===void 0&&(g(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",m));const E=S.program;n.updateUBOMapping(y,E);const w=t.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function u(y){const S=h();y.__bindingPointIndex=S;const x=i.createBuffer(),E=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=s[y.id],x=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,A=x.length;w<A;w++){const C=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,v=C.length;M<v;M++){const R=C[M];if(p(R,w,M,E)===!0){const P=R.__offset,I=Array.isArray(R.value)?R.value:[R.value];let L=0;for(let H=0;H<I.length;H++){const U=I[H],W=_(U);typeof U=="number"||typeof U=="boolean"?(R.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,P+L,R.__data)):U.isMatrix3?(R.__data[0]=U.elements[0],R.__data[1]=U.elements[1],R.__data[2]=U.elements[2],R.__data[3]=0,R.__data[4]=U.elements[3],R.__data[5]=U.elements[4],R.__data[6]=U.elements[5],R.__data[7]=0,R.__data[8]=U.elements[6],R.__data[9]=U.elements[7],R.__data[10]=U.elements[8],R.__data[11]=0):(U.toArray(R.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,S,x,E){const w=y.value,A=S+"_"+x;if(E[A]===void 0)return typeof w=="number"||typeof w=="boolean"?E[A]=w:E[A]=w.clone(),!0;{const C=E[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return E[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(y){const S=y.uniforms;let x=0;const E=16;for(let A=0,C=S.length;A<C;A++){const M=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,R=M.length;v<R;v++){const P=M[v],I=Array.isArray(P.value)?P.value:[P.value];for(let L=0,H=I.length;L<H;L++){const U=I[L],W=_(U),V=x%E,Y=V%W.boundary,J=V+Y;x+=Y,J!==0&&E-J<W.storage&&(x+=E-J),P.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=W.storage}}}const w=x%E;return w>0&&(x+=E-w),y.__size=x,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class by{constructor(t={}){const{canvas:e=dg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=$i,this.toneMappingExposure=1;const x=this;let E=!1,w=0,A=0,C=null,M=-1,v=null;const R=new Me,P=new Me;let I=null;const L=new ce(0);let H=0,U=e.width,W=e.height,V=1,Y=null,J=null;const nt=new Me(0,0,U,W),xt=new Me(0,0,U,W);let Vt=!1;const j=new Pf;let $=!1,at=!1;const st=new Ee,tt=new Ee,Lt=new B,Ut=new Me,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Te(){return C===null?V:1}let k=n;function lt(b,O){return e.getContext(b,O)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ru}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),k===null){const O="webgl2";if(k=lt(O,b),k===null)throw lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ct,It,dt,Ct,ft,D,T,z,K,et,Z,Rt,mt,Mt,Kt,rt,Tt,Ot,Ft,wt,$t,Wt,fe,N;function pt(){ct=new Dv(k),ct.init(),Wt=new my(k,ct),It=new Tv(k,ct,t,Wt),dt=new dy(k,ct),It.reverseDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),Ct=new Nv(k),ft=new Kx,D=new py(k,ct,dt,ft,It,Wt,Ct),T=new bv(x),z=new Rv(x),K=new Vg(k),fe=new Sv(k,K),et=new Pv(k,K,Ct,fe),Z=new Ov(k,et,K,Ct),Ft=new Lv(k,It,D),rt=new wv(ft),Rt=new Zx(x,T,z,ct,It,fe,rt),mt=new Ty(x,ft),Mt=new Qx,Kt=new ry(ct),Ot=new yv(x,T,z,dt,Z,p,c),Tt=new uy(x,Z,It),N=new wy(k,Ct,It,dt),wt=new Mv(k,ct,Ct),$t=new Iv(k,ct,Ct),Ct.programs=Rt.programs,x.capabilities=It,x.extensions=ct,x.properties=ft,x.renderLists=Mt,x.shadowMap=Tt,x.state=dt,x.info=Ct}pt();const X=new Sy(x,k);this.xr=X,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(U,W,!1))},this.getSize=function(b){return b.set(U,W)},this.setSize=function(b,O,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,W=O,e.width=Math.floor(b*V),e.height=Math.floor(O*V),G===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(U*V,W*V).floor()},this.setDrawingBufferSize=function(b,O,G){U=b,W=O,V=G,e.width=Math.floor(b*G),e.height=Math.floor(O*G),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(nt)},this.setViewport=function(b,O,G,q){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,O,G,q),dt.viewport(R.copy(nt).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(xt)},this.setScissor=function(b,O,G,q){b.isVector4?xt.set(b.x,b.y,b.z,b.w):xt.set(b,O,G,q),dt.scissor(P.copy(xt).multiplyScalar(V).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(b){dt.setScissorTest(Vt=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(b=!0,O=!0,G=!0){let q=0;if(b){let F=!1;if(C!==null){const ot=C.texture.format;F=ot===hu||ot===uu||ot===lu}if(F){const ot=C.texture.type,_t=ot===Ei||ot===Ms||ot===jr||ot===ar||ot===au||ot===cu,bt=Ot.getClearColor(),Et=Ot.getClearAlpha(),kt=bt.r,zt=bt.g,At=bt.b;_t?(g[0]=kt,g[1]=zt,g[2]=At,g[3]=Et,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=kt,_[1]=zt,_[2]=At,_[3]=Et,k.clearBufferiv(k.COLOR,0,_))}else q|=k.COLOR_BUFFER_BIT}O&&(q|=k.DEPTH_BUFFER_BIT),G&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Mt.dispose(),Kt.dispose(),ft.dispose(),T.dispose(),z.dispose(),Z.dispose(),fe.dispose(),N.dispose(),Rt.dispose(),X.dispose(),X.removeEventListener("sessionstart",uh),X.removeEventListener("sessionend",hh),is.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=Ct.autoReset,O=Tt.enabled,G=Tt.autoUpdate,q=Tt.needsUpdate,F=Tt.type;pt(),Ct.autoReset=b,Tt.enabled=O,Tt.autoUpdate=G,Tt.needsUpdate=q,Tt.type=F}function gt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Bt(b){const O=b.target;O.removeEventListener("dispose",Bt),we(O)}function we(b){Ge(b),ft.remove(b)}function Ge(b){const O=ft.get(b).programs;O!==void 0&&(O.forEach(function(G){Rt.releaseProgram(G)}),b.isShaderMaterial&&Rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,G,q,F,ot){O===null&&(O=re);const _t=F.isMesh&&F.matrixWorld.determinant()<0,bt=Tm(b,O,G,q,F);dt.setMaterial(q,_t);let Et=G.index,kt=1;if(q.wireframe===!0){if(Et=et.getWireframeAttribute(G),Et===void 0)return;kt=2}const zt=G.drawRange,At=G.attributes.position;let te=zt.start*kt,pe=(zt.start+zt.count)*kt;ot!==null&&(te=Math.max(te,ot.start*kt),pe=Math.min(pe,(ot.start+ot.count)*kt)),Et!==null?(te=Math.max(te,0),pe=Math.min(pe,Et.count)):At!=null&&(te=Math.max(te,0),pe=Math.min(pe,At.count));const ge=pe-te;if(ge<0||ge===1/0)return;fe.setup(F,q,bt,G,Et);let en,oe=wt;if(Et!==null&&(en=K.get(Et),oe=$t,oe.setIndex(en)),F.isMesh)q.wireframe===!0?(dt.setLineWidth(q.wireframeLinewidth*Te()),oe.setMode(k.LINES)):oe.setMode(k.TRIANGLES);else if(F.isLine){let Dt=q.linewidth;Dt===void 0&&(Dt=1),dt.setLineWidth(Dt*Te()),F.isLineSegments?oe.setMode(k.LINES):F.isLineLoop?oe.setMode(k.LINE_LOOP):oe.setMode(k.LINE_STRIP)}else F.isPoints?oe.setMode(k.POINTS):F.isSprite&&oe.setMode(k.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)oe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))oe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Dt=F._multiDrawStarts,ci=F._multiDrawCounts,ae=F._multiDrawCount,In=Et?K.get(Et).bytesPerElement:1,Is=ft.get(q).currentProgram.getUniforms();for(let un=0;un<ae;un++)Is.setValue(k,"_gl_DrawID",un),oe.render(Dt[un]/In,ci[un])}else if(F.isInstancedMesh)oe.renderInstances(te,ge,F.count);else if(G.isInstancedBufferGeometry){const Dt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ci=Math.min(G.instanceCount,Dt);oe.renderInstances(te,ge,ci)}else oe.render(te,ge)};function le(b,O,G){b.transparent===!0&&b.side===Qn&&b.forceSinglePass===!1?(b.side=je,b.needsUpdate=!0,Mo(b,O,G),b.side=Ji,b.needsUpdate=!0,Mo(b,O,G),b.side=Qn):Mo(b,O,G)}this.compile=function(b,O,G=null){G===null&&(G=b),f=Kt.get(G),f.init(O),S.push(f),G.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),b!==G&&b.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const q=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ot=F.material;if(ot)if(Array.isArray(ot))for(let _t=0;_t<ot.length;_t++){const bt=ot[_t];le(bt,G,F),q.add(bt)}else le(ot,G,F),q.add(ot)}),S.pop(),f=null,q},this.compileAsync=function(b,O,G=null){const q=this.compile(b,O,G);return new Promise(F=>{function ot(){if(q.forEach(function(_t){ft.get(_t).currentProgram.isReady()&&q.delete(_t)}),q.size===0){F(b);return}setTimeout(ot,10)}ct.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Pn=null;function ai(b){Pn&&Pn(b)}function uh(){is.stop()}function hh(){is.start()}const is=new If;is.setAnimationLoop(ai),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(b){Pn=b,X.setAnimationLoop(b),b===null?is.stop():is.start()},X.addEventListener("sessionstart",uh),X.addEventListener("sessionend",hh),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,C),f=Kt.get(b,S.length),f.init(O),S.push(f),tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(tt),at=this.localClippingEnabled,$=rt.init(this.clippingPlanes,at),m=Mt.get(b,y.length),m.init(),y.push(m),X.enabled===!0&&X.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&uc(ot,O,-1/0,x.sortObjects)}uc(b,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Y,J),Gt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Gt&&Ot.addToRenderList(m,b),this.info.render.frame++,$===!0&&rt.beginShadows();const G=f.state.shadowsArray;Tt.render(G,b,O),$===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,F=m.transmissive;if(f.setupLights(),O.isArrayCamera){const ot=O.cameras;if(F.length>0)for(let _t=0,bt=ot.length;_t<bt;_t++){const Et=ot[_t];fh(q,F,b,Et)}Gt&&Ot.render(b);for(let _t=0,bt=ot.length;_t<bt;_t++){const Et=ot[_t];dh(m,b,Et,Et.viewport)}}else F.length>0&&fh(q,F,b,O),Gt&&Ot.render(b),dh(m,b,O);C!==null&&(D.updateMultisampleRenderTarget(C),D.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,O),fe.resetDefaultState(),M=-1,v=null,S.pop(),S.length>0?(f=S[S.length-1],$===!0&&rt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function uc(b,O,G,q){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){q&&Ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(tt);const _t=Z.update(b),bt=b.material;bt.visible&&m.push(b,_t,bt,G,Ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||j.intersectsObject(b))){const _t=Z.update(b),bt=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ut.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ut.copy(_t.boundingSphere.center)),Ut.applyMatrix4(b.matrixWorld).applyMatrix4(tt)),Array.isArray(bt)){const Et=_t.groups;for(let kt=0,zt=Et.length;kt<zt;kt++){const At=Et[kt],te=bt[At.materialIndex];te&&te.visible&&m.push(b,_t,te,G,Ut.z,At)}}else bt.visible&&m.push(b,_t,bt,G,Ut.z,null)}}const ot=b.children;for(let _t=0,bt=ot.length;_t<bt;_t++)uc(ot[_t],O,G,q)}function dh(b,O,G,q){const F=b.opaque,ot=b.transmissive,_t=b.transparent;f.setupLightsView(G),$===!0&&rt.setGlobalState(x.clippingPlanes,G),q&&dt.viewport(R.copy(q)),F.length>0&&So(F,O,G),ot.length>0&&So(ot,O,G),_t.length>0&&So(_t,O,G),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function fh(b,O,G,q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new Ts(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Qr:Ei,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const ot=f.state.transmissionRenderTarget[q.id],_t=q.viewport||R;ot.setSize(_t.z,_t.w);const bt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(L),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Gt&&Ot.render(G);const Et=x.toneMapping;x.toneMapping=$i;const kt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),$===!0&&rt.setGlobalState(x.clippingPlanes,q),So(b,G,q),D.updateMultisampleRenderTarget(ot),D.updateRenderTargetMipmap(ot),ct.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let At=0,te=O.length;At<te;At++){const pe=O[At],ge=pe.object,en=pe.geometry,oe=pe.material,Dt=pe.group;if(oe.side===Qn&&ge.layers.test(q.layers)){const ci=oe.side;oe.side=je,oe.needsUpdate=!0,ph(ge,G,q,en,oe,Dt),oe.side=ci,oe.needsUpdate=!0,zt=!0}}zt===!0&&(D.updateMultisampleRenderTarget(ot),D.updateRenderTargetMipmap(ot))}x.setRenderTarget(bt),x.setClearColor(L,H),kt!==void 0&&(q.viewport=kt),x.toneMapping=Et}function So(b,O,G){const q=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ot=b.length;F<ot;F++){const _t=b[F],bt=_t.object,Et=_t.geometry,kt=q===null?_t.material:q,zt=_t.group;bt.layers.test(G.layers)&&ph(bt,O,G,Et,kt,zt)}}function ph(b,O,G,q,F,ot){b.onBeforeRender(x,O,G,q,F,ot),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,O,G,q,b,ot),F.transparent===!0&&F.side===Qn&&F.forceSinglePass===!1?(F.side=je,F.needsUpdate=!0,x.renderBufferDirect(G,O,q,F,b,ot),F.side=Ji,F.needsUpdate=!0,x.renderBufferDirect(G,O,q,F,b,ot),F.side=Qn):x.renderBufferDirect(G,O,q,F,b,ot),b.onAfterRender(x,O,G,q,F,ot)}function Mo(b,O,G){O.isScene!==!0&&(O=re);const q=ft.get(b),F=f.state.lights,ot=f.state.shadowsArray,_t=F.state.version,bt=Rt.getParameters(b,F.state,ot,O,G),Et=Rt.getProgramCacheKey(bt);let kt=q.programs;q.environment=b.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(b.isMeshStandardMaterial?z:T).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",Bt),kt=new Map,q.programs=kt);let zt=kt.get(Et);if(zt!==void 0){if(q.currentProgram===zt&&q.lightsStateVersion===_t)return gh(b,bt),zt}else bt.uniforms=Rt.getUniforms(b),b.onBeforeCompile(bt,x),zt=Rt.acquireProgram(bt,Et),kt.set(Et,zt),q.uniforms=bt.uniforms;const At=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(At.clippingPlanes=rt.uniform),gh(b,bt),q.needsLights=bm(b),q.lightsStateVersion=_t,q.needsLights&&(At.ambientLightColor.value=F.state.ambient,At.lightProbe.value=F.state.probe,At.directionalLights.value=F.state.directional,At.directionalLightShadows.value=F.state.directionalShadow,At.spotLights.value=F.state.spot,At.spotLightShadows.value=F.state.spotShadow,At.rectAreaLights.value=F.state.rectArea,At.ltc_1.value=F.state.rectAreaLTC1,At.ltc_2.value=F.state.rectAreaLTC2,At.pointLights.value=F.state.point,At.pointLightShadows.value=F.state.pointShadow,At.hemisphereLights.value=F.state.hemi,At.directionalShadowMap.value=F.state.directionalShadowMap,At.directionalShadowMatrix.value=F.state.directionalShadowMatrix,At.spotShadowMap.value=F.state.spotShadowMap,At.spotLightMatrix.value=F.state.spotLightMatrix,At.spotLightMap.value=F.state.spotLightMap,At.pointShadowMap.value=F.state.pointShadowMap,At.pointShadowMatrix.value=F.state.pointShadowMatrix),q.currentProgram=zt,q.uniformsList=null,zt}function mh(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=ca.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function gh(b,O){const G=ft.get(b);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Tm(b,O,G,q,F){O.isScene!==!0&&(O=re),D.resetTextureUnits();const ot=O.fog,_t=q.isMeshStandardMaterial?O.environment:null,bt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_r,Et=(q.isMeshStandardMaterial?z:T).get(q.envMap||_t),kt=q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,zt=!!G.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),At=!!G.morphAttributes.position,te=!!G.morphAttributes.normal,pe=!!G.morphAttributes.color;let ge=$i;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ge=x.toneMapping);const en=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=en!==void 0?en.length:0,Dt=ft.get(q),ci=f.state.lights;if($===!0&&(at===!0||b!==v)){const Sn=b===v&&q.id===M;rt.setState(q,b,Sn)}let ae=!1;q.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==ci.state.version||Dt.outputColorSpace!==bt||F.isBatchedMesh&&Dt.batching===!1||!F.isBatchedMesh&&Dt.batching===!0||F.isBatchedMesh&&Dt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Dt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Dt.instancing===!1||!F.isInstancedMesh&&Dt.instancing===!0||F.isSkinnedMesh&&Dt.skinning===!1||!F.isSkinnedMesh&&Dt.skinning===!0||F.isInstancedMesh&&Dt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Dt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Dt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Dt.instancingMorph===!1&&F.morphTexture!==null||Dt.envMap!==Et||q.fog===!0&&Dt.fog!==ot||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==rt.numPlanes||Dt.numIntersection!==rt.numIntersection)||Dt.vertexAlphas!==kt||Dt.vertexTangents!==zt||Dt.morphTargets!==At||Dt.morphNormals!==te||Dt.morphColors!==pe||Dt.toneMapping!==ge||Dt.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Dt.__version=q.version);let In=Dt.currentProgram;ae===!0&&(In=Mo(q,O,F));let Is=!1,un=!1,Ar=!1;const _e=In.getUniforms(),Zn=Dt.uniforms;if(dt.useProgram(In.program)&&(Is=!0,un=!0,Ar=!0),q.id!==M&&(M=q.id,un=!0),Is||v!==b){dt.buffers.depth.getReversed()?(st.copy(b.projectionMatrix),pg(st),mg(st),_e.setValue(k,"projectionMatrix",st)):_e.setValue(k,"projectionMatrix",b.projectionMatrix),_e.setValue(k,"viewMatrix",b.matrixWorldInverse);const Li=_e.map.cameraPosition;Li!==void 0&&Li.setValue(k,Lt.setFromMatrixPosition(b.matrixWorld)),It.logarithmicDepthBuffer&&_e.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_e.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,un=!0,Ar=!0)}if(F.isSkinnedMesh){_e.setOptional(k,F,"bindMatrix"),_e.setOptional(k,F,"bindMatrixInverse");const Sn=F.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),_e.setValue(k,"boneTexture",Sn.boneTexture,D))}F.isBatchedMesh&&(_e.setOptional(k,F,"batchingTexture"),_e.setValue(k,"batchingTexture",F._matricesTexture,D),_e.setOptional(k,F,"batchingIdTexture"),_e.setValue(k,"batchingIdTexture",F._indirectTexture,D),_e.setOptional(k,F,"batchingColorTexture"),F._colorsTexture!==null&&_e.setValue(k,"batchingColorTexture",F._colorsTexture,D));const Cr=G.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0)&&Ft.update(F,G,In),(un||Dt.receiveShadow!==F.receiveShadow)&&(Dt.receiveShadow=F.receiveShadow,_e.setValue(k,"receiveShadow",F.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Zn.envMap.value=Et,Zn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Zn.envMapIntensity.value=O.environmentIntensity),un&&(_e.setValue(k,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&wm(Zn,Ar),ot&&q.fog===!0&&mt.refreshFogUniforms(Zn,ot),mt.refreshMaterialUniforms(Zn,q,V,W,f.state.transmissionRenderTarget[b.id]),ca.upload(k,mh(Dt),Zn,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ca.upload(k,mh(Dt),Zn,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_e.setValue(k,"center",F.center),_e.setValue(k,"modelViewMatrix",F.modelViewMatrix),_e.setValue(k,"normalMatrix",F.normalMatrix),_e.setValue(k,"modelMatrix",F.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Sn=q.uniformsGroups;for(let Li=0,Oi=Sn.length;Li<Oi;Li++){const _h=Sn[Li];N.update(_h,In),N.bind(_h,In)}}return In}function wm(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function bm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,O,G){ft.get(b.texture).__webglTexture=O,ft.get(b.depthTexture).__webglTexture=G;const q=ft.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=G===void 0,q.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const G=ft.get(b);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,G=0){C=b,w=O,A=G;let q=!0,F=null,ot=!1,_t=!1;if(b){const Et=ft.get(b);if(Et.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(Et.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Et.__hasExternalTextures)D.rebindTextures(b,ft.get(b.texture).__webglTexture,ft.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const At=b.depthTexture;if(Et.__boundDepthTexture!==At){if(At!==null&&ft.has(At)&&(b.width!==At.image.width||b.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(_t=!0);const zt=ft.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(zt[O])?F=zt[O][G]:F=zt[O],ot=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?F=ft.get(b).__webglMultisampledFramebuffer:Array.isArray(zt)?F=zt[G]:F=zt,R.copy(b.viewport),P.copy(b.scissor),I=b.scissorTest}else R.copy(nt).multiplyScalar(V).floor(),P.copy(xt).multiplyScalar(V).floor(),I=Vt;if(dt.bindFramebuffer(k.FRAMEBUFFER,F)&&q&&dt.drawBuffers(b,F),dt.viewport(R),dt.scissor(P),dt.setScissorTest(I),ot){const Et=ft.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,G)}else if(_t){const Et=ft.get(b.texture),kt=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Et.__webglTexture,G||0,kt)}M=-1},this.readRenderTargetPixels=function(b,O,G,q,F,ot,_t){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){dt.bindFramebuffer(k.FRAMEBUFFER,bt);try{const Et=b.texture,kt=Et.format,zt=Et.type;if(!It.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-q&&G>=0&&G<=b.height-F&&k.readPixels(O,G,q,F,Wt.convert(kt),Wt.convert(zt),ot)}finally{const Et=C!==null?ft.get(C).__webglFramebuffer:null;dt.bindFramebuffer(k.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(b,O,G,q,F,ot,_t){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){const Et=b.texture,kt=Et.format,zt=Et.type;if(!It.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-q&&G>=0&&G<=b.height-F){dt.bindFramebuffer(k.FRAMEBUFFER,bt);const At=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,At),k.bufferData(k.PIXEL_PACK_BUFFER,ot.byteLength,k.STREAM_READ),k.readPixels(O,G,q,F,Wt.convert(kt),Wt.convert(zt),0);const te=C!==null?ft.get(C).__webglFramebuffer:null;dt.bindFramebuffer(k.FRAMEBUFFER,te);const pe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await fg(k,pe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,At),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ot),k.deleteBuffer(At),k.deleteSync(pe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,G=0){b.isTexture!==!0&&(Br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-G),F=Math.floor(b.image.width*q),ot=Math.floor(b.image.height*q),_t=O!==null?O.x:0,bt=O!==null?O.y:0;D.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,G,0,0,_t,bt,F,ot),dt.unbindTexture()},this.copyTextureToTexture=function(b,O,G=null,q=null,F=0){b.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],O=arguments[2],F=arguments[3]||0,G=null);let ot,_t,bt,Et,kt,zt,At,te,pe;const ge=b.isCompressedTexture?b.mipmaps[F]:b.image;G!==null?(ot=G.max.x-G.min.x,_t=G.max.y-G.min.y,bt=G.isBox3?G.max.z-G.min.z:1,Et=G.min.x,kt=G.min.y,zt=G.isBox3?G.min.z:0):(ot=ge.width,_t=ge.height,bt=ge.depth||1,Et=0,kt=0,zt=0),q!==null?(At=q.x,te=q.y,pe=q.z):(At=0,te=0,pe=0);const en=Wt.convert(O.format),oe=Wt.convert(O.type);let Dt;O.isData3DTexture?(D.setTexture3D(O,0),Dt=k.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(D.setTexture2DArray(O,0),Dt=k.TEXTURE_2D_ARRAY):(D.setTexture2D(O,0),Dt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment);const ci=k.getParameter(k.UNPACK_ROW_LENGTH),ae=k.getParameter(k.UNPACK_IMAGE_HEIGHT),In=k.getParameter(k.UNPACK_SKIP_PIXELS),Is=k.getParameter(k.UNPACK_SKIP_ROWS),un=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ge.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ge.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Et),k.pixelStorei(k.UNPACK_SKIP_ROWS,kt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,zt);const Ar=b.isDataArrayTexture||b.isData3DTexture,_e=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Zn=ft.get(b),Cr=ft.get(O),Sn=ft.get(Zn.__renderTarget),Li=ft.get(Cr.__renderTarget);dt.bindFramebuffer(k.READ_FRAMEBUFFER,Sn.__webglFramebuffer),dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Oi=0;Oi<bt;Oi++)Ar&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ft.get(b).__webglTexture,F,zt+Oi),b.isDepthTexture?(_e&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ft.get(O).__webglTexture,F,pe+Oi),k.blitFramebuffer(Et,kt,ot,_t,At,te,ot,_t,k.DEPTH_BUFFER_BIT,k.NEAREST)):_e?k.copyTexSubImage3D(Dt,F,At,te,pe+Oi,Et,kt,ot,_t):k.copyTexSubImage2D(Dt,F,At,te,pe+Oi,Et,kt,ot,_t);dt.bindFramebuffer(k.READ_FRAMEBUFFER,null),dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else _e?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(Dt,F,At,te,pe,ot,_t,bt,en,oe,ge.data):O.isCompressedArrayTexture?k.compressedTexSubImage3D(Dt,F,At,te,pe,ot,_t,bt,en,ge.data):k.texSubImage3D(Dt,F,At,te,pe,ot,_t,bt,en,oe,ge):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,F,At,te,ot,_t,en,oe,ge.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,F,At,te,ge.width,ge.height,en,ge.data):k.texSubImage2D(k.TEXTURE_2D,F,At,te,ot,_t,en,oe,ge);k.pixelStorei(k.UNPACK_ROW_LENGTH,ci),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ae),k.pixelStorei(k.UNPACK_SKIP_PIXELS,In),k.pixelStorei(k.UNPACK_SKIP_ROWS,Is),k.pixelStorei(k.UNPACK_SKIP_IMAGES,un),F===0&&O.generateMipmaps&&k.generateMipmap(Dt),dt.unbindTexture()},this.copyTextureToTexture3D=function(b,O,G=null,q=null,F=0){return b.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,q=arguments[1]||null,b=arguments[2],O=arguments[3],F=arguments[4]||0),Br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,G,q,F)},this.initRenderTarget=function(b){ft.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),dt.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,dt.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class kf extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vf extends Ie{constructor(t=null,e=1,n=1,s,r,o,a,c,l=_n,u=_n,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ey extends io{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gd=new Ee,zl=new du,Wo=new no,qo=new B;class Ay extends an{constructor(t=new Xn,e=new Ey){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,t.ray.intersectsSphere(Wo)===!1)return;gd.copy(s).invert(),zl.copy(t.ray).applyMatrix4(gd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);qo.fromBufferAttribute(h,m),_d(qo,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p;g<_;g++)qo.fromBufferAttribute(h,g),_d(qo,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _d(i,t,e,n,s,r,o){const a=zl.distanceSqToPoint(i);if(a<e){const c=new B;zl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Cy extends Ie{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:mn,this.magFilter=r!==void 0?r:mn,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Ry extends Ie{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gu extends Xn{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,p=new B,g=new se;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const y=f+m,S=y,x=y+n+1,E=y+n+2,w=y+1;a.push(S,x,w),a.push(x,E,w)}}this.setIndex(a),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(l,3)),this.setAttribute("uv",new xn(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ur extends Xn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new B,d=new B,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const y=[],S=f/n;let x=0;f===0&&o===0?x=.5/e:f===n&&c===Math.PI&&(x=-.5/e);for(let E=0;E<=e;E++){const w=E/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+S*a),h.y=t*Math.cos(o+S*a),h.z=t*Math.sin(s+w*r)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(w+x,1-S),y.push(l++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const S=u[f][y+1],x=u[f][y],E=u[f+1][y],w=u[f+1][y+1];(f!==0||o>0)&&p.push(S,x,w),(f!==n-1||c<Math.PI)&&p.push(x,E,w)}this.setIndex(p),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const vd={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Dy{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Py=new Dy;class _u{constructor(t){this.manager=t!==void 0?t:Py,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}_u.DEFAULT_MATERIAL_NAME="__DEFAULT";class Iy extends _u{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=vd.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Yr("img");function c(){u(),vd.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Bf extends _u{constructor(t){super(t)}load(t,e,n,s){const r=new Ie,o=new Iy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}const xd=new Ee;class Ny{constructor(t,e,n=0,s=1/0){this.ray=new du(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new fu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xd),this}intersectObject(t,e=!0,n=[]){return Hl(t,this,n,e),n.sort(yd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Hl(t[s],this,n,e);return n.sort(yd),n}}function yd(i,t){return i.distance-t.distance}function Hl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Hl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ru);const Oa=[{id:"sst",title:"Ocean temperature",short:"Ocean",description:"Sea surface currents, colored by temperature, March 2007 to March 2008. Warmer water opens the chord and raises the melody.",units:"°C",format:i=>`${i.toFixed(1)} °C`,sound:"ocean",padRange:[14,26],legend:{label:"Sea surface temperature",colors:["#345ff8","#329cCB","#35d19e","#3bfd70","#51ff46","#b3ff26","#fbf621","#f88a1b","#f70018"],min:"0 °C",max:"32 °C"},svs:"https://svs.gsfc.nasa.gov/3912/",credit:"Visualization: NASA's Scientific Visualization Studio. Data: ECCO2 (MIT/JPL).",demoFallback:!0},{id:"lightning",title:"Lightning",description:"Lightning flashes seen from the International Space Station, March 2017 to July 2023. Drums follow new flashes on the side facing you: busier storms play more and louder, storms further north play higher. A low drone swells with global storm activity.",units:"flashes",format:i=>i>.0075?"Heavy storms":i>.002?"Storms":i>0?"Scattered flashes":"Quiet",sound:"lightning",legend:{label:"New lightning flashes (10-day window)",colors:["#1c1f26","#5d5a1c","#c9c41a","#fff34a"],min:"none",max:"many"},svs:"https://svs.gsfc.nasa.gov/5011/",credit:"Visualization: NASA's Scientific Visualization Studio. Data: ISS LIS (NASA GHRC). Night map: NASA Earth Observatory Black Marble 2016."},{id:"aerosols",title:"Aerosols",description:"Smoke, dust, sea salt and sulfates in the air, August to mid-September 2024. Each has its own sound, loud where it is thick on the side facing you: smoke crackles like fire, dust is a low drone, sea salt shimmers like surf, sulfates ring like bells. Hover a plume to hear that type alone.",units:"share",format:i=>`${Math.round(i*100)}%`,sound:"aerosols",typeNames:["Smoke (black carbon)","Dust","Sea salt","Sulfate"],typeShort:["Smoke","Dust","Sea salt","Sulfate"],typeColors:["#d25e45","#c19adc","#85aaa9","#53dc34"],legend:{label:"Smoke · Dust · Sea salt · Sulfate",colors:["#d25e45 0 25%","#c19adc 25% 50%","#85aaa9 50% 75%","#53dc34 75% 100%"],min:"smoke",max:"sulfate"},svs:"https://svs.gsfc.nasa.gov/5552/",credit:"Visualization: NASA's Scientific Visualization Studio. Data: GEOS-FP (NASA GMAO)."}],zf="./data";async function Gl(i){const t=await fetch(i);if(!t.ok)throw new Error(`${t.status} ${i}`);return t.json()}async function Ly(i){try{const t=await fetch(i,{method:"HEAD"});return!t.ok||(t.headers.get("content-type")||"").includes("text/html")?!1:Number(t.headers.get("content-length"))||!0}catch{return!1}}class Hf{constructor(t,e){this.meta=t,this.frames=t.frames,this.bands=t.bands,this.cols=t.cols,this.bytes=e,this.range=t.vmax-t.vmin}sample(t,e,n){const s=(t%this.frames+this.frames)%this.frames,r=Math.floor(s),o=(r+1)%this.frames,a=s-r,c=_=>((_*this.bands+e)*this.cols+n)*2,l=c(r),u=c(o),h=(this.bytes[l+1]*(1-a)+this.bytes[u+1]*a)/255,d=this.bytes[l+1]?this.bytes[l]:this.bytes[u],p=this.bytes[u+1]?this.bytes[u]:this.bytes[l];return{value:this.meta.vmin+(d*(1-a)+p*a)/255*this.range,share:h}}}class Oy{constructor(t,e){this.dir=t,this.meta=e,this.index=-1,this.pixels=null,this.width=0,this.height=0,this.loading=!1,this.canvas=document.createElement("canvas")}request(t){if(this.wanted=t,this.loading||t===this.index)return;this.loading=!0;const e=new Image;e.onload=()=>{this.canvas.width=e.width,this.canvas.height=e.height;const n=this.canvas.getContext("2d",{willReadFrequently:!0});n.drawImage(e,0,0);const s=n.getImageData(0,0,e.width,e.height).data;this.pixels=new Uint8Array(e.width*e.height);for(let r=0;r<this.pixels.length;r++)this.pixels[r]=s[r*4];this.width=e.width,this.height=e.height,this.index=t,this.loading=!1,this.wanted!==t&&this.request(this.wanted)},e.onerror=()=>{this.loading=!1},e.src=`${this.dir}/grids/${String(t).padStart(5,"0")}.png`}lookup(t,e){if(!this.pixels)return null;const n=Math.min(this.width-1,Math.max(0,Math.floor((e+180)/360*this.width))),s=Math.min(this.height-1,Math.max(0,Math.floor((90-t)/180*this.height)));let r=this.pixels[s*this.width+n];if(this.meta.classes)return r===0?{noData:!0}:{type:Math.floor((r-1)/64),strength:(r-1)%64/62};if(r===0){let o=0,a=0;for(let c=-1;c<=1;c++){const l=s+c;if(!(l<0||l>=this.height))for(let u=-1;u<=1;u++){const h=this.pixels[l*this.width+(n+u+this.width)%this.width];h&&(o+=h,a++)}}if(a<3)return{noData:!0};r=o/a}return{value:this.meta.vmin+(r-1)/254*(this.meta.vmax-this.meta.vmin)}}}function Uy(i,t,e){return new Promise((n,s)=>{const r=new Worker(new URL(""+new URL("events-worker-CfhLmdt1.js",import.meta.url).href,import.meta.url),{type:"module"});r.onmessage=o=>{n(o.data),r.terminate()},r.onerror=o=>{s(o),r.terminate()},r.postMessage({buf:i,width:t,height:e},[i])})}async function Fy(i,t,e){const n=await t("events.json");if(!n)return null;const[s,r,o]=await Promise.all([fetch(`${i}/events.bin`).then(c=>c.arrayBuffer()),e("night_8k.jpg"),e("night_4k.jpg")]);return{...await Uy(s,n.width,n.height),width:n.width,height:n.height,frames:n.frames,base:`${i}/base.jpg`,night:r||o?{8192:r?`${i}/night_8k.jpg`:null,4096:o?`${i}/night_4k.jpg`:null}:null}}let zc;async function ky(){return zc===void 0&&(zc=await Gl(`${zf}/index.json`).catch(()=>null)),zc}const Lr=new Map;function Gf(i){if(!Lr.has(i.id)){const t=Vy(i);Lr.set(i.id,t),t.then(e=>{e||Lr.delete(i.id)},()=>Lr.delete(i.id))}return Lr.get(i.id)}async function Vy(i){var o;const t=`${zf}/${i.id}`,e=await ky(),n=e?((o=e.datasets[i.id])==null?void 0:o.files)??null:void 0;if(n===null)return i.demoFallback?Md(i):null;const s=a=>n?n[a]??!1:Ly(`${t}/${a}`),r=a=>n&&!(a in n)?Promise.resolve(null):Gl(`${t}/${a}`).catch(()=>null);try{const[a,c]=await Promise.all([Gl(`${t}/summary.json`),r("frames.json")]),l=await(await fetch(`${t}/summary.bin`)).arrayBuffer(),u=new Hf(a,new Uint8Array(l));a.classes&&(u.classes=new Uint8Array(await(await fetch(`${t}/classes.bin`)).arrayBuffer()),u.classNames=a.classes);const[h,d,p]=await Promise.all([s("web.mp4"),s("web4096.mp4"),s("web6840.mp4")]),g=d?`${t}/web4096.mp4`:null,_=p?`${t}/web6840.mp4`:null,m=h?`${t}/web.mp4`:g,f=a.grids?new Oy(t,a):null,y=await r("hires.json"),S=await r("colorfix.json"),x=await s("land.jpg")?{image:`${t}/land.jpg`,mask:`${t}/landmask.png`}:null;y&&(y.dir=`${t}/hires`);const E=await Fy(t,r,s);return{ds:i,summary:u,frames:c,videoUrl:m,videoUrlHigh:g,videoUrlMax:_,videoBytes:typeof(h||d)=="number"?h||d:null,events:E,grids:f,hires:y,colorFix:S,land:x,demo:!1}}catch(a){return i.demoFallback?(console.info(`[data] ${i.id}: no pipeline output yet, using synthetic demo data`,a.message),Md(i)):null}}const Or=[[0,[40,60,200]],[10,[40,170,120]],[20,[130,200,60]],[25,[240,230,40]],[32,[220,30,30]]];function By(i){for(let t=1;t<Or.length;t++){const[e,n]=Or[t],[s,r]=Or[t-1];if(i<=e||t===Or.length-1){const o=Math.min(1,Math.max(0,(i-s)/(e-s)));return r.map((a,c)=>Math.round(a+(n[c]-a)*o))}}return Or[0][1]}function Sd(i,t,e){const n=30*Math.pow(Math.cos(i*Math.PI/180),1.6),s=3*Math.sin(e*2*Math.PI)*Math.sin(i*Math.PI/180),r=2.5*Math.sin(t*3*Math.PI/180+e*6);return Math.min(32,Math.max(0,n+s+r))}function Md(i){const s=[-90,-45,0,45,90],r=new Uint8Array(120*4*256*2);for(let p=0;p<120;p++)for(let g=0;g<4;g++){const _=(s[g]+s[g+1])/2;for(let m=0;m<256;m++){const f=-180+(m+.5)*360/256,y=((p*4+g)*256+m)*2;r[y]=Math.round(Sd(_,f,p/120)/32*255),r[y+1]=255}}const o=new Hf({frames:120,bands:4,cols:256,bandEdges:s,vmin:0,vmax:32,units:"°C"},r),a=1024,c=512,l=document.createElement("canvas");l.width=a,l.height=c;const u=l.getContext("2d"),h=u.createImageData(a,c);for(let p=0;p<c;p++){const g=90-(p+.5)*180/c;for(let _=0;_<a;_++){const m=-180+(_+.5)*360/a,[f,y,S]=By(Sd(g,m,0)),x=(p*a+_)*4;h.data[x]=f,h.data[x+1]=y,h.data[x+2]=S,h.data[x+3]=255}}u.putImageData(h,0,0);const d=new Ry(l);return{ds:i,summary:o,texture:d,videoUrl:null,demo:!0,frames:{fps:30,movieStride:4,offset:0,dates:["2007-03-25","2008-03-03"]}}}const ti=Math.PI/180,Td=23.43928*ti,zy={mercury:[.38709927,.20563593,7.00497902,252.2503235,77.45779628,48.33076593,37e-8,1906e-8,-.00594749,149472.67411175,.16047689,-.12534081],venus:[.72333566,.00677672,3.39467605,181.9790995,131.60246718,76.67984255,39e-7,-4107e-8,-7889e-7,58517.81538729,.00268329,-.27769418],earth:[1.00000261,.01671123,-1531e-8,100.46457166,102.93768193,0,562e-8,-4392e-8,-.01294668,35999.37244981,.32327364,0],mars:[1.52371034,.0933941,1.84969142,-4.55343205,-23.94362959,49.55953891,1847e-8,7882e-8,-.00813131,19140.30268499,.44441088,-.29257343],jupiter:[5.202887,.04838624,1.30439695,34.39644051,14.72847983,100.47390909,-11607e-8,-13253e-8,-.00183714,3034.74612775,.21252668,.20469106],saturn:[9.53667594,.05386179,2.48599187,49.95424423,92.59887831,113.66242448,-.0012506,-50991e-8,.00193609,1222.49362201,-.41897216,-.28867794],uranus:[19.18916464,.04725744,.77263783,313.23810451,170.9542763,74.01692503,-.00196176,-4397e-8,-.00242939,428.48202785,.40805281,.04240589],neptune:[30.06992276,.00859048,1.77004347,-55.12002969,44.96476227,131.78422574,26291e-8,5105e-8,35372e-8,218.45945325,-.32241464,-.00508664]},Hy=["mercury","venus","mars","jupiter","saturn","uranus","neptune"],Gy=Date.UTC(2e3,0,1,12);function Wf(i){return(i-Gy)/864e5}function wd(i,t){const e=zy[i],n=e[0]+e[6]*t,s=e[1]+e[7]*t,r=(e[2]+e[8]*t)*ti,o=e[3]+e[9]*t,a=e[4]+e[10]*t,c=(e[5]+e[11]*t)*ti,l=a*ti-c;let u=((o-a)%360+540)%360-180;u*=ti;let h=u+s*Math.sin(u);for(let x=0;x<8;x++)h-=(h-s*Math.sin(h)-u)/(1-s*Math.cos(h));const d=n*(Math.cos(h)-s),p=n*Math.sqrt(1-s*s)*Math.sin(h),g=Math.cos(l),_=Math.sin(l),m=Math.cos(c),f=Math.sin(c),y=Math.cos(r),S=Math.sin(r);return[(g*m-_*f*y)*d+(-_*m-g*f*y)*p,(g*f+_*m*y)*d+(-_*f+g*m*y)*p,_*S*d+g*S*p]}function Hc([i,t,e]){const n=Math.cos(Td),s=Math.sin(Td);return[i,t*n-e*s,t*s+e*n]}function Wy(i){const t=(r,o)=>Math.sin((r+o*i)*ti),e=218.32+481267.881*i+6.29*t(134.9,477198.85)-1.27*t(259.2,-413335.38)+.66*t(235.7,890534.23)+.21*t(269.9,954397.7)-.19*t(357.5,35999.05)-.11*t(186.6,966404.05),n=5.13*t(93.3,483202.03)+.28*t(228.2,960400.87)-.28*t(318.3,6003.18)-.17*t(217.6,-407332.2),s=Math.cos(n*ti);return[s*Math.cos(e*ti),s*Math.sin(e*ti),Math.sin(n*ti)]}function qy(i){const t=Wf(i)/36525,e=wd("earth",t),n={sun:Hc(e.map(s=>-s))};for(const s of Hy){const r=wd(s,t);n[s]=Hc([r[0]-e[0],r[1]-e[1],r[2]-e[2]])}return n.moon=Hc(Wy(t)),n}function Xy(i){return((280.46061837+.98564736629*Wf(i))%360+360)%360}const Un=Math.PI/180,Wl=50,jy=90,Gc={moon:{size:1,label:"Moon",pole:[270,66.5],color:10131604},mercury:{size:.28,label:"Mercury",pole:[281,61.4],color:9407109},venus:{size:.42,label:"Venus",pole:[272.8,67.2],color:15260080},mars:{size:.34,label:"Mars",pole:[317.7,52.9],color:11887674},jupiter:{size:.55,label:"Jupiter",pole:[268.1,64.5],color:13218707},saturn:{size:.45,label:"Saturn",pole:[40.6,83.5],color:14073999},uranus:{size:.3,label:"Uranus",pole:[257.3,-15.2],color:10934496},neptune:{size:.3,label:"Neptune",pole:[299.4,43.5],color:5205974}},Xo=1.1,bd=Wl*.9,ql=1.215,qf=2.335;function Wc([i,t,e],n=new B){return n.set(i,e,-t).normalize()}function Yy(i,t,e=new B){const n=Math.cos(t*Un);return e.set(n*Math.cos(i*Un),Math.sin(t*Un),-n*Math.sin(i*Un))}function jo(i,t,e){return i.load(`sky/${t}`,n=>{n.colorSpace=bn,n.anisotropy=4,e==null||e(n)})}function $y(){return new cn({uniforms:{uMap:{value:null},uOn:{value:0},uGain:{value:.85}},side:je,depthWrite:!1,vertexShader:`
      varying vec3 vDir;
      void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D uMap; uniform float uOn; uniform float uGain; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        float ra = atan(-d.z, d.x);            // radians, east positive
        float dec = asin(clamp(d.y, -1.0, 1.0));
        // NASA map: RA 0h at the center, RA increasing to the left.
        vec2 uv = vec2(fract(0.5 - ra / 6.2831853), 0.5 + dec / 3.1415927);
        vec3 c = uOn > 0.5 ? texture2D(uMap, uv).rgb * uGain : vec3(0.0);
        gl_FragColor = vec4(c, 1.0);
      }`})}function Zy(i){return new cn({uniforms:{uMap:{value:null},uOn:{value:0},uColor:{value:new ce(i)},uLight:{value:new B(1,0,0)}},vertexShader:`
      varying vec2 vUv; varying vec3 vWorldN;
      void main() {
        vUv = uv;
        vWorldN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D uMap; uniform float uOn; uniform vec3 uColor; uniform vec3 uLight;
      varying vec2 vUv; varying vec3 vWorldN;
      void main() {
        vec3 c = uOn > 0.5 ? texture2D(uMap, vUv).rgb : uColor;
        // Lit from the Sun's real direction, so the Moon and Venus show their true phase.
        float d = dot(normalize(vWorldN), uLight);
        float lit = smoothstep(-0.04, 0.25, d) * (0.35 + 0.65 * max(d, 0.0));
        gl_FragColor = vec4(c * (lit + 0.015), 1.0);
      }`})}function Ky(){return new cn({uniforms:{uMap:{value:null},uOn:{value:0},uLight:{value:new B(1,0,0)},uNormal:{value:new B(0,1,0)}},transparent:!0,depthWrite:!1,side:Qn,vertexShader:`
      varying vec2 vP;
      void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D uMap; uniform float uOn; uniform vec3 uLight; uniform vec3 uNormal; varying vec2 vP;
      void main() {
        float u = (length(vP) - ${ql.toFixed(3)}) / ${(qf-ql).toFixed(3)};
        vec4 t = uOn > 0.5 ? texture2D(uMap, vec2(u, 0.5)) : vec4(0.45, 0.41, 0.33, 0.6);
        float light = 0.3 + 0.7 * abs(dot(uNormal, uLight));
        gl_FragColor = vec4(min(t.rgb * 1.9, 1.0) * light, t.a * 0.9);
      }`})}function Jy(i){return new cn({uniforms:{uCore:{value:i},uMap:{value:null},uOn:{value:0},uLod:{value:3}},transparent:!0,depthWrite:!1,blending:ha,blendSrc:vi,blendDst:vi,blendSrcAlpha:vi,blendDstAlpha:vi,vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float uCore; uniform sampler2D uMap; uniform float uOn; uniform float uLod; varying vec2 vUv;
      void main() {
        float r = length(vUv) / uCore;          // 1 = edge of the disc
        float disc = 1.0 - smoothstep(0.92, 1.0, r);
        vec3 surface = vec3(1.0, 0.97, 0.9);
        if (uOn > 0.5 && r < 1.0) {
          // The flat quad as a ball: texture coordinates of the point under this pixel.
          vec2 q = vUv / uCore;
          vec3 n = vec3(q, sqrt(max(0.0, 1.0 - dot(q, q))));
          vec2 uv = vec2(0.5 + atan(n.x, n.z) / 6.2831853, 0.5 + asin(n.y) / 3.1415927);
          surface = mix(surface, textureLod(uMap, uv, uLod).rgb * 1.5, 0.55);
        }
        float limb = mix(0.7, 1.0, sqrt(max(0.0, 1.0 - r * r)));
        float glow = 0.55 * exp(-(r - 1.0) * 0.9) + 0.25 / (1.0 + r * r);
        float fade = 1.0 - smoothstep(0.6, 1.0, length(vUv));
        vec3 c = surface * disc * limb + vec3(1.0, 0.78, 0.5) * glow * (1.0 - disc) * fade;
        gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)));
      }`})}class Qy{constructor({follow:t,mainCamera:e,container:n}){this.follow=t,this.mainCamera=e,this.scene=new kf,this.camera=new fn(e.fov,e.aspect,.5,200),this.root=new ms,this.group=new ms,this.root.add(this.group),this.scene.add(this.root);const s=new Bf;this.stars=new Je(new ur(jy,96,48),$y()),this.stars.renderOrder=-3,this.group.add(this.stars);const r=Xo*8,o=bd*Math.tan(r*Un);this.sun=new Je(new ro(o*2,o*2),Jy(Xo/r)),this.sun.renderOrder=1,this.sun.frustumCulled=!1,this.scene.add(this.sun),this.sunLocal=new B(1,0,0);const a=new ur(1,64,32);this.bodies={};for(const[l,u]of Object.entries(Gc)){const h=new Je(a,Zy(u.color));if(h.scale.setScalar(Wl*Math.tan(u.size*Un)),h.quaternion.setFromUnitVectors(new B(0,1,0),Yy(u.pole[0],u.pole[1])),l==="saturn"){const d=new Je(new gu(ql,qf,128,1),Ky());d.rotation.x=-Math.PI/2,h.add(d),this.ring=d}this.group.add(h),this.bodies[l]={mesh:h,light:new B(1,0,0),...u}}const c=l=>u=>{l.uniforms.uMap.value=u,l.uniforms.uOn.value=1};for(const[l,u]of Object.entries(this.bodies))jo(s,`${l}.jpg`,c(u.mesh.material));jo(s,"saturn_ring.png",c(this.ring.material)),jo(s,"sun.jpg",c(this.sun.material)),jo(s,"stars.jpg",l=>{l.generateMipmaps=!1,l.minFilter=mn,c(this.stars.material)(l)}),this.labelLayer=document.createElement("div"),this.labelLayer.className="sky-labels",this.labelLayer.setAttribute("aria-hidden","true"),n.appendChild(this.labelLayer),this.labelPos={};for(const l of["sun",...Object.keys(Gc)]){const u=document.createElement("span");u.textContent=l==="sun"?"Sun":Gc[l].label,u.hidden=!0,this.labelLayer.appendChild(u),this.labelPos[l]={el:u,x:0,y:0}}this.lastMs=null,this._v=new B,this._w=new B,this._q=new xr,this.setTime(Date.now())}showBodies(t){this.sun.visible=t;for(const e of Object.values(this.bodies))e.mesh.visible=t;this.labelLayer.hidden=!t}setTime(t){if(this.lastMs!==null&&Math.abs(t-this.lastMs)<6e4)return;this.lastMs=t;const e=qy(t);this.group.rotation.y=-Xy(t)*Un,Wc(e.sun,this.sunLocal);for(const[n,s]of Object.entries(this.bodies)){const r=e[n];Wc(r,this._v),s.mesh.position.copy(this._v).multiplyScalar(Wl);const o=n==="moon"?e.sun:[e.sun[0]-r[0],e.sun[1]-r[1],e.sun[2]-r[2]];Wc(o,s.light)}}update(t,e,n){const s=this.camera,r=this.mainCamera;s.fov=r.fov,s.aspect=r.aspect,s.projectionMatrix.copy(r.projectionMatrix),s.projectionMatrixInverse.copy(r.projectionMatrixInverse),s.quaternion.copy(r.quaternion),this.root.quaternion.copy(this.follow.getWorldQuaternion(this._q)),this.scene.updateMatrixWorld(!0);const o=this.group.matrixWorld,a=this._w.copy(this.sunLocal).transformDirection(o).multiplyScalar(bd);this.sun.position.copy(a),this.sun.quaternion.copy(s.quaternion);const c=2*Math.tan(Xo*Un)/(2*Math.tan(s.fov/2*Un))*n;this.sun.material.uniforms.uLod.value=Math.max(0,Math.log2(2048/Math.max(1,Math.PI*c))),this._place("sun",a,Xo,t,e);for(const[l,u]of Object.entries(this.bodies)){const h=this._v.copy(u.light).transformDirection(o);u.mesh.material.uniforms.uLight.value.copy(h),l==="saturn"&&(this.ring.material.uniforms.uLight.value.copy(h),this.ring.material.uniforms.uNormal.value.set(0,1,0).applyQuaternion(u.mesh.getWorldQuaternion(this._q))),this._place(l,u.mesh.getWorldPosition(this._w),u.size,t,e)}this._spreadLabels()}_spreadLabels(){const t=Object.values(this.labelPos).filter(e=>!e.el.hidden).sort((e,n)=>e.y-n.y);for(let e=0;e<t.length;e++){for(let s=0;s<e;s++){const r=t[s],o=t[e];Math.abs(r.x-o.x)<56&&o.y-r.y<14&&(o.y=r.y+14)}const n=t[e];n.el.style.transform=`translate(${n.x.toFixed(1)}px, ${n.y.toFixed(1)}px) translateX(-50%)`}}_place(t,e,n,s,r){const o=this.labelPos[t],a=this._v.copy(e).normalize(),c=this.mainCamera.position,l=-c.dot(a),u=l>0&&c.lengthSq()-l*l<1,h=this._v.copy(e).project(this.camera),p=h.z<1&&Math.abs(h.x)<1.05&&Math.abs(h.y)<1.05&&!u;if(o.el.hidden===p&&(o.el.hidden=!p),!p)return;const g=Math.tan(n*Un)/Math.tan(this.camera.fov/2*Un)*(r/2);o.x=(h.x*.5+.5)*s,o.y=(-h.y*.5+.5)*r+g+6}}const Fe=Math.PI/180,Yo=30*Fe,Ur=4,Ed=1.18,tS=4,eS=.25,Ad=4,nS=1.6*Fe,Cd=75*Fe,qc=80*Fe,Xc=40*Fe,iS=.45,sS=.35,$o=.45,rS=new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"]),Rd=100,jc={sweep:{id:0,seconds:.8,ease:!1},bloom:{id:1,seconds:1.3,ease:!0},scan:{id:2,seconds:1.2,ease:!0},dissolve:{id:3,seconds:1.1,ease:!0}},Dd=8;function Pd(i,t){let e=0,n=i.length;for(;e<n;){const s=e+n>>1;i[s]<t?e=s+1:n=s}return e}function oS(i,t,e=new B){const n=(t+180)*Fe,s=(90-i)*Fe;return e.set(-Math.cos(n)*Math.sin(s),Math.cos(s),Math.sin(n)*Math.sin(s))}class aS{constructor(t,{reducedMotion:e=!1}={}){this.container=t,this.reducedMotion=e,this.spin=-90*Fe,this.tilt=15*Fe,this.spinVel=0,this.autoSpin=e?0:3*Fe,this.idleFor=0,this.far=Ur,this.distance=Ur,this.targetDistance=Ur,this.detailWidth=2048,this.minDistance=Ed,this.onZoom=null,this.renderer=new by({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Pe,t.appendChild(this.renderer.domElement),this.maxTextureSize=this.renderer.capabilities.maxTextureSize,this.scene=new kf,this.camera=new fn(35,1,.01,100),this.camera.position.set(0,0,Ur),this.material=new pu({color:16777215}),this._extendShader(),this.sphere=new Je(new ur(1,192,96),this.material),this.pivot=new ms,this.pivot.add(this.sphere),this.scene.add(this.pivot),this.cover=null,this.swapStyle="bloom",this.flight=null,this.held=!1,this.eventSets=new Set,this.eventPoints=null,this.atmosphere=this._makeAtmosphere(),this.scene.add(this.atmosphere),this.sky=new Qy({follow:this.sphere,mainCamera:this.camera,container:t}),this.renderer.autoClear=!1,this.raycaster=new Ny,this._bindPointer(),this._bindKeys(),new ResizeObserver(()=>this._resize()).observe(t),this._resize(),this._apply()}get maxDistance(){return this.far*tS}get zoomFactor(){return(this.far-1)/(this.distance-1)}texelsPerPixel(t,e=this.distance){const n=this.renderer.domElement.height||1,s=(e-1)*2*Math.tan(this.camera.fov/2*Fe)/n;return t/(2*Math.PI)*s}setDetailWidth(t){this.detailWidth=t,this._updateZoomLimit()}_updateZoomLimit(){const t=this.renderer.domElement.height||1,e=1+eS*2*Math.PI*t/(this.detailWidth*2*Math.tan(this.camera.fov/2*Fe));this.minDistance=Math.min(this.far,Math.max(Ed,e)),this.targetDistance<this.minDistance&&(this.targetDistance=this.minDistance)}get maxZoom(){return(this.far-1)/(this.minDistance-1)}setTexture(t,e=null){t.colorSpace!==Pe&&(t.colorSpace=Pe,t.isVideoTexture||(t.needsUpdate=!0)),t.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.material.map=t,this.material.needsUpdate=!0;const n=this.uniforms;n.colorFixOn.value=e?1:0,e&&(n.cf0.value.fromArray(e,0),n.cf1.value.fromArray(e,4),n.cf2.value.fromArray(e,8))}setLandLayer(t,e){const n=this.uniforms;t&&e?(t.colorSpace!==Pe&&(t.colorSpace=Pe,t.needsUpdate=!0),e.colorSpace!==bn&&(e.colorSpace=bn,e.needsUpdate=!0),t.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),n.landMap.value=t,n.landMask.value=e,n.landOn.value=1):n.landOn.value=0}_eventPoints(t){if(t._points)return t._points;const{width:e,height:n}=t,s=new Xn;s.setAttribute("position",new vn(t.pos,3)),s.setAttribute("aTime",new vn(t.time,2)),s.setAttribute("aDot",new vn(t.dot,2)),s.boundingSphere=new no(new B,1.01),s.setDrawRange(0,0);const r=this.renderer.getContext(),o=this.renderer.domElement,a={uFrame:{value:0},uAfter:{value:Dd},uOpacity:{value:0},uViewport:{value:new se(o.width||1,o.height||1)},uSrc:{value:new se(e,n)},uMaxPoint:{value:Math.min(512,r.getParameter(r.ALIASED_POINT_SIZE_RANGE)[1])}},c=new cn({uniforms:a,transparent:!0,depthWrite:!1,depthTest:!1,blending:ha,blendEquation:Qc,blendEquationAlpha:Qc,vertexShader:`
        attribute vec2 aTime;   // start, end (summary frames)
        attribute vec2 aDot;    // radius (source px), peak brightness 0-1
        uniform float uFrame;
        uniform float uAfter;
        uniform vec2 uViewport; // device px
        uniform vec2 uSrc;      // source map size (4096 x 2048)
        uniform float uMaxPoint;
        varying vec2 vEast;     // screen px per source px east
        varying vec2 vSouth;    // screen px per source px south (+y in the map)
        varying float vSize;
        varying vec2 vDot;
        varying float vAge;
        varying float vSince;
        vec2 px(vec4 clip) { return clip.xy / clip.w * 0.5 * uViewport; }
        void hide() { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; }
        void main() {
          float age = uFrame - aTime.x;
          float since = uFrame - aTime.y; // >= 0: finished, fading out
          if (age < 0.0 || since >= uAfter) { hide(); return; }
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          // Hide dots on the far side ourselves (depth testing clipped them at the limb).
          vec3 normalView = normalize(normalMatrix * position);
          if (dot(normalView, normalize(-mv.xyz)) < 0.02) { hide(); return; }
          vec4 clip = projectionMatrix * mv;
          vec3 p = normalize(position);
          vec3 east = vec3(p.z, 0.0, -p.x) * (6.2831853 / uSrc.x);
          vec3 north = normalize(vec3(0.0, 1.0, 0.0) - p * p.y) * (3.1415927 / uSrc.y);
          vec2 s0 = px(clip);
          vEast = px(projectionMatrix * modelViewMatrix * vec4(position + east, 1.0)) - s0;
          vSouth = px(projectionMatrix * modelViewMatrix * vec4(position - north, 1.0)) - s0;
          float reach = aDot.x * 1.6 + 3.0; // dot + halo, source px
          vec2 ext = (abs(vEast) + abs(vSouth)) * reach;
          vSize = clamp(2.0 * max(ext.x, ext.y) + 2.0, 2.0, uMaxPoint);
          gl_PointSize = vSize;
          gl_Position = clip;
          vDot = aDot;
          vAge = age;
          vSince = since;
        }`,fragmentShader:`
        uniform float uAfter;
        uniform float uOpacity;
        varying vec2 vEast;
        varying vec2 vSouth;
        varying float vSize;
        varying vec2 vDot;
        varying float vAge;
        varying float vSince;
        void main() {
          vec2 sp = (gl_PointCoord - 0.5) * vSize;
          sp.y = -sp.y; // gl_PointCoord runs down the screen
          mat2 J = mat2(vEast, vSouth);
          if (abs(determinant(J)) < 1e-8) discard;
          float d = length(inverse(J) * sp); // distance from the centre, source px
          // Keep tiny dots at least ~1 screen pixel wide so they never vanish.
          float r = max(vDot.x, 0.7 / max(length(vEast), 1e-3));
          // A soft glow like NASA's dots: bright centre fading over the outer half, then a
          // faint halo beyond.
          float core = vDot.y * (1.0 - smoothstep(0.35, 1.05, d / r));
          float glow = vDot.y * exp(-pow(max(d - r, 0.0) / 1.8, 2.0)) * 0.45;
          // New dots pop white-hot, burn NASA's yellow, then cool to orange as they fade.
          float hot = 1.0 - smoothstep(0.0, 3.0, vAge);
          float after = clamp(vSince / uAfter, 0.0, 1.0);
          float fade = vSince < 0.0 ? 1.0 : exp(-vSince / (uAfter * 0.3)) * (1.0 - after);
          vec3 coreColor = mix(vec3(1.0, 0.86, 0.12), vec3(1.0, 0.97, 0.82), hot * 0.85);
          coreColor = mix(coreColor, vec3(1.0, 0.45, 0.1), smoothstep(0.0, 0.5, after) * step(0.0, vSince));
          // Max-blended, so take the brighter of the dot and its halo rather than adding.
          vec3 c = max(coreColor * min(core * 1.15, 1.0), vec3(1.0, 0.58, 0.14) * glow) * fade * uOpacity;
          float a = max(c.r, max(c.g, c.b));
          if (a < 0.003) discard;
          gl_FragColor = vec4(c, a);
        }`}),l=new Ay(s,c);return l.frustumCulled=!1,l.userData={uniforms:a,starts:t.start,span:t.maxLife+Dd},this.sphere.add(l),this.eventSets.add(l),t._points=l,l}prepareEvents(t){t&&this._eventPoints(t)}setEvents(t){this.clearEvents(),t&&(this.eventPoints=this._eventPoints(t),this.eventUniforms=this.eventPoints.userData.uniforms)}setEventsFrame(t){if(!this.eventPoints)return;const{uniforms:e,starts:n,span:s}=this.eventPoints.userData;e.uFrame.value=t;const r=Pd(n,t-s),o=Pd(n,t+.001);this.eventPoints.geometry.setDrawRange(r,Math.max(0,o-r))}clearEvents(){this.eventPoints&&(this.eventPoints=null,this.eventUniforms=null)}_stepEvents(t){const e=1-Math.exp(-t*8);for(const n of this.eventSets){const s=n.userData.uniforms.uOpacity,r=n===this.eventPoints?1:0;s.value+=(r-s.value)*e,r===0&&s.value<.01&&(s.value=0,n.geometry.setDrawRange(0,0))}}_updateEventScale(){const t=this.renderer.domElement;for(const e of this.eventSets??[])e.userData.uniforms.uViewport.value.set(t.width||1,t.height||1)}_extendShader(){const t=new Vf(new Uint8Array([0,0,0,255]),1,1);t.needsUpdate=!0,this.uniforms={landMap:{value:t},landMask:{value:t},landOn:{value:0},landPrevOn:{value:0},colorFixOn:{value:0},cf0:{value:new Me(1,0,0,0)},cf1:{value:new Me(0,1,0,0)},cf2:{value:new Me(0,0,1,0)},smoothOn:{value:1},coverOn:{value:0},coverDay:{value:t},coverNight:{value:t},coverSun:{value:new B(-.95,.26,.16).normalize()},coverReveal:{value:0},swapPrev:{value:t},swapOn:{value:0},swapPrevVideo:{value:0},swapT:{value:1},swapStyle:{value:1}},this.material.onBeforeCompile=e=>{Object.assign(e.uniforms,this.uniforms),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vViewN;
varying vec3 vObjPos;`).replace("#include <fog_vertex>",`vViewN = normalize(normalMatrix * normal);
vObjPos = position;
#include <fog_vertex>`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D landMap;
uniform sampler2D landMask;
uniform float landOn;
uniform float landPrevOn;
uniform float colorFixOn;
uniform vec4 cf0;
uniform vec4 cf1;
uniform vec4 cf2;
uniform float smoothOn;
uniform float coverOn;
uniform sampler2D coverDay;
uniform sampler2D coverNight;
uniform vec3 coverSun;
uniform float coverReveal;
uniform sampler2D swapPrev;
uniform float swapOn;
uniform float swapPrevVideo;
uniform float swapT;
uniform float swapStyle; // 0 sweep, 1 corruption bloom, 2 satellite scan, 3 dissolve
varying vec3 vViewN;
varying vec3 vObjPos; // point on the unit globe, turns with it (noise sticks to the land)

float gHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float gNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(gHash(i), gHash(i + vec3(1,0,0)), f.x), mix(gHash(i + vec3(0,1,0)), gHash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(gHash(i + vec3(0,0,1)), gHash(i + vec3(1,0,1)), f.x), mix(gHash(i + vec3(0,1,1)), gHash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float gFbm(vec3 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * gNoise(p); p *= 2.07; a *= 0.5; } return s; }

// Catmull-Rom bicubic in 9 bilinear taps. Only used where one texel covers more than a
// screen pixel: there, plain bilinear shows soft blocks; zoomed out it would just cost time
// (and skip mipmaps), so it fades back to the normal lookup.
vec4 sampleCatmullRom(sampler2D tex, vec2 uv, vec2 size) {
  vec2 p = uv * size;
  vec2 t1 = floor(p - 0.5) + 0.5;
  vec2 f = p - t1;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2;
  vec2 t0 = (t1 - 1.0) / size;
  vec2 t3 = (t1 + 2.0) / size;
  vec2 t12 = (t1 + w2 / w12) / size;
  vec4 r = vec4(0.0);
  r += textureLod(tex, vec2(t0.x,  t0.y),  0.0) * w0.x  * w0.y;
  r += textureLod(tex, vec2(t12.x, t0.y),  0.0) * w12.x * w0.y;
  r += textureLod(tex, vec2(t3.x,  t0.y),  0.0) * w3.x  * w0.y;
  r += textureLod(tex, vec2(t0.x,  t12.y), 0.0) * w0.x  * w12.y;
  r += textureLod(tex, vec2(t12.x, t12.y), 0.0) * w12.x * w12.y;
  r += textureLod(tex, vec2(t3.x,  t12.y), 0.0) * w3.x  * w12.y;
  r += textureLod(tex, vec2(t0.x,  t3.y),  0.0) * w0.x  * w3.y;
  r += textureLod(tex, vec2(t12.x, t3.y),  0.0) * w12.x * w3.y;
  r += textureLod(tex, vec2(t3.x,  t3.y),  0.0) * w3.x  * w3.y;
  // Catmull-Rom overshoots at hard edges (dark halos around bright spots). Clamp to the
  // range of the four nearest texels so it can't invent values the data doesn't have.
  vec2 a = t1 / size, b = (t1 + 1.0) / size;
  vec4 c00 = textureLod(tex, a, 0.0), c10 = textureLod(tex, vec2(b.x, a.y), 0.0);
  vec4 c01 = textureLod(tex, vec2(a.x, b.y), 0.0), c11 = textureLod(tex, b, 0.0);
  return clamp(r, min(min(c00, c10), min(c01, c11)), max(max(c00, c10), max(c01, c11)));
}

// How many screen pixels one texel spans here (> 1 means magnified).
float texelScreenSize(vec2 uv, vec2 size) {
  vec2 d = fwidth(uv * size);
  return 1.0 / max(max(d.x, d.y), 1e-6);
}

vec4 sampleSmooth(sampler2D tex, vec2 uv) {
  vec4 lin = texture2D(tex, uv);
  if (smoothOn < 0.5) return lin;
  vec2 size = vec2(textureSize(tex, 0));
  float k = smoothstep(0.9, 1.4, texelScreenSize(uv, size));
  if (k <= 0.0) return lin;
  return mix(lin, sampleCatmullRom(tex, uv, size), k);
}`).replace("#include <map_fragment>",`#ifdef USE_MAP
  vec4 sampledDiffuseColor = sampleSmooth(map, vMapUv);
  #ifdef DECODE_VIDEO_TEXTURE
    sampledDiffuseColor = sRGBTransferEOTF(sampledDiffuseColor);
  #endif
  diffuseColor *= sampledDiffuseColor;
#endif
#ifdef USE_MAP
  if (colorFixOn > 0.5) {
    // The matrix was fitted in display (sRGB) space: convert, apply, convert back.
    vec3 c = sRGBTransferOETF(vec4(diffuseColor.rgb, 1.0)).rgb;
    c = clamp(vec3(dot(cf0.xyz, c) + cf0.w, dot(cf1.xyz, c) + cf1.w, dot(cf2.xyz, c) + cf2.w), 0.0, 1.0);
    diffuseColor.rgb = sRGBTransferEOTF(vec4(c, 1.0)).rgb;
  }
  float showNew = 1.0; // share of the new dataset here (below 1 only during a swap)
  if (swapOn > 0.5) {
    vec4 prev = sampleSmooth(swapPrev, vMapUv);
    if (swapPrevVideo > 0.5) prev = sRGBTransferEOTF(prev);
    vec3 n = normalize(vViewN);
    vec3 blue = vec3(0.3, 0.62, 1.0);
    vec3 col;
    float t = swapT;
    float fadeOut = 1.0 - smoothstep(0.85, 1.0, t); // effects gone by the end
    if (swapStyle < 0.5) {
      // Sweep: left to right, faint edge line.
      float edge = mix(-1.45, 1.45, t);
      showNew = 1.0 - smoothstep(edge - 0.3, edge + 0.3, n.x);
      col = mix(prev.rgb, diffuseColor.rgb, showNew) + blue * exp(-pow((n.x - edge) / 0.06, 2.0)) * 0.25 * fadeOut;
    } else if (swapStyle < 1.5) {
      // Corruption bloom: a blue glow ignites at the centre of the view and spreads over the
      // planet. Its front is a sharp, ragged line of light; thin glowing veins creep just
      // ahead of it through the old data; a faint blue fades quickly behind it.
      vec3 o = normalize(vObjPos);
      float d = acos(clamp(n.z, -1.0, 1.0)); // 0 at the centre of the view, 1.57 at the edge
      float dn = d + (gFbm(o * 4.0) - 0.5) * 0.5;
      float R = mix(-0.3, 2.1, t);
      float aa = max(fwidth(dn), 1e-4); // ~1 screen pixel: crisp at any size
      showNew = 1.0 - smoothstep(R - aa, R + aa, dn);
      float ahead = (1.0 - smoothstep(R, R + 0.22, dn)) * (1.0 - showNew);
      // Veins: thin ridges of noise, lit only just ahead of the front.
      float v = 1.0 - abs(gFbm(o * 9.0 + 3.7) * 2.0 - 1.0);
      float vaa = max(fwidth(v), 1e-4);
      float vein = smoothstep(0.93 - vaa, 0.93 + vaa, v) * ahead;
      float core = 1.0 - smoothstep(0.0, 1.5 * aa, abs(dn - R)); // the line itself
      float halo = exp(-abs(dn - R) / 0.035);                        // its glow
      float wash = (1.0 - smoothstep(0.0, 0.18, R - dn)) * showNew;
      col = mix(prev.rgb, diffuseColor.rgb, showNew);
      col = mix(col, col * vec3(0.55, 0.8, 1.3), (wash * 0.35 + ahead * 0.2) * fadeOut);
      col += (vec3(0.75, 0.9, 1.0) * core + blue * (halo * 0.55 + vein * 0.8)) * fadeOut;
    } else if (swapStyle < 2.5) {
      // Satellite scan: a bright line passes from the north pole to the south, laying the
      // new data down behind it, with a short afterglow.
      float y = normalize(vObjPos).y; // sin(latitude)
      float edge = mix(1.12, -1.12, t);
      showNew = smoothstep(edge - 0.015, edge + 0.015, y);
      float line = exp(-pow((y - edge) / 0.012, 2.0));
      float trail = exp(-max(y - edge, 0.0) / 0.09) * showNew;
      col = mix(prev.rgb, diffuseColor.rgb, showNew);
      col = mix(col, col * vec3(0.6, 0.85, 1.3), trail * 0.5 * fadeOut);
      col += blue * (line * 1.2 + trail * 0.12) * fadeOut;
    } else {
      // Dissolve: the old data breaks up in an organic pattern with glowing edges.
      float nz = gFbm(normalize(vObjPos) * 3.2);
      float thr = mix(0.12, 0.9, t) ;
      showNew = 1.0 - smoothstep(thr - 0.02, thr + 0.02, nz);
      if (t >= 1.0) showNew = 1.0;
      float rim = exp(-pow((nz - thr) / 0.014, 2.0));
      col = mix(prev.rgb, diffuseColor.rgb, showNew) + blue * rim * 0.6 * fadeOut;
    }
    diffuseColor.rgb = col;
  }
  // Land layer: on the parts of the globe showing a dataset that uses it, so it sweeps in
  // (or out) with that dataset instead of jumping.
  float landShare = landOn * showNew + landPrevOn * (1.0 - showNew);
  if (landShare > 0.0) {
    float m = texture2D(landMask, vMapUv).r * landShare;
    if (m > 0.0) diffuseColor.rgb = mix(diffuseColor.rgb, sampleSmooth(landMap, vMapUv).rgb, m);
  }
  if (coverOn > 0.5) {
    // Sunlit Blue Marble by day, Black Marble city lights by night.
    float ndl = dot(normalize(vViewN), coverSun);
    float day = smoothstep(-0.1, 0.3, ndl);
    vec3 dayC = texture2D(coverDay, vMapUv).rgb * clamp(ndl * 1.1 + 0.08, 0.0, 1.0);
    vec3 nightC = pow(texture2D(coverNight, vMapUv).rgb, vec3(1.7)) * 2.4; // lights bright, land dark
    vec3 real = mix(nightC, dayC, day);
    // "Data dawn": the data sweeps in from the sunlit side to the night side, with a faint
    // bright line at the edge.
    float edge = mix(1.25, -1.6, coverReveal);
    float show = smoothstep(edge, edge + 0.35, ndl);
    float line = exp(-pow((ndl - edge - 0.12) / 0.05, 2.0)) * (1.0 - smoothstep(0.85, 1.0, coverReveal));
    diffuseColor.rgb = mix(real, diffuseColor.rgb, show) + vec3(0.35, 0.65, 1.0) * line * 0.5 * step(0.001, coverReveal);
  }
#endif`)},this.material.customProgramCacheKey=()=>"globe-land-colorfix-bicubic-cover-swap-v8"}spinBy(t){this.spin+=t,this.idleFor=0,this.userAt=performance.now(),this._apply()}tiltBy(t){const e=this.held?Cd:Yo;this.tilt=Math.max(-e,Math.min(e,this.tilt+t)),this.idleFor=0,this.userAt=performance.now(),this._apply()}zoomBy(t){const e=(this.targetDistance-1)/t;this.targetDistance=Math.max(this.minDistance,Math.min(this.maxDistance,1+e)),this.idleFor=0,this.userAt=performance.now()}update(t){var n;if(this.idleFor+=t,this._stepKeys(t),this._stepCover(t),this._stepFlight(t),this._stepEvents(t),this._stepSwap(t),!this.dragging){if(this.spin+=this.spinVel*t,this.spinVel*=Math.pow(.08,t),Math.abs(this.spinVel)<.005&&(this.spinVel=0),this.held)this.flight?this.driftFor=0:(this.driftFor=(this.driftFor??0)+t,this.showView.spin+=nS*Math.min(1,this.driftFor/1.5)*t);else if(this.idleFor>4&&this.zoomFactor<1.2){const s=Math.min(1,(this.idleFor-4)/2);this.spin+=this.autoSpin*s*t}}this.held&&this._followShow(t);const e=this.distance;this.cover?this.distance=this.targetDistance:this.distance+=(this.targetDistance-this.distance)*(1-Math.exp(-t*10)),Math.abs(this.distance-e)>1e-4&&(this.camera.position.z=this.distance,(n=this.onZoom)==null||n.call(this,this.zoomFactor)),this._apply(),this.sky.update(this.container.clientWidth,this.container.clientHeight,this.renderer.domElement.height),this.renderer.clear(),this.renderer.render(this.sky.scene,this.sky.camera),this.renderer.clearDepth(),this.renderer.render(this.scene,this.camera)}get held(){return this._held}set held(t){this._held=t,this.showView=t?{spin:this.spin,tilt:this.tilt,distance:this.targetDistance}:null,this.peeking=!1}_followShow(t){const e=this.showView,n=2*Math.PI;let s=e.spin-this.spin;if(s-=Math.round(s/n)*n,this.dragging||this.keysHeld.size>0||this.keySpinVel||this.keyTiltVel||Math.abs(this.spinVel)>.02||performance.now()-(this.userAt??-1e9)<120){this.peeking=!0,this.peekOffset=null;return}if(this.peeking){const o=this.peekOffset??(this.peekOffset={spin:-s,tilt:this.tilt-e.tilt,distance:this.targetDistance-e.distance}),a=Math.exp(-t*3);o.spin*=a,o.tilt*=a,o.distance*=a,this.spin+=s+o.spin,this.tilt=e.tilt+o.tilt,this.targetDistance=e.distance+o.distance,Math.abs(o.spin)<.001&&Math.abs(o.tilt)<.001&&Math.abs(o.distance)<.003&&(this.peeking=!1,this.peekOffset=null);return}this.spin+=s,this.tilt=e.tilt,this.targetDistance=e.distance}flyTo({lat:t=15,lon:e=0,zoom:n=1,seconds:s=2.5}={}){var d;const r=this.showView??this;let o=(90-(e+180))*Fe;const a=2*Math.PI;o+=Math.round((r.spin-o)/a)*a;const c=this.held?Cd:Yo,l=Math.max(-c,Math.min(c,t*Fe)),u=Math.max(.2,n),h=Math.max(this.minDistance,Math.min(this.maxDistance,1+(this.far-1)/u));return this.spinVel=0,(d=this.flight)==null||d.resolve(),new Promise(p=>{this.flight={t:0,seconds:Math.max(.01,s),resolve:p,view:this.showView,from:{spin:r.spin,tilt:r.tilt,distance:r===this?this.targetDistance:r.distance},to:{spin:o,tilt:l,distance:h}}})}cancelFlight(){var t;(t=this.flight)==null||t.resolve(),this.flight=null}releaseHold(){if(this.held=!1,this.cancelFlight(),Math.abs(this.tilt)>Yo+.001){const t=Math.sign(this.tilt)*Yo;this.flight={t:0,seconds:1.2,resolve:()=>{},from:{spin:this.spin,tilt:this.tilt,distance:this.targetDistance},to:{spin:this.spin,tilt:t,distance:this.targetDistance}}}}_stepFlight(t){const e=this.flight;if(!e)return;e.t=Math.min(1,e.t+t/e.seconds);const n=e.t<.5?4*e.t**3:1-Math.pow(-2*e.t+2,3)/2,s=e.from.spin+(e.to.spin-e.from.spin)*n,r=e.from.tilt+(e.to.tilt-e.from.tilt)*n,o=e.from.distance+(e.to.distance-e.from.distance)*n;e.view?Object.assign(e.view,{spin:s,tilt:r,distance:o}):Object.assign(this,{spin:s,tilt:r,targetDistance:o}),this.idleFor=0,e.t>=1&&(this.flight=null,e.resolve())}swapFrom(t,e){var s,r;const n=this.uniforms;if((s=this._swapDone)==null||s.call(this),!t||this.reducedMotion){n.swapOn.value=0,n.landPrevOn.value=0,this._swapDone=null,e==null||e();return}n.swapPrev.value=t,n.swapPrevVideo.value=t.isVideoTexture?1:0,n.landPrevOn.value=n.landOn.value,n.swapOn.value=1,n.swapT.value=0,n.swapStyle.value=((r=jc[this.swapStyle])==null?void 0:r.id)??1,this._swapRaw=0,this._swapDone=e??(()=>{})}_stepSwap(t){const e=this.uniforms;if(!e.swapOn.value)return;const n=jc[this.swapStyle]??jc.bloom;this._swapRaw=Math.min(1,this._swapRaw+t/n.seconds);const s=this._swapRaw;if(e.swapT.value=n.ease?.5-.5*Math.cos(Math.PI*s):s,s>=1){e.swapOn.value=0,e.landPrevOn.value=0;const r=this._swapDone;this._swapDone=null,r==null||r()}}setCover(t,e){const n=this.uniforms;for(const s of[t,e])s.colorSpace=Pe,s.anisotropy=this.renderer.capabilities.getMaxAnisotropy();n.coverDay.value=t,n.coverNight.value=e,n.coverOn.value=1,n.coverReveal.value=0,this.atmoUniforms.uAmount.value=1,this.cover={t:0,leaving:!1,dataReady:!1,revealT:null,startSpin:0,startTilt:0,resolve:null},this.sky.showBodies(!1),this.tilt=12*Fe,this._coverFrame(1)}coverDataReady(){this.cover&&(this.cover.dataReady=!0)}leaveCover(){const t=this.cover;return!t||t.leaving?Promise.resolve():(t.leaving=!0,t.t=0,t.startSpin=this.spin,t.startTilt=this.tilt,new Promise(e=>{t.resolve=e}))}_makeAtmosphere(){this.atmoUniforms={uAmount:{value:0},uSun:{value:this.uniforms.coverSun.value}};const t=new cn({uniforms:this.atmoUniforms,side:je,transparent:!0,depthWrite:!1,blending:ha,blendSrc:vi,blendDst:vi,blendSrcAlpha:vi,blendDstAlpha:vi,vertexShader:`
        varying vec3 vN; varying vec3 vPos;
        void main() {
          vN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vPos = mv.xyz;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float uAmount; uniform vec3 uSun; varying vec3 vN; varying vec3 vPos;
        void main() {
          vec3 v = normalize(-vPos);
          // Back faces seen just past the planet's edge face away at ~-0.29; the shell's own
          // outline is 0. Brightest against the planet, fading out into space.
          float rim = pow(clamp(-dot(vN, v) / 0.29, 0.0, 1.0), 2.2);
          float lit = smoothstep(-0.35, 0.6, dot(vN, uSun)); // sunlit side of the rim
          vec3 c = vec3(0.32, 0.6, 1.0) * rim * rim * (0.05 + 0.95 * lit) * uAmount * 0.45; // subtle
          gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)));
        }`}),e=new Je(new ur(1.045,96,48),t);return e.renderOrder=2,e}_coverFrame(t){const e=this.container.clientWidth,n=this.container.clientHeight,s=e<n,r=this.far*(s?.82:.78);this.targetDistance=this.far+(r-this.far)*t;const o=s?0:-.17*e*t,a=s?-.24*n*t:0;t>0?this.camera.setViewOffset(e,n,o,a,e,n):this.camera.clearViewOffset()}_stepCover(t){var c;const e=this.cover;if(!e)return;const n=this.uniforms;if(!e.leaving){this.spin+=(this.reducedMotion?0:this.autoSpin)*t,this._coverFrame(1);return}e.t+=t;const s=l=>l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2,r=this.reducedMotion?0:2.2,o=r?Math.min(1,e.t/r):1,a=s(o);if(this._coverFrame(1-a),this.reducedMotion||(this.spin=e.startSpin+Math.PI*a,this.tilt=e.startTilt+(15*Fe-e.startTilt)*a),e.revealT===null&&e.dataReady&&e.t>=r*.35&&(e.revealT=0),e.revealT!==null){e.revealT+=t;const l=Math.min(1,e.revealT/(this.reducedMotion?.4:1.5));n.coverReveal.value=this.reducedMotion?l:s(l),this.atmoUniforms.uAmount.value=1-n.coverReveal.value,l>=1&&o>=1&&(n.coverOn.value=0,this.cover=null,this.camera.clearViewOffset(),this.idleFor=4,this.sky.showBodies(!0),(c=e.resolve)==null||c.call(e))}}setSkyTime(t){this.sky.setTime(t)}pick(t,e){const n=this.container.getBoundingClientRect(),s=new se(t/n.width*2-1,-(e/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);const r=this.raycaster.intersectObject(this.sphere,!1)[0];return r!=null&&r.uv?{lat:r.uv.y*180-90,lon:r.uv.x*360-180,x:s.x}:null}center(){const t=this.container.getBoundingClientRect();return this.pick(t.width/2,t.height/2)}view(t,e=new B){return e.copy(t).applyMatrix4(this.sphere.matrixWorld),{facing:e.z,x:e.x}}_apply(){this.sphere.rotation.y=this.spin,this.pivot.rotation.x=this.tilt,this.pivot.updateMatrixWorld(!0)}_resize(){const{clientWidth:t,clientHeight:e}=this.container;if(!t||!e)return;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix();const n=Math.min(1,this.camera.aspect)*Math.tan(this.camera.fov/2*Fe)*.9,s=1/Math.sin(Math.atan(n)),r=Math.abs(this.targetDistance-this.far)<.001;this.far=Math.max(Ur,s),r&&(this.targetDistance=this.far),this.targetDistance=Math.min(this.targetDistance,this.maxDistance),this._updateZoomLimit(),this._updateEventScale()}_bindPointer(){const t=this.renderer.domElement,e=new Map;let n=[],s=null,r=0;const o=()=>2*(Math.min(this.distance,this.far)-1)*Math.tan(17.5*Fe)/this.container.clientHeight;t.addEventListener("pointerdown",c=>{if(e.set(c.pointerId,{x:c.clientX,y:c.clientY}),t.setPointerCapture(c.pointerId),e.size===1)this.dragging=!0,this.spinVel=0,s={x:c.clientX,y:c.clientY},n=[{t:performance.now(),spin:this.spin}];else if(e.size===2){const[l,u]=[...e.values()];r=Math.hypot(l.x-u.x,l.y-u.y)}}),t.addEventListener("pointermove",c=>{if(!e.has(c.pointerId))return;if(e.set(c.pointerId,{x:c.clientX,y:c.clientY}),e.size===2){const[h,d]=[...e.values()],p=Math.hypot(h.x-d.x,h.y-d.y);r&&this.zoomBy(p/r),r=p;return}if(!this.dragging||!s)return;const l=o();this.spinBy((c.clientX-s.x)*l),this.tiltBy((c.clientY-s.y)*l),s={x:c.clientX,y:c.clientY};const u=performance.now();for(n.push({t:u,spin:this.spin});n.length>2&&u-n[0].t>Rd;)n.shift()});const a=c=>{if(e.delete(c.pointerId),e.size>0){s=null;return}if(this.dragging){const l=performance.now(),u=n.filter(h=>l-h.t<=Rd);if(u.length>=2){const h=(u[u.length-1].t-u[0].t)/1e3,d=h>.016?(u[u.length-1].spin-u[0].spin)/h:0;this.spinVel=Math.max(-Ad,Math.min(Ad,d))}else this.spinVel=0}this.held&&(this.spinVel=0),this.dragging=!1,s=null,r=0};t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a),t.addEventListener("wheel",c=>{c.preventDefault();const l=c.ctrlKey?.01:.0015;this.zoomBy(Math.exp(-c.deltaY*l))},{passive:!1})}_bindKeys(){this.keysHeld=new Set,this.keySpinVel=0,this.keyTiltVel=0,this.container.addEventListener("keydown",t=>{if(rS.has(t.key)){if(t.preventDefault(),!t.repeat&&!this.keysHeld.has(t.key)){this.keysHeld.add(t.key),this.spinVel=0;const n=Math.sqrt(Math.max(1,this.zoomFactor));t.key==="ArrowLeft"&&(this.keySpinVel=Math.max(this.keySpinVel,$o*qc/n)),t.key==="ArrowRight"&&(this.keySpinVel=Math.min(this.keySpinVel,-$o*qc/n)),t.key==="ArrowUp"&&(this.keyTiltVel=Math.max(this.keyTiltVel,$o*Xc/n)),t.key==="ArrowDown"&&(this.keyTiltVel=Math.min(this.keyTiltVel,-$o*Xc/n))}this.idleFor=0;return}const e={"+":1.5,"=":1.5,"-":1/1.5,_:1/1.5};e[t.key]&&(t.preventDefault(),this.spinVel=0,this.zoomBy(e[t.key]))}),this.container.addEventListener("keyup",t=>this.keysHeld.delete(t.key)),this.container.addEventListener("blur",()=>this.keysHeld.clear())}_stepKeys(t){const e=Math.sqrt(Math.max(1,this.zoomFactor)),n=r=>this.keysHeld.has(r)?1:0,s=(r,o,a)=>{const c=o*a,l=(o!==0?a/iS:a/sS)*t;return Math.abs(c-r)<=l?c:r+Math.sign(c-r)*l};this.keySpinVel=s(this.keySpinVel,n("ArrowLeft")-n("ArrowRight"),qc/e),this.keyTiltVel=s(this.keyTiltVel,n("ArrowUp")-n("ArrowDown"),Xc/e),this.keySpinVel&&(this.spin+=this.keySpinVel*t,this.idleFor=0,this.userAt=performance.now()),this.keyTiltVel&&this.tiltBy(this.keyTiltVel*t)}get keyMoving(){return this.keysHeld.size>0||this.keySpinVel!==0||this.keyTiltVel!==0}}const Xf="15.0.4",Id=(i,t,e)=>({endTime:t,insertTime:e,type:"exponentialRampToValue",value:i}),Nd=(i,t,e)=>({endTime:t,insertTime:e,type:"linearRampToValue",value:i}),Xl=(i,t)=>({startTime:t,type:"setValue",value:i}),jf=(i,t,e)=>({duration:e,startTime:t,type:"setValueCurve",values:i}),Yf=(i,t,{startTime:e,target:n,timeConstant:s})=>n+(t-n)*Math.exp((e-i)/s),Js=i=>i.type==="exponentialRampToValue",fa=i=>i.type==="linearRampToValue",qi=i=>Js(i)||fa(i),vu=i=>i.type==="setValue",gi=i=>i.type==="setValueCurve",pa=(i,t,e,n)=>{const s=i[t];return s===void 0?n:qi(s)||vu(s)?s.value:gi(s)?s.values[s.values.length-1]:Yf(e,pa(i,t-1,s.startTime,n),s)},Ld=(i,t,e,n,s)=>e===void 0?[n.insertTime,s]:qi(e)?[e.endTime,e.value]:vu(e)?[e.startTime,e.value]:gi(e)?[e.startTime+e.duration,e.values[e.values.length-1]]:[e.startTime,pa(i,t-1,e.startTime,s)],jl=i=>i.type==="cancelAndHold",Yl=i=>i.type==="cancelScheduledValues",Hi=i=>jl(i)||Yl(i)?i.cancelTime:Js(i)||fa(i)?i.endTime:i.startTime,Od=(i,t,e,{endTime:n,value:s})=>e===s?s:0<e&&0<s||e<0&&s<0?e*(s/e)**((i-t)/(n-t)):i<n?e:s,Ud=(i,t,e,{endTime:n,value:s})=>e+(i-t)/(n-t)*(s-e),$f=(i,t)=>{const e=Math.floor(t);if(e===t)return i[e];const n=Math.ceil(t);return(1-(t-e))*i[e]+(1-(n-t))*i[n]},cS=(i,{duration:t,startTime:e,values:n})=>{const s=(i-e)/t*(n.length-1);return $f(n,s)},lS=(i,t,e)=>{const n=i.length,s=Math.max(1,Math.floor(e/t*n))+1,r=i instanceof Float32Array?new Float32Array(s):i.slice(0,s);for(let o=0;o<s;o+=1){const c=o/(s-1)*e/t*(n-1);r[o]=$f(i,c)}return r},Zo=i=>i.type==="setTarget";class uS{constructor(t){this._automationEvents=[],this._currenTime=0,this._defaultValue=t}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(t){const e=Hi(t);if(jl(t)||Yl(t)){const n=this._automationEvents.findIndex(r=>Yl(t)&&gi(r)?r.startTime+r.duration>=e:Hi(r)>=e),s=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),jl(t)){const r=this._automationEvents[this._automationEvents.length-1];if(s!==void 0&&qi(s)){if(r!==void 0&&Zo(r))throw new Error("The internal list is malformed.");const o=r===void 0?s.insertTime:gi(r)?r.startTime+r.duration:Hi(r),a=r===void 0?this._defaultValue:gi(r)?r.values[r.values.length-1]:r.value,c=Js(s)?Od(e,o,a,s):Ud(e,o,a,s),l=Js(s)?Id(c,e,this._currenTime):Nd(c,e,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&Zo(r)&&this._automationEvents.push(Xl(this.getValue(e),e)),r!==void 0&&gi(r)&&r.startTime+r.duration>e){const o=e-r.startTime;this._automationEvents[this._automationEvents.length-1]=jf(lS(r.values,r.duration,o),r.startTime,o)}}}else{const n=this._automationEvents.findIndex(o=>Hi(o)>e),s=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(s!==void 0&&gi(s)&&Hi(s)+s.duration>e)return!1;const r=Js(t)?Id(t.value,t.endTime,this._currenTime):fa(t)?Nd(t.value,e,this._currenTime):t;if(n===-1)this._automationEvents.push(r);else{if(gi(t)&&e+t.duration>Hi(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(t){const e=this._automationEvents.findIndex(n=>Hi(n)>t);if(e>1){const n=this._automationEvents.slice(e-1),s=n[0];Zo(s)&&n.unshift(Xl(pa(this._automationEvents,e-2,s.startTime,this._defaultValue),s.startTime)),this._automationEvents=n}}getValue(t){if(this._automationEvents.length===0)return this._defaultValue;const e=this._automationEvents.findIndex(o=>Hi(o)>t),n=this._automationEvents[e],s=(e===-1?this._automationEvents.length:e)-1,r=this._automationEvents[s];if(r!==void 0&&Zo(r)&&(n===void 0||!qi(n)||n.insertTime>t))return Yf(t,pa(this._automationEvents,s-1,r.startTime,this._defaultValue),r);if(r!==void 0&&vu(r)&&(n===void 0||!qi(n)))return r.value;if(r!==void 0&&gi(r)&&(n===void 0||!qi(n)||r.startTime+r.duration>t))return t<r.startTime+r.duration?cS(t,r):r.values[r.values.length-1];if(r!==void 0&&qi(r)&&(n===void 0||!qi(n)))return r.value;if(n!==void 0&&Js(n)){const[o,a]=Ld(this._automationEvents,s,r,n,this._defaultValue);return Od(t,o,a,n)}if(n!==void 0&&fa(n)){const[o,a]=Ld(this._automationEvents,s,r,n,this._defaultValue);return Ud(t,o,a,n)}return this._defaultValue}}const hS=i=>({cancelTime:i,type:"cancelAndHold"}),dS=i=>({cancelTime:i,type:"cancelScheduledValues"}),fS=(i,t)=>({endTime:t,type:"exponentialRampToValue",value:i}),pS=(i,t)=>({endTime:t,type:"linearRampToValue",value:i}),mS=(i,t,e)=>({startTime:t,target:i,timeConstant:e,type:"setTarget"}),gS=()=>new DOMException("","AbortError"),_S=i=>(t,e,[n,s,r],o)=>{i(t[s],[e,n,r],a=>a[0]===e&&a[1]===n,o)},vS=i=>(t,e,n)=>{const s=[];for(let r=0;r<n.numberOfInputs;r+=1)s.push(new Set);i.set(t,{activeInputs:s,outputs:new Set,passiveInputs:new WeakMap,renderer:e})},xS=i=>(t,e)=>{i.set(t,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:e})},hr=new WeakSet,Zf=new WeakMap,xu=new WeakMap,Kf=new WeakMap,yu=new WeakMap,Ua=new WeakMap,Jf=new WeakMap,$l=new WeakMap,Zl=new WeakMap,Kl=new WeakMap,Qf={construct(){return Qf}},yS=i=>{try{const t=new Proxy(i,Qf);new t}catch{return!1}return!0},Fd=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,kd=(i,t)=>{const e=[];let n=i.replace(/^[\s]+/,""),s=n.match(Fd);for(;s!==null;){const r=s[1].slice(1,-1),o=s[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,t).toString());e.push(o),n=n.slice(s[0].length).replace(/^[\s]+/,""),s=n.match(Fd)}return[e.join(";"),n]},Vd=i=>{if(i!==void 0&&!Array.isArray(i))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Bd=i=>{if(!yS(i))throw new TypeError("The given value for processorCtor should be a constructor.");if(i.prototype===null||typeof i.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},SS=(i,t,e,n,s,r,o,a,c,l,u,h,d)=>{let p=0;return(g,_,m={credentials:"omit"})=>{const f=u.get(g);if(f!==void 0&&f.has(_))return Promise.resolve();const y=l.get(g);if(y!==void 0){const E=y.get(_);if(E!==void 0)return E}const S=r(g),x=S.audioWorklet===void 0?s(_).then(([E,w])=>{const[A,C]=kd(E,w),M=`${A};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${C}
})})(window,'_AWGS')`;return e(M)}).then(()=>{const E=d._AWGS.pop();if(E===void 0)throw new SyntaxError;n(S.currentTime,S.sampleRate,()=>E(class{},void 0,(w,A)=>{if(w.trim()==="")throw t();const C=Zl.get(S);if(C!==void 0){if(C.has(w))throw t();Bd(A),Vd(A.parameterDescriptors),C.set(w,A)}else Bd(A),Vd(A.parameterDescriptors),Zl.set(S,new Map([[w,A]]))},S.sampleRate,void 0,void 0))}):Promise.all([s(_),Promise.resolve(i(h,h))]).then(([[E,w],A])=>{const C=p+1;p=C;const[M,v]=kd(E,w),L=`${M};((AudioWorkletProcessor,registerProcessor)=>{${v}
})(${A?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${A?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${A?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${C}',class extends AudioWorkletProcessor{process(){return !1}})`,H=new Blob([L],{type:"application/javascript; charset=utf-8"}),U=URL.createObjectURL(H);return S.audioWorklet.addModule(U,m).then(()=>{if(a(S))return S;const W=o(S);return W.audioWorklet.addModule(U,m).then(()=>W)}).then(W=>{if(c===null)throw new SyntaxError;try{new c(W,`__sac${C}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(U))});return y===void 0?l.set(g,new Map([[_,x]])):y.set(_,x),x.then(()=>{const E=u.get(g);E===void 0?u.set(g,new Set([_])):E.add(_)}).finally(()=>{const E=l.get(g);E!==void 0&&E.delete(_)}),x}},Hn=(i,t)=>{const e=i.get(t);if(e===void 0)throw new Error("A value with the given key could not be found.");return e},Fa=(i,t)=>{const e=Array.from(i).filter(t);if(e.length>1)throw Error("More than one element was found.");if(e.length===0)throw Error("No element was found.");const[n]=e;return i.delete(n),n},tp=(i,t,e,n)=>{const s=Hn(i,t),r=Fa(s,o=>o[0]===e&&o[1]===n);return s.size===0&&i.delete(t),r},oo=i=>Hn(Jf,i),dr=i=>{if(hr.has(i))throw new Error("The AudioNode is already stored.");hr.add(i),oo(i).forEach(t=>t(!0))},ep=i=>"port"in i,ao=i=>{if(!hr.has(i))throw new Error("The AudioNode is not stored.");hr.delete(i),oo(i).forEach(t=>t(!1))},Jl=(i,t)=>{!ep(i)&&t.every(e=>e.size===0)&&ao(i)},MS=(i,t,e,n,s,r,o,a,c,l,u,h,d)=>{const p=new WeakMap;return(g,_,m,f,y)=>{const{activeInputs:S,passiveInputs:x}=r(_),{outputs:E}=r(g),w=a(g),A=C=>{const M=c(_),v=c(g);if(C){const R=tp(x,g,m,f);i(S,g,R,!1),!y&&!h(g)&&e(v,M,m,f),d(_)&&dr(_)}else{const R=n(S,g,m,f);t(x,f,R,!1),!y&&!h(g)&&s(v,M,m,f);const P=o(_);if(P===0)u(_)&&Jl(_,S);else{const I=p.get(_);I!==void 0&&clearTimeout(I),p.set(_,setTimeout(()=>{u(_)&&Jl(_,S)},P*1e3))}}};return l(E,[_,m,f],C=>C[0]===_&&C[1]===m&&C[2]===f,!0)?(w.add(A),u(g)?i(S,g,[m,f,A],!0):t(x,f,[g,m,A],!0),!0):!1}},TS=i=>(t,e,[n,s,r],o)=>{const a=t.get(n);a===void 0?t.set(n,new Set([[s,e,r]])):i(a,[s,e,r],c=>c[0]===s&&c[1]===e,o)},wS=i=>(t,e)=>{const n=i(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});e.connect(n).connect(t.destination);const s=()=>{e.removeEventListener("ended",s),e.disconnect(n),n.disconnect()};e.addEventListener("ended",s)},bS=i=>(t,e)=>{i(t).add(e)},ES={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},AS=(i,t,e,n,s,r)=>class extends i{constructor(a,c){const l=s(a),u={...ES,...c},h=n(l,u),d=r(l)?t():null;super(a,!1,h,d),this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(a){this._nativeAnalyserNode.fftSize=a}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(a){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=a,!(a>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,e()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(a){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=a,!(this._nativeAnalyserNode.maxDecibels>a))throw this._nativeAnalyserNode.minDecibels=c,e()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(a){this._nativeAnalyserNode.smoothingTimeConstant=a}getByteFrequencyData(a){this._nativeAnalyserNode.getByteFrequencyData(a)}getByteTimeDomainData(a){this._nativeAnalyserNode.getByteTimeDomainData(a)}getFloatFrequencyData(a){this._nativeAnalyserNode.getFloatFrequencyData(a)}getFloatTimeDomainData(a){this._nativeAnalyserNode.getFloatTimeDomainData(a)}},$e=(i,t)=>i.context===t,CS=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!$e(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,fftSize:a.fftSize,maxDecibels:a.maxDecibels,minDecibels:a.minDecibels,smoothingTimeConstant:a.smoothingTimeConstant};a=i(o,l)}return n.set(o,a),await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},ma=i=>{try{i.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},si=()=>new DOMException("","IndexSizeError"),Su=i=>{i.getChannelData=(t=>e=>{try{return t.call(i,e)}catch(n){throw n.code===12?si():n}})(i.getChannelData)},RS={numberOfChannels:1},DS=(i,t,e,n,s,r,o,a)=>{let c=null;return class np{constructor(u){if(s===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:h,numberOfChannels:d,sampleRate:p}={...RS,...u};c===null&&(c=new s(1,1,44100));const g=n!==null&&t(r,r)?new n({length:h,numberOfChannels:d,sampleRate:p}):c.createBuffer(d,h,p);if(g.numberOfChannels===0)throw e();return typeof g.copyFromChannel!="function"?(o(g),Su(g)):t(ma,()=>ma(g))||a(g),i.add(g),g}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===np.prototype||i.has(u)}}},on=-34028234663852886e22,Ke=-on,wi=i=>hr.has(i),PS={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},IS=(i,t,e,n,s,r,o,a)=>class extends i{constructor(l,u){const h=r(l),d={...PS,...u},p=s(h,d),g=o(h),_=g?t():null;super(l,!1,p,_),this._audioBufferSourceNodeRenderer=_,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=p,this._onended=null,this._playbackRate=e(this,g,p.playbackRate,Ke,on)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?a(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){dr(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),wi(this)&&ao(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},NS=(i,t,e,n,s)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=e(l);const d=$e(h,u);if(!d){const p={buffer:h.buffer,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,loop:h.loop,loopEnd:h.loopEnd,loopStart:h.loopStart,playbackRate:h.playbackRate.value};h=t(u,p),o!==null&&h.start(...o),a!==null&&h.stop(a)}return r.set(u,h),d?await i(u,l.playbackRate,h.playbackRate):await n(u,l.playbackRate,h.playbackRate),await s(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},LS=i=>"playbackRate"in i,OS=i=>"frequency"in i&&"gain"in i,US=i=>"offset"in i,FS=i=>!("frequency"in i)&&"gain"in i,kS=i=>"detune"in i&&"frequency"in i&&!("gain"in i),VS=i=>"pan"in i,Qe=i=>Hn(Zf,i),co=i=>Hn(Kf,i),Ql=(i,t)=>{const{activeInputs:e}=Qe(i);e.forEach(s=>s.forEach(([r])=>{t.includes(i)||Ql(r,[...t,i])}));const n=LS(i)?[i.playbackRate]:ep(i)?Array.from(i.parameters.values()):OS(i)?[i.Q,i.detune,i.frequency,i.gain]:US(i)?[i.offset]:FS(i)?[i.gain]:kS(i)?[i.detune,i.frequency]:VS(i)?[i.pan]:[];for(const s of n){const r=co(s);r!==void 0&&r.activeInputs.forEach(([o])=>Ql(o,t))}wi(i)&&ao(i)},ip=i=>{Ql(i.destination,[])},BS=i=>i===void 0||typeof i=="number"||typeof i=="string"&&(i==="balanced"||i==="interactive"||i==="playback"),zS=(i,t,e,n,s,r,o,a,c)=>class extends i{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h;try{h=new c(u)}catch(g){throw g.code===12&&g.message==="sampleRate is not in range"?e():g}if(h===null)throw n();if(!BS(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw e();super(h,2);const{latencyHint:d}=u,{sampleRate:p}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/p:d==="interactive"||d===void 0?256/p:d==="playback"?1024/p:Math.max(2,Math.min(128,Math.round(d*p/128)))*128/p,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";const g=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",g)};h.addEventListener("statechange",g)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw t()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),ip(this)}))}createMediaElementSource(u){return new s(this,{mediaElement:u})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(u){return new o(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new a(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?t():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?t():u})}},HS=(i,t,e,n,s,r,o,a)=>class extends i{constructor(l,u){const h=r(l),d=o(h),p=s(h,u,d),g=d?t(a):null;super(l,!1,p,g),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=p}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw e();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},GS=i=>{const t=new WeakMap,e=async(n,s)=>{const r=s.destination;return t.set(s,r),await i(n,s,r),r};return{render(n,s){const r=t.get(s);return r!==void 0?Promise.resolve(r):e(n,s)}}},WS=(i,t,e,n,s,r,o,a)=>(c,l)=>{const u=l.listener,h=()=>{const E=new Float32Array(1),w=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),A=o(l);let C=!1,M=[0,0,-1,0,1,0],v=[0,0,0];const R=()=>{if(C)return;C=!0;const H=n(l,256,9,0);H.onaudioprocess=({inputBuffer:U})=>{const W=[r(U,E,0),r(U,E,1),r(U,E,2),r(U,E,3),r(U,E,4),r(U,E,5)];W.some((Y,J)=>Y!==M[J])&&(u.setOrientation(...W),M=W);const V=[r(U,E,6),r(U,E,7),r(U,E,8)];V.some((Y,J)=>Y!==v[J])&&(u.setPosition(...V),v=V)},w.connect(H)},P=H=>U=>{U!==M[H]&&(M[H]=U,u.setOrientation(...M))},I=H=>U=>{U!==v[H]&&(v[H]=U,u.setPosition(...v))},L=(H,U,W)=>{const V=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:U});V.connect(w,0,H),V.start(),Object.defineProperty(V.offset,"defaultValue",{get(){return U}});const Y=i({context:c},A,V.offset,Ke,on);return a(Y,"value",J=>()=>J.call(Y),J=>nt=>{try{J.call(Y,nt)}catch(xt){if(xt.code!==9)throw xt}R(),A&&W(nt)}),Y.cancelAndHoldAtTime=(J=>A?()=>{throw s()}:(...nt)=>{const xt=J.apply(Y,nt);return R(),xt})(Y.cancelAndHoldAtTime),Y.cancelScheduledValues=(J=>A?()=>{throw s()}:(...nt)=>{const xt=J.apply(Y,nt);return R(),xt})(Y.cancelScheduledValues),Y.exponentialRampToValueAtTime=(J=>A?()=>{throw s()}:(...nt)=>{const xt=J.apply(Y,nt);return R(),xt})(Y.exponentialRampToValueAtTime),Y.linearRampToValueAtTime=(J=>A?()=>{throw s()}:(...nt)=>{const xt=J.apply(Y,nt);return R(),xt})(Y.linearRampToValueAtTime),Y.setTargetAtTime=(J=>A?()=>{throw s()}:(...nt)=>{const xt=J.apply(Y,nt);return R(),xt})(Y.setTargetAtTime),Y.setValueAtTime=(J=>A?()=>{throw s()}:(...nt)=>{const xt=J.apply(Y,nt);return R(),xt})(Y.setValueAtTime),Y.setValueCurveAtTime=(J=>A?()=>{throw s()}:(...nt)=>{const xt=J.apply(Y,nt);return R(),xt})(Y.setValueCurveAtTime),Y};return{forwardX:L(0,0,P(0)),forwardY:L(1,0,P(1)),forwardZ:L(2,-1,P(2)),positionX:L(6,0,I(0)),positionY:L(7,0,I(1)),positionZ:L(8,0,I(2)),upX:L(3,0,P(3)),upY:L(4,1,P(4)),upZ:L(5,0,P(5))}},{forwardX:d,forwardY:p,forwardZ:g,positionX:_,positionY:m,positionZ:f,upX:y,upY:S,upZ:x}=u.forwardX===void 0?h():u;return{get forwardX(){return d},get forwardY(){return p},get forwardZ(){return g},get positionX(){return _},get positionY(){return m},get positionZ(){return f},get upX(){return y},get upY(){return S},get upZ(){return x}}},ga=i=>"context"in i,lo=i=>ga(i[0]),Cs=(i,t,e,n)=>{for(const s of i)if(e(s)){if(n)return!1;throw Error("The set contains at least one similar element.")}return i.add(t),!0},zd=(i,t,[e,n],s)=>{Cs(i,[t,e,n],r=>r[0]===t&&r[1]===e,s)},Hd=(i,[t,e,n],s)=>{const r=i.get(t);r===void 0?i.set(t,new Set([[e,n]])):Cs(r,[e,n],o=>o[0]===e,s)},Sr=i=>"inputs"in i,_a=(i,t,e,n)=>{if(Sr(t)){const s=t.inputs[n];return i.connect(s,e,0),[s,e,0]}return i.connect(t,e,n),[t,e,n]},sp=(i,t,e)=>{for(const n of i)if(n[0]===t&&n[1]===e)return i.delete(n),n;return null},qS=(i,t,e)=>Fa(i,n=>n[0]===t&&n[1]===e),rp=(i,t)=>{if(!oo(i).delete(t))throw new Error("Missing the expected event listener.")},op=(i,t,e)=>{const n=Hn(i,t),s=Fa(n,r=>r[0]===e);return n.size===0&&i.delete(t),s},va=(i,t,e,n)=>{Sr(t)?i.disconnect(t.inputs[n],e,0):i.disconnect(t,e,n)},ve=i=>Hn(xu,i),$r=i=>Hn(yu,i),ws=i=>$l.has(i),la=i=>!hr.has(i),Gd=(i,t)=>new Promise(e=>{if(t!==null)e(!0);else{const n=i.createScriptProcessor(256,1,1),s=i.createGain(),r=i.createBuffer(1,2,44100),o=r.getChannelData(0);o[0]=1,o[1]=1;const a=i.createBufferSource();a.buffer=r,a.loop=!0,a.connect(n).connect(i.destination),a.connect(s),a.disconnect(s),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?e(!0):e(!1),a.stop(),n.onaudioprocess=null,a.disconnect(n),n.disconnect(i.destination)},a.start()}}),Yc=(i,t)=>{const e=new Map;for(const n of i)for(const s of n){const r=e.get(s);e.set(s,r===void 0?1:r+1)}e.forEach((n,s)=>t(s,n))},xa=i=>"context"in i,XS=i=>{const t=new Map;i.connect=(e=>(n,s=0,r=0)=>{const o=xa(n)?e(n,s,r):e(n,s),a=t.get(n);return a===void 0?t.set(n,[{input:r,output:s}]):a.every(c=>c.input!==r||c.output!==s)&&a.push({input:r,output:s}),o})(i.connect.bind(i)),i.disconnect=(e=>(n,s,r)=>{if(e.apply(i),n===void 0)t.clear();else if(typeof n=="number")for(const[o,a]of t){const c=a.filter(l=>l.output!==n);c.length===0?t.delete(o):t.set(o,c)}else if(t.has(n))if(s===void 0)t.delete(n);else{const o=t.get(n);if(o!==void 0){const a=o.filter(c=>c.output!==s&&(c.input!==r||r===void 0));a.length===0?t.delete(n):t.set(n,a)}}for(const[o,a]of t)a.forEach(c=>{xa(o)?i.connect(o,c.output,c.input):i.connect(o,c.output)})})(i.disconnect)},jS=(i,t,e,n)=>{const{activeInputs:s,passiveInputs:r}=co(t),{outputs:o}=Qe(i),a=oo(i),c=l=>{const u=ve(i),h=$r(t);if(l){const d=op(r,i,e);zd(s,i,d,!1),!n&&!ws(i)&&u.connect(h,e)}else{const d=qS(s,i,e);Hd(r,d,!1),!n&&!ws(i)&&u.disconnect(h,e)}};return Cs(o,[t,e],l=>l[0]===t&&l[1]===e,!0)?(a.add(c),wi(i)?zd(s,i,[e,c],!0):Hd(r,[i,e,c],!0),!0):!1},YS=(i,t,e,n)=>{const{activeInputs:s,passiveInputs:r}=Qe(t),o=sp(s[n],i,e);return o===null?[tp(r,i,e,n)[2],!1]:[o[2],!0]},$S=(i,t,e)=>{const{activeInputs:n,passiveInputs:s}=co(t),r=sp(n,i,e);return r===null?[op(s,i,e)[1],!1]:[r[2],!0]},Mu=(i,t,e,n,s)=>{const[r,o]=YS(i,e,n,s);if(r!==null&&(rp(i,r),o&&!t&&!ws(i)&&va(ve(i),ve(e),n,s)),wi(e)){const{activeInputs:a}=Qe(e);Jl(e,a)}},Tu=(i,t,e,n)=>{const[s,r]=$S(i,e,n);s!==null&&(rp(i,s),r&&!t&&!ws(i)&&ve(i).disconnect($r(e),n))},ZS=(i,t)=>{const e=Qe(i),n=[];for(const s of e.outputs)lo(s)?Mu(i,t,...s):Tu(i,t,...s),n.push(s[0]);return e.outputs.clear(),n},KS=(i,t,e)=>{const n=Qe(i),s=[];for(const r of n.outputs)r[1]===e&&(lo(r)?Mu(i,t,...r):Tu(i,t,...r),s.push(r[0]),n.outputs.delete(r));return s},JS=(i,t,e,n,s)=>{const r=Qe(i);return Array.from(r.outputs).filter(o=>o[0]===e&&(n===void 0||o[1]===n)&&(s===void 0||o[2]===s)).map(o=>(lo(o)?Mu(i,t,...o):Tu(i,t,...o),r.outputs.delete(o),o[0]))},QS=(i,t,e,n,s,r,o,a,c,l,u,h,d,p,g,_)=>class extends l{constructor(f,y,S,x){super(S),this._context=f,this._nativeAudioNode=S;const E=u(f);h(E)&&e(Gd,()=>Gd(E,_))!==!0&&XS(S),xu.set(this,S),Jf.set(this,new Set),f.state!=="closed"&&y&&dr(this),i(this,x,S)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(f){this._nativeAudioNode.channelCount=f}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(f){this._nativeAudioNode.channelCountMode=f}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(f){this._nativeAudioNode.channelInterpretation=f}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(f,y=0,S=0){if(y<0||y>=this._nativeAudioNode.numberOfOutputs)throw s();const x=u(this._context),E=g(x);if(d(f)||p(f))throw r();if(ga(f)){const C=ve(f);try{const v=_a(this._nativeAudioNode,C,y,S),R=la(this);(E||R)&&this._nativeAudioNode.disconnect(...v),this.context.state!=="closed"&&!R&&la(f)&&dr(f)}catch(v){throw v.code===12?r():v}if(t(this,f,y,S,E)){const v=c([this],f);Yc(v,n(E))}return f}const w=$r(f);if(w.name==="playbackRate"&&w.maxValue===1024)throw o();try{this._nativeAudioNode.connect(w,y),(E||la(this))&&this._nativeAudioNode.disconnect(w,y)}catch(C){throw C.code===12?r():C}if(jS(this,f,y,E)){const C=c([this],f);Yc(C,n(E))}}disconnect(f,y,S){let x;const E=u(this._context),w=g(E);if(f===void 0)x=ZS(this,w);else if(typeof f=="number"){if(f<0||f>=this.numberOfOutputs)throw s();x=KS(this,w,f)}else{if(y!==void 0&&(y<0||y>=this.numberOfOutputs)||ga(f)&&S!==void 0&&(S<0||S>=f.numberOfInputs))throw s();if(x=JS(this,w,f,y,S),x.length===0)throw r()}for(const A of x){const C=c([this],A);Yc(C,a)}}},tM=(i,t,e,n,s,r,o,a,c,l,u,h,d)=>(p,g,_,m=null,f=null)=>{const y=_.value,S=new uS(y),x=g?n(S):null,E={get defaultValue(){return y},get maxValue(){return m===null?_.maxValue:m},get minValue(){return f===null?_.minValue:f},get value(){return _.value},set value(w){_.value=w,E.setValueAtTime(w,p.context.currentTime)},cancelAndHoldAtTime(w){if(typeof _.cancelAndHoldAtTime=="function")x===null&&S.flush(p.context.currentTime),S.add(s(w)),_.cancelAndHoldAtTime(w);else{const A=Array.from(S).pop();x===null&&S.flush(p.context.currentTime),S.add(s(w));const C=Array.from(S).pop();_.cancelScheduledValues(w),A!==C&&C!==void 0&&(C.type==="exponentialRampToValue"?_.exponentialRampToValueAtTime(C.value,C.endTime):C.type==="linearRampToValue"?_.linearRampToValueAtTime(C.value,C.endTime):C.type==="setValue"?_.setValueAtTime(C.value,C.startTime):C.type==="setValueCurve"&&_.setValueCurveAtTime(C.values,C.startTime,C.duration))}return E},cancelScheduledValues(w){return x===null&&S.flush(p.context.currentTime),S.add(r(w)),_.cancelScheduledValues(w),E},exponentialRampToValueAtTime(w,A){if(w===0)throw new RangeError;if(!Number.isFinite(A)||A<0)throw new RangeError;const C=p.context.currentTime;return x===null&&S.flush(C),Array.from(S).length===0&&(S.add(l(y,C)),_.setValueAtTime(y,C)),S.add(o(w,A)),_.exponentialRampToValueAtTime(w,A),E},linearRampToValueAtTime(w,A){const C=p.context.currentTime;return x===null&&S.flush(C),Array.from(S).length===0&&(S.add(l(y,C)),_.setValueAtTime(y,C)),S.add(a(w,A)),_.linearRampToValueAtTime(w,A),E},setTargetAtTime(w,A,C){return x===null&&S.flush(p.context.currentTime),S.add(c(w,A,C)),_.setTargetAtTime(w,A,C),E},setValueAtTime(w,A){return x===null&&S.flush(p.context.currentTime),S.add(l(w,A)),_.setValueAtTime(w,A),E},setValueCurveAtTime(w,A,C){const M=w instanceof Float32Array?w:new Float32Array(w);if(h!==null&&h.name==="webkitAudioContext"){const v=A+C,R=p.context.sampleRate,P=Math.ceil(A*R),I=Math.floor(v*R),L=I-P,H=new Float32Array(L);for(let W=0;W<L;W+=1){const V=(M.length-1)/C*((P+W)/R-A),Y=Math.floor(V),J=Math.ceil(V);H[W]=Y===J?M[Y]:(1-(V-Y))*M[Y]+(1-(J-V))*M[J]}x===null&&S.flush(p.context.currentTime),S.add(u(H,A,C)),_.setValueCurveAtTime(H,A,C);const U=I/R;U<v&&d(E,H[H.length-1],U),d(E,M[M.length-1],v)}else x===null&&S.flush(p.context.currentTime),S.add(u(M,A,C)),_.setValueCurveAtTime(M,A,C);return E}};return e.set(E,_),t.set(E,p),i(E,x),E},eM=i=>({replay(t){for(const e of i)if(e.type==="exponentialRampToValue"){const{endTime:n,value:s}=e;t.exponentialRampToValueAtTime(s,n)}else if(e.type==="linearRampToValue"){const{endTime:n,value:s}=e;t.linearRampToValueAtTime(s,n)}else if(e.type==="setTarget"){const{startTime:n,target:s,timeConstant:r}=e;t.setTargetAtTime(s,n,r)}else if(e.type==="setValue"){const{startTime:n,value:s}=e;t.setValueAtTime(s,n)}else if(e.type==="setValueCurve"){const{duration:n,startTime:s,values:r}=e;t.setValueCurveAtTime(r,s,n)}else throw new Error("Can't apply an unknown automation.")}});class ap{constructor(t){this._map=new Map(t)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(t,e=null){return this._map.forEach((n,s)=>t.call(e,n,s,this))}get(t){return this._map.get(t)}has(t){return this._map.has(t)}keys(){return this._map.keys()}values(){return this._map.values()}}const nM={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},iM=(i,t,e,n,s,r,o,a,c,l,u,h,d,p)=>class extends t{constructor(_,m,f){var y;const S=a(_),x=c(S),E=u({...nM,...f});d(E);const w=Zl.get(S),A=w==null?void 0:w.get(m),C=x||S.state!=="closed"?S:(y=o(S))!==null&&y!==void 0?y:S,M=s(C,x?null:_.baseLatency,l,m,A,E),v=x?n(m,E,A):null;super(_,!0,M,v);const R=[];M.parameters.forEach((I,L)=>{const H=e(this,x,I);R.push([L,H])}),this._nativeAudioWorkletNode=M,this._onprocessorerror=null,this._parameters=new ap(R),x&&i(S,this);const{activeInputs:P}=r(this);h(M,P)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(_){const m=typeof _=="function"?p(this,_):null;this._nativeAudioWorkletNode.onprocessorerror=m;const f=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=f!==null&&f===m?_:f}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function ya(i,t,e,n,s){if(typeof i.copyFromChannel=="function")t[e].byteLength===0&&(t[e]=new Float32Array(128)),i.copyFromChannel(t[e],n,s);else{const r=i.getChannelData(n);if(t[e].byteLength===0)t[e]=r.slice(s,s+128);else{const o=new Float32Array(r.buffer,s*Float32Array.BYTES_PER_ELEMENT,128);t[e].set(o)}}}const cp=(i,t,e,n,s)=>{typeof i.copyToChannel=="function"?t[e].byteLength!==0&&i.copyToChannel(t[e],n,s):t[e].byteLength!==0&&i.getChannelData(n).set(t[e],s)},Sa=(i,t)=>{const e=[];for(let n=0;n<i;n+=1){const s=[],r=typeof t=="number"?t:t[n];for(let o=0;o<r;o+=1)s.push(new Float32Array(128));e.push(s)}return e},sM=(i,t)=>{const e=Hn(Kl,i),n=ve(t);return Hn(e,n)},rM=async(i,t,e,n,s,r,o)=>{const a=t===null?Math.ceil(i.context.length/128)*128:t.length,c=n.channelCount*n.numberOfInputs,l=s.reduce((m,f)=>m+f,0),u=l===0?null:e.createBuffer(l,a,e.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const h=Qe(i),d=await sM(e,i),p=Sa(n.numberOfInputs,n.channelCount),g=Sa(n.numberOfOutputs,s),_=Array.from(i.parameters.keys()).reduce((m,f)=>({...m,[f]:new Float32Array(128)}),{});for(let m=0;m<a;m+=128){if(n.numberOfInputs>0&&t!==null)for(let f=0;f<n.numberOfInputs;f+=1)for(let y=0;y<n.channelCount;y+=1)ya(t,p[f],y,y,m);r.parameterDescriptors!==void 0&&t!==null&&r.parameterDescriptors.forEach(({name:f},y)=>{ya(t,_,f,c+y,m)});for(let f=0;f<n.numberOfInputs;f+=1)for(let y=0;y<s[f];y+=1)g[f][y].byteLength===0&&(g[f][y]=new Float32Array(128));try{const f=p.map((S,x)=>h.activeInputs[x].size===0?[]:S),y=o(m/e.sampleRate,e.sampleRate,()=>d.process(f,g,_));if(u!==null)for(let S=0,x=0;S<n.numberOfOutputs;S+=1){for(let E=0;E<s[S];E+=1)cp(u,g[S],E,x+E,m);x+=s[S]}if(!y)break}catch(f){i.dispatchEvent(new ErrorEvent("processorerror",{colno:f.colno,filename:f.filename,lineno:f.lineno,message:f.message}));break}}return u},oM=(i,t,e,n,s,r,o,a,c,l,u,h,d,p,g,_)=>(m,f,y)=>{const S=new WeakMap;let x=null;const E=async(w,A)=>{let C=u(w),M=null;const v=$e(C,A),R=Array.isArray(f.outputChannelCount)?f.outputChannelCount:Array.from(f.outputChannelCount);if(h===null){const P=R.reduce((U,W)=>U+W,0),I=s(A,{channelCount:Math.max(1,P),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,P)}),L=[];for(let U=0;U<w.numberOfOutputs;U+=1)L.push(n(A,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:R[U]}));const H=o(A,{channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation,gain:1});H.connect=t.bind(null,L),H.disconnect=c.bind(null,L),M=[I,L,H]}else v||(C=new h(A,m));if(S.set(A,M===null?C:M[2]),M!==null){if(x===null){if(y===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const W=w.channelCount*w.numberOfInputs,V=y.parameterDescriptors===void 0?0:y.parameterDescriptors.length,Y=W+V;x=rM(w,Y===0?null:await(async()=>{const nt=new d(Y,Math.ceil(w.context.length/128)*128,A.sampleRate),xt=[],Vt=[];for(let at=0;at<f.numberOfInputs;at+=1)xt.push(o(nt,{channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation,gain:1})),Vt.push(s(nt,{channelCount:f.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:f.channelCount}));const j=await Promise.all(Array.from(w.parameters.values()).map(async at=>{const st=r(nt,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:at.value});return await p(nt,at,st.offset),st})),$=n(nt,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,W+V)});for(let at=0;at<f.numberOfInputs;at+=1){xt[at].connect(Vt[at]);for(let st=0;st<f.channelCount;st+=1)Vt[at].connect($,st,at*f.channelCount+st)}for(const[at,st]of j.entries())st.connect($,0,W+at),st.start(0);return $.connect(nt.destination),await Promise.all(xt.map(at=>g(w,nt,at))),_(nt)})(),A,f,R,y,l)}const P=await x,I=e(A,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[L,H,U]=M;P!==null&&(I.buffer=P,I.start(0)),I.connect(L);for(let W=0,V=0;W<w.numberOfOutputs;W+=1){const Y=H[W];for(let J=0;J<R[W];J+=1)L.connect(Y,V+J,J);V+=R[W]}return U}if(v)for(const[P,I]of w.parameters.entries())await i(A,I,C.parameters.get(P));else for(const[P,I]of w.parameters.entries())await p(A,I,C.parameters.get(P));return await g(w,A,C),C};return{render(w,A){a(A,w);const C=S.get(A);return C!==void 0?Promise.resolve(C):E(w,A)}}},aM=(i,t,e,n,s,r,o,a,c,l,u,h,d,p,g,_,m,f,y,S)=>class extends g{constructor(E,w){super(E,w),this._nativeContext=E,this._audioWorklet=i===void 0?void 0:{addModule:(A,C)=>i(this,A,C)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new t(this)}createBiquadFilter(){return new s(this)}createBuffer(E,w,A){return new e({length:w,numberOfChannels:E,sampleRate:A})}createBufferSource(){return new n(this)}createChannelMerger(E=6){return new r(this,{numberOfInputs:E})}createChannelSplitter(E=6){return new o(this,{numberOfOutputs:E})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(E=1){return new u(this,{maxDelayTime:E})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(E,w){return new p(this,{feedback:w,feedforward:E})}createOscillator(){return new _(this)}createPanner(){return new m(this)}createPeriodicWave(E,w,A={disableNormalization:!1}){return new f(this,{...A,imag:w,real:E})}createStereoPanner(){return new y(this)}createWaveShaper(){return new S(this)}decodeAudioData(E,w,A){return l(this._nativeContext,E).then(C=>(typeof w=="function"&&w(C),C),C=>{throw typeof A=="function"&&A(C),C})}},cM={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},lM=(i,t,e,n,s,r,o,a)=>class extends i{constructor(l,u){const h=r(l),d={...cM,...u},p=s(h,d),g=o(h),_=g?e():null;super(l,!1,p,_),this._Q=t(this,g,p.Q,Ke,on),this._detune=t(this,g,p.detune,1200*Math.log2(Ke),-1200*Math.log2(Ke)),this._frequency=t(this,g,p.frequency,l.sampleRate/2,0),this._gain=t(this,g,p.gain,40*Math.log10(Ke),on),this._nativeBiquadFilterNode=p,a(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?n():d}if(l.length!==u.length||u.length!==h.length)throw n()}},uM=(i,t,e,n,s)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=e(a);const u=$e(l,c);if(!u){const h={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=t(c,h)}return r.set(c,l),u?(await i(c,a.Q,l.Q),await i(c,a.detune,l.detune),await i(c,a.frequency,l.frequency),await i(c,a.gain,l.gain)):(await n(c,a.Q,l.Q),await n(c,a.detune,l.detune),await n(c,a.frequency,l.frequency),await n(c,a.gain,l.gain)),await s(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},hM=(i,t)=>(e,n)=>{const s=t.get(e);if(s!==void 0)return s;const r=i.get(e);if(r!==void 0)return r;try{const o=n();return o instanceof Promise?(i.set(e,o),o.catch(()=>!1).then(a=>(i.delete(e),t.set(e,a),a))):(t.set(e,o),o)}catch{return t.set(e,!1),!1}},dM={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},fM=(i,t,e,n,s)=>class extends i{constructor(o,a){const c=n(o),l={...dM,...a},u=e(c,l),h=s(c)?t():null;super(o,!1,u,h)}},pM=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!$e(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfInputs:a.numberOfInputs};a=i(o,l)}return n.set(o,a),await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},mM={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},gM=(i,t,e,n,s,r)=>class extends i{constructor(a,c){const l=n(a),u=r({...mM,...c}),h=e(l,u),d=s(l)?t():null;super(a,!1,h,d)}},_M=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!$e(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfOutputs:a.numberOfOutputs};a=i(o,l)}return n.set(o,a),await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},vM=i=>(t,e,n)=>i(e,t,n),xM=i=>(t,e,n=0,s=0)=>{const r=t[n];if(r===void 0)throw i();return xa(e)?r.connect(e,0,s):r.connect(e,0)},yM=i=>(t,e)=>{const n=i(t,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),s=t.createBuffer(1,2,44100);return n.buffer=s,n.loop=!0,n.connect(e),n.start(),()=>{n.stop(),n.disconnect(e)}},SM={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},MM=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){const u=s(c),h={...SM,...l},d=n(u,h),p=r(u),g=p?e():null;super(c,!1,d,g),this._constantSourceNodeRenderer=g,this._nativeConstantSourceNode=d,this._offset=t(this,p,d.offset,Ke,on),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){dr(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),wi(this)&&ao(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},TM=(i,t,e,n,s)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=e(l);const d=$e(h,u);if(!d){const p={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,offset:h.offset.value};h=t(u,p),o!==null&&h.start(o),a!==null&&h.stop(a)}return r.set(u,h),d?await i(u,l.offset,h.offset):await n(u,l.offset,h.offset),await s(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},wM=i=>t=>(i[0]=t,i[0]),bM={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},EM=(i,t,e,n,s,r)=>class extends i{constructor(a,c){const l=n(a),u={...bM,...c},h=e(l,u),p=s(l)?t():null;super(a,!1,h,p),this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&r(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(a){if(this._nativeConvolverNode.buffer=a,a===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(a){this._nativeConvolverNode.normalize=a}},AM=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!$e(a,o)){const l={buffer:a.buffer,channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,disableNormalization:!a.normalize};a=i(o,l)}return n.set(o,a),Sr(a)?await e(r,o,a.inputs[0]):await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},CM=(i,t)=>(e,n,s)=>{if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new t(e,n,s)}catch(r){throw r.name==="SyntaxError"?i():r}},RM=()=>new DOMException("","DataCloneError"),Wd=i=>{const{port1:t,port2:e}=new MessageChannel;return new Promise(n=>{const s=()=>{e.onmessage=null,t.close(),e.close(),n()};e.onmessage=()=>s();try{t.postMessage(i,[i])}catch{}finally{s()}})},DM=(i,t,e,n,s,r,o,a,c,l,u)=>(h,d)=>{const p=o(h)?h:r(h);if(s.has(d)){const g=e();return Promise.reject(g)}try{s.add(d)}catch{}return t(c,()=>c(p))?p.decodeAudioData(d).then(g=>(Wd(d).catch(()=>{}),t(a,()=>a(g))||u(g),i.add(g),g)):new Promise((g,_)=>{const m=async()=>{try{await Wd(d)}catch{}},f=y=>{_(y),m()};try{p.decodeAudioData(d,y=>{typeof y.copyFromChannel!="function"&&(l(y),Su(y)),i.add(y),m().then(()=>g(y))},y=>{f(y===null?n():y)})}catch(y){f(y)}})},PM=(i,t,e,n,s,r,o,a)=>(c,l)=>{const u=t.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const h=r(c.context),d=a(h);if(u===l){if(t.delete(c),!d&&o(c)){const p=n(c),{outputs:g}=e(c);for(const _ of g)if(lo(_)){const m=n(_[0]);i(p,m,_[1],_[2])}else{const m=s(_[0]);p.connect(m,_[1])}}}else t.set(c,u-l)},IM={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},NM=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){const u=s(c),h={...IM,...l},d=n(u,h),p=r(u),g=p?e(h.maxDelayTime):null;super(c,!1,d,g),this._delayTime=t(this,p,d.delayTime),o(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},LM=(i,t,e,n,s)=>r=>{const o=new WeakMap,a=async(c,l)=>{let u=e(c);const h=$e(u,l);if(!h){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:r};u=t(l,d)}return o.set(l,u),h?await i(l,c.delayTime,u.delayTime):await n(l,c.delayTime,u.delayTime),await s(c,l,u),u};return{render(c,l){const u=o.get(l);return u!==void 0?Promise.resolve(u):a(c,l)}}},OM=i=>(t,e,n,s)=>i(t[s],r=>r[0]===e&&r[1]===n),UM=i=>(t,e)=>{i(t).delete(e)},FM=i=>"delayTime"in i,kM=(i,t,e)=>function n(s,r){const o=ga(r)?r:e(i,r);if(FM(o))return[];if(s[0]===o)return[s];if(s.includes(o))return[];const{outputs:a}=t(o);return Array.from(a).map(c=>n([...s,o],c[0])).reduce((c,l)=>c.concat(l),[])},Ko=(i,t,e)=>{const n=t[e];if(n===void 0)throw i();return n},VM=i=>(t,e=void 0,n=void 0,s=0)=>e===void 0?t.forEach(r=>r.disconnect()):typeof e=="number"?Ko(i,t,e).disconnect():xa(e)?n===void 0?t.forEach(r=>r.disconnect(e)):s===void 0?Ko(i,t,n).disconnect(e,0):Ko(i,t,n).disconnect(e,0,s):n===void 0?t.forEach(r=>r.disconnect(e)):Ko(i,t,n).disconnect(e,0),BM={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},zM=(i,t,e,n,s,r,o,a)=>class extends i{constructor(l,u){const h=r(l),d={...BM,...u},p=n(h,d),g=o(h),_=g?e():null;super(l,!1,p,_),this._attack=t(this,g,p.attack),this._knee=t(this,g,p.knee),this._nativeDynamicsCompressorNode=p,this._ratio=t(this,g,p.ratio),this._release=t(this,g,p.release),this._threshold=t(this,g,p.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,s()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,s()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},HM=(i,t,e,n,s)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=e(a);const u=$e(l,c);if(!u){const h={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=t(c,h)}return r.set(c,l),u?(await i(c,a.attack,l.attack),await i(c,a.knee,l.knee),await i(c,a.ratio,l.ratio),await i(c,a.release,l.release),await i(c,a.threshold,l.threshold)):(await n(c,a.attack,l.attack),await n(c,a.knee,l.knee),await n(c,a.ratio,l.ratio),await n(c,a.release,l.release),await n(c,a.threshold,l.threshold)),await s(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},GM=()=>new DOMException("","EncodingError"),WM=i=>t=>new Promise((e,n)=>{if(i===null){n(new SyntaxError);return}const s=i.document.head;if(s===null)n(new SyntaxError);else{const r=i.document.createElement("script"),o=new Blob([t],{type:"application/javascript"}),a=URL.createObjectURL(o),c=i.onerror,l=()=>{i.onerror=c,URL.revokeObjectURL(a)};i.onerror=(u,h,d,p,g)=>{if(h===a||h===i.location.href&&d===1&&p===1)return l(),n(g),!1;if(c!==null)return c(u,h,d,p,g)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),e()},r.src=a,r.type="module",s.appendChild(r)}}),qM=i=>class{constructor(e){this._nativeEventTarget=e,this._listeners=new WeakMap}addEventListener(e,n,s){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=i(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(e,r,s)}}dispatchEvent(e){return this._nativeEventTarget.dispatchEvent(e)}removeEventListener(e,n,s){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(e,r===void 0?null:r,s)}},XM=i=>(t,e,n)=>{Object.defineProperties(i,{currentFrame:{configurable:!0,get(){return Math.round(t*e)}},currentTime:{configurable:!0,get(){return t}}});try{return n()}finally{i!==null&&(delete i.currentFrame,delete i.currentTime)}},jM=i=>async t=>{try{const e=await fetch(t);if(e.ok)return[await e.text(),e.url]}catch{}throw i()},YM={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},$M=(i,t,e,n,s,r)=>class extends i{constructor(a,c){const l=s(a),u={...YM,...c},h=n(l,u),d=r(l),p=d?e():null;super(a,!1,h,p),this._gain=t(this,d,h.gain,Ke,on)}get gain(){return this._gain}},ZM=(i,t,e,n,s)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=e(a);const u=$e(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=t(c,h)}return r.set(c,l),u?await i(c,a.gain,l.gain):await n(c,a.gain,l.gain),await s(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},KM=(i,t)=>e=>t(i,e),JM=i=>t=>{const e=i(t);if(e.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return e.renderer},QM=i=>t=>{var e;return(e=i.get(t))!==null&&e!==void 0?e:0},tT=i=>t=>{const e=i(t);if(e.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return e.renderer},eT=i=>t=>i.get(t),ke=()=>new DOMException("","InvalidStateError"),nT=i=>t=>{const e=i.get(t);if(e===void 0)throw ke();return e},iT=(i,t)=>e=>{let n=i.get(e);if(n!==void 0)return n;if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new t(1,1,44100),i.set(e,n),n},sT=i=>t=>{const e=i.get(t);if(e===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return e},ka=()=>new DOMException("","InvalidAccessError"),rT=i=>{i.getFrequencyResponse=(t=>(e,n,s)=>{if(e.length!==n.length||n.length!==s.length)throw ka();return t.call(i,e,n,s)})(i.getFrequencyResponse)},oT={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},aT=(i,t,e,n,s,r)=>class extends i{constructor(a,c){const l=n(a),u=s(l),h={...oT,...c},d=t(l,u?null:a.baseLatency,h),p=u?e(h.feedback,h.feedforward):null;super(a,!1,d,p),rT(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(a,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(a,c,l)}},lp=(i,t,e,n,s,r,o,a,c,l,u)=>{const h=l.length;let d=a;for(let p=0;p<h;p+=1){let g=e[0]*l[p];for(let _=1;_<s;_+=1){const m=d-_&c-1;g+=e[_]*r[m],g-=i[_]*o[m]}for(let _=s;_<n;_+=1)g+=e[_]*r[d-_&c-1];for(let _=s;_<t;_+=1)g-=i[_]*o[d-_&c-1];r[d]=l[p],o[d]=g,d=d+1&c-1,u[p]=g}return d},cT=(i,t,e,n)=>{const s=e instanceof Float64Array?e:new Float64Array(e),r=n instanceof Float64Array?n:new Float64Array(n),o=s.length,a=r.length,c=Math.min(o,a);if(s[0]!==1){for(let g=0;g<o;g+=1)r[g]/=s[0];for(let g=1;g<a;g+=1)s[g]/=s[0]}const l=32,u=new Float32Array(l),h=new Float32Array(l),d=t.createBuffer(i.numberOfChannels,i.length,i.sampleRate),p=i.numberOfChannels;for(let g=0;g<p;g+=1){const _=i.getChannelData(g),m=d.getChannelData(g);u.fill(0),h.fill(0),lp(s,o,r,a,c,u,h,0,l,_,m)}return d},lT=(i,t,e,n,s)=>(r,o)=>{const a=new WeakMap;let c=null;const l=async(u,h)=>{let d=null,p=t(u);const g=$e(p,h);if(h.createIIRFilter===void 0?d=i(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):g||(p=h.createIIRFilter(o,r)),a.set(h,d===null?p:d),d!==null){if(c===null){if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");const m=new e(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await n(u,m,m.destination);const f=await s(m);return cT(f,h,r,o)})()}const _=await c;return d.buffer=_,d.start(0),d}return await n(u,h,p),p};return{render(u,h){const d=a.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},uT=(i,t,e,n,s,r)=>o=>(a,c)=>{const l=i.get(a);if(l===void 0){if(!o&&r(a)){const u=n(a),{outputs:h}=e(a);for(const d of h)if(lo(d)){const p=n(d[0]);t(u,p,d[1],d[2])}else{const p=s(d[0]);u.disconnect(p,d[1])}}i.set(a,c)}else i.set(a,l+c)},hT=(i,t)=>e=>{const n=i.get(e);return t(n)||t(e)},dT=(i,t)=>e=>i.has(e)||t(e),fT=(i,t)=>e=>i.has(e)||t(e),pT=(i,t)=>e=>{const n=i.get(e);return t(n)||t(e)},mT=i=>t=>i!==null&&t instanceof i,gT=i=>t=>i!==null&&typeof i.AudioNode=="function"&&t instanceof i.AudioNode,_T=i=>t=>i!==null&&typeof i.AudioParam=="function"&&t instanceof i.AudioParam,vT=(i,t)=>e=>i(e)||t(e),xT=i=>t=>i!==null&&t instanceof i,yT=i=>i!==null&&i.isSecureContext,ST=(i,t,e,n)=>class extends i{constructor(r,o){const a=e(r),c=t(a,o);if(n(a))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},MT={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},TT=(i,t,e,n)=>class extends i{constructor(r,o){const a=e(r);if(n(a))throw new TypeError;const c={...MT,...o},l=t(a,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},wT=(i,t,e,n)=>class extends i{constructor(r,o){const a=e(r),c=t(a,o);if(n(a))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},bT=(i,t,e)=>class extends i{constructor(s,r){const o=e(s),a=t(o,r);super(s,!0,a,null)}},ET=(i,t,e,n,s,r)=>class extends e{constructor(a,c){super(a),this._nativeContext=a,Ua.set(this,a),n(a)&&s.set(a,new Set),this._destination=new i(this,c),this._listener=t(this,a),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(a){const c=typeof a=="function"?r(this,a):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?a:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Zr=i=>{const t=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const e=i.decodeAudioData(t.buffer,()=>{});return e===void 0?!1:(e.catch(()=>{}),!0)}catch{}return!1},AT=(i,t)=>(e,n,s)=>{const r=new Set;return e.connect=(o=>(a,c=0,l=0)=>{const u=r.size===0;if(t(a))return o.call(e,a,c,l),i(r,[a,c,l],h=>h[0]===a&&h[1]===c&&h[2]===l,!0),u&&n(),a;o.call(e,a,c),i(r,[a,c],h=>h[0]===a&&h[1]===c,!0),u&&n()})(e.connect),e.disconnect=(o=>(a,c,l)=>{const u=r.size>0;if(a===void 0)o.apply(e),r.clear();else if(typeof a=="number"){o.call(e,a);for(const d of r)d[1]===a&&r.delete(d)}else{t(a)?o.call(e,a,c,l):o.call(e,a,c);for(const d of r)d[0]===a&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const h=r.size===0;u&&h&&s()})(e.disconnect),e},ye=(i,t,e)=>{const n=t[e];n!==void 0&&n!==i[e]&&(i[e]=n)},Oe=(i,t)=>{ye(i,t,"channelCount"),ye(i,t,"channelCountMode"),ye(i,t,"channelInterpretation")},qd=i=>typeof i.getFloatTimeDomainData=="function",CT=i=>{i.getFloatTimeDomainData=t=>{const e=new Uint8Array(t.length);i.getByteTimeDomainData(e);const n=Math.max(e.length,i.fftSize);for(let s=0;s<n;s+=1)t[s]=(e[s]-128)*.0078125;return t}},RT=(i,t)=>(e,n)=>{const s=e.createAnalyser();if(Oe(s,n),!(n.maxDecibels>n.minDecibels))throw t();return ye(s,n,"fftSize"),ye(s,n,"maxDecibels"),ye(s,n,"minDecibels"),ye(s,n,"smoothingTimeConstant"),i(qd,()=>qd(s))||CT(s),s},DT=i=>i===null?null:i.hasOwnProperty("AudioBuffer")?i.AudioBuffer:null,be=(i,t,e)=>{const n=t[e];n!==void 0&&n!==i[e].value&&(i[e].value=n)},PT=i=>{i.start=(t=>{let e=!1;return(n=0,s=0,r)=>{if(e)throw ke();t.call(i,n,s,r),e=!0}})(i.start)},wu=i=>{i.start=(t=>(e=0,n=0,s)=>{if(typeof s=="number"&&s<0||n<0||e<0)throw new RangeError("The parameters can't be negative.");t.call(i,e,n,s)})(i.start)},bu=i=>{i.stop=(t=>(e=0)=>{if(e<0)throw new RangeError("The parameter can't be negative.");t.call(i,e)})(i.stop)},IT=(i,t,e,n,s,r,o,a,c,l,u)=>(h,d)=>{const p=h.createBufferSource();return Oe(p,d),be(p,d,"playbackRate"),ye(p,d,"buffer"),ye(p,d,"loop"),ye(p,d,"loopEnd"),ye(p,d,"loopStart"),t(e,()=>e(h))||PT(p),t(n,()=>n(h))||c(p),t(s,()=>s(h))||l(p,h),t(r,()=>r(h))||wu(p),t(o,()=>o(h))||u(p,h),t(a,()=>a(h))||bu(p),i(h,p),p},NT=i=>i===null?null:i.hasOwnProperty("AudioContext")?i.AudioContext:i.hasOwnProperty("webkitAudioContext")?i.webkitAudioContext:null,LT=(i,t)=>(e,n,s)=>{const r=e.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}s&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const o=i(e,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return t(o,"channelCount",a=>()=>a.call(o),a=>c=>{a.call(o,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),t(o,"channelCountMode",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelCountMode=c}),t(o,"channelInterpretation",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelInterpretation=c}),Object.defineProperty(o,"maxChannelCount",{get:()=>r.maxChannelCount}),o.connect(r),o},OT=i=>i===null?null:i.hasOwnProperty("AudioWorkletNode")?i.AudioWorkletNode:null,UT=i=>{const{port1:t}=new MessageChannel;try{t.postMessage(i)}finally{t.close()}},FT=(i,t,e,n,s)=>(r,o,a,c,l,u)=>{if(a!==null)try{const h=new a(r,c,u),d=new Map;let p=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw i()}},channelCountMode:{get:()=>"explicit",set:()=>{throw i()}},onprocessorerror:{get:()=>p,set:g=>{typeof p=="function"&&h.removeEventListener("processorerror",p),p=typeof g=="function"?g:null,typeof p=="function"&&h.addEventListener("processorerror",p)}}}),h.addEventListener=(g=>(..._)=>{if(_[0]==="processorerror"){const m=typeof _[1]=="function"?_[1]:typeof _[1]=="object"&&_[1]!==null&&typeof _[1].handleEvent=="function"?_[1].handleEvent:null;if(m!==null){const f=d.get(_[1]);f!==void 0?_[1]=f:(_[1]=y=>{y.type==="error"?(Object.defineProperties(y,{type:{value:"processorerror"}}),m(y)):m(new ErrorEvent(_[0],{...y}))},d.set(m,_[1]))}}return g.call(h,"error",_[1],_[2]),g.call(h,..._)})(h.addEventListener),h.removeEventListener=(g=>(..._)=>{if(_[0]==="processorerror"){const m=d.get(_[1]);m!==void 0&&(d.delete(_[1]),_[1]=m)}return g.call(h,"error",_[1],_[2]),g.call(h,_[0],_[1],_[2])})(h.removeEventListener),u.numberOfOutputs!==0){const g=e(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(g).connect(r.destination),s(h,()=>g.disconnect(),()=>g.connect(r.destination))}return h}catch(h){throw h.code===11?n():h}if(l===void 0)throw n();return UT(u),t(r,o,l,u)},up=(i,t)=>i===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(i*t))))),kT=i=>new Promise((t,e)=>{const{port1:n,port2:s}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),s.close(),t(r)},n.onmessageerror=({data:r})=>{n.close(),s.close(),e(r)},s.postMessage(i)}),VT=async(i,t)=>{const e=await kT(t);return new i(e)},BT=(i,t,e,n)=>{let s=Kl.get(i);s===void 0&&(s=new WeakMap,Kl.set(i,s));const r=VT(e,n);return s.set(t,r),r},zT=(i,t,e,n,s,r,o,a,c,l,u,h,d)=>(p,g,_,m)=>{if(m.numberOfInputs===0&&m.numberOfOutputs===0)throw c();const f=Array.isArray(m.outputChannelCount)?m.outputChannelCount:Array.from(m.outputChannelCount);if(f.some(lt=>lt<1))throw c();if(f.length!==m.numberOfOutputs)throw t();if(m.channelCountMode!=="explicit")throw c();const y=m.channelCount*m.numberOfInputs,S=f.reduce((lt,ct)=>lt+ct,0),x=_.parameterDescriptors===void 0?0:_.parameterDescriptors.length;if(y+x>6||S>6)throw c();const E=new MessageChannel,w=[],A=[];for(let lt=0;lt<m.numberOfInputs;lt+=1)w.push(o(p,{channelCount:m.channelCount,channelCountMode:m.channelCountMode,channelInterpretation:m.channelInterpretation,gain:1})),A.push(s(p,{channelCount:m.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:m.channelCount}));const C=[];if(_.parameterDescriptors!==void 0)for(const{defaultValue:lt,maxValue:ct,minValue:It,name:dt}of _.parameterDescriptors){const Ct=r(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:m.parameterData[dt]!==void 0?m.parameterData[dt]:lt===void 0?0:lt});Object.defineProperties(Ct.offset,{defaultValue:{get:()=>lt===void 0?0:lt},maxValue:{get:()=>ct===void 0?Ke:ct},minValue:{get:()=>It===void 0?on:It}}),C.push(Ct)}const M=n(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,y+x)}),v=up(g,p.sampleRate),R=a(p,v,y+x,Math.max(1,S)),P=s(p,{channelCount:Math.max(1,S),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,S)}),I=[];for(let lt=0;lt<m.numberOfOutputs;lt+=1)I.push(n(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:f[lt]}));for(let lt=0;lt<m.numberOfInputs;lt+=1){w[lt].connect(A[lt]);for(let ct=0;ct<m.channelCount;ct+=1)A[lt].connect(M,ct,lt*m.channelCount+ct)}const L=new ap(_.parameterDescriptors===void 0?[]:_.parameterDescriptors.map(({name:lt},ct)=>{const It=C[ct];return It.connect(M,0,y+ct),It.start(0),[lt,It.offset]}));M.connect(R);let H=m.channelInterpretation,U=null;const W=m.numberOfOutputs===0?[R]:I,V={get bufferSize(){return v},get channelCount(){return m.channelCount},set channelCount(lt){throw e()},get channelCountMode(){return m.channelCountMode},set channelCountMode(lt){throw e()},get channelInterpretation(){return H},set channelInterpretation(lt){for(const ct of w)ct.channelInterpretation=lt;H=lt},get context(){return R.context},get inputs(){return w},get numberOfInputs(){return m.numberOfInputs},get numberOfOutputs(){return m.numberOfOutputs},get onprocessorerror(){return U},set onprocessorerror(lt){typeof U=="function"&&V.removeEventListener("processorerror",U),U=typeof lt=="function"?lt:null,typeof U=="function"&&V.addEventListener("processorerror",U)},get parameters(){return L},get port(){return E.port2},addEventListener(...lt){return R.addEventListener(lt[0],lt[1],lt[2])},connect:i.bind(null,W),disconnect:l.bind(null,W),dispatchEvent(...lt){return R.dispatchEvent(lt[0])},removeEventListener(...lt){return R.removeEventListener(lt[0],lt[1],lt[2])}},Y=new Map;E.port1.addEventListener=(lt=>(...ct)=>{if(ct[0]==="message"){const It=typeof ct[1]=="function"?ct[1]:typeof ct[1]=="object"&&ct[1]!==null&&typeof ct[1].handleEvent=="function"?ct[1].handleEvent:null;if(It!==null){const dt=Y.get(ct[1]);dt!==void 0?ct[1]=dt:(ct[1]=Ct=>{u(p.currentTime,p.sampleRate,()=>It(Ct))},Y.set(It,ct[1]))}}return lt.call(E.port1,ct[0],ct[1],ct[2])})(E.port1.addEventListener),E.port1.removeEventListener=(lt=>(...ct)=>{if(ct[0]==="message"){const It=Y.get(ct[1]);It!==void 0&&(Y.delete(ct[1]),ct[1]=It)}return lt.call(E.port1,ct[0],ct[1],ct[2])})(E.port1.removeEventListener);let J=null;Object.defineProperty(E.port1,"onmessage",{get:()=>J,set:lt=>{typeof J=="function"&&E.port1.removeEventListener("message",J),J=typeof lt=="function"?lt:null,typeof J=="function"&&(E.port1.addEventListener("message",J),E.port1.start())}}),_.prototype.port=E.port1;let nt=null;BT(p,V,_,m).then(lt=>nt=lt);const Vt=Sa(m.numberOfInputs,m.channelCount),j=Sa(m.numberOfOutputs,f),$=_.parameterDescriptors===void 0?[]:_.parameterDescriptors.reduce((lt,{name:ct})=>({...lt,[ct]:new Float32Array(128)}),{});let at=!0;const st=()=>{m.numberOfOutputs>0&&R.disconnect(P);for(let lt=0,ct=0;lt<m.numberOfOutputs;lt+=1){const It=I[lt];for(let dt=0;dt<f[lt];dt+=1)P.disconnect(It,ct+dt,dt);ct+=f[lt]}},tt=new Map;R.onaudioprocess=({inputBuffer:lt,outputBuffer:ct})=>{if(nt!==null){const It=h(V);for(let dt=0;dt<v;dt+=128){for(let Ct=0;Ct<m.numberOfInputs;Ct+=1)for(let ft=0;ft<m.channelCount;ft+=1)ya(lt,Vt[Ct],ft,ft,dt);_.parameterDescriptors!==void 0&&_.parameterDescriptors.forEach(({name:Ct},ft)=>{ya(lt,$,Ct,y+ft,dt)});for(let Ct=0;Ct<m.numberOfInputs;Ct+=1)for(let ft=0;ft<f[Ct];ft+=1)j[Ct][ft].byteLength===0&&(j[Ct][ft]=new Float32Array(128));try{const Ct=Vt.map((D,T)=>{if(It[T].size>0)return tt.set(T,v/128),D;const K=tt.get(T);return K===void 0?[]:(D.every(et=>et.every(Z=>Z===0))&&(K===1?tt.delete(T):tt.set(T,K-1)),D)});at=u(p.currentTime+dt/p.sampleRate,p.sampleRate,()=>nt.process(Ct,j,$));for(let D=0,T=0;D<m.numberOfOutputs;D+=1){for(let z=0;z<f[D];z+=1)cp(ct,j[D],z,T+z,dt);T+=f[D]}}catch(Ct){at=!1,V.dispatchEvent(new ErrorEvent("processorerror",{colno:Ct.colno,filename:Ct.filename,lineno:Ct.lineno,message:Ct.message}))}if(!at){for(let Ct=0;Ct<m.numberOfInputs;Ct+=1){w[Ct].disconnect(A[Ct]);for(let ft=0;ft<m.channelCount;ft+=1)A[dt].disconnect(M,ft,Ct*m.channelCount+ft)}if(_.parameterDescriptors!==void 0){const Ct=_.parameterDescriptors.length;for(let ft=0;ft<Ct;ft+=1){const D=C[ft];D.disconnect(M,0,y+ft),D.stop()}}M.disconnect(R),R.onaudioprocess=null,Lt?st():Gt();break}}}};let Lt=!1;const Ut=o(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),re=()=>R.connect(Ut).connect(p.destination),Gt=()=>{R.disconnect(Ut),Ut.disconnect()},Te=()=>{if(at){Gt(),m.numberOfOutputs>0&&R.connect(P);for(let lt=0,ct=0;lt<m.numberOfOutputs;lt+=1){const It=I[lt];for(let dt=0;dt<f[lt];dt+=1)P.connect(It,ct+dt,dt);ct+=f[lt]}}Lt=!0},k=()=>{at&&(re(),st()),Lt=!1};return re(),d(V,Te,k)},hp=(i,t)=>{const e=i.createBiquadFilter();return Oe(e,t),be(e,t,"Q"),be(e,t,"detune"),be(e,t,"frequency"),be(e,t,"gain"),ye(e,t,"type"),e},HT=(i,t)=>(e,n)=>{const s=e.createChannelMerger(n.numberOfInputs);return i!==null&&i.name==="webkitAudioContext"&&t(e,s),Oe(s,n),s},GT=i=>{const t=i.numberOfOutputs;Object.defineProperty(i,"channelCount",{get:()=>t,set:e=>{if(e!==t)throw ke()}}),Object.defineProperty(i,"channelCountMode",{get:()=>"explicit",set:e=>{if(e!=="explicit")throw ke()}}),Object.defineProperty(i,"channelInterpretation",{get:()=>"discrete",set:e=>{if(e!=="discrete")throw ke()}})},uo=(i,t)=>{const e=i.createChannelSplitter(t.numberOfOutputs);return Oe(e,t),GT(e),e},WT=(i,t,e,n,s)=>(r,o)=>{if(r.createConstantSource===void 0)return e(r,o);const a=r.createConstantSource();return Oe(a,o),be(a,o,"offset"),t(n,()=>n(r))||wu(a),t(s,()=>s(r))||bu(a),i(r,a),a},Mr=(i,t)=>(i.connect=t.connect.bind(t),i.disconnect=t.disconnect.bind(t),i),qT=(i,t,e,n)=>(s,{offset:r,...o})=>{const a=s.createBuffer(1,2,44100),c=t(s,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=e(s,{...o,gain:r}),u=a.getChannelData(0);u[0]=1,u[1]=1,c.buffer=a,c.loop=!0;const h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(g){l.channelCount=g},get channelCountMode(){return l.channelCountMode},set channelCountMode(g){l.channelCountMode=g},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(g){l.channelInterpretation=g},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(g){c.onended=g},addEventListener(...g){return c.addEventListener(g[0],g[1],g[2])},dispatchEvent(...g){return c.dispatchEvent(g[0])},removeEventListener(...g){return c.removeEventListener(g[0],g[1],g[2])},start(g=0){c.start.call(c,g)},stop(g=0){c.stop.call(c,g)}},d=()=>c.connect(l),p=()=>c.disconnect(l);return i(s,c),n(Mr(h,l),d,p)},XT=(i,t)=>(e,n)=>{const s=e.createConvolver();if(Oe(s,n),n.disableNormalization===s.normalize&&(s.normalize=!n.disableNormalization),ye(s,n,"buffer"),n.channelCount>2||(t(s,"channelCount",r=>()=>r.call(s),r=>o=>{if(o>2)throw i();return r.call(s,o)}),n.channelCountMode==="max"))throw i();return t(s,"channelCountMode",r=>()=>r.call(s),r=>o=>{if(o==="max")throw i();return r.call(s,o)}),s},dp=(i,t)=>{const e=i.createDelay(t.maxDelayTime);return Oe(e,t),be(e,t,"delayTime"),e},jT=i=>(t,e)=>{const n=t.createDynamicsCompressor();if(Oe(n,e),e.channelCount>2||e.channelCountMode==="max")throw i();return be(n,e,"attack"),be(n,e,"knee"),be(n,e,"ratio"),be(n,e,"release"),be(n,e,"threshold"),n},ln=(i,t)=>{const e=i.createGain();return Oe(e,t),be(e,t,"gain"),e},YT=i=>(t,e,n)=>{if(t.createIIRFilter===void 0)return i(t,e,n);const s=t.createIIRFilter(n.feedforward,n.feedback);return Oe(s,n),s};function $T(i,t){const e=t[0]*t[0]+t[1]*t[1];return[(i[0]*t[0]+i[1]*t[1])/e,(i[1]*t[0]-i[0]*t[1])/e]}function ZT(i,t){return[i[0]*t[0]-i[1]*t[1],i[0]*t[1]+i[1]*t[0]]}function Xd(i,t){let e=[0,0];for(let n=i.length-1;n>=0;n-=1)e=ZT(e,t),e[0]+=i[n];return e}const KT=(i,t,e,n)=>(s,r,{channelCount:o,channelCountMode:a,channelInterpretation:c,feedback:l,feedforward:u})=>{const h=up(r,s.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),p=u instanceof Float64Array?u:new Float64Array(u),g=d.length,_=p.length,m=Math.min(g,_);if(g===0||g>20)throw n();if(d[0]===0)throw t();if(_===0||_>20)throw n();if(p[0]===0)throw t();if(d[0]!==1){for(let C=0;C<_;C+=1)p[C]/=d[0];for(let C=1;C<g;C+=1)d[C]/=d[0]}const f=e(s,h,o,o);f.channelCount=o,f.channelCountMode=a,f.channelInterpretation=c;const y=32,S=[],x=[],E=[];for(let C=0;C<o;C+=1){S.push(0);const M=new Float32Array(y),v=new Float32Array(y);M.fill(0),v.fill(0),x.push(M),E.push(v)}f.onaudioprocess=C=>{const M=C.inputBuffer,v=C.outputBuffer,R=M.numberOfChannels;for(let P=0;P<R;P+=1){const I=M.getChannelData(P),L=v.getChannelData(P);S[P]=lp(d,g,p,_,m,x[P],E[P],S[P],y,I,L)}};const w=s.sampleRate/2;return Mr({get bufferSize(){return h},get channelCount(){return f.channelCount},set channelCount(C){f.channelCount=C},get channelCountMode(){return f.channelCountMode},set channelCountMode(C){f.channelCountMode=C},get channelInterpretation(){return f.channelInterpretation},set channelInterpretation(C){f.channelInterpretation=C},get context(){return f.context},get inputs(){return[f]},get numberOfInputs(){return f.numberOfInputs},get numberOfOutputs(){return f.numberOfOutputs},addEventListener(...C){return f.addEventListener(C[0],C[1],C[2])},dispatchEvent(...C){return f.dispatchEvent(C[0])},getFrequencyResponse(C,M,v){if(C.length!==M.length||M.length!==v.length)throw i();const R=C.length;for(let P=0;P<R;P+=1){const I=-Math.PI*(C[P]/w),L=[Math.cos(I),Math.sin(I)],H=Xd(p,L),U=Xd(d,L),W=$T(H,U);M[P]=Math.sqrt(W[0]*W[0]+W[1]*W[1]),v[P]=Math.atan2(W[1],W[0])}},removeEventListener(...C){return f.removeEventListener(C[0],C[1],C[2])}},f)},JT=(i,t)=>i.createMediaElementSource(t.mediaElement),QT=(i,t)=>{const e=i.createMediaStreamDestination();return Oe(e,t),e.numberOfOutputs===1&&Object.defineProperty(e,"numberOfOutputs",{get:()=>0}),e},tw=(i,{mediaStream:t})=>{const e=t.getAudioTracks();e.sort((r,o)=>r.id<o.id?-1:r.id>o.id?1:0);const n=e.slice(0,1),s=i.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(s,"mediaStream",{value:t}),s},ew=(i,t)=>(e,{mediaStreamTrack:n})=>{if(typeof e.createMediaStreamTrackSource=="function")return e.createMediaStreamTrackSource(n);const s=new MediaStream([n]),r=e.createMediaStreamSource(s);if(n.kind!=="audio")throw i();if(t(e))throw new TypeError;return r},nw=i=>i===null?null:i.hasOwnProperty("OfflineAudioContext")?i.OfflineAudioContext:i.hasOwnProperty("webkitOfflineAudioContext")?i.webkitOfflineAudioContext:null,iw=(i,t,e,n,s,r)=>(o,a)=>{const c=o.createOscillator();return Oe(c,a),be(c,a,"detune"),be(c,a,"frequency"),a.periodicWave!==void 0?c.setPeriodicWave(a.periodicWave):ye(c,a,"type"),t(e,()=>e(o))||wu(c),t(n,()=>n(o))||r(c,o),t(s,()=>s(o))||bu(c),i(o,c),c},sw=i=>(t,e)=>{const n=t.createPanner();return n.orientationX===void 0?i(t,e):(Oe(n,e),be(n,e,"orientationX"),be(n,e,"orientationY"),be(n,e,"orientationZ"),be(n,e,"positionX"),be(n,e,"positionY"),be(n,e,"positionZ"),ye(n,e,"coneInnerAngle"),ye(n,e,"coneOuterAngle"),ye(n,e,"coneOuterGain"),ye(n,e,"distanceModel"),ye(n,e,"maxDistance"),ye(n,e,"panningModel"),ye(n,e,"refDistance"),ye(n,e,"rolloffFactor"),n)},rw=(i,t,e,n,s,r,o,a,c,l)=>(u,{coneInnerAngle:h,coneOuterAngle:d,coneOuterGain:p,distanceModel:g,maxDistance:_,orientationX:m,orientationY:f,orientationZ:y,panningModel:S,positionX:x,positionY:E,positionZ:w,refDistance:A,rolloffFactor:C,...M})=>{const v=u.createPanner();if(M.channelCount>2||M.channelCountMode==="max")throw o();Oe(v,M);const R={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},P=e(u,{...R,channelInterpretation:"speakers",numberOfInputs:6}),I=n(u,{...M,gain:1}),L=n(u,{...R,gain:1}),H=n(u,{...R,gain:0}),U=n(u,{...R,gain:0}),W=n(u,{...R,gain:0}),V=n(u,{...R,gain:0}),Y=n(u,{...R,gain:0}),J=s(u,256,6,1),nt=r(u,{...R,curve:new Float32Array([1,1]),oversample:"none"});let xt=[m,f,y],Vt=[x,E,w];const j=new Float32Array(1);J.onaudioprocess=({inputBuffer:tt})=>{const Lt=[c(tt,j,0),c(tt,j,1),c(tt,j,2)];Lt.some((re,Gt)=>re!==xt[Gt])&&(v.setOrientation(...Lt),xt=Lt);const Ut=[c(tt,j,3),c(tt,j,4),c(tt,j,5)];Ut.some((re,Gt)=>re!==Vt[Gt])&&(v.setPosition(...Ut),Vt=Ut)},Object.defineProperty(H.gain,"defaultValue",{get:()=>0}),Object.defineProperty(U.gain,"defaultValue",{get:()=>0}),Object.defineProperty(W.gain,"defaultValue",{get:()=>0}),Object.defineProperty(V.gain,"defaultValue",{get:()=>0}),Object.defineProperty(Y.gain,"defaultValue",{get:()=>0});const $={get bufferSize(){},get channelCount(){return v.channelCount},set channelCount(tt){if(tt>2)throw o();I.channelCount=tt,v.channelCount=tt},get channelCountMode(){return v.channelCountMode},set channelCountMode(tt){if(tt==="max")throw o();I.channelCountMode=tt,v.channelCountMode=tt},get channelInterpretation(){return v.channelInterpretation},set channelInterpretation(tt){I.channelInterpretation=tt,v.channelInterpretation=tt},get coneInnerAngle(){return v.coneInnerAngle},set coneInnerAngle(tt){v.coneInnerAngle=tt},get coneOuterAngle(){return v.coneOuterAngle},set coneOuterAngle(tt){v.coneOuterAngle=tt},get coneOuterGain(){return v.coneOuterGain},set coneOuterGain(tt){if(tt<0||tt>1)throw t();v.coneOuterGain=tt},get context(){return v.context},get distanceModel(){return v.distanceModel},set distanceModel(tt){v.distanceModel=tt},get inputs(){return[I]},get maxDistance(){return v.maxDistance},set maxDistance(tt){if(tt<0)throw new RangeError;v.maxDistance=tt},get numberOfInputs(){return v.numberOfInputs},get numberOfOutputs(){return v.numberOfOutputs},get orientationX(){return L.gain},get orientationY(){return H.gain},get orientationZ(){return U.gain},get panningModel(){return v.panningModel},set panningModel(tt){v.panningModel=tt},get positionX(){return W.gain},get positionY(){return V.gain},get positionZ(){return Y.gain},get refDistance(){return v.refDistance},set refDistance(tt){if(tt<0)throw new RangeError;v.refDistance=tt},get rolloffFactor(){return v.rolloffFactor},set rolloffFactor(tt){if(tt<0)throw new RangeError;v.rolloffFactor=tt},addEventListener(...tt){return I.addEventListener(tt[0],tt[1],tt[2])},dispatchEvent(...tt){return I.dispatchEvent(tt[0])},removeEventListener(...tt){return I.removeEventListener(tt[0],tt[1],tt[2])}};h!==$.coneInnerAngle&&($.coneInnerAngle=h),d!==$.coneOuterAngle&&($.coneOuterAngle=d),p!==$.coneOuterGain&&($.coneOuterGain=p),g!==$.distanceModel&&($.distanceModel=g),_!==$.maxDistance&&($.maxDistance=_),m!==$.orientationX.value&&($.orientationX.value=m),f!==$.orientationY.value&&($.orientationY.value=f),y!==$.orientationZ.value&&($.orientationZ.value=y),S!==$.panningModel&&($.panningModel=S),x!==$.positionX.value&&($.positionX.value=x),E!==$.positionY.value&&($.positionY.value=E),w!==$.positionZ.value&&($.positionZ.value=w),A!==$.refDistance&&($.refDistance=A),C!==$.rolloffFactor&&($.rolloffFactor=C),(xt[0]!==1||xt[1]!==0||xt[2]!==0)&&v.setOrientation(...xt),(Vt[0]!==0||Vt[1]!==0||Vt[2]!==0)&&v.setPosition(...Vt);const at=()=>{I.connect(v),i(I,nt,0,0),nt.connect(L).connect(P,0,0),nt.connect(H).connect(P,0,1),nt.connect(U).connect(P,0,2),nt.connect(W).connect(P,0,3),nt.connect(V).connect(P,0,4),nt.connect(Y).connect(P,0,5),P.connect(J).connect(u.destination)},st=()=>{I.disconnect(v),a(I,nt,0,0),nt.disconnect(L),L.disconnect(P),nt.disconnect(H),H.disconnect(P),nt.disconnect(U),U.disconnect(P),nt.disconnect(W),W.disconnect(P),nt.disconnect(V),V.disconnect(P),nt.disconnect(Y),Y.disconnect(P),P.disconnect(J),J.disconnect(u.destination)};return l(Mr($,v),at,st)},ow=i=>(t,{disableNormalization:e,imag:n,real:s})=>{const r=n instanceof Float32Array?n:new Float32Array(n),o=s instanceof Float32Array?s:new Float32Array(s),a=t.createPeriodicWave(o,r,{disableNormalization:e});if(Array.from(n).length<2)throw i();return a},ho=(i,t,e,n)=>i.createScriptProcessor(t,e,n),aw=(i,t)=>(e,n)=>{const s=n.channelCountMode;if(s==="clamped-max")throw t();if(e.createStereoPanner===void 0)return i(e,n);const r=e.createStereoPanner();return Oe(r,n),be(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>s,set:o=>{if(o!==s)throw t()}}),r},cw=(i,t,e,n,s,r)=>{const a=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(g,_,m,f)=>{const y=new Float32Array(16385),S=new Float32Array(16385);for(let M=0;M<16385;M+=1){const v=M/16384*c;y[M]=Math.cos(v),S[M]=Math.sin(v)}const x=e(g,{...l,gain:0}),E=n(g,{...u,curve:y}),w=n(g,{...u,curve:a}),A=e(g,{...l,gain:0}),C=n(g,{...u,curve:S});return{connectGraph(){_.connect(x),_.connect(w.inputs===void 0?w:w.inputs[0]),_.connect(A),w.connect(m),m.connect(E.inputs===void 0?E:E.inputs[0]),m.connect(C.inputs===void 0?C:C.inputs[0]),E.connect(x.gain),C.connect(A.gain),x.connect(f,0,0),A.connect(f,0,1)},disconnectGraph(){_.disconnect(x),_.disconnect(w.inputs===void 0?w:w.inputs[0]),_.disconnect(A),w.disconnect(m),m.disconnect(E.inputs===void 0?E:E.inputs[0]),m.disconnect(C.inputs===void 0?C:C.inputs[0]),E.disconnect(x.gain),C.disconnect(A.gain),x.disconnect(f,0,0),A.disconnect(f,0,1)}}},d=(g,_,m,f)=>{const y=new Float32Array(16385),S=new Float32Array(16385),x=new Float32Array(16385),E=new Float32Array(16385),w=Math.floor(16385/2);for(let W=0;W<16385;W+=1)if(W>w){const V=(W-w)/(16384-w)*c;y[W]=Math.cos(V),S[W]=Math.sin(V),x[W]=0,E[W]=1}else{const V=W/(16384-w)*c;y[W]=1,S[W]=0,x[W]=Math.cos(V),E[W]=Math.sin(V)}const A=t(g,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),C=e(g,{...l,gain:0}),M=n(g,{...u,curve:y}),v=e(g,{...l,gain:0}),R=n(g,{...u,curve:S}),P=n(g,{...u,curve:a}),I=e(g,{...l,gain:0}),L=n(g,{...u,curve:x}),H=e(g,{...l,gain:0}),U=n(g,{...u,curve:E});return{connectGraph(){_.connect(A),_.connect(P.inputs===void 0?P:P.inputs[0]),A.connect(C,0),A.connect(v,0),A.connect(I,1),A.connect(H,1),P.connect(m),m.connect(M.inputs===void 0?M:M.inputs[0]),m.connect(R.inputs===void 0?R:R.inputs[0]),m.connect(L.inputs===void 0?L:L.inputs[0]),m.connect(U.inputs===void 0?U:U.inputs[0]),M.connect(C.gain),R.connect(v.gain),L.connect(I.gain),U.connect(H.gain),C.connect(f,0,0),I.connect(f,0,0),v.connect(f,0,1),H.connect(f,0,1)},disconnectGraph(){_.disconnect(A),_.disconnect(P.inputs===void 0?P:P.inputs[0]),A.disconnect(C,0),A.disconnect(v,0),A.disconnect(I,1),A.disconnect(H,1),P.disconnect(m),m.disconnect(M.inputs===void 0?M:M.inputs[0]),m.disconnect(R.inputs===void 0?R:R.inputs[0]),m.disconnect(L.inputs===void 0?L:L.inputs[0]),m.disconnect(U.inputs===void 0?U:U.inputs[0]),M.disconnect(C.gain),R.disconnect(v.gain),L.disconnect(I.gain),U.disconnect(H.gain),C.disconnect(f,0,0),I.disconnect(f,0,0),v.disconnect(f,0,1),H.disconnect(f,0,1)}}},p=(g,_,m,f,y)=>{if(_===1)return h(g,m,f,y);if(_===2)return d(g,m,f,y);throw s()};return(g,{channelCount:_,channelCountMode:m,pan:f,...y})=>{if(m==="max")throw s();const S=i(g,{...y,channelCount:1,channelCountMode:m,numberOfInputs:2}),x=e(g,{...y,channelCount:_,channelCountMode:m,gain:1}),E=e(g,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:f});let{connectGraph:w,disconnectGraph:A}=p(g,_,x,E,S);Object.defineProperty(E.gain,"defaultValue",{get:()=>0}),Object.defineProperty(E.gain,"maxValue",{get:()=>1}),Object.defineProperty(E.gain,"minValue",{get:()=>-1});const C={get bufferSize(){},get channelCount(){return x.channelCount},set channelCount(P){x.channelCount!==P&&(M&&A(),{connectGraph:w,disconnectGraph:A}=p(g,P,x,E,S),M&&w()),x.channelCount=P},get channelCountMode(){return x.channelCountMode},set channelCountMode(P){if(P==="clamped-max"||P==="max")throw s();x.channelCountMode=P},get channelInterpretation(){return x.channelInterpretation},set channelInterpretation(P){x.channelInterpretation=P},get context(){return x.context},get inputs(){return[x]},get numberOfInputs(){return x.numberOfInputs},get numberOfOutputs(){return x.numberOfOutputs},get pan(){return E.gain},addEventListener(...P){return x.addEventListener(P[0],P[1],P[2])},dispatchEvent(...P){return x.dispatchEvent(P[0])},removeEventListener(...P){return x.removeEventListener(P[0],P[1],P[2])}};let M=!1;const v=()=>{w(),M=!0},R=()=>{A(),M=!1};return r(Mr(C,S),v,R)}},lw=(i,t,e,n,s,r,o)=>(a,c)=>{const l=a.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&a.createGain().gain.automationRate===void 0)return e(a,c);Oe(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw t();ye(l,{curve:u},"curve"),ye(l,c,"oversample");let h=null,d=!1;return o(l,"curve",_=>()=>_.call(l),_=>m=>(_.call(l,m),d&&(n(m)&&h===null?h=i(a,l):!n(m)&&h!==null&&(h(),h=null)),m)),s(l,()=>{d=!0,n(l.curve)&&(h=i(a,l))},()=>{d=!1,h!==null&&(h(),h=null)})},uw=(i,t,e,n,s)=>(r,{curve:o,oversample:a,...c})=>{const l=r.createWaveShaper(),u=r.createWaveShaper();Oe(l,c),Oe(u,c);const h=e(r,{...c,gain:1}),d=e(r,{...c,gain:-1}),p=e(r,{...c,gain:1}),g=e(r,{...c,gain:-1});let _=null,m=!1,f=null;const y={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(E){h.channelCount=E,d.channelCount=E,l.channelCount=E,p.channelCount=E,u.channelCount=E,g.channelCount=E},get channelCountMode(){return l.channelCountMode},set channelCountMode(E){h.channelCountMode=E,d.channelCountMode=E,l.channelCountMode=E,p.channelCountMode=E,u.channelCountMode=E,g.channelCountMode=E},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(E){h.channelInterpretation=E,d.channelInterpretation=E,l.channelInterpretation=E,p.channelInterpretation=E,u.channelInterpretation=E,g.channelInterpretation=E},get context(){return l.context},get curve(){return f},set curve(E){if(E!==null&&E.length<2)throw t();if(E===null)l.curve=E,u.curve=E;else{const w=E.length,A=new Float32Array(w+2-w%2),C=new Float32Array(w+2-w%2);A[0]=E[0],C[0]=-E[w-1];const M=Math.ceil((w+1)/2),v=(w+1)/2-1;for(let R=1;R<M;R+=1){const P=R/M*v,I=Math.floor(P),L=Math.ceil(P);A[R]=I===L?E[I]:(1-(P-I))*E[I]+(1-(L-P))*E[L],C[R]=I===L?-E[w-1-I]:-((1-(P-I))*E[w-1-I])-(1-(L-P))*E[w-1-L]}A[M]=w%2===1?E[M-1]:(E[M-2]+E[M-1])/2,l.curve=A,u.curve=C}f=E,m&&(n(f)&&_===null?_=i(r,h):_!==null&&(_(),_=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(E){l.oversample=E,u.oversample=E},addEventListener(...E){return h.addEventListener(E[0],E[1],E[2])},dispatchEvent(...E){return h.dispatchEvent(E[0])},removeEventListener(...E){return h.removeEventListener(E[0],E[1],E[2])}};o!==null&&(y.curve=o instanceof Float32Array?o:new Float32Array(o)),a!==y.oversample&&(y.oversample=a);const S=()=>{h.connect(l).connect(p),h.connect(d).connect(u).connect(g).connect(p),m=!0,n(f)&&(_=i(r,h))},x=()=>{h.disconnect(l),l.disconnect(p),h.disconnect(d),d.disconnect(u),u.disconnect(g),g.disconnect(p),m=!1,_!==null&&(_(),_=null)};return s(Mr(y,p),S,x)},tn=()=>new DOMException("","NotSupportedError"),hw={numberOfChannels:1},dw=(i,t,e,n,s)=>class extends i{constructor(o,a,c){let l;if(typeof o=="number"&&a!==void 0&&c!==void 0)l={length:a,numberOfChannels:o,sampleRate:c};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:h,sampleRate:d}={...hw,...l},p=n(h,u,d);t(Zr,()=>Zr(p))||p.addEventListener("statechange",(()=>{let g=0;const _=m=>{this._state==="running"&&(g>0?(p.removeEventListener("statechange",_),m.stopImmediatePropagation(),this._waitForThePromiseToSettle(m)):g+=1)};return _})()),super(p,h),this._length=u,this._nativeOfflineAudioContext=p,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(e()):(this._state="running",s(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,ip(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},fw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},pw=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){const u=s(c),h={...fw,...l},d=e(u,h),p=r(u),g=p?n():null,_=c.sampleRate/2;super(c,!1,d,g),this._detune=t(this,p,d.detune,153600,-153600),this._frequency=t(this,p,d.frequency,_,-_),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=g,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){dr(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),wi(this)&&ao(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},mw=(i,t,e,n,s)=>()=>{const r=new WeakMap;let o=null,a=null,c=null;const l=async(u,h)=>{let d=e(u);const p=$e(d,h);if(!p){const g={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type};d=t(h,g),a!==null&&d.start(a),c!==null&&d.stop(c)}return r.set(h,d),p?(await i(h,u.detune,d.detune),await i(h,u.frequency,d.frequency)):(await n(h,u.detune,d.detune),await n(h,u.frequency,d.frequency)),await s(u,h,d),d};return{set periodicWave(u){o=u},set start(u){a=u},set stop(u){c=u},render(u,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},gw={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},_w=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){const u=s(c),h={...gw,...l},d=e(u,h),p=r(u),g=p?n():null;super(c,!1,d,g),this._nativePannerNode=d,this._orientationX=t(this,p,d.orientationX,Ke,on),this._orientationY=t(this,p,d.orientationY,Ke,on),this._orientationZ=t(this,p,d.orientationZ,Ke,on),this._positionX=t(this,p,d.positionX,Ke,on),this._positionY=t(this,p,d.positionY,Ke,on),this._positionZ=t(this,p,d.positionZ,Ke,on),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},vw=(i,t,e,n,s,r,o,a,c,l)=>()=>{const u=new WeakMap;let h=null;const d=async(p,g)=>{let _=null,m=r(p);const f={channelCount:m.channelCount,channelCountMode:m.channelCountMode,channelInterpretation:m.channelInterpretation},y={...f,coneInnerAngle:m.coneInnerAngle,coneOuterAngle:m.coneOuterAngle,coneOuterGain:m.coneOuterGain,distanceModel:m.distanceModel,maxDistance:m.maxDistance,panningModel:m.panningModel,refDistance:m.refDistance,rolloffFactor:m.rolloffFactor},S=$e(m,g);if("bufferSize"in m)_=n(g,{...f,gain:1});else if(!S){const x={...y,orientationX:m.orientationX.value,orientationY:m.orientationY.value,orientationZ:m.orientationZ.value,positionX:m.positionX.value,positionY:m.positionY.value,positionZ:m.positionZ.value};m=s(g,x)}if(u.set(g,_===null?m:_),_!==null){if(h===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");const R=new o(6,p.context.length,g.sampleRate),P=t(R,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});P.connect(R.destination),h=(async()=>{const I=await Promise.all([p.orientationX,p.orientationY,p.orientationZ,p.positionX,p.positionY,p.positionZ].map(async(L,H)=>{const U=e(R,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:H===0?1:0});return await a(R,L,U.offset),U}));for(let L=0;L<6;L+=1)I[L].connect(P,0,L),I[L].start(0);return l(R)})()}const x=await h,E=n(g,{...f,gain:1});await c(p,g,E);const w=[];for(let R=0;R<x.numberOfChannels;R+=1)w.push(x.getChannelData(R));let A=[w[0][0],w[1][0],w[2][0]],C=[w[3][0],w[4][0],w[5][0]],M=n(g,{...f,gain:1}),v=s(g,{...y,orientationX:A[0],orientationY:A[1],orientationZ:A[2],positionX:C[0],positionY:C[1],positionZ:C[2]});E.connect(M).connect(v.inputs[0]),v.connect(_);for(let R=128;R<x.length;R+=128){const P=[w[0][R],w[1][R],w[2][R]],I=[w[3][R],w[4][R],w[5][R]];if(P.some((L,H)=>L!==A[H])||I.some((L,H)=>L!==C[H])){A=P,C=I;const L=R/g.sampleRate;M.gain.setValueAtTime(0,L),M=n(g,{...f,gain:0}),v=s(g,{...y,orientationX:A[0],orientationY:A[1],orientationZ:A[2],positionX:C[0],positionY:C[1],positionZ:C[2]}),M.gain.setValueAtTime(1,L),E.connect(M).connect(v.inputs[0]),v.connect(_)}}return _}return S?(await i(g,p.orientationX,m.orientationX),await i(g,p.orientationY,m.orientationY),await i(g,p.orientationZ,m.orientationZ),await i(g,p.positionX,m.positionX),await i(g,p.positionY,m.positionY),await i(g,p.positionZ,m.positionZ)):(await a(g,p.orientationX,m.orientationX),await a(g,p.orientationY,m.orientationY),await a(g,p.orientationZ,m.orientationZ),await a(g,p.positionX,m.positionX),await a(g,p.positionY,m.positionY),await a(g,p.positionZ,m.positionZ)),Sr(m)?await c(p,g,m.inputs[0]):await c(p,g,m),m};return{render(p,g){const _=u.get(g);return _!==void 0?Promise.resolve(_):d(p,g)}}},xw={disableNormalization:!1},yw=(i,t,e,n)=>class fp{constructor(r,o){const a=t(r),c=n({...xw,...o}),l=i(a,c);return e.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===fp.prototype||e.has(r)}},Sw=(i,t)=>(e,n,s)=>(i(n).replay(s),t(n,e,s)),Mw=(i,t,e)=>async(n,s,r)=>{const o=i(n);await Promise.all(o.activeInputs.map((a,c)=>Array.from(a).map(async([l,u])=>{const d=await t(l).render(l,s),p=n.context.destination;!e(l)&&(n!==p||!e(n))&&d.connect(r,u,c)})).reduce((a,c)=>[...a,...c],[]))},Tw=(i,t,e)=>async(n,s,r)=>{const o=t(n);await Promise.all(Array.from(o.activeInputs).map(async([a,c])=>{const u=await i(a).render(a,s);e(a)||u.connect(r,c)}))},ww=(i,t,e,n)=>s=>i(Zr,()=>Zr(s))?Promise.resolve(i(n,n)).then(r=>{if(!r){const o=e(s,512,0,1);s.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>s.currentTime,o.connect(s.destination)}return s.startRendering()}):new Promise(r=>{const o=t(s,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});s.oncomplete=a=>{o.disconnect(),r(a.renderedBuffer)},o.connect(s.destination),s.startRendering()}),bw=i=>(t,e)=>{i.set(t,e)},Ew=i=>(t,e)=>i.set(t,e),Aw=(i,t,e,n,s,r,o,a)=>(c,l)=>e(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(u=>e(u).render(u,l)))).then(()=>s(l)).then(u=>(typeof u.copyFromChannel!="function"?(o(u),Su(u)):t(r,()=>r(u))||a(u),i.add(u),u)),Cw={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},Rw=(i,t,e,n,s,r)=>class extends i{constructor(a,c){const l=s(a),u={...Cw,...c},h=e(l,u),d=r(l),p=d?n():null;super(a,!1,h,p),this._pan=t(this,d,h.pan)}get pan(){return this._pan}},Dw=(i,t,e,n,s)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=e(a);const u=$e(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=t(c,h)}return r.set(c,l),u?await i(c,a.pan,l.pan):await n(c,a.pan,l.pan),Sr(l)?await s(a,c,l.inputs[0]):await s(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},Pw=i=>()=>{if(i===null)return!1;try{new i({length:1,sampleRate:44100})}catch{return!1}return!0},Iw=(i,t)=>async()=>{if(i===null)return!0;if(t===null)return!1;const e=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new t(1,128,44100),s=URL.createObjectURL(e);let r=!1,o=!1;try{await n.audioWorklet.addModule(s);const a=new i(n,"a",{numberOfOutputs:0}),c=n.createOscillator();a.port.onmessage=()=>r=!0,a.onprocessorerror=()=>o=!0,c.connect(a),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(s)}return r&&!o},Nw=(i,t)=>()=>{if(t===null)return Promise.resolve(!1);const e=new t(1,1,44100),n=i(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(s=>{e.oncomplete=()=>{n.disconnect(),s(e.currentTime!==0)},e.startRendering()})},Lw=()=>new DOMException("","UnknownError"),Ow={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},Uw=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){const u=s(c),h={...Ow,...l},d=e(u,h),g=r(u)?n():null;super(c,!0,d,g),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw t();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},Fw=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!$e(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,curve:a.curve,oversample:a.oversample};a=i(o,l)}return n.set(o,a),Sr(a)?await e(r,o,a.inputs[0]):await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},kw=()=>typeof window>"u"?null:window,Vw=(i,t)=>e=>{e.copyFromChannel=(n,s,r=0)=>{const o=i(r),a=i(s);if(a>=e.numberOfChannels)throw t();const c=e.length,l=e.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)n[h]=l[h+o]},e.copyToChannel=(n,s,r=0)=>{const o=i(r),a=i(s);if(a>=e.numberOfChannels)throw t();const c=e.length,l=e.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)l[h+o]=n[h]}},Bw=i=>t=>{t.copyFromChannel=(e=>(n,s,r=0)=>{const o=i(r),a=i(s);if(o<t.length)return e.call(t,n,a,o)})(t.copyFromChannel),t.copyToChannel=(e=>(n,s,r=0)=>{const o=i(r),a=i(s);if(o<t.length)return e.call(t,n,a,o)})(t.copyToChannel)},zw=i=>(t,e)=>{const n=e.createBuffer(1,1,44100);t.buffer===null&&(t.buffer=n),i(t,"buffer",s=>()=>{const r=s.call(t);return r===n?null:r},s=>r=>s.call(t,r===null?n:r))},Hw=(i,t)=>(e,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw i()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw i()}});const s=e.createBufferSource();t(n,()=>{const a=n.numberOfInputs;for(let c=0;c<a;c+=1)s.connect(n,0,c)},()=>s.disconnect(n))},pp=(i,t,e)=>i.copyFromChannel===void 0?i.getChannelData(e)[0]:(i.copyFromChannel(t,e),t[0]),mp=i=>{if(i===null)return!1;const t=i.length;return t%2!==0?i[Math.floor(t/2)]!==0:i[t/2-1]+i[t/2]!==0},fo=(i,t,e,n)=>{let s=i;for(;!s.hasOwnProperty(t);)s=Object.getPrototypeOf(s);const{get:r,set:o}=Object.getOwnPropertyDescriptor(s,t);Object.defineProperty(i,t,{get:e(r),set:n(o)})},Gw=i=>({...i,outputChannelCount:i.outputChannelCount!==void 0?i.outputChannelCount:i.numberOfInputs===1&&i.numberOfOutputs===1?[i.channelCount]:Array.from({length:i.numberOfOutputs},()=>1)}),Ww=i=>({...i,channelCount:i.numberOfOutputs}),qw=i=>{const{imag:t,real:e}=i;return t===void 0?e===void 0?{...i,imag:[0,0],real:[0,0]}:{...i,imag:Array.from(e,()=>0),real:e}:e===void 0?{...i,imag:t,real:Array.from(t,()=>0)}:{...i,imag:t,real:e}},gp=(i,t,e)=>{try{i.setValueAtTime(t,e)}catch(n){if(n.code!==9)throw n;gp(i,t,e+1e-7)}},Xw=i=>{const t=i.createBufferSource();t.start();try{t.start()}catch{return!0}return!1},jw=i=>{const t=i.createBufferSource(),e=i.createBuffer(1,1,44100);t.buffer=e;try{t.start(0,1)}catch{return!1}return!0},Yw=i=>{const t=i.createBufferSource();t.start();try{t.stop()}catch{return!1}return!0},Eu=i=>{const t=i.createOscillator();try{t.start(-1)}catch(e){return e instanceof RangeError}return!1},_p=i=>{const t=i.createBuffer(1,1,44100),e=i.createBufferSource();e.buffer=t,e.start(),e.stop();try{return e.stop(),!0}catch{return!1}},Au=i=>{const t=i.createOscillator();try{t.stop(-1)}catch(e){return e instanceof RangeError}return!1},$w=i=>{const{port1:t,port2:e}=new MessageChannel;try{t.postMessage(i)}finally{t.close(),e.close()}},Zw=i=>{i.start=(t=>(e=0,n=0,s)=>{const r=i.buffer,o=r===null?n:Math.min(r.duration,n);r!==null&&o>r.duration-.5/i.context.sampleRate?t.call(i,e,0,0):t.call(i,e,o,s)})(i.start)},vp=(i,t)=>{const e=t.createGain();i.connect(e);const n=(s=>()=>{s.call(i,e),i.removeEventListener("ended",n)})(i.disconnect);i.addEventListener("ended",n),Mr(i,e),i.stop=(s=>{let r=!1;return(o=0)=>{if(r)try{s.call(i,o)}catch{e.gain.setValueAtTime(0,o)}else s.call(i,o),r=!0}})(i.stop)},Tr=(i,t)=>e=>{const n={value:i};return Object.defineProperties(e,{currentTarget:n,target:n}),typeof t=="function"?t.call(i,e):t.handleEvent.call(i,e)},Kw=_S(Cs),Jw=TS(Cs),Qw=OM(Fa),xp=new WeakMap,tb=QM(xp),jn=hM(new Map,new WeakMap),ei=kw(),yp=RT(jn,si),Cu=JM(Qe),He=Mw(Qe,Cu,ws),eb=CS(yp,ve,He),me=nT(Ua),Pi=nw(ei),de=xT(Pi),Sp=new WeakMap,Mp=qM(Tr),po=NT(ei),Ru=mT(po),Du=gT(ei),Tp=_T(ei),Kr=OT(ei),Ce=QS(vS(Zf),MS(Kw,Jw,_a,Qw,va,Qe,tb,oo,ve,Cs,wi,ws,la),jn,uT($l,va,Qe,ve,$r,wi),si,ka,tn,PM(_a,$l,Qe,ve,$r,me,wi,de),kM(Sp,Qe,Hn),Mp,me,Ru,Du,Tp,de,Kr),nb=AS(Ce,eb,si,yp,me,de),Pu=new WeakSet,jd=DT(ei),wp=wM(new Uint32Array(1)),Iu=Vw(wp,si),Nu=Bw(wp),bp=DS(Pu,jn,tn,jd,Pi,Pw(jd),Iu,Nu),Va=wS(ln),Ep=Tw(Cu,co,ws),ri=vM(Ep),wr=IT(Va,jn,Xw,jw,Yw,Eu,_p,Au,Zw,zw(fo),vp),oi=Sw(tT(co),Ep),ib=NS(ri,wr,ve,oi,He),Yn=tM(xS(Kf),Sp,yu,eM,hS,dS,fS,pS,mS,Xl,jf,po,gp),sb=IS(Ce,ib,Yn,ke,wr,me,de,Tr),rb=HS(Ce,GS,si,ke,LT(ln,fo),me,de,He),ob=uM(ri,hp,ve,oi,He),Rs=Ew(xp),ab=lM(Ce,Yn,ob,ka,hp,me,de,Rs),es=AT(Cs,Du),cb=Hw(ke,es),ns=HT(po,cb),lb=pM(ns,ve,He),ub=fM(Ce,lb,ns,me,de),hb=_M(uo,ve,He),db=gM(Ce,hb,uo,me,de,Ww),fb=qT(Va,wr,ln,es),br=WT(Va,jn,fb,Eu,Au),pb=TM(ri,br,ve,oi,He),mb=MM(Ce,Yn,pb,br,me,de,Tr),Ap=XT(tn,fo),gb=AM(Ap,ve,He),_b=EM(Ce,gb,Ap,me,de,Rs),vb=LM(ri,dp,ve,oi,He),xb=NM(Ce,Yn,vb,dp,me,de,Rs),Cp=jT(tn),yb=HM(ri,Cp,ve,oi,He),Sb=zM(Ce,Yn,yb,Cp,tn,me,de,Rs),Mb=ZM(ri,ln,ve,oi,He),Tb=$M(Ce,Yn,Mb,ln,me,de),wb=KT(ka,ke,ho,tn),Ba=ww(jn,ln,ho,Nw(ln,Pi)),bb=lT(wr,ve,Pi,He,Ba),Eb=YT(wb),Ab=aT(Ce,Eb,bb,me,de,Rs),Cb=WS(Yn,ns,br,ho,tn,pp,de,fo),Rp=new WeakMap,Rb=ET(rb,Cb,Mp,de,Rp,Tr),Dp=iw(Va,jn,Eu,_p,Au,vp),Db=mw(ri,Dp,ve,oi,He),Pb=pw(Ce,Yn,Dp,Db,me,de,Tr),Pp=yM(wr),Ib=uw(Pp,ke,ln,mp,es),za=lw(Pp,ke,Ib,mp,es,po,fo),Nb=rw(_a,ke,ns,ln,ho,za,tn,va,pp,es),Ip=sw(Nb),Lb=vw(ri,ns,br,ln,Ip,ve,Pi,oi,He,Ba),Ob=_w(Ce,Yn,Ip,Lb,me,de,Rs),Ub=ow(si),Fb=yw(Ub,me,new WeakSet,qw),kb=cw(ns,uo,ln,za,tn,es),Np=aw(kb,tn),Vb=Dw(ri,Np,ve,oi,He),Bb=Rw(Ce,Yn,Np,Vb,me,de),zb=Fw(za,ve,He),Hb=Uw(Ce,ke,za,zb,me,de,Rs),Lp=yT(ei),Lu=XM(ei),Op=new WeakMap,Gb=iT(Op,Pi),Wb=Lp?SS(jn,tn,WM(ei),Lu,jM(gS),me,Gb,de,Kr,new WeakMap,new WeakMap,Iw(Kr,Pi),ei):void 0,qb=vT(Ru,de),Xb=DM(Pu,jn,RM,GM,new WeakSet,me,qb,ma,Zr,Iu,Nu),Up=aM(Wb,nb,bp,sb,ab,ub,db,mb,_b,Xb,xb,Sb,Tb,Ab,Rb,Pb,Ob,Fb,Bb,Hb),jb=ST(Ce,JT,me,de),Yb=TT(Ce,QT,me,de),$b=wT(Ce,tw,me,de),Zb=ew(ke,de),Kb=bT(Ce,Zb,me),Jb=zS(Up,ke,tn,Lw,jb,Yb,$b,Kb,po),Ou=sT(Rp),Qb=bS(Ou),Fp=xM(si),tE=UM(Ou),kp=VM(si),Vp=new WeakMap,eE=KM(Vp,Hn),nE=zT(Fp,si,ke,ns,uo,br,ln,ho,tn,kp,Lu,eE,es),iE=FT(ke,nE,ln,tn,es),sE=oM(ri,Fp,wr,ns,uo,br,ln,tE,kp,Lu,ve,Kr,Pi,oi,He,Ba),rE=eT(Op),oE=bw(Vp),Yd=Lp?iM(Qb,Ce,Yn,sE,iE,Qe,rE,me,de,Kr,Gw,oE,$w,Tr):void 0,aE=CM(tn,Pi),cE=Aw(Pu,jn,Cu,Ou,Ba,ma,Iu,Nu),lE=dw(Up,jn,ke,aE,cE),uE=hT(Ua,Ru),hE=dT(xu,Du),dE=fT(yu,Tp),fE=pT(Ua,de);function Cn(i){return i===void 0}function Yt(i){return i!==void 0}function pE(i){return typeof i=="function"}function Gn(i){return typeof i=="number"}function xs(i){return Object.prototype.toString.call(i)==="[object Object]"&&i.constructor===Object}function Bp(i){return typeof i=="boolean"}function yn(i){return Array.isArray(i)}function Ci(i){return typeof i=="string"}function Jo(i){return Ci(i)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(i)}function Nt(i,t){if(!i)throw new Error(t)}function Wn(i,t,e=1/0){if(!(t<=i&&i<=e))throw new RangeError(`Value must be within [${t}, ${e}], got: ${i}`)}function zp(i){!i.isOffline&&i.state!=="running"&&Ha('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let Hp=!1,$d=!1;function Zd(i){Hp=i}function mE(i){Cn(i)&&Hp&&!$d&&($d=!0,Ha("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"))}let Gp=console;function gE(...i){Gp.log(...i)}function Ha(...i){Gp.warn(...i)}function _E(i){return new Jb(i)}function vE(i,t,e){return new lE(i,t,e)}const pn=typeof self=="object"?self:null,xE=pn&&(pn.hasOwnProperty("AudioContext")||pn.hasOwnProperty("webkitAudioContext"));function yE(i,t,e){return Nt(Yt(Yd),"AudioWorkletNode only works in a secure context (https or localhost)"),new(i instanceof(pn==null?void 0:pn.BaseAudioContext)?pn==null?void 0:pn.AudioWorkletNode:Yd)(i,t,e)}function $n(i,t,e,n){var s=arguments.length,r=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(t,e,r):o(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r}function Ae(i,t,e,n){function s(r){return r instanceof e?r:new e(function(o){o(r)})}return new(e||(e=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):s(u.value).then(a,c)}l((n=n.apply(i,t||[])).next())})}class SE{constructor(t,e,n,s){this._callback=t,this._type=e,this._minimumUpdateInterval=Math.max(128/(s||44100),.001),this.updateInterval=n,this._createClock()}_createWorker(){const t=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),e=URL.createObjectURL(t),n=new Worker(e);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(t){var e;this._updateInterval=Math.max(t,this._minimumUpdateInterval),this._type==="worker"&&((e=this._worker)===null||e===void 0||e.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(t){this._disposeClock(),this._type=t,this._createClock()}dispose(){this._disposeClock()}}function bs(i){return dE(i)}function Zi(i){return hE(i)}function ua(i){return fE(i)}function $s(i){return uE(i)}function ME(i){return i instanceof bp}function TE(i,t){return i==="value"||bs(t)||Zi(t)||ME(t)}function ys(i,...t){if(!t.length)return i;const e=t.shift();if(xs(i)&&xs(e))for(const n in e)TE(n,e[n])?i[n]=e[n]:xs(e[n])?(i[n]||Object.assign(i,{[n]:{}}),ys(i[n],e[n])):Object.assign(i,{[n]:e[n]});return ys(i,...t)}function wE(i,t){return i.length===t.length&&i.every((e,n)=>t[n]===e)}function yt(i,t,e=[],n){const s={},r=Array.from(t);if(xs(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(a=>Reflect.has(i,a))||(ys(s,{[n]:r[0]}),e.splice(e.indexOf(n),1),r.shift())),r.length===1&&xs(r[0]))ys(s,r[0]);else for(let o=0;o<e.length;o++)Yt(r[o])&&(s[e[o]]=r[o]);return ys(i,s)}function bE(i){return i.constructor.getDefaults()}function Ss(i,t){return Cn(i)?t:i}function Si(i,t){return t.forEach(e=>{Reflect.has(i,e)&&delete i[e]}),i}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2024 Yotam Mann
 */class Ii{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...t){(this.debug||pn&&this.toString()===pn.TONE_DEBUG_CLASS)&&gE(this,...t)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}Ii.version=Xf;const Uu=1e-6;function fr(i,t){return i>t+Uu}function tu(i,t){return fr(i,t)||kn(i,t)}function Ma(i,t){return i+Uu<t}function kn(i,t){return Math.abs(i-t)<Uu}function EE(i,t,e){return Math.max(Math.min(i,e),t)}class Rn extends Ii{constructor(){super(),this.name="Timeline",this._timeline=[];const t=yt(Rn.getDefaults(),arguments,["memory"]);this.memory=t.memory,this.increasing=t.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(t){if(Nt(Reflect.has(t,"time"),"Timeline: events must have a time attribute"),t.time=t.time.valueOf(),this.increasing&&this.length){const e=this._timeline[this.length-1];Nt(tu(t.time,e.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(t)}else{const e=this._search(t.time);this._timeline.splice(e+1,0,t)}if(this.length>this.memory){const e=this.length-this.memory;this._timeline.splice(0,e)}return this}remove(t){const e=this._timeline.indexOf(t);return e!==-1&&this._timeline.splice(e,1),this}get(t,e="time"){const n=this._search(t,e);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(t,e="time"){const n=this._search(t,e);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(t){const e=this._timeline.length;if(e>0&&this._timeline[e-1].time<t)return this._timeline[e-1];const n=this._search(t);return n-1>=0?this._timeline[n-1]:null}cancel(t){if(this._timeline.length>1){let e=this._search(t);if(e>=0)if(kn(this._timeline[e].time,t)){for(let n=e;n>=0&&kn(this._timeline[n].time,t);n--)e=n;this._timeline=this._timeline.slice(0,e)}else this._timeline=this._timeline.slice(0,e+1);else this._timeline=[]}else this._timeline.length===1&&tu(this._timeline[0].time,t)&&(this._timeline=[]);return this}cancelBefore(t){const e=this._search(t);return e>=0&&(this._timeline=this._timeline.slice(e+1)),this}previousEvent(t){const e=this._timeline.indexOf(t);return e>0?this._timeline[e-1]:null}_search(t,e="time"){if(this._timeline.length===0)return-1;let n=0;const s=this._timeline.length;let r=s;if(s>0&&this._timeline[s-1][e]<=t)return s-1;for(;n<r;){let o=Math.floor(n+(r-n)/2);const a=this._timeline[o],c=this._timeline[o+1];if(kn(a[e],t)){for(let l=o;l<this._timeline.length;l++){const u=this._timeline[l];if(kn(u[e],t))o=l;else break}return o}else{if(Ma(a[e],t)&&fr(c[e],t))return o;fr(a[e],t)?r=o:n=o+1}}return-1}_iterate(t,e=0,n=this._timeline.length-1){this._timeline.slice(e,n+1).forEach(t)}forEach(t){return this._iterate(t),this}forEachBefore(t,e){const n=this._search(t);return n!==-1&&this._iterate(e,0,n),this}forEachAfter(t,e){const n=this._search(t);return this._iterate(e,n+1),this}forEachBetween(t,e,n){let s=this._search(t),r=this._search(e);return s!==-1&&r!==-1?(this._timeline[s].time!==t&&(s+=1),this._timeline[r].time===e&&(r-=1),this._iterate(n,s,r)):s===-1&&this._iterate(n,0,r),this}forEachFrom(t,e){let n=this._search(t);for(;n>=0&&this._timeline[n].time>=t;)n--;return this._iterate(e,n+1),this}forEachAtTime(t,e){const n=this._search(t);if(n!==-1&&kn(this._timeline[n].time,t)){let s=n;for(let r=n;r>=0&&kn(this._timeline[r].time,t);r--)s=r;this._iterate(r=>{e(r)},s,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const Wp=[];function Ga(i){Wp.push(i)}function AE(i){Wp.forEach(t=>t(i))}const qp=[];function Wa(i){qp.push(i)}function CE(i){qp.forEach(t=>t(i))}class mo extends Ii{constructor(){super(...arguments),this.name="Emitter"}on(t,e){return t.split(/\W+/).forEach(s=>{Cn(this._events)&&(this._events={}),this._events.hasOwnProperty(s)||(this._events[s]=[]),this._events[s].push(e)}),this}once(t,e){const n=(...s)=>{e(...s),this.off(t,n)};return this.on(t,n),this}off(t,e){return t.split(/\W+/).forEach(s=>{if(Cn(this._events)&&(this._events={}),this._events.hasOwnProperty(s))if(Cn(e))this._events[s]=[];else{const r=this._events[s];for(let o=r.length-1;o>=0;o--)r[o]===e&&r.splice(o,1)}}),this}emit(t,...e){if(this._events&&this._events.hasOwnProperty(t)){const n=this._events[t].slice(0);for(let s=0,r=n.length;s<r;s++)n[s].apply(this,e)}return this}static mixin(t){["on","once","off","emit"].forEach(e=>{const n=Object.getOwnPropertyDescriptor(mo.prototype,e);Object.defineProperty(t.prototype,e,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class Xp extends mo{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class go extends Xp{constructor(){var t,e;super(),this.name="Context",this._constants=new Map,this._timeouts=new Rn,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;const n=yt(go.getDefaults(),arguments,["context"]);n.context?(this._context=n.context,this._latencyHint=((t=arguments[0])===null||t===void 0?void 0:t.latencyHint)||""):(this._context=_E({latencyHint:n.latencyHint}),this._latencyHint=n.latencyHint),this._ticker=new SE(this.emit.bind(this,"tick"),n.clockSource,n.updateInterval,this._context.sampleRate),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this[!((e=arguments[0])===null||e===void 0)&&e.hasOwnProperty("updateInterval")?"_lookAhead":"lookAhead"]=n.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(AE(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(t,e,n){return this._context.createBuffer(t,e,n)}createChannelMerger(t){return this._context.createChannelMerger(t)}createChannelSplitter(t){return this._context.createChannelSplitter(t)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(t){return this._context.createDelay(t)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(t,e){return this._context.createIIRFilter(t,e)}createPanner(){return this._context.createPanner()}createPeriodicWave(t,e,n){return this._context.createPeriodicWave(t,e,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(t){return Nt($s(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(t)}createMediaElementSource(t){return Nt($s(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(t)}createMediaStreamDestination(){return Nt($s(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(t){return this._context.decodeAudioData(t)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(t){Nt(!this._initialized,"The listener cannot be set after initialization."),this._listener=t}get transport(){return this.initialize(),this._transport}set transport(t){Nt(!this._initialized,"The transport cannot be set after initialization."),this._transport=t}get draw(){return this.initialize(),this._draw}set draw(t){Nt(!this._initialized,"Draw cannot be set after initialization."),this._draw=t}get destination(){return this.initialize(),this._destination}set destination(t){Nt(!this._initialized,"The destination cannot be set after initialization."),this._destination=t}createAudioWorkletNode(t,e){return yE(this.rawContext,t,e)}addAudioWorkletModule(t){return Ae(this,void 0,void 0,function*(){Nt(Yt(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletPromise||(this._workletPromise=this.rawContext.audioWorklet.addModule(t)),yield this._workletPromise})}workletsAreReady(){return Ae(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(t){this._ticker.updateInterval=t}get clockSource(){return this._ticker.type}set clockSource(t){this._ticker.type=t}get lookAhead(){return this._lookAhead}set lookAhead(t){this._lookAhead=t,this.updateInterval=t?t/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return $s(this._context)?this._context.resume():Promise.resolve()}close(){return Ae(this,void 0,void 0,function*(){$s(this._context)&&this.state!=="closed"&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&CE(this)})}getConstant(t){if(this._constants.has(t))return this._constants.get(t);{const e=this._context.createBuffer(1,128,this._context.sampleRate),n=e.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=t;const s=this._context.createBufferSource();return s.channelCount=1,s.channelCountMode="explicit",s.buffer=e,s.loop=!0,s.start(0),this._constants.set(t,s),s}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(t=>this._constants[t].disconnect()),this.close(),this}_timeoutLoop(){const t=this.now();let e=this._timeouts.peek();for(;this._timeouts.length&&e&&e.time<=t;)e.callback(),this._timeouts.shift(),e=this._timeouts.peek()}setTimeout(t,e){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:t,id:this._timeoutIds,time:n+e}),this._timeoutIds}clearTimeout(t){return this._timeouts.forEach(e=>{e.id===t&&this._timeouts.remove(e)}),this}clearInterval(t){return this.clearTimeout(t)}setInterval(t,e){const n=++this._timeoutIds,s=()=>{const r=this.now();this._timeouts.add({callback:()=>{t(),s()},id:n,time:r+e})};return s(),n}}class RE extends Xp{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(t,e,n){return{}}createChannelMerger(t){return{}}createChannelSplitter(t){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(t){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(t,e){return{}}createPanner(){return{}}createPeriodicWave(t,e,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(t){return{}}createMediaElementSource(t){return{}}createMediaStreamDestination(){return{}}decodeAudioData(t){return Promise.resolve({})}createAudioWorkletNode(t,e){return{}}get rawContext(){return{}}addAudioWorkletModule(t){return Ae(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(t,e){return 0}clearTimeout(t){return this}setInterval(t,e){return 0}clearInterval(t){return this}getConstant(t){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(t){}get destination(){return{}}set destination(t){}now(){return 0}immediate(){return 0}}function Qt(i,t){yn(t)?t.forEach(e=>Qt(i,e)):Object.defineProperty(i,t,{enumerable:!0,writable:!1})}function Fu(i,t){yn(t)?t.forEach(e=>Fu(i,e)):Object.defineProperty(i,t,{writable:!0})}const ne=()=>{};class he extends Ii{constructor(){super(),this.name="ToneAudioBuffer",this.onload=ne;const t=yt(he.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=t.reverse,this.onload=t.onload,Ci(t.url)?this.load(t.url).catch(t.onerror):t.url&&this.set(t.url)}static getDefaults(){return{onerror:ne,onload:ne,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:Xe().sampleRate}set(t){return t instanceof he?t.loaded?this._buffer=t.get():t.onload=()=>{this.set(t),this.onload(this)}:this._buffer=t,this._reversed&&this._reverse(),this}get(){return this._buffer}load(t){return Ae(this,void 0,void 0,function*(){const e=he.load(t).then(n=>{this.set(n),this.onload(this)});he.downloads.push(e);try{yield e}finally{const n=he.downloads.indexOf(e);he.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(t){const e=yn(t)&&t[0].length>0,n=e?t.length:1,s=e?t[0].length:t.length,r=Xe(),o=r.createBuffer(n,s,r.sampleRate),a=!e&&n===1?[t]:t;for(let c=0;c<n;c++)o.copyToChannel(a[c],c);return this._buffer=o,this}toMono(t){if(Gn(t))this.fromArray(this.toArray(t));else{let e=new Float32Array(this.length);const n=this.numberOfChannels;for(let s=0;s<n;s++){const r=this.toArray(s);for(let o=0;o<r.length;o++)e[o]+=r[o]}e=e.map(s=>s/n),this.fromArray(e)}return this}toArray(t){if(Gn(t))return this.getChannelData(t);if(this.numberOfChannels===1)return this.toArray(0);{const e=[];for(let n=0;n<this.numberOfChannels;n++)e[n]=this.getChannelData(n);return e}}getChannelData(t){return this._buffer?this._buffer.getChannelData(t):new Float32Array(0)}slice(t,e=this.duration){Nt(this.loaded,"Buffer is not loaded");const n=Math.floor(t*this.sampleRate),s=Math.floor(e*this.sampleRate);Nt(n<s,"The start time must be less than the end time");const r=s-n,o=Xe().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let a=0;a<this.numberOfChannels;a++)o.copyToChannel(this.getChannelData(a).subarray(n,s),a);return new he(o)}_reverse(){if(this.loaded)for(let t=0;t<this.numberOfChannels;t++)this.getChannelData(t).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(t){this._reversed!==t&&(this._reversed=t,this._reverse())}static fromArray(t){return new he().fromArray(t)}static fromUrl(t){return Ae(this,void 0,void 0,function*(){return yield new he().load(t)})}static load(t){return Ae(this,void 0,void 0,function*(){const e=t.match(/\[([^\]\[]+\|.+)\]$/);if(e){const c=e[1].split("|");let l=c[0];for(const u of c)if(he.supportsType(u)){l=u;break}t=t.replace(e[0],l)}const n=he.baseUrl===""||he.baseUrl.endsWith("/")?he.baseUrl:he.baseUrl+"/",s=document.createElement("a");s.href=n+t,s.pathname=(s.pathname+s.hash).split("/").map(encodeURIComponent).join("/");const r=yield fetch(s.href);if(!r.ok)throw new Error(`could not load url: ${t}`);const o=yield r.arrayBuffer();return yield Xe().decodeAudioData(o)})}static supportsType(t){const e=t.split("."),n=e[e.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return Ae(this,void 0,void 0,function*(){for(yield Promise.resolve();he.downloads.length;)yield he.downloads[0]})}}he.baseUrl="";he.downloads=[];class qa extends go{constructor(){super({clockSource:"offline",context:ua(arguments[0])?arguments[0]:vE(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:ua(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=ua(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(t){return Ae(this,void 0,void 0,function*(){let e=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,e++;const n=Math.floor(this.sampleRate/128);t&&e%n===0&&(yield new Promise(s=>setTimeout(s,1)))}})}render(){return Ae(this,arguments,void 0,function*(t=!0){yield this.workletsAreReady(),yield this._renderClock(t);const e=yield this._context.startRendering();return new he(e)})}close(){return Promise.resolve()}}const jp=new RE;let gs=jp;function Xe(){return gs===jp&&xE&&DE(new go),gs}function DE(i,t=!1){t&&gs.dispose(),$s(i)?gs=new go(i):ua(i)?gs=new qa(i):gs=i}function PE(){return gs.resume()}if(pn&&!pn.TONE_SILENCE_LOGGING){const t=` * Tone.js v${Xf} * `;console.log(`%c${t}`,"background: #000; color: #fff")}function Yp(i){return Math.pow(10,i/20)}function IE(i){return 20*(Math.log(i)/Math.LN10)}function $p(i){return Math.pow(2,i/12)}let Xa=440;function NE(){return Xa}function LE(i){Xa=i}function _s(i){return Math.round(Zp(i))}function Zp(i){return 69+12*Math.log2(i/Xa)}function Kp(i){return Xa*Math.pow(2,(i-69)/12)}class ku extends Ii{constructor(t,e,n){super(),this.defaultUnits="s",this._val=e,this._units=n,this.context=t,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:t=>this._frequencyToUnits(parseFloat(t)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:t=>this._ticksToUnits(parseInt(t,10)),regexp:/^(\d+)i$/i},m:{method:t=>this._beatsToUnits(parseInt(t,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(t,e)=>{const n=parseInt(t,10),s=e==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*s:this._beatsToUnits(4/n)*s},regexp:/^(\d+)n(\.?)$/i},number:{method:t=>this._expressions[this.defaultUnits].method.call(this,t),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:t=>this._secondsToUnits(parseFloat(t)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:t=>parseInt(t,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:t=>{const e=parseInt(t,10);return this._beatsToUnits(8/(Math.floor(e)*3))},regexp:/^(\d+)t$/i},tr:{method:(t,e,n)=>{let s=0;return t&&t!=="0"&&(s+=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&e!=="0"&&(s+=this._beatsToUnits(parseFloat(e))),n&&n!=="0"&&(s+=this._beatsToUnits(parseFloat(n)/4)),s},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof ku&&this.fromType(this._val),Cn(this._val))return this._noArg();if(Ci(this._val)&&Cn(this._units)){for(const t in this._expressions)if(this._expressions[t].regexp.test(this._val.trim())){this._units=t;break}}else if(xs(this._val)){let t=0;for(const e in this._val)if(Yt(this._val[e])){const n=this._val[e],s=new this.constructor(this.context,e).valueOf()*n;t+=s}return t}if(Yt(this._units)){const t=this._expressions[this._units],e=this._val.toString().trim().match(t.regexp);return e?t.method.apply(this,e.slice(1)):t.method.call(this,this._val)}else return Ci(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(t){return 1/t}_beatsToUnits(t){return 60/this._getBpm()*t}_secondsToUnits(t){return t}_ticksToUnits(t){return t*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(t){switch(this._units=void 0,this.defaultUnits){case"s":this._val=t.toSeconds();break;case"i":this._val=t.toTicks();break;case"hz":this._val=t.toFrequency();break;case"midi":this._val=t.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class zn extends ku{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:t=>this._now()+new this.constructor(this.context,t).valueOf(),regexp:/^\+(.+)/},quantize:{method:t=>{const e=new zn(this.context,t).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(e))},regexp:/^@(.+)/}})}quantize(t,e=1){const n=new this.constructor(this.context,t).valueOf(),s=this.valueOf(),a=Math.round(s/n)*n-s;return s+a*e}toNotation(){const t=this.toSeconds(),e=["1m"];for(let r=1;r<9;r++){const o=Math.pow(2,r);e.push(o+"n."),e.push(o+"n"),e.push(o+"t")}e.push("0");let n=e[0],s=new zn(this.context,e[0]).toSeconds();return e.forEach(r=>{const o=new zn(this.context,r).toSeconds();Math.abs(o-t)<Math.abs(s-t)&&(n=r,s=o)}),n}toBarsBeatsSixteenths(){const t=this._beatsToUnits(1);let e=this.valueOf()/t;e=parseFloat(e.toFixed(4));const n=Math.floor(e/this._getTimeSignature());let s=e%1*4;e=Math.floor(e)%this._getTimeSignature();const r=s.toString();return r.length>3&&(s=parseFloat(parseFloat(r).toFixed(3))),[n,e,s].join(":")}toTicks(){const t=this._beatsToUnits(1);return this.valueOf()/t*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return _s(this.toFrequency())}_now(){return this.context.now()}}class gn extends zn{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return NE()}static set A4(t){LE(t)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(t){return this.defaultUnits==="midi"?t:gn.mtof(t)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(t,e){const s=OE[t.toLowerCase()]+(parseInt(e,10)+1)*12;return this.defaultUnits==="midi"?s:gn.mtof(s)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(t,e,n){let s=1;return t&&t!=="0"&&(s*=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&e!=="0"&&(s*=this._beatsToUnits(parseFloat(e))),n&&n!=="0"&&(s*=this._beatsToUnits(parseFloat(n)/4)),s}}})}transpose(t){return new gn(this.context,this.valueOf()*$p(t))}harmonize(t){return t.map(e=>this.transpose(e))}toMidi(){return _s(this.valueOf())}toNote(){const t=this.toFrequency(),e=Math.log2(t/gn.A4);let n=Math.round(12*e)+57;const s=Math.floor(n/12);return s<0&&(n+=-12*s),UE[n%12]+s.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.floor(e*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(t){return t}_ticksToUnits(t){return 1/(t*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(t){return 1/super._beatsToUnits(t)}_secondsToUnits(t){return 1/t}static mtof(t){return Kp(t)}static ftom(t){return _s(t)}}const OE={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},UE=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class Hr extends zn{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class Ve extends Ii{constructor(){super();const t=yt(Ve.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=t.context}static getDefaults(){return{context:Xe()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(t){return mE(t),new zn(this.context,t).toSeconds()}toFrequency(t){return new gn(this.context,t).toFrequency()}toTicks(t){return new Hr(this.context,t).toTicks()}_getPartialProperties(t){const e=this.get();return Object.keys(e).forEach(n=>{Cn(t[n])&&delete e[n]}),e}get(){const t=bE(this);return Object.keys(t).forEach(e=>{if(Reflect.has(this,e)){const n=this[e];Yt(n)&&Yt(n.value)&&Yt(n.setValueAtTime)?t[e]=n.value:n instanceof Ve?t[e]=n._getPartialProperties(t[e]):yn(n)||Gn(n)||Ci(n)||Bp(n)?t[e]=n:delete t[e]}}),t}set(t){return Object.keys(t).forEach(e=>{Reflect.has(this,e)&&Yt(this[e])&&(this[e]&&Yt(this[e].value)&&Yt(this[e].setValueAtTime)?this[e].value!==t[e]&&(this[e].value=t[e]):this[e]instanceof Ve?this[e].set(t[e]):this[e]=t[e])}),this}}class ja extends Rn{constructor(t="stopped"){super(),this.name="StateTimeline",this._initial=t,this.setStateAtTime(this._initial,0)}getValueAtTime(t){const e=this.get(t);return e!==null?e.state:this._initial}setStateAtTime(t,e,n){return Wn(e,0),this.add(Object.assign({},n,{state:t,time:e})),this}getLastState(t,e){const n=this._search(e);for(let s=n;s>=0;s--){const r=this._timeline[s];if(r.state===t)return r}}getNextState(t,e){const n=this._search(e);if(n!==-1)for(let s=n;s<this._timeline.length;s++){const r=this._timeline[s];if(r.state===t)return r}}}class Xt extends Ve{constructor(){const t=yt(Xt.getDefaults(),arguments,["param","units","convert"]);for(super(t),this.name="Param",this.overridden=!1,this._minOutput=1e-7,Nt(Yt(t.param)&&(bs(t.param)||t.param instanceof Xt),"param must be an AudioParam");!bs(t.param);)t.param=t.param._param;this._swappable=Yt(t.swappable)?t.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=t.param,this.input.connect(this._param)):this._param=this.input=t.param,this._events=new Rn(1e3),this._initialValue=this._param.defaultValue,this.units=t.units,this.convert=t.convert,this._minValue=t.minValue,this._maxValue=t.maxValue,Yt(t.value)&&t.value!==this._toType(this._initialValue)&&this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(Ve.getDefaults(),{convert:!0,units:"number"})}get value(){const t=this.now();return this.getValueAtTime(t)}set value(t){this.cancelScheduledValues(this.now()),this.setValueAtTime(t,this.now())}get minValue(){return Yt(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return Yt(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(t,e){return this.units===e}_assertRange(t){return Yt(this.maxValue)&&Yt(this.minValue)&&Wn(t,this._fromType(this.minValue),this._fromType(this.maxValue)),t}_fromType(t){return this.convert&&!this.overridden?this._is(t,"time")?this.toSeconds(t):this._is(t,"decibels")?Yp(t):this._is(t,"frequency")?this.toFrequency(t):t:this.overridden?0:t}_toType(t){return this.convert&&this.units==="decibels"?IE(t):t}setValueAtTime(t,e){const n=this.toSeconds(e),s=this._fromType(t);return Nt(isFinite(s)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._assertRange(s),this.log(this.units,"setValueAtTime",t,n),this._events.add({time:n,type:"setValueAtTime",value:s}),this._param.setValueAtTime(s,n),this}getValueAtTime(t){const e=Math.max(this.toSeconds(t),0),n=this._events.getAfter(e),s=this._events.get(e);let r=this._initialValue;if(s===null)r=this._initialValue;else if(s.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const o=this._events.getBefore(s.time);let a;o===null?a=this._initialValue:a=o.value,s.type==="setTargetAtTime"&&(r=this._exponentialApproach(s.time,a,s.value,s.constant,e))}else if(n===null)r=s.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let o=s.value;if(s.type==="setTargetAtTime"){const a=this._events.getBefore(s.time);a===null?o=this._initialValue:o=a.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(s.time,o,n.time,n.value,e):r=this._exponentialInterpolate(s.time,o,n.time,n.value,e)}else r=s.value;return this._toType(r)}setRampPoint(t){t=this.toSeconds(t);let e=this.getValueAtTime(t);return this.cancelAndHoldAtTime(t),this._fromType(e)===0&&(e=this._toType(this._minOutput)),this.setValueAtTime(e,t),this}linearRampToValueAtTime(t,e){const n=this._fromType(t),s=this.toSeconds(e);return Nt(isFinite(n)&&isFinite(s),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._assertRange(n),this._events.add({time:s,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",t,s),this._param.linearRampToValueAtTime(n,s),this}exponentialRampToValueAtTime(t,e){let n=this._fromType(t);n=kn(n,0)?this._minOutput:n,this._assertRange(n);const s=this.toSeconds(e);return Nt(isFinite(n)&&isFinite(s),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._events.add({time:s,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",t,s),this._param.exponentialRampToValueAtTime(n,s),this}exponentialRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(t,n+this.toSeconds(e)),this}linearRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(t,n+this.toSeconds(e)),this}targetRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(t,n,e),this}exponentialApproachValueAtTime(t,e,n){e=this.toSeconds(e),n=this.toSeconds(n);const s=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(t,e,s),this.cancelAndHoldAtTime(e+n*.9),this.linearRampToValueAtTime(t,e+n),this}setTargetAtTime(t,e,n){const s=this._fromType(t);Nt(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(e);return this._assertRange(s),Nt(isFinite(s)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:s}),this.log(this.units,"setTargetAtTime",t,r,n),this._param.setTargetAtTime(s,r,n),this}setValueCurveAtTime(t,e,n,s=1){n=this.toSeconds(n),e=this.toSeconds(e);const r=this._fromType(t[0])*s;this.setValueAtTime(this._toType(r),e);const o=n/(t.length-1);for(let a=1;a<t.length;a++){const c=this._fromType(t[a])*s;this.linearRampToValueAtTime(this._toType(c),e+a*o)}return this}cancelScheduledValues(t){const e=this.toSeconds(t);return Nt(isFinite(e),`Invalid argument to cancelScheduledValues: ${JSON.stringify(t)}`),this._events.cancel(e),this._param.cancelScheduledValues(e),this.log(this.units,"cancelScheduledValues",e),this}cancelAndHoldAtTime(t){const e=this.toSeconds(t),n=this._fromType(this.getValueAtTime(e));Nt(isFinite(e),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(t)}`),this.log(this.units,"cancelAndHoldAtTime",e,"value="+n);const s=this._events.get(e),r=this._events.getAfter(e);return s&&kn(s.time,e)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(e),this._events.cancel(e+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),e):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),e)),this._events.add({time:e,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,e),this}rampTo(t,e=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(t,e,n):this.linearRampTo(t,e,n),this}apply(t){const e=this.context.currentTime;t.setValueAtTime(this.getValueAtTime(e),e);const n=this._events.get(e);if(n&&n.type==="setTargetAtTime"){const s=this._events.getAfter(n.time),r=s?s.time:e+2,o=(r-e)/10;for(let a=e;a<r;a+=o)t.linearRampToValueAtTime(this.getValueAtTime(a),a)}return this._events.forEachAfter(this.context.currentTime,s=>{s.type==="cancelScheduledValues"?t.cancelScheduledValues(s.time):s.type==="setTargetAtTime"?t.setTargetAtTime(s.value,s.time,s.constant):t[s.type](s.value,s.time)}),this}setParam(t){Nt(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const e=this.input;return e.disconnect(this._param),this.apply(t),this._param=t,e.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(t,e,n,s,r){return n+(e-n)*Math.exp(-(r-t)/s)}_linearInterpolate(t,e,n,s,r){return e+(s-e)*((r-t)/(n-t))}_exponentialInterpolate(t,e,n,s,r){return e*Math.pow(s/e,(r-t)/(n-t))}}class St extends Ve{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return Yt(this.input)?bs(this.input)||this.input instanceof Xt?1:this.input.numberOfInputs:0}get numberOfOutputs(){return Yt(this.output)?this.output.numberOfOutputs:0}_isAudioNode(t){return Yt(t)&&(t instanceof St||Zi(t))}_getInternalNodes(){const t=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&t.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&t.push(this.output),t}_setChannelProperties(t){this._getInternalNodes().forEach(n=>{n.channelCount=t.channelCount,n.channelCountMode=t.channelCountMode,n.channelInterpretation=t.channelInterpretation})}_getChannelProperties(){const t=this._getInternalNodes();Nt(t.length>0,"ToneAudioNode does not have any internal nodes");const e=t[0];return{channelCount:e.channelCount,channelCountMode:e.channelCountMode,channelInterpretation:e.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelCount:t}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelCountMode:t}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelInterpretation:t}))}connect(t,e=0,n=0){return Dn(this,t,e,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Ha("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(t,e=0,n=0){return Jp(this,t,e,n),this}chain(...t){return Es(this,...t),this}fan(...t){return t.forEach(e=>this.connect(e)),this}dispose(){return super.dispose(),Yt(this.input)&&(this.input instanceof St?this.input.dispose():Zi(this.input)&&this.input.disconnect()),Yt(this.output)&&(this.output instanceof St?this.output.dispose():Zi(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function Es(...i){const t=i.shift();i.reduce((e,n)=>(e instanceof St?e.connect(n):Zi(e)&&Dn(e,n),n),t)}function Dn(i,t,e=0,n=0){for(Nt(Yt(i),"Cannot connect from undefined node"),Nt(Yt(t),"Cannot connect to undefined node"),(t instanceof St||Zi(t))&&Nt(t.numberOfInputs>0,"Cannot connect to node with no inputs"),Nt(i.numberOfOutputs>0,"Cannot connect from node with no outputs");t instanceof St||t instanceof Xt;)Yt(t.input)&&(t=t.input);for(;i instanceof St;)Yt(i.output)&&(i=i.output);bs(t)?i.connect(t,e):i.connect(t,e,n)}function Jp(i,t,e=0,n=0){if(Yt(t))for(;t instanceof St;)t=t.input;for(;!Zi(i);)Yt(i.output)&&(i=i.output);bs(t)?i.disconnect(t,e):Zi(t)?i.disconnect(t,e,n):i.disconnect()}class jt extends St{constructor(){const t=yt(jt.getDefaults(),arguments,["gain","units"]);super(t),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode,this.gain=new Xt({context:this.context,convert:t.convert,param:this._gainNode.gain,units:t.units,value:t.gain,minValue:t.minValue,maxValue:t.maxValue}),Qt(this,"gain")}static getDefaults(){return Object.assign(St.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class pr extends St{constructor(t){super(t),this.onended=ne,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new jt({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(e){const n=this.toSeconds(e);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut,this._curve=t.curve,this.onended=t.onended}static getDefaults(){return Object.assign(St.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:ne})}_startGain(t,e=1){Nt(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=t+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,t),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(e,t+n):this._gainNode.gain.exponentialApproachValueAtTime(e,t,n)):this._gainNode.gain.setValueAtTime(e,t),this}stop(t){return this.log("stop",t),this._stopGain(this.toSeconds(t)),this}_stopGain(t){Nt(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const e=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(t)+e,this._stopTime=Math.max(this._stopTime,this.now()),e>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,e,t):this._gainNode.gain.targetRampTo(0,e,t):(this._gainNode.gain.cancelAndHoldAtTime(t),this._gainNode.gain.setValueAtTime(0,t)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?e*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==ne&&(this.onended(this),this.onended=ne,!this.context.isOffline)){const t=()=>this.dispose();typeof window.requestIdleCallback<"u"?window.requestIdleCallback(t):setTimeout(t,1e3)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),Nt(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=ne,this}}class Vu extends pr{constructor(){const t=yt(Vu.getDefaults(),arguments,["offset"]);super(t),this.name="ToneConstantSource",this._source=this.context.createConstantSource(),Dn(this._source,this._gainNode),this.offset=new Xt({context:this.context,convert:t.convert,param:this._source.offset,units:t.units,value:t.offset,minValue:t.minValue,maxValue:t.maxValue})}static getDefaults(){return Object.assign(pr.getDefaults(),{convert:!0,offset:1,units:"number"})}start(t){const e=this.toSeconds(t);return this.log("start",e),this._startGain(e),this._source.start(e),this}_stopSource(t){this._source.stop(t)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class ie extends St{constructor(){const t=yt(ie.getDefaults(),arguments,["value","units"]);super(t),this.name="Signal",this.override=!0,this.output=this._constantSource=new Vu({context:this.context,convert:t.convert,offset:t.value,units:t.units,minValue:t.minValue,maxValue:t.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(St.getDefaults(),{convert:!0,units:"number",value:0})}connect(t,e=0,n=0){return Ya(this,t,e,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(t,e){return this._param.setValueAtTime(t,e),this}getValueAtTime(t){return this._param.getValueAtTime(t)}setRampPoint(t){return this._param.setRampPoint(t),this}linearRampToValueAtTime(t,e){return this._param.linearRampToValueAtTime(t,e),this}exponentialRampToValueAtTime(t,e){return this._param.exponentialRampToValueAtTime(t,e),this}exponentialRampTo(t,e,n){return this._param.exponentialRampTo(t,e,n),this}linearRampTo(t,e,n){return this._param.linearRampTo(t,e,n),this}targetRampTo(t,e,n){return this._param.targetRampTo(t,e,n),this}exponentialApproachValueAtTime(t,e,n){return this._param.exponentialApproachValueAtTime(t,e,n),this}setTargetAtTime(t,e,n){return this._param.setTargetAtTime(t,e,n),this}setValueCurveAtTime(t,e,n,s){return this._param.setValueCurveAtTime(t,e,n,s),this}cancelScheduledValues(t){return this._param.cancelScheduledValues(t),this}cancelAndHoldAtTime(t){return this._param.cancelAndHoldAtTime(t),this}rampTo(t,e,n){return this._param.rampTo(t,e,n),this}get value(){return this._param.value}set value(t){this._param.value=t}get convert(){return this._param.convert}set convert(t){this._param.convert=t}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(t){this._param.overridden=t}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(t){return this._param.apply(t),this}}function Ya(i,t,e,n){(t instanceof Xt||bs(t)||t instanceof ie&&t.override)&&(t.cancelScheduledValues(0),t.setValueAtTime(0,0),t instanceof ie&&(t.overridden=!0)),Dn(i,t,e,n)}class Bu extends Xt{constructor(){const t=yt(Bu.getDefaults(),arguments,["value"]);super(t),this.name="TickParam",this._events=new Rn(1/0),this._multiplier=1,this._multiplier=t.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(t.value)}),this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(Xt.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(t,e,n){e=this.toSeconds(e),this.setRampPoint(e);const s=this._fromType(t),r=this._events.get(e),o=Math.round(Math.max(1/n,1));for(let a=0;a<=o;a++){const c=n*a+e,l=this._exponentialApproach(r.time,r.value,s,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(t,e){const n=this.toSeconds(e);super.setValueAtTime(t,e);const s=this._events.get(n),r=this._events.previousEvent(s),o=this._getTicksUntilEvent(r,n);return s.ticks=Math.max(o,0),this}linearRampToValueAtTime(t,e){const n=this.toSeconds(e);super.linearRampToValueAtTime(t,e);const s=this._events.get(n),r=this._events.previousEvent(s),o=this._getTicksUntilEvent(r,n);return s.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(t,e){e=this.toSeconds(e);const n=this._fromType(t),s=this._events.get(e),r=Math.round(Math.max((e-s.time)*10,1)),o=(e-s.time)/r;for(let a=0;a<=r;a++){const c=o*a+s.time,l=this._exponentialInterpolate(s.time,s.value,e,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(t,e){if(t===null)t={ticks:0,time:0,type:"setValueAtTime",value:0};else if(Cn(t.ticks)){const o=this._events.previousEvent(t);t.ticks=this._getTicksUntilEvent(o,t.time)}const n=this._fromType(this.getValueAtTime(t.time));let s=this._fromType(this.getValueAtTime(e));const r=this._events.get(e);return r&&r.time===e&&r.type==="setValueAtTime"&&(s=this._fromType(this.getValueAtTime(e-this.sampleTime))),.5*(e-t.time)*(n+s)+t.ticks}getTicksAtTime(t){const e=this.toSeconds(t),n=this._events.get(e);return Math.max(this._getTicksUntilEvent(n,e),0)}getDurationOfTicks(t,e){const n=this.toSeconds(e),s=this.getTicksAtTime(e);return this.getTimeOfTick(s+t)-n}getTimeOfTick(t){const e=this._events.get(t,"ticks"),n=this._events.getAfter(t,"ticks");if(e&&e.ticks===t)return e.time;if(e&&n&&n.type==="linearRampToValueAtTime"&&e.value!==n.value){const s=this._fromType(this.getValueAtTime(e.time)),o=(this._fromType(this.getValueAtTime(n.time))-s)/(n.time-e.time),a=Math.sqrt(Math.pow(s,2)-2*o*(e.ticks-t)),c=(-s+a)/o,l=(-s-a)/o;return(c>0?c:l)+e.time}else return e?e.value===0?1/0:e.time+(t-e.ticks)/e.value:t/this._initialValue}ticksToTime(t,e){return this.getDurationOfTicks(t,e)}timeToTicks(t,e){const n=this.toSeconds(e),s=this.toSeconds(t),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+s)-r}_fromType(t){return this.units==="bpm"&&this.multiplier?1/(60/t/this.multiplier):super._fromType(t)}_toType(t){return this.units==="bpm"&&this.multiplier?t/this.multiplier*60:super._toType(t)}get multiplier(){return this._multiplier}set multiplier(t){const e=this.value;this._multiplier=t,this.cancelScheduledValues(0),this.setValueAtTime(e,0)}}class zu extends ie{constructor(){const t=yt(zu.getDefaults(),arguments,["value"]);super(t),this.name="TickSignal",this.input=this._param=new Bu({context:this.context,convert:t.convert,multiplier:t.multiplier,param:this._constantSource.offset,units:t.units,value:t.value})}static getDefaults(){return Object.assign(ie.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(t,e){return this._param.ticksToTime(t,e)}timeToTicks(t,e){return this._param.timeToTicks(t,e)}getTimeOfTick(t){return this._param.getTimeOfTick(t)}getDurationOfTicks(t,e){return this._param.getDurationOfTicks(t,e)}getTicksAtTime(t){return this._param.getTicksAtTime(t)}get multiplier(){return this._param.multiplier}set multiplier(t){this._param.multiplier=t}dispose(){return super.dispose(),this._param.dispose(),this}}class Hu extends Ve{constructor(){const t=yt(Hu.getDefaults(),arguments,["frequency"]);super(t),this.name="TickSource",this._state=new ja,this._tickOffset=new Rn,this._ticksAtTime=new Rn,this._secondsAtTime=new Rn,this.frequency=new zu({context:this.context,units:t.units,value:t.frequency}),Qt(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},Ve.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(t,e){const n=this.toSeconds(t);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),Yt(e)&&this.setTicksAtTime(e,n),this._ticksAtTime.cancel(n),this._secondsAtTime.cancel(n)),this}stop(t){const e=this.toSeconds(t);if(this._state.getValueAtTime(e)==="stopped"){const n=this._state.get(e);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(e),this._state.setStateAtTime("stopped",e),this.setTicksAtTime(0,e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}pause(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)==="started"&&(this._state.setStateAtTime("paused",e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e)),this}cancel(t){return t=this.toSeconds(t),this._state.cancel(t),this._tickOffset.cancel(t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}getTicksAtTime(t){const e=this.toSeconds(t),n=this._state.getLastState("stopped",e),s=this._ticksAtTime.get(e),r={state:"paused",time:e};this._state.add(r);let o=s||n,a=s?s.ticks:0,c=null;return this._state.forEachBetween(o.time,e+this.sampleTime,l=>{let u=o.time;const h=this._tickOffset.get(l.time);h&&h.time>=o.time&&(a=h.ticks,u=h.time),o.state==="started"&&l.state!=="started"&&(a+=this.frequency.getTicksAtTime(l.time)-this.frequency.getTicksAtTime(u),l.time!==r.time&&(c={state:l.state,time:l.time,ticks:a})),o=l}),this._state.remove(r),c&&this._ticksAtTime.add(c),a}get ticks(){return this.getTicksAtTime(this.now())}set ticks(t){this.setTicksAtTime(t,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(t){const e=this.now(),n=this.frequency.timeToTicks(t,e);this.setTicksAtTime(n,e)}getSecondsAtTime(t){t=this.toSeconds(t);const e=this._state.getLastState("stopped",t),n={state:"paused",time:t};this._state.add(n);const s=this._secondsAtTime.get(t);let r=s||e,o=s?s.seconds:0,a=null;return this._state.forEachBetween(r.time,t+this.sampleTime,c=>{let l=r.time;const u=this._tickOffset.get(c.time);u&&u.time>=r.time&&(o=u.seconds,l=u.time),r.state==="started"&&c.state!=="started"&&(o+=c.time-l,c.time!==n.time&&(a={state:c.state,time:c.time,seconds:o})),r=c}),this._state.remove(n),a&&this._secondsAtTime.add(a),o}setTicksAtTime(t,e){return e=this.toSeconds(e),this._tickOffset.cancel(e),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(t,e),ticks:t,time:e}),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}getStateAtTime(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)}getTimeOfTick(t,e=this.now()){const n=this._tickOffset.get(e),s=this._state.get(e),r=Math.max(n.time,s.time),o=this.frequency.getTicksAtTime(r)+t-n.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(t,e,n){let s=this._state.get(t);this._state.forEachBetween(t,e,o=>{s&&s.state==="started"&&o.state!=="started"&&this.forEachTickBetween(Math.max(s.time,t),o.time-this.sampleTime,n),s=o});let r=null;if(s&&s.state==="started"){const o=Math.max(s.time,t),a=this.frequency.getTicksAtTime(o),c=this.frequency.getTicksAtTime(s.time),l=a-c;let u=Math.ceil(l)-l;u=kn(u,1)?0:u;let h=this.frequency.getTimeOfTick(a+u);for(;h<e;){try{n(h,Math.round(this.getTicksAtTime(h)))}catch(d){r=d;break}h+=this.frequency.getDurationOfTicks(1,h)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}}class $a extends Ve{constructor(){const t=yt($a.getDefaults(),arguments,["callback","frequency"]);super(t),this.name="Clock",this.callback=ne,this._lastUpdate=0,this._state=new ja("stopped"),this._boundLoop=this._loop.bind(this),this.callback=t.callback,this._tickSource=new Hu({context:this.context,frequency:t.frequency,units:t.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,Qt(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(Ve.getDefaults(),{callback:ne,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(t,e){zp(this.context);const n=this.toSeconds(t);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,e),n<this._lastUpdate&&this.emit("start",n,e)),this}stop(t){const e=this.toSeconds(t);return this.log("stop",e),this._state.cancel(e),this._state.setStateAtTime("stopped",e),this._tickSource.stop(e),e<this._lastUpdate&&this.emit("stop",e),this}pause(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)==="started"&&(this._state.setStateAtTime("paused",e),this._tickSource.pause(e),e<this._lastUpdate&&this.emit("pause",e)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(t){this._tickSource.ticks=t}get seconds(){return this._tickSource.seconds}set seconds(t){this._tickSource.seconds=t}getSecondsAtTime(t){return this._tickSource.getSecondsAtTime(t)}setTicksAtTime(t,e){return this._tickSource.setTicksAtTime(t,e),this}getTimeOfTick(t,e=this.now()){return this._tickSource.getTimeOfTick(t,e)}getTicksAtTime(t){return this._tickSource.getTicksAtTime(t)}nextTickTime(t,e){const n=this.toSeconds(e),s=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(s+t,n)}_loop(){const t=this._lastUpdate,e=this.now();this._lastUpdate=e,this.log("loop",t,e),t!==e&&(this._state.forEachBetween(t,e,n=>{switch(n.state){case"started":const s=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,s);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(t,e,(n,s)=>{this.callback(n,s)}))}getStateAtTime(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}mo.mixin($a);class Gu extends St{constructor(){const t=yt(Gu.getDefaults(),arguments,["delayTime","maxDelay"]);super(t),this.name="Delay";const e=this.toSeconds(t.maxDelay);this._maxDelay=Math.max(e,this.toSeconds(t.delayTime)),this._delayNode=this.input=this.output=this.context.createDelay(e),this.delayTime=new Xt({context:this.context,param:this._delayNode.delayTime,units:"time",value:t.delayTime,minValue:0,maxValue:this.maxDelay}),Qt(this,"delayTime")}static getDefaults(){return Object.assign(St.getDefaults(),{delayTime:0,maxDelay:1})}get maxDelay(){return this._maxDelay}dispose(){return super.dispose(),this._delayNode.disconnect(),this.delayTime.dispose(),this}}class Ds extends St{constructor(){const t=yt(Ds.getDefaults(),arguments,["volume"]);super(t),this.name="Volume",this.input=this.output=new jt({context:this.context,gain:t.volume,units:"decibels"}),this.volume=this.output.gain,Qt(this,"volume"),this._unmutedVolume=t.volume,this.mute=t.mute}static getDefaults(){return Object.assign(St.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(t){!this.mute&&t?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!t&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class Wu extends St{constructor(){const t=yt(Wu.getDefaults(),arguments);super(t),this.name="Destination",this.input=new Ds({context:this.context}),this.output=new jt({context:this.context}),this.volume=this.input.volume,Es(this.input,this.output,this.context.rawContext.destination),this.mute=t.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(St.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(t){this.input.mute=t}chain(...t){return this.input.disconnect(),t.unshift(this.input),t.push(this.output),Es(...t),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}Ga(i=>{i.destination=new Wu({context:i})});Wa(i=>{i.destination.dispose()});class FE extends St{constructor(){super(...arguments),this.name="Listener",this.positionX=new Xt({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new Xt({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new Xt({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new Xt({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new Xt({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new Xt({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new Xt({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new Xt({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new Xt({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(St.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}Ga(i=>{i.listener=new FE({context:i})});Wa(i=>{i.listener.dispose()});class qu extends Ii{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const t=yt(qu.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=t.baseUrl,Object.keys(t.urls).forEach(e=>{this._loadingCount++;const n=t.urls[e];this.add(e,n,this._bufferLoaded.bind(this,t.onload),t.onerror)})}static getDefaults(){return{baseUrl:"",onerror:ne,onload:ne,urls:{}}}has(t){return this._buffers.has(t.toString())}get(t){return Nt(this.has(t),`ToneAudioBuffers has no buffer named: ${t}`),this._buffers.get(t.toString())}_bufferLoaded(t){this._loadingCount--,this._loadingCount===0&&t&&t()}get loaded(){return Array.from(this._buffers).every(([t,e])=>e.loaded)}add(t,e,n=ne,s=ne){return Ci(e)?(this.baseUrl&&e.trim().substring(0,11).toLowerCase()==="data:audio/"&&(this.baseUrl=""),this._buffers.set(t.toString(),new he(this.baseUrl+e,n,s))):this._buffers.set(t.toString(),new he(e,n,s)),this}dispose(){return super.dispose(),this._buffers.forEach(t=>t.dispose()),this._buffers.clear(),this}}class Ta extends gn{constructor(){super(...arguments),this.name="MidiClass",this.defaultUnits="midi"}_frequencyToUnits(t){return _s(super._frequencyToUnits(t))}_ticksToUnits(t){return _s(super._ticksToUnits(t))}_beatsToUnits(t){return _s(super._beatsToUnits(t))}_secondsToUnits(t){return _s(super._secondsToUnits(t))}toMidi(){return this.valueOf()}toFrequency(){return Kp(this.toMidi())}transpose(t){return new Ta(this.context,this.toMidi()+t)}}class wn extends Hr{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(t){return this._getPPQ()*t}_secondsToUnits(t){return Math.floor(t/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(t){return t}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class kE extends Ve{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new Rn,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(t,e){return this._events.add({callback:t,time:this.toSeconds(e)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(t){return this._events.cancel(this.toSeconds(t)),this}_drawLoop(){const t=this.context.currentTime;for(;this._events.length&&this._events.peek().time-this.anticipation<=t;){const e=this._events.shift();e&&t-e.time<=this.expiration&&e.callback()}this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}Ga(i=>{i.draw=new kE({context:i})});Wa(i=>{i.draw.dispose()});class VE extends Ii{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(t){Nt(Yt(t.time),"Events must have a time property"),Nt(Yt(t.duration),"Events must have a duration parameter"),t.time=t.time.valueOf();let e=new BE(t.time,t.time+t.duration,t);for(this._root===null?this._root=e:this._root.insert(e),this._length++;e!==null;)e.updateHeight(),e.updateMax(),this._rebalance(e),e=e.parent;return this}remove(t){if(this._root!==null){const e=[];this._root.search(t.time,e);for(const n of e)if(n.event===t){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(t){return this.forEachFrom(t,e=>this.remove(e)),this}_setRoot(t){this._root=t,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(t,e){t.parent!==null?(t.isLeftChild()?t.parent.left=e:t.parent.right=e,this._rebalance(t.parent)):this._setRoot(e)}_removeNode(t){if(t.left===null&&t.right===null)this._replaceNodeInParent(t,null);else if(t.right===null)this._replaceNodeInParent(t,t.left);else if(t.left===null)this._replaceNodeInParent(t,t.right);else{const e=t.getBalance();let n,s=null;if(e>0)if(t.left.right===null)n=t.left,n.right=t.right,s=n;else{for(n=t.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,s=n.parent,n.left=t.left,n.right=t.right)}else if(t.right.left===null)n=t.right,n.left=t.left,s=n;else{for(n=t.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,s=n.parent,n.left=t.left,n.right=t.right)}t.parent!==null?t.isLeftChild()?t.parent.left=n:t.parent.right=n:this._setRoot(n),s&&this._rebalance(s)}t.dispose()}_rotateLeft(t){const e=t.parent,n=t.isLeftChild(),s=t.right;s&&(t.right=s.left,s.left=t),e!==null?n?e.left=s:e.right=s:this._setRoot(s)}_rotateRight(t){const e=t.parent,n=t.isLeftChild(),s=t.left;s&&(t.left=s.right,s.right=t),e!==null?n?e.left=s:e.right=s:this._setRoot(s)}_rebalance(t){const e=t.getBalance();e>1&&t.left?t.left.getBalance()<0?this._rotateLeft(t.left):this._rotateRight(t):e<-1&&t.right&&(t.right.getBalance()>0?this._rotateRight(t.right):this._rotateLeft(t))}get(t){if(this._root!==null){const e=[];if(this._root.search(t,e),e.length>0){let n=e[0];for(let s=1;s<e.length;s++)e[s].low>n.low&&(n=e[s]);return n.event}}return null}forEach(t){if(this._root!==null){const e=[];this._root.traverse(n=>e.push(n)),e.forEach(n=>{n.event&&t(n.event)})}return this}forEachAtTime(t,e){if(this._root!==null){const n=[];this._root.search(t,n),n.forEach(s=>{s.event&&e(s.event)})}return this}forEachFrom(t,e){if(this._root!==null){const n=[];this._root.searchAfter(t,n),n.forEach(s=>{s.event&&e(s.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(t=>t.dispose()),this._root=null,this}}class BE{constructor(t,e,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=t,this.high=e,this.max=this.high}insert(t){t.low<=this.low?this.left===null?this.left=t:this.left.insert(t):this.right===null?this.right=t:this.right.insert(t)}search(t,e){t>this.max||(this.left!==null&&this.left.search(t,e),this.low<=t&&this.high>t&&e.push(this),!(this.low>t)&&this.right!==null&&this.right.search(t,e))}searchAfter(t,e){this.low>=t&&(e.push(this),this.left!==null&&this.left.searchAfter(t,e)),this.right!==null&&this.right.searchAfter(t,e)}traverse(t){t(this),this.left!==null&&this.left.traverse(t),this.right!==null&&this.right.traverse(t)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let t=0;return this.left!==null&&this.right!==null?t=this.left.height-this.right.height:this.left!==null?t=this.left.height+1:this.right!==null&&(t=-(this.right.height+1)),t}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(t){this._left=t,t!==null&&(t.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(t){this._right=t,t!==null&&(t.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class zE extends Ii{constructor(t){super(),this.name="TimelineValue",this._timeline=new Rn({memory:10}),this._initialValue=t}set(t,e){return this._timeline.add({value:t,time:e}),this}get(t){const e=this._timeline.get(t);return e?e.value:this._initialValue}}class ni extends St{constructor(){super(yt(ni.getDefaults(),arguments,["context"]))}connect(t,e=0,n=0){return Ya(this,t,e,n),this}}class Er extends ni{constructor(){const t=yt(Er.getDefaults(),arguments,["mapping","length"]);super(t),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper,yn(t.mapping)||t.mapping instanceof Float32Array?this.curve=Float32Array.from(t.mapping):pE(t.mapping)&&this.setMap(t.mapping,t.length)}static getDefaults(){return Object.assign(ie.getDefaults(),{length:1024})}setMap(t,e=1024){const n=new Float32Array(e);for(let s=0,r=e;s<r;s++){const o=s/(r-1)*2-1;n[s]=t(o,s)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(t){this._shaper.curve=t}get oversample(){return this._shaper.oversample}set oversample(t){const e=["none","2x","4x"].some(n=>n.includes(t));Nt(e,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=t}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class Xu extends ni{constructor(){const t=yt(Xu.getDefaults(),arguments,["value"]);super(t),this.name="Pow",this._exponentScaler=this.input=this.output=new Er({context:this.context,mapping:this._expFunc(t.value),length:8192}),this._exponent=t.value}static getDefaults(){return Object.assign(ni.getDefaults(),{value:1})}_expFunc(t){return e=>Math.pow(Math.abs(e),t)}get value(){return this._exponent}set value(t){this._exponent=t,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}}class Qi{constructor(t,e){this.id=Qi._eventId++,this._remainderTime=0;const n=Object.assign(Qi.getDefaults(),e);this.transport=t,this.callback=n.callback,this._once=n.once,this.time=Math.floor(n.time),this._remainderTime=n.time-this.time}static getDefaults(){return{callback:ne,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(t){if(this.callback){const e=this.transport.bpm.getDurationOfTicks(1,t);this.callback(t+this._remainderTime*e),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}}Qi._eventId=0;class ju extends Qi{constructor(t,e){super(t,e),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(ju.getDefaults(),e);this.duration=n.duration,this._interval=n.interval,this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.transport.on("ticks",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},Qi.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(t){this._createEvents(t),super.invoke(t)}_createEvent(){return Ma(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new wn(this.context,this._nextTick).toSeconds()):-1}_createEvents(t){Ma(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new wn(this.context,this._nextTick).toSeconds()))}_restart(t){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;const e=this.transport.getTicksAtTime(t);fr(e,this.time)&&(this._nextTick=this.floatTime+Math.ceil((e-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this.transport.off("ticks",this._boundRestart),this}}class Za extends Ve{constructor(){const t=yt(Za.getDefaults(),arguments);super(t),this.name="Transport",this._loop=new zE(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new Rn,this._repeatedEvents=new VE,this._syncedSignals=[],this._swingAmount=0,this._ppq=t.ppq,this._clock=new $a({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=t.ppq,this.bpm.setValueAtTime(t.bpm,0),Qt(this,"bpm"),this._timeSignature=t.timeSignature,this._swingTicks=t.ppq/2}static getDefaults(){return Object.assign(Ve.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(t,e){if(this._loop.get(t)&&e>=this._loopEnd&&(this.emit("loopEnd",t),this._clock.setTicksAtTime(this._loopStart,t),e=this._loopStart,this.emit("loopStart",t,this._clock.getSecondsAtTime(t)),this.emit("loop",t)),this._swingAmount>0&&e%this._ppq!==0&&e%(this._swingTicks*2)!==0){const n=e%(this._swingTicks*2)/(this._swingTicks*2),s=Math.sin(n*Math.PI)*this._swingAmount;t+=new wn(this.context,this._swingTicks*2/3).toSeconds()*s}Zd(!0),this._timeline.forEachAtTime(e,n=>n.invoke(t)),Zd(!1)}schedule(t,e){const n=new Qi(this,{callback:t,time:new Hr(this.context,e).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(t,e,n,s=1/0){const r=new ju(this,{callback:t,duration:new zn(this.context,s).toTicks(),interval:new zn(this.context,e).toTicks(),time:new Hr(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(t,e){const n=new Qi(this,{callback:t,once:!0,time:new Hr(this.context,e).toTicks()});return this._addEvent(n,this._timeline)}clear(t){if(this._scheduledEvents.hasOwnProperty(t)){const e=this._scheduledEvents[t.toString()];e.timeline.remove(e.event),e.event.dispose(),delete this._scheduledEvents[t.toString()]}return this}_addEvent(t,e){return this._scheduledEvents[t.id.toString()]={event:t,timeline:e},e.add(t),t.id}cancel(t=0){const e=this.toTicks(t);return this._timeline.forEachFrom(e,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(e,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(t,e)=>{e=new wn(this.context,e).toSeconds(),this.emit("start",t,e)}),this._clock.on("stop",t=>{this.emit("stop",t)}),this._clock.on("pause",t=>{this.emit("pause",t)})}get state(){return this._clock.getStateAtTime(this.now())}start(t,e){this.context.resume();let n;return Yt(e)&&(n=this.toTicks(e)),this._clock.start(t,n),this}stop(t){return this._clock.stop(t),this}pause(t){return this._clock.pause(t),this}toggle(t){return t=this.toSeconds(t),this._clock.getStateAtTime(t)!=="started"?this.start(t):this.stop(t),this}get timeSignature(){return this._timeSignature}set timeSignature(t){yn(t)&&(t=t[0]/t[1]*4),this._timeSignature=t}get loopStart(){return new zn(this.context,this._loopStart,"i").toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t)}get loopEnd(){return new zn(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t)}get loop(){return this._loop.get(this.now())}set loop(t){this._loop.set(t,this.now())}setLoopPoints(t,e){return this.loopStart=t,this.loopEnd=e,this}get swing(){return this._swingAmount}set swing(t){this._swingAmount=t}get swingSubdivision(){return new wn(this.context,this._swingTicks).toNotation()}set swingSubdivision(t){this._swingTicks=this.toTicks(t)}get position(){const t=this.now(),e=this._clock.getTicksAtTime(t);return new wn(this.context,e).toBarsBeatsSixteenths()}set position(t){const e=this.toTicks(t);this.ticks=e}get seconds(){return this._clock.seconds}set seconds(t){const e=this.now(),n=this._clock.frequency.timeToTicks(t,e);this.ticks=n}get progress(){if(this.loop){const t=this.now();return(this._clock.getTicksAtTime(t)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(t){if(this._clock.ticks!==t){const e=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(e),s=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,e),r=e+s;this.emit("stop",r),this._clock.setTicksAtTime(t,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this.emit("ticks",e),this._clock.setTicksAtTime(t,e)}}getTicksAtTime(t){return this._clock.getTicksAtTime(t)}getSecondsAtTime(t){return this._clock.getSecondsAtTime(t)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(t){this._clock.frequency.multiplier=t}nextSubdivision(t){if(t=this.toTicks(t),this.state!=="started")return 0;{const e=this.now(),n=this.getTicksAtTime(e),s=t-n%t;return this._clock.nextTickTime(s,e)}}syncSignal(t,e){const n=this.now();let s=this.bpm,r=1/(60/s.getValueAtTime(n)/this.PPQ),o=[];if(t.units==="time"){const c=.015625/r,l=new jt(c),u=new Xu(-1),h=new jt(c);s.chain(l,u,h),s=h,r=1/r,o=[l,u,h]}e||(t.getValueAtTime(n)!==0?e=t.getValueAtTime(n)/r:e=0);const a=new jt(e);return s.connect(a),a.connect(t._param),o.push(a),this._syncedSignals.push({initial:t.value,nodes:o,signal:t}),t.value=0,this}unsyncSignal(t){for(let e=this._syncedSignals.length-1;e>=0;e--){const n=this._syncedSignals[e];n.signal===t&&(n.nodes.forEach(s=>s.dispose()),n.signal.value=n.initial,this._syncedSignals.splice(e,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),Fu(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}mo.mixin(Za);Ga(i=>{i.transport=new Za({context:i})});Wa(i=>{i.transport.dispose()});class Be extends St{constructor(t){super(t),this.input=void 0,this._state=new ja("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=ne,this._syncedStop=ne,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new Ds({context:this.context,mute:t.mute,volume:t.volume}),this.volume=this._volume.volume,Qt(this,"volume"),this.onstop=t.onstop}static getDefaults(){return Object.assign(St.getDefaults(),{mute:!1,onstop:ne,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}_clampToCurrentTime(t){return this._synced?t:Math.max(t,this.context.currentTime)}start(t,e,n){let s=Cn(t)&&this._synced?this.context.transport.seconds:this.toSeconds(t);if(s=this._clampToCurrentTime(s),!this._synced&&this._state.getValueAtTime(s)==="started")Nt(fr(s,this._state.get(s).time),"Start time must be strictly greater than previous start time"),this._state.cancel(s),this._state.setStateAtTime("started",s),this.log("restart",s),this.restart(s,e,n);else if(this.log("start",s),this._state.setStateAtTime("started",s),this._synced){const r=this._state.get(s);r&&(r.offset=this.toSeconds(Ss(e,0)),r.duration=n?this.toSeconds(n):void 0);const o=this.context.transport.schedule(a=>{this._start(a,e,n)},s);this._scheduled.push(o),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>s&&this._syncedStart(this.now(),this.context.transport.seconds)}else zp(this.context),this._start(s,e,n);return this}stop(t){let e=Cn(t)&&this._synced?this.context.transport.seconds:this.toSeconds(t);if(e=this._clampToCurrentTime(e),this._state.getValueAtTime(e)==="started"||Yt(this._state.getNextState("started",e))){if(this.log("stop",e),!this._synced)this._stop(e);else{const n=this.context.transport.schedule(this._stop.bind(this),e);this._scheduled.push(n)}this._state.cancel(e),this._state.setStateAtTime("stopped",e)}return this}restart(t,e,n){return t=this.toSeconds(t),this._state.getValueAtTime(t)==="started"&&(this._state.cancel(t),this._restart(t,e,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(t,e)=>{if(fr(e,0)){const n=this._state.get(e);if(n&&n.state==="started"&&n.time!==e){const s=e-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-s),this._start(t,this.toSeconds(n.offset)+s,r)}}},this._syncedStop=t=>{const e=this.context.transport.getSecondsAtTime(Math.max(t-this.sampleTime,0));this._state.getValueAtTime(e)==="started"&&this._stop(t)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(t=>this.context.transport.clear(t)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=ne,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class _o extends pr{constructor(){const t=yt(_o.getDefaults(),arguments,["url","onload"]);super(t),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1,Dn(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new Xt({context:this.context,param:this._source.playbackRate,units:"positive",value:t.playbackRate}),this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this._buffer=new he(t.url,t.onload,t.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(pr.getDefaults(),{url:new he,loop:!1,loopEnd:0,loopStart:0,onload:ne,onerror:ne,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(t){this._fadeIn=t}get fadeOut(){return this._fadeOut}set fadeOut(t){this._fadeOut=t}get curve(){return this._curve}set curve(t){this._curve=t}start(t,e,n,s=1){Nt(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(t);this._startGain(r,s),this.loop?e=Ss(e,this.loopStart):e=Ss(e,0);let o=Math.max(this.toSeconds(e),0);if(this.loop){const a=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=a-c;tu(o,a)&&(o=(o-c)%l+c),kn(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,Ma(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,o)),Yt(n)){let a=this.toSeconds(n);a=Math.max(a,0),this.stop(r+a)}return this}_stopSource(t){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(t)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(t){this._source.loopStart=this.toSeconds(t)}get loopEnd(){return this._source.loopEnd}set loopEnd(t){this._source.loopEnd=this.toSeconds(t)}get buffer(){return this._buffer}set buffer(t){this._buffer.set(t)}get loop(){return this._source.loop}set loop(t){this._source.loop=t,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}class ts extends Be{constructor(){const t=yt(ts.getDefaults(),arguments,["type"]);super(t),this.name="Noise",this._source=null,this._playbackRate=t.playbackRate,this.type=t.type,this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut}static getDefaults(){return Object.assign(Be.getDefaults(),{fadeIn:0,fadeOut:0,playbackRate:1,type:"white"})}get type(){return this._type}set type(t){if(Nt(t in Kd,"Noise: invalid type: "+t),this._type!==t&&(this._type=t,this.state==="started")){const e=this.now();this._stop(e),this._start(e)}}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._source&&(this._source.playbackRate.value=t)}_start(t){const e=Kd[this._type];this._source=new _o({url:e,context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,loop:!0,onended:()=>this.onstop(this),playbackRate:this._playbackRate}).connect(this.output),this._source.start(this.toSeconds(t),Math.random()*(e.duration-.001))}_stop(t){this._source&&(this._source.stop(this.toSeconds(t)),this._source=null)}get fadeIn(){return this._fadeIn}set fadeIn(t){this._fadeIn=t,this._source&&(this._source.fadeIn=this._fadeIn)}get fadeOut(){return this._fadeOut}set fadeOut(t){this._fadeOut=t,this._source&&(this._source.fadeOut=this._fadeOut)}_restart(t){this._stop(t),this._start(t)}dispose(){return super.dispose(),this._source&&this._source.disconnect(),this}}const js=44100*5,$c=2,pi={brown:null,pink:null,white:null},Kd={get brown(){if(!pi.brown){const i=[];for(let t=0;t<$c;t++){const e=new Float32Array(js);i[t]=e;let n=0;for(let s=0;s<js;s++){const r=Math.random()*2-1;e[s]=(n+.02*r)/1.02,n=e[s],e[s]*=3.5}}pi.brown=new he().fromArray(i)}return pi.brown},get pink(){if(!pi.pink){const i=[];for(let t=0;t<$c;t++){const e=new Float32Array(js);i[t]=e;let n,s,r,o,a,c,l;n=s=r=o=a=c=l=0;for(let u=0;u<js;u++){const h=Math.random()*2-1;n=.99886*n+h*.0555179,s=.99332*s+h*.0750759,r=.969*r+h*.153852,o=.8665*o+h*.3104856,a=.55*a+h*.5329522,c=-.7616*c-h*.016898,e[u]=n+s+r+o+a+c+l+h*.5362,e[u]*=.11,l=h*.115926}}pi.pink=new he().fromArray(i)}return pi.pink},get white(){if(!pi.white){const i=[];for(let t=0;t<$c;t++){const e=new Float32Array(js);i[t]=e;for(let n=0;n<js;n++)e[n]=Math.random()*2-1}pi.white=new he().fromArray(i)}return pi.white}};function Ps(i,t){return Ae(this,void 0,void 0,function*(){const e=t/i.context.sampleRate,n=new qa(1,e,i.context.sampleRate);return new i.constructor(Object.assign(i.get(),{frequency:2/e,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class Yu extends pr{constructor(){const t=yt(Yu.getDefaults(),arguments,["frequency","type"]);super(t),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator],Dn(this._oscillator,this._gainNode),this.type=t.type,this.frequency=new Xt({context:this.context,param:this._oscillator.frequency,units:"frequency",value:t.frequency}),this.detune=new Xt({context:this.context,param:this._oscillator.detune,units:"cents",value:t.detune}),Qt(this,["frequency","detune"])}static getDefaults(){return Object.assign(pr.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(t){const e=this.toSeconds(t);return this.log("start",e),this._startGain(e),this._oscillator.start(e),this}_stopSource(t){this._oscillator.stop(t)}setPeriodicWave(t){return this._oscillator.setPeriodicWave(t),this}get type(){return this._oscillator.type}set type(t){this._oscillator.type=t}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class Se extends Be{constructor(){const t=yt(Se.getDefaults(),arguments,["frequency","type"]);super(t),this.name="Oscillator",this._oscillator=null,this.frequency=new ie({context:this.context,units:"frequency",value:t.frequency}),Qt(this,"frequency"),this.detune=new ie({context:this.context,units:"cents",value:t.detune}),Qt(this,"detune"),this._partials=t.partials,this._partialCount=t.partialCount,this._type=t.type,t.partialCount&&t.type!=="custom"&&(this._type=this.baseType+t.partialCount.toString()),this.phase=t.phase}static getDefaults(){return Object.assign(Be.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(t){const e=this.toSeconds(t),n=new Yu({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(e)}_stop(t){const e=this.toSeconds(t);this._oscillator&&this._oscillator.stop(e)}_restart(t){const e=this.toSeconds(t);return this.log("restart",e),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(e),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return Se._periodicWaveCache.find(e=>e.phase===this._phase&&wE(e.partials,this._partials));{const t=Se._periodicWaveCache.find(e=>e.type===this._type&&e.phase===this._phase);return this._partialCount=t?t.partialCount:this._partialCount,t}}get type(){return this._type}set type(t){this._type=t;const e=["sine","square","sawtooth","triangle"].indexOf(t)!==-1;if(this._phase===0&&e)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=t);else{const n=this._getCachedPeriodicWave();if(Yt(n)){const{partials:s,wave:r}=n;this._wave=r,this._partials=s,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[s,r]=this._getRealImaginary(t,this._phase),o=this.context.createPeriodicWave(s,r);this._wave=o,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),Se._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:s,type:this._type,wave:this._wave}),Se._periodicWaveCache.length>100&&Se._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(t){this.partialCount&&this._type!=="custom"&&t!=="custom"?this.type=t+this.partialCount:this.type=t}get partialCount(){return this._partialCount}set partialCount(t){Wn(t,0);let e=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(e=n[1]),this._type!=="custom")t===0?this.type=e:this.type=e+t.toString();else{const s=new Float32Array(t);this._partials.forEach((r,o)=>s[o]=r),this._partials=Array.from(s),this.type=this._type}}_getRealImaginary(t,e){let s=2048;const r=new Float32Array(s),o=new Float32Array(s);let a=1;if(t==="custom"){if(a=this._partials.length+1,this._partialCount=this._partials.length,s=a,this._partials.length===0)return[r,o]}else{const c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);c?(a=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),t=c[1],a=Math.max(a,2),s=a):this._partialCount=0,this._partials=[]}for(let c=1;c<s;++c){const l=2/(c*Math.PI);let u;switch(t){case"sine":u=c<=a?1:0,this._partials[c-1]=u;break;case"square":u=c&1?2*l:0,this._partials[c-1]=u;break;case"sawtooth":u=l*(c&1?1:-1),this._partials[c-1]=u;break;case"triangle":c&1?u=2*(l*l)*(c-1>>1&1?-1:1):u=0,this._partials[c-1]=u;break;case"custom":u=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+t)}u!==0?(r[c]=-u*Math.sin(e*c),o[c]=u*Math.cos(e*c)):(r[c]=0,o[c]=0)}return[r,o]}_inverseFFT(t,e,n){let s=0;const r=t.length;for(let o=0;o<r;o++)s+=t[o]*Math.cos(o*n)+e[o]*Math.sin(o*n);return s}getInitialValue(){const[t,e]=this._getRealImaginary(this._type,0);let n=0;const s=Math.PI*2,r=32;for(let o=0;o<r;o++)n=Math.max(this._inverseFFT(t,e,o/r*s),n);return EE(-this._inverseFFT(t,e,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(t){this._partials=t,this._partialCount=this._partials.length,t.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(t){this._phase=t*Math.PI/180,this.type=this._type}asArray(){return Ae(this,arguments,void 0,function*(t=1024){return Ps(this,t)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}Se._periodicWaveCache=[];class Qp extends ni{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new Er({context:this.context,mapping:t=>(t+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class Ri extends ie{constructor(){const t=yt(Ri.getDefaults(),arguments,["value"]);super(t),this.name="Multiply",this.override=!1,this._mult=this.input=this.output=new jt({context:this.context,minValue:t.minValue,maxValue:t.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(ie.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class Ka extends Be{constructor(){const t=yt(Ka.getDefaults(),arguments,["frequency","type","modulationType"]);super(t),this.name="AMOscillator",this._modulationScale=new Qp({context:this.context}),this._modulationNode=new jt({context:this.context}),this._carrier=new Se({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new Se({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new Ri({context:this.context,units:"positive",value:t.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),Qt(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Se.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(t){this._modulator.start(t),this._carrier.start(t)}_stop(t){this._modulator.stop(t),this._carrier.stop(t)}_restart(t){this._modulator.restart(t),this._carrier.restart(t)}get type(){return this._carrier.type}set type(t){this._carrier.type=t}get baseType(){return this._carrier.baseType}set baseType(t){this._carrier.baseType=t}get partialCount(){return this._carrier.partialCount}set partialCount(t){this._carrier.partialCount=t}get modulationType(){return this._modulator.type}set modulationType(t){this._modulator.type=t}get phase(){return this._carrier.phase}set phase(t){this._carrier.phase=t,this._modulator.phase=t}get partials(){return this._carrier.partials}set partials(t){this._carrier.partials=t}asArray(){return Ae(this,arguments,void 0,function*(t=1024){return Ps(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class Ja extends Be{constructor(){const t=yt(Ja.getDefaults(),arguments,["frequency","type","modulationType"]);super(t),this.name="FMOscillator",this._modulationNode=new jt({context:this.context,gain:0}),this._carrier=new Se({context:this.context,detune:t.detune,frequency:0,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.detune=this._carrier.detune,this.frequency=new ie({context:this.context,units:"frequency",value:t.frequency}),this._modulator=new Se({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new Ri({context:this.context,units:"positive",value:t.harmonicity}),this.modulationIndex=new Ri({context:this.context,units:"positive",value:t.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),Qt(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Se.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(t){this._modulator.start(t),this._carrier.start(t)}_stop(t){this._modulator.stop(t),this._carrier.stop(t)}_restart(t){return this._modulator.restart(t),this._carrier.restart(t),this}get type(){return this._carrier.type}set type(t){this._carrier.type=t}get baseType(){return this._carrier.baseType}set baseType(t){this._carrier.baseType=t}get partialCount(){return this._carrier.partialCount}set partialCount(t){this._carrier.partialCount=t}get modulationType(){return this._modulator.type}set modulationType(t){this._modulator.type=t}get phase(){return this._carrier.phase}set phase(t){this._carrier.phase=t,this._modulator.phase=t}get partials(){return this._carrier.partials}set partials(t){this._carrier.partials=t}asArray(){return Ae(this,arguments,void 0,function*(t=1024){return Ps(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class vo extends Be{constructor(){const t=yt(vo.getDefaults(),arguments,["frequency","width"]);super(t),this.name="PulseOscillator",this._widthGate=new jt({context:this.context,gain:0}),this._thresh=new Er({context:this.context,mapping:e=>e<=0?-1:1}),this.width=new ie({context:this.context,units:"audioRange",value:t.width}),this._triangle=new Se({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),Qt(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(Be.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(t){t=this.toSeconds(t),this._triangle.start(t),this._widthGate.gain.setValueAtTime(1,t)}_stop(t){t=this.toSeconds(t),this._triangle.stop(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(0,t)}_restart(t){this._triangle.restart(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(1,t)}get phase(){return this._triangle.phase}set phase(t){this._triangle.phase=t}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(t){this._triangle.type=t}asArray(){return Ae(this,arguments,void 0,function*(t=1024){return Ps(this,t)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class Qa extends Be{constructor(){const t=yt(Qa.getDefaults(),arguments,["frequency","type","spread"]);super(t),this.name="FatOscillator",this._oscillators=[],this.frequency=new ie({context:this.context,units:"frequency",value:t.frequency}),this.detune=new ie({context:this.context,units:"cents",value:t.detune}),this._spread=t.spread,this._type=t.type,this._phase=t.phase,this._partials=t.partials,this._partialCount=t.partialCount,this.count=t.count,Qt(this,["frequency","detune"])}static getDefaults(){return Object.assign(Se.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(t){t=this.toSeconds(t),this._forEach(e=>e.start(t))}_stop(t){t=this.toSeconds(t),this._forEach(e=>e.stop(t))}_restart(t){this._forEach(e=>e.restart(t))}_forEach(t){for(let e=0;e<this._oscillators.length;e++)t(this._oscillators[e],e)}get type(){return this._type}set type(t){this._type=t,this._forEach(e=>e.type=t)}get spread(){return this._spread}set spread(t){if(this._spread=t,this._oscillators.length>1){const e=-t/2,n=t/(this._oscillators.length-1);this._forEach((s,r)=>s.detune.value=e+n*r)}}get count(){return this._oscillators.length}set count(t){if(Wn(t,1),this._oscillators.length!==t){this._forEach(e=>e.dispose()),this._oscillators=[];for(let e=0;e<t;e++){const n=new Se({context:this.context,volume:-6-t*1.1,type:this._type,phase:this._phase+e/t*360,partialCount:this._partialCount,onstop:e===0?()=>this.onstop(this):ne});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[e]=n}this.spread=this._spread,this.state==="started"&&this._forEach(e=>e.start())}}get phase(){return this._phase}set phase(t){this._phase=t,this._forEach((e,n)=>e.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(t){this._forEach(e=>e.baseType=t),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(t){this._partials=t,this._partialCount=this._partials.length,t.length&&(this._type="custom",this._forEach(e=>e.partials=t))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(t){this._partialCount=t,this._forEach(e=>e.partialCount=t),this._type=this._oscillators[0].type}asArray(){return Ae(this,arguments,void 0,function*(t=1024){return Ps(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(t=>t.dispose()),this}}class tc extends Be{constructor(){const t=yt(tc.getDefaults(),arguments,["frequency","modulationFrequency"]);super(t),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new Ri({context:this.context,value:2}),this._pulse=new vo({context:this.context,frequency:t.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new Se({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),Qt(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(Be.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(t){t=this.toSeconds(t),this._modulator.start(t),this._pulse.start(t)}_stop(t){t=this.toSeconds(t),this._modulator.stop(t),this._pulse.stop(t)}_restart(t){this._modulator.restart(t),this._pulse.restart(t)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(t){this._modulator.phase=t}asArray(){return Ae(this,arguments,void 0,function*(t=1024){return Ps(this,t)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const Jd={am:Ka,fat:Qa,fm:Ja,oscillator:Se,pulse:vo,pwm:tc};class mr extends Be{constructor(){const t=yt(mr.getDefaults(),arguments,["frequency","type"]);super(t),this.name="OmniOscillator",this.frequency=new ie({context:this.context,units:"frequency",value:t.frequency}),this.detune=new ie({context:this.context,units:"cents",value:t.detune}),Qt(this,["frequency","detune"]),this.set(t)}static getDefaults(){return Object.assign(Se.getDefaults(),Ja.getDefaults(),Ka.getDefaults(),Qa.getDefaults(),vo.getDefaults(),tc.getDefaults())}_start(t){this._oscillator.start(t)}_stop(t){this._oscillator.stop(t)}_restart(t){return this._oscillator.restart(t),this}get type(){let t="";return["am","fm","fat"].some(e=>this._sourceType===e)&&(t=this._sourceType),t+this._oscillator.type}set type(t){t.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(2)):t.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(2)):t.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(3)):t==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):t==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=t)}get partials(){return this._oscillator.partials}set partials(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=t)}get partialCount(){return this._oscillator.partialCount}set partialCount(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=t)}set(t){return Reflect.has(t,"type")&&t.type&&(this.type=t.type),super.set(t),this}_createNewOscillator(t){if(t!==this._sourceType){this._sourceType=t;const e=Jd[t],n=this.now();if(this._oscillator){const s=this._oscillator;s.stop(n),this.context.setTimeout(()=>s.dispose(),this.blockTime)}this._oscillator=new e({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(t){this._oscillator.phase=t}get sourceType(){return this._sourceType}set sourceType(t){let e="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(e=this._oscillator.type),t==="fm"?this.type="fm"+e:t==="am"?this.type="am"+e:t==="fat"?this.type="fat"+e:t==="oscillator"?this.type=e:t==="pulse"?this.type="pulse":t==="pwm"&&(this.type="pwm")}_getOscType(t,e){return t instanceof Jd[e]}get baseType(){return this._oscillator.baseType}set baseType(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&t!=="pulse"&&t!=="pwm"&&(this._oscillator.baseType=t)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(t){this._getOscType(this._oscillator,"fat")&&Gn(t)&&(this._oscillator.count=t)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(t){this._getOscType(this._oscillator,"fat")&&Gn(t)&&(this._oscillator.spread=t)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(t){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&Ci(t)&&(this._oscillator.modulationType=t)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(){return Ae(this,arguments,void 0,function*(t=1024){return Ps(this,t)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}class $u extends ie{constructor(){super(yt($u.getDefaults(),arguments,["value"])),this.override=!1,this.name="Add",this._sum=new jt({context:this.context}),this.input=this._sum,this.output=this._sum,this.addend=this._param,Es(this._constantSource,this._sum)}static getDefaults(){return Object.assign(ie.getDefaults(),{value:0})}dispose(){return super.dispose(),this._sum.dispose(),this}}class Zu extends ni{constructor(){const t=yt(Zu.getDefaults(),arguments,["min","max"]);super(t),this.name="Scale",this._mult=this.input=new Ri({context:this.context,value:t.max-t.min}),this._add=this.output=new $u({context:this.context,value:t.min}),this._min=t.min,this._max=t.max,this.input.connect(this.output)}static getDefaults(){return Object.assign(ni.getDefaults(),{max:1,min:0})}get min(){return this._min}set min(t){this._min=t,this._setRange()}get max(){return this._max}set max(t){this._max=t,this._setRange()}_setRange(){this._add.value=this._min,this._mult.value=this._max-this._min}dispose(){return super.dispose(),this._add.dispose(),this._mult.dispose(),this}}class Ku extends ni{constructor(){super(yt(Ku.getDefaults(),arguments)),this.name="Zero",this._gain=new jt({context:this.context}),this.output=this._gain,this.input=void 0,Dn(this.context.getConstant(0),this._gain)}dispose(){return super.dispose(),Jp(this.context.getConstant(0),this._gain),this}}class gr extends St{constructor(){const t=yt(gr.getDefaults(),arguments,["frequency","min","max"]);super(t),this.name="LFO",this._stoppedValue=0,this._units="number",this.convert=!0,this._fromType=Xt.prototype._fromType,this._toType=Xt.prototype._toType,this._is=Xt.prototype._is,this._clampValue=Xt.prototype._clampValue,this._oscillator=new Se(t),this.frequency=this._oscillator.frequency,this._amplitudeGain=new jt({context:this.context,gain:t.amplitude,units:"normalRange"}),this.amplitude=this._amplitudeGain.gain,this._stoppedSignal=new ie({context:this.context,units:"audioRange",value:0}),this._zeros=new Ku({context:this.context}),this._a2g=new Qp({context:this.context}),this._scaler=this.output=new Zu({context:this.context,max:t.max,min:t.min}),this.units=t.units,this.min=t.min,this.max=t.max,this._oscillator.chain(this._amplitudeGain,this._a2g,this._scaler),this._zeros.connect(this._a2g),this._stoppedSignal.connect(this._a2g),Qt(this,["amplitude","frequency"]),this.phase=t.phase}static getDefaults(){return Object.assign(Se.getDefaults(),{amplitude:1,frequency:"4n",max:1,min:0,type:"sine",units:"number"})}start(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(0,t),this._oscillator.start(t),this}stop(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(this._stoppedValue,t),this._oscillator.stop(t),this}sync(){return this._oscillator.sync(),this._oscillator.syncFrequency(),this}unsync(){return this._oscillator.unsync(),this._oscillator.unsyncFrequency(),this}_setStoppedValue(){this._stoppedValue=this._oscillator.getInitialValue(),this._stoppedSignal.value=this._stoppedValue}get min(){return this._toType(this._scaler.min)}set min(t){t=this._fromType(t),this._scaler.min=t}get max(){return this._toType(this._scaler.max)}set max(t){t=this._fromType(t),this._scaler.max=t}get type(){return this._oscillator.type}set type(t){this._oscillator.type=t,this._setStoppedValue()}get partials(){return this._oscillator.partials}set partials(t){this._oscillator.partials=t,this._setStoppedValue()}get phase(){return this._oscillator.phase}set phase(t){this._oscillator.phase=t,this._setStoppedValue()}get units(){return this._units}set units(t){const e=this.min,n=this.max;this._units=t,this.min=e,this.max=n}get state(){return this._oscillator.state}connect(t,e,n){return(t instanceof Xt||t instanceof ie)&&(this.convert=t.convert,this.units=t.units),Ya(this,t,e,n),this}dispose(){return super.dispose(),this._oscillator.dispose(),this._stoppedSignal.dispose(),this._zeros.dispose(),this._scaler.dispose(),this._a2g.dispose(),this._amplitudeGain.dispose(),this.amplitude.dispose(),this}}function tm(i,t=1/0){const e=new WeakMap;return function(n,s){Reflect.defineProperty(n,s,{configurable:!0,enumerable:!0,get:function(){return e.get(this)},set:function(r){Wn(r,i,t),e.set(this,r)}})}}function Ni(i,t=1/0){const e=new WeakMap;return function(n,s){Reflect.defineProperty(n,s,{configurable:!0,enumerable:!0,get:function(){return e.get(this)},set:function(r){Wn(this.toSeconds(r),i,t),e.set(this,r)}})}}class ec extends Be{constructor(){const t=yt(ec.getDefaults(),arguments,["url","onload"]);super(t),this.name="Player",this._activeSources=new Set,this._buffer=new he({onload:this._onload.bind(this,t.onload),onerror:t.onerror,reverse:t.reverse,url:t.url}),this.autostart=t.autostart,this._loop=t.loop,this._loopStart=t.loopStart,this._loopEnd=t.loopEnd,this._playbackRate=t.playbackRate,this.fadeIn=t.fadeIn,this.fadeOut=t.fadeOut}static getDefaults(){return Object.assign(Be.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:ne,onerror:ne,playbackRate:1,reverse:!1})}load(t){return Ae(this,void 0,void 0,function*(){return yield this._buffer.load(t),this._onload(),this})}_onload(t=ne){t(),this.autostart&&this.start()}_onSourceEnd(t){this.onstop(this),this._activeSources.delete(t),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(t,e,n){return super.start(t,e,n),this}_start(t,e,n){this._loop?e=Ss(e,this._loopStart):e=Ss(e,0);const s=this.toSeconds(e),r=n;n=Ss(n,Math.max(this._buffer.duration-s,0));let o=this.toSeconds(n);o=o/this._playbackRate,t=this.toSeconds(t);const a=new _o({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(t+o),this._state.setStateAtTime("stopped",t+o,{implicitEnd:!0})),this._activeSources.add(a),this._loop&&Cn(r)?a.start(t,s):a.start(t,s,o-this.toSeconds(this.fadeOut))}_stop(t){const e=this.toSeconds(t);this._activeSources.forEach(n=>n.stop(e))}restart(t,e,n){return super.restart(t,e,n),this}_restart(t,e,n){var s;(s=[...this._activeSources].pop())===null||s===void 0||s.stop(t),this._start(t,e,n)}seek(t,e){const n=this.toSeconds(e);if(this._state.getValueAtTime(n)==="started"){const s=this.toSeconds(t);this._stop(n),this._start(n,s)}return this}setLoopPoints(t,e){return this.loopStart=t,this.loopEnd=e,this}get loopStart(){return this._loopStart}set loopStart(t){this._loopStart=t,this.buffer.loaded&&Wn(this.toSeconds(t),0,this.buffer.duration),this._activeSources.forEach(e=>{e.loopStart=t})}get loopEnd(){return this._loopEnd}set loopEnd(t){this._loopEnd=t,this.buffer.loaded&&Wn(this.toSeconds(t),0,this.buffer.duration),this._activeSources.forEach(e=>{e.loopEnd=t})}get buffer(){return this._buffer}set buffer(t){this._buffer.set(t)}get loop(){return this._loop}set loop(t){if(this._loop!==t&&(this._loop=t,this._activeSources.forEach(e=>{e.loop=t}),t)){const e=this._state.getNextState("stopped",this.now());e&&this._state.cancel(e.time)}}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t;const e=this.now(),n=this._state.getNextState("stopped",e);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(s=>s.cancelStop())),this._activeSources.forEach(s=>{s.playbackRate.setValueAtTime(t,e)})}get reverse(){return this._buffer.reverse}set reverse(t){this._buffer.reverse=t}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(t=>t.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}$n([Ni(0)],ec.prototype,"fadeIn",void 0);$n([Ni(0)],ec.prototype,"fadeOut",void 0);class HE extends ni{constructor(){super(...arguments),this.name="GainToAudio",this._norm=new Er({context:this.context,mapping:t=>Math.abs(t)*2-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class qn extends St{constructor(){const t=yt(qn.getDefaults(),arguments,["attack","decay","sustain","release"]);super(t),this.name="Envelope",this._sig=new ie({context:this.context,value:0}),this.output=this._sig,this.input=void 0,this.attack=t.attack,this.decay=t.decay,this.sustain=t.sustain,this.release=t.release,this.attackCurve=t.attackCurve,this.releaseCurve=t.releaseCurve,this.decayCurve=t.decayCurve}static getDefaults(){return Object.assign(St.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(t,e){if(Ci(t))return t;{let n;for(n in Qo)if(Qo[n][e]===t)return n;return t}}_setCurve(t,e,n){if(Ci(n)&&Reflect.has(Qo,n)){const s=Qo[n];xs(s)?t!=="_decayCurve"&&(this[t]=s[e]):this[t]=s}else if(yn(n)&&t!=="_decayCurve")this[t]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(t){this._setCurve("_attackCurve","In",t)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(t){this._setCurve("_releaseCurve","Out",t)}get decayCurve(){return this._getCurve(this._decayCurve,"Out")}set decayCurve(t){this._setCurve("_decayCurve","Out",t)}triggerAttack(t,e=1){this.log("triggerAttack",t,e),t=this.toSeconds(t);let s=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),o=this.getValueAtTime(t);if(o>0){const a=1/s;s=(1-o)/a}if(s<this.sampleTime)this._sig.cancelScheduledValues(t),this._sig.setValueAtTime(e,t);else if(this._attackCurve==="linear")this._sig.linearRampTo(e,s,t);else if(this._attackCurve==="exponential")this._sig.targetRampTo(e,s,t);else{this._sig.cancelAndHoldAtTime(t);let a=this._attackCurve;for(let c=1;c<a.length;c++)if(a[c-1]<=o&&o<=a[c]){a=this._attackCurve.slice(c),a[0]=o;break}this._sig.setValueCurveAtTime(a,t,s,e)}if(r&&this.sustain<1){const a=e*this.sustain,c=t+s;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(a,r+c):this._sig.exponentialApproachValueAtTime(a,c,r)}return this}triggerRelease(t){this.log("triggerRelease",t),t=this.toSeconds(t);const e=this.getValueAtTime(t);if(e>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,t):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,t):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,t):(Nt(yn(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(t),this._sig.setValueCurveAtTime(this._releaseCurve,t,n,e))}return this}getValueAtTime(t){return this._sig.getValueAtTime(t)}triggerAttackRelease(t,e,n=1){return e=this.toSeconds(e),this.triggerAttack(e,n),this.triggerRelease(e+this.toSeconds(t)),this}cancel(t){return this._sig.cancelScheduledValues(this.toSeconds(t)),this}connect(t,e=0,n=0){return Ya(this,t,e,n),this}asArray(){return Ae(this,arguments,void 0,function*(t=1024){const e=t/this.context.sampleRate,n=new qa(1,e,this.context.sampleRate),s=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=s+this.toSeconds(this.release),o=r*.1,a=r+o,c=new this.constructor(Object.assign(this.get(),{attack:e*this.toSeconds(this.attack)/a,decay:e*this.toSeconds(this.decay)/a,release:e*this.toSeconds(this.release)/a,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(e*(s+o)/a,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}$n([Ni(0)],qn.prototype,"attack",void 0);$n([Ni(0)],qn.prototype,"decay",void 0);$n([tm(0,1)],qn.prototype,"sustain",void 0);$n([Ni(0)],qn.prototype,"release",void 0);const Qo=(()=>{let t,e;const n=[];for(t=0;t<128;t++)n[t]=Math.sin(t/127*(Math.PI/2));const s=[],r=6.4;for(t=0;t<127;t++){e=t/127;const d=Math.sin(e*(Math.PI*2)*r-Math.PI/2)+1;s[t]=d/10+e*.83}s[127]=1;const o=[],a=5;for(t=0;t<128;t++)o[t]=Math.ceil(t/127*a)/a;const c=[];for(t=0;t<128;t++)e=t/127,c[t]=.5*(1-Math.cos(Math.PI*e));const l=[];for(t=0;t<128;t++){e=t/127;const d=Math.pow(e,3)*4+.2,p=Math.cos(d*Math.PI*2*e);l[t]=Math.abs(p*(1-e))}function u(d){const p=new Array(d.length);for(let g=0;g<d.length;g++)p[g]=1-d[g];return p}function h(d){return d.slice(0).reverse()}return{bounce:{In:u(l),Out:l},cosine:{In:n,Out:h(n)},exponential:"exponential",linear:"linear",ripple:{In:s,Out:u(s)},sine:{In:c,Out:u(c)},step:{In:o,Out:u(o)}}})();class ii extends St{constructor(){const t=yt(ii.getDefaults(),arguments);super(t),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=e=>this._original_triggerRelease(e),this._volume=this.output=new Ds({context:this.context,volume:t.volume}),this.volume=this._volume.volume,Qt(this,"volume")}static getDefaults(){return Object.assign(St.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}_syncState(){let t=!1;return this._synced||(this._synced=!0,t=!0),t}_syncMethod(t,e){const n=this["_original_"+t]=this[t];this[t]=(...s)=>{const r=s[e],o=this.context.transport.schedule(a=>{s[e]=a,n.apply(this,s)},r);this._scheduledEvents.push(o)}}unsync(){return this._scheduledEvents.forEach(t=>this.context.transport.clear(t)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off("stop",this._syncedRelease),this.context.transport.off("pause",this._syncedRelease),this.context.transport.off("loopEnd",this._syncedRelease)),this}triggerAttackRelease(t,e,n,s){const r=this.toSeconds(n),o=this.toSeconds(e);return this.triggerAttack(t,r,s),this.triggerRelease(r+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class Di extends ii{constructor(){const t=yt(Di.getDefaults(),arguments);super(t),this.portamento=t.portamento,this.onsilence=t.onsilence}static getDefaults(){return Object.assign(ii.getDefaults(),{detune:0,onsilence:ne,portamento:0})}triggerAttack(t,e,n=1){this.log("triggerAttack",t,e,n);const s=this.toSeconds(e);return this._triggerEnvelopeAttack(s,n),this.setNote(t,s),this}triggerRelease(t){this.log("triggerRelease",t);const e=this.toSeconds(t);return this._triggerEnvelopeRelease(e),this}setNote(t,e){const n=this.toSeconds(e),s=t instanceof gn?t.toFrequency():t;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(s,r,n)}else this.frequency.setValueAtTime(s,n);return this}}$n([Ni(0)],Di.prototype,"portamento",void 0);class nc extends qn{constructor(){super(yt(nc.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new jt({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class En extends Di{constructor(){const t=yt(En.getDefaults(),arguments);super(t),this.name="Synth",this.oscillator=new mr(Object.assign({context:this.context,detune:t.detune,onstop:()=>this.onsilence(this)},t.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new nc(Object.assign({context:this.context},t.envelope)),this.oscillator.chain(this.envelope,this.output),Qt(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(Di.getDefaults(),{envelope:Object.assign(Si(qn.getDefaults(),Object.keys(St.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(Si(mr.getDefaults(),[...Object.keys(Be.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(t,e){if(this.envelope.triggerAttack(t,e),this.oscillator.start(t),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),s=this.toSeconds(this.envelope.decay);this.oscillator.stop(t+n+s)}}_triggerEnvelopeRelease(t){this.envelope.triggerRelease(t),this.oscillator.stop(t+this.toSeconds(this.envelope.release))}getLevelAtTime(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class wa extends Di{constructor(){const t=yt(wa.getDefaults(),arguments);super(t),this.name="ModulationSynth",this._carrier=new En({context:this.context,oscillator:t.oscillator,envelope:t.envelope,onsilence:()=>this.onsilence(this),volume:-10}),this._modulator=new En({context:this.context,oscillator:t.modulation,envelope:t.modulationEnvelope,volume:-10}),this.oscillator=this._carrier.oscillator,this.envelope=this._carrier.envelope,this.modulation=this._modulator.oscillator,this.modulationEnvelope=this._modulator.envelope,this.frequency=new ie({context:this.context,units:"frequency"}),this.detune=new ie({context:this.context,value:t.detune,units:"cents"}),this.harmonicity=new Ri({context:this.context,value:t.harmonicity,minValue:0}),this._modulationNode=new jt({context:this.context,gain:0}),Qt(this,["frequency","harmonicity","oscillator","envelope","modulation","modulationEnvelope","detune"])}static getDefaults(){return Object.assign(Di.getDefaults(),{harmonicity:3,oscillator:Object.assign(Si(mr.getDefaults(),[...Object.keys(Be.getDefaults()),"frequency","detune"]),{type:"sine"}),envelope:Object.assign(Si(qn.getDefaults(),Object.keys(St.getDefaults())),{attack:.01,decay:.01,sustain:1,release:.5}),modulation:Object.assign(Si(mr.getDefaults(),[...Object.keys(Be.getDefaults()),"frequency","detune"]),{type:"square"}),modulationEnvelope:Object.assign(Si(qn.getDefaults(),Object.keys(St.getDefaults())),{attack:.5,decay:0,sustain:1,release:.5})})}_triggerEnvelopeAttack(t,e){this._carrier._triggerEnvelopeAttack(t,e),this._modulator._triggerEnvelopeAttack(t,e)}_triggerEnvelopeRelease(t){return this._carrier._triggerEnvelopeRelease(t),this._modulator._triggerEnvelopeRelease(t),this}getLevelAtTime(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)}dispose(){return super.dispose(),this._carrier.dispose(),this._modulator.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._modulationNode.dispose(),this}}class ba extends St{constructor(){const t=yt(ba.getDefaults(),arguments,["frequency","type"]);super(t),this.name="BiquadFilter",this._filter=this.context.createBiquadFilter(),this.input=this.output=this._filter,this.Q=new Xt({context:this.context,units:"number",value:t.Q,param:this._filter.Q}),this.frequency=new Xt({context:this.context,units:"frequency",value:t.frequency,param:this._filter.frequency}),this.detune=new Xt({context:this.context,units:"cents",value:t.detune,param:this._filter.detune}),this.gain=new Xt({context:this.context,units:"decibels",convert:!1,value:t.gain,param:this._filter.gain}),this.type=t.type}static getDefaults(){return Object.assign(St.getDefaults(),{Q:1,type:"lowpass",frequency:350,detune:0,gain:0})}get type(){return this._filter.type}set type(t){Nt(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(t)!==-1,`Invalid filter type: ${t}`),this._filter.type=t}getFrequencyResponse(t=128){const e=new Float32Array(t);for(let o=0;o<t;o++){const c=Math.pow(o/t,2)*19980+20;e[o]=c}const n=new Float32Array(t),s=new Float32Array(t),r=this.context.createBiquadFilter();return r.type=this.type,r.Q.value=this.Q.value,r.frequency.value=this.frequency.value,r.gain.value=this.gain.value,r.getFrequencyResponse(e,n,s),n}dispose(){return super.dispose(),this._filter.disconnect(),this.Q.dispose(),this.frequency.dispose(),this.gain.dispose(),this.detune.dispose(),this}}class Kn extends St{constructor(){const t=yt(Kn.getDefaults(),arguments,["frequency","type","rolloff"]);super(t),this.name="Filter",this.input=new jt({context:this.context}),this.output=new jt({context:this.context}),this._filters=[],this._filters=[],this.Q=new ie({context:this.context,units:"positive",value:t.Q}),this.frequency=new ie({context:this.context,units:"frequency",value:t.frequency}),this.detune=new ie({context:this.context,units:"cents",value:t.detune}),this.gain=new ie({context:this.context,units:"decibels",convert:!1,value:t.gain}),this._type=t.type,this.rolloff=t.rolloff,Qt(this,["detune","frequency","gain","Q"])}static getDefaults(){return Object.assign(St.getDefaults(),{Q:1,detune:0,frequency:350,gain:0,rolloff:-12,type:"lowpass"})}get type(){return this._type}set type(t){Nt(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(t)!==-1,`Invalid filter type: ${t}`),this._type=t,this._filters.forEach(n=>n.type=t)}get rolloff(){return this._rolloff}set rolloff(t){const e=Gn(t)?t:parseInt(t,10),n=[-12,-24,-48,-96];let s=n.indexOf(e);Nt(s!==-1,`rolloff can only be ${n.join(", ")}`),s+=1,this._rolloff=e,this.input.disconnect(),this._filters.forEach(r=>r.disconnect()),this._filters=new Array(s);for(let r=0;r<s;r++){const o=new ba({context:this.context});o.type=this._type,this.frequency.connect(o.frequency),this.detune.connect(o.detune),this.Q.connect(o.Q),this.gain.connect(o.gain),this._filters[r]=o}this._internalChannels=this._filters,Es(this.input,...this._internalChannels,this.output)}getFrequencyResponse(t=128){const e=new ba({frequency:this.frequency.value,gain:this.gain.value,Q:this.Q.value,type:this._type,detune:this.detune.value}),n=new Float32Array(t).map(()=>1);return this._filters.forEach(()=>{e.getFrequencyResponse(t).forEach((r,o)=>n[o]*=r)}),e.dispose(),n}dispose(){return super.dispose(),this._filters.forEach(t=>{t.dispose()}),Fu(this,["detune","frequency","gain","Q"]),this.frequency.dispose(),this.Q.dispose(),this.detune.dispose(),this.gain.dispose(),this}}class Ea extends wa{constructor(){const t=yt(Ea.getDefaults(),arguments);super(t),this.name="FMSynth",this.modulationIndex=new Ri({context:this.context,value:t.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output)}static getDefaults(){return Object.assign(wa.getDefaults(),{modulationIndex:10})}dispose(){return super.dispose(),this.modulationIndex.dispose(),this}}class xo extends En{constructor(){const t=yt(xo.getDefaults(),arguments);super(t),this.name="MembraneSynth",this.portamento=0,this.pitchDecay=t.pitchDecay,this.octaves=t.octaves,Qt(this,["oscillator","envelope"])}static getDefaults(){return ys(Di.getDefaults(),En.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(t,e){const n=this.toSeconds(e),s=this.toFrequency(t instanceof gn?t.toFrequency():t),r=s*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(s,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}$n([tm(0)],xo.prototype,"octaves",void 0);$n([Ni(0)],xo.prototype,"pitchDecay",void 0);class Aa extends ii{constructor(){const t=yt(Aa.getDefaults(),arguments);super(t),this.name="NoiseSynth",this.noise=new ts(Object.assign({context:this.context},t.noise)),this.envelope=new nc(Object.assign({context:this.context},t.envelope)),this.noise.chain(this.envelope,this.output)}static getDefaults(){return Object.assign(ii.getDefaults(),{envelope:Object.assign(Si(qn.getDefaults(),Object.keys(St.getDefaults())),{decay:.1,sustain:0}),noise:Object.assign(Si(ts.getDefaults(),Object.keys(Be.getDefaults())),{type:"white"})})}triggerAttack(t,e=1){return t=this.toSeconds(t),this.envelope.triggerAttack(t,e),this.noise.start(t),this.envelope.sustain===0&&this.noise.stop(t+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay)),this}triggerRelease(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.noise.stop(t+this.toSeconds(this.envelope.release)),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0)),this}triggerAttackRelease(t,e,n=1){return e=this.toSeconds(e),t=this.toSeconds(t),this.triggerAttack(e,n),this.triggerRelease(e+t),this}dispose(){return super.dispose(),this.noise.dispose(),this.envelope.dispose(),this}}const em=new Set;function Ju(i){em.add(i)}function nm(i,t){const e=`registerProcessor("${i}", ${t})`;em.add(e)}const GE=`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;Ju(GE);const WE=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;Ju(WE);const qE=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;Ju(qE);const XE="feedback-comb-filter",jE=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;nm(XE,jE);class Gr extends ii{constructor(){const t=yt(Gr.getDefaults(),arguments,["voice","options"]);super(t),this.name="PolySynth",this._availableVoices=[],this._activeVoices=[],this._voices=[],this._gcTimeout=-1,this._averageActiveVoices=0,this._syncedRelease=s=>this.releaseAll(s),Nt(!Gn(t.voice),"DEPRECATED: The polyphony count is no longer the first argument.");const e=t.voice.getDefaults();this.options=Object.assign(e,t.options),this.voice=t.voice,this.maxPolyphony=t.maxPolyphony,this._dummyVoice=this._getNextAvailableVoice();const n=this._voices.indexOf(this._dummyVoice);this._voices.splice(n,1),this._gcTimeout=this.context.setInterval(this._collectGarbage.bind(this),1)}static getDefaults(){return Object.assign(ii.getDefaults(),{maxPolyphony:32,options:{},voice:En})}get activeVoices(){return this._activeVoices.length}_makeVoiceAvailable(t){this._availableVoices.push(t);const e=this._activeVoices.findIndex(n=>n.voice===t);this._activeVoices.splice(e,1)}_getNextAvailableVoice(){if(this._availableVoices.length)return this._availableVoices.shift();if(this._voices.length<this.maxPolyphony){const t=new this.voice(Object.assign(this.options,{context:this.context,onsilence:this._makeVoiceAvailable.bind(this)}));return Nt(t instanceof Di,"Voice must extend Monophonic class"),t.connect(this.output),this._voices.push(t),t}else Ha("Max polyphony exceeded. Note dropped.")}_collectGarbage(){if(this._averageActiveVoices=Math.max(this._averageActiveVoices*.95,this.activeVoices),this._availableVoices.length&&this._voices.length>Math.ceil(this._averageActiveVoices+1)){const t=this._availableVoices.shift(),e=this._voices.indexOf(t);this._voices.splice(e,1),this.context.isOffline||t.dispose()}}_triggerAttack(t,e,n){t.forEach(s=>{const r=new Ta(this.context,s).toMidi(),o=this._getNextAvailableVoice();o&&(o.triggerAttack(s,e,n),this._activeVoices.push({midi:r,voice:o,released:!1}),this.log("triggerAttack",s,e))})}_triggerRelease(t,e){t.forEach(n=>{const s=new Ta(this.context,n).toMidi(),r=this._activeVoices.find(({midi:o,released:a})=>o===s&&!a);r&&(r.voice.triggerRelease(e),r.released=!0,this.log("triggerRelease",n,e))})}_scheduleEvent(t,e,n,s){Nt(!this.disposed,"Synth was already disposed"),n<=this.now()?t==="attack"?this._triggerAttack(e,n,s):this._triggerRelease(e,n):this.context.setTimeout(()=>{this.disposed||this._scheduleEvent(t,e,n,s)},n-this.now())}triggerAttack(t,e,n){Array.isArray(t)||(t=[t]);const s=this.toSeconds(e);return this._scheduleEvent("attack",t,s,n),this}triggerRelease(t,e){Array.isArray(t)||(t=[t]);const n=this.toSeconds(e);return this._scheduleEvent("release",t,n),this}triggerAttackRelease(t,e,n,s){const r=this.toSeconds(n);if(this.triggerAttack(t,r,s),yn(e)){Nt(yn(t),"If the duration is an array, the notes must also be an array"),t=t;for(let o=0;o<t.length;o++){const a=e[Math.min(o,e.length-1)],c=this.toSeconds(a);Nt(c>0,"The duration must be greater than 0"),this.triggerRelease(t[o],r+c)}}else{const o=this.toSeconds(e);Nt(o>0,"The duration must be greater than 0"),this.triggerRelease(t,r+o)}return this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}set(t){const e=Si(t,["onsilence","context"]);return this.options=ys(this.options,e),this._voices.forEach(n=>n.set(e)),this._dummyVoice.set(e),this}get(){return this._dummyVoice.get()}releaseAll(t){const e=this.toSeconds(t);return this._activeVoices.forEach(({voice:n})=>{n.triggerRelease(e)}),this}dispose(){return super.dispose(),this._dummyVoice.dispose(),this._voices.forEach(t=>t.dispose()),this._activeVoices=[],this._availableVoices=[],this.context.clearInterval(this._gcTimeout),this}}class ic extends ii{constructor(){const t=yt(ic.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");super(t),this.name="Sampler",this._activeSources=new Map;const e={};Object.keys(t.urls).forEach(n=>{const s=parseInt(n,10);if(Nt(Jo(n)||Gn(s)&&isFinite(s),`url key is neither a note or midi pitch: ${n}`),Jo(n)){const r=new gn(this.context,n).toMidi();e[r]=t.urls[n]}else Gn(s)&&isFinite(s)&&(e[s]=t.urls[s])}),this._buffers=new qu({urls:e,onload:t.onload,baseUrl:t.baseUrl,onerror:t.onerror}),this.attack=t.attack,this.release=t.release,this.curve=t.curve,this._buffers.loaded&&Promise.resolve().then(t.onload)}static getDefaults(){return Object.assign(ii.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:ne,onerror:ne,release:.1,urls:{}})}_findClosest(t){let n=0;for(;n<96;){if(this._buffers.has(t+n))return-n;if(this._buffers.has(t-n))return n;n++}throw new Error(`No available buffers for note: ${t}`)}triggerAttack(t,e,n=1){return this.log("triggerAttack",t,e,n),Array.isArray(t)||(t=[t]),t.forEach(s=>{const r=Zp(new gn(this.context,s).toFrequency()),o=Math.round(r),a=r-o,c=this._findClosest(o),l=o-c,u=this._buffers.get(l),h=$p(c+a),d=new _o({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(e,0,u.duration/h,n),yn(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){const p=this._activeSources.get(o),g=p.indexOf(d);g!==-1&&p.splice(g,1)}}}),this}triggerRelease(t,e){return this.log("triggerRelease",t,e),Array.isArray(t)||(t=[t]),t.forEach(n=>{const s=new gn(this.context,n).toMidi();if(this._activeSources.has(s)&&this._activeSources.get(s).length){const r=this._activeSources.get(s);e=this.toSeconds(e),r.forEach(o=>{o.stop(e)}),this._activeSources.set(s,[])}}),this}releaseAll(t){const e=this.toSeconds(t);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(e)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(t,e,n,s=1){const r=this.toSeconds(n);return this.triggerAttack(t,r,s),yn(e)?(Nt(yn(t),"notes must be an array when duration is array"),t.forEach((o,a)=>{const c=e[Math.min(a,e.length-1)];this.triggerRelease(o,r+this.toSeconds(c))})):this.triggerRelease(t,r+this.toSeconds(e)),this}add(t,e,n){if(Nt(Jo(t)||isFinite(t),`note must be a pitch or midi: ${t}`),Jo(t)){const s=new gn(this.context,t).toMidi();this._buffers.add(s,e,n)}else this._buffers.add(t,e,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(t=>{t.forEach(e=>e.dispose())}),this._activeSources.clear(),this}}$n([Ni(0)],ic.prototype,"attack",void 0);$n([Ni(0)],ic.prototype,"release",void 0);class Qu extends Ve{constructor(){const t=yt(Qu.getDefaults(),arguments,["callback","value"]);super(t),this.name="ToneEvent",this._state=new ja("stopped"),this._startOffset=0,this._loop=t.loop,this.callback=t.callback,this.value=t.value,this._loopStart=this.toTicks(t.loopStart),this._loopEnd=this.toTicks(t.loopEnd),this._playbackRate=t.playbackRate,this._probability=t.probability,this._humanize=t.humanize,this.mute=t.mute,this._playbackRate=t.playbackRate,this._state.increasing=!0,this._rescheduleEvents()}static getDefaults(){return Object.assign(Ve.getDefaults(),{callback:ne,humanize:!1,loop:!1,loopEnd:"1m",loopStart:0,mute:!1,playbackRate:1,probability:1,value:null})}_rescheduleEvents(t=-1){this._state.forEachFrom(t,e=>{let n;if(e.state==="started"){e.id!==-1&&this.context.transport.clear(e.id);const s=e.time+Math.round(this.startOffset/this._playbackRate);if(this._loop===!0||Gn(this._loop)&&this._loop>1){n=1/0,Gn(this._loop)&&(n=this._loop*this._getLoopDuration());const r=this._state.getAfter(s);r!==null&&(n=Math.min(n,r.time-s)),n!==1/0&&(n=new wn(this.context,n));const o=new wn(this.context,this._getLoopDuration());e.id=this.context.transport.scheduleRepeat(this._tick.bind(this),o,new wn(this.context,s),n)}else e.id=this.context.transport.schedule(this._tick.bind(this),new wn(this.context,s))}})}get state(){return this._state.getValueAtTime(this.context.transport.ticks)}get startOffset(){return this._startOffset}set startOffset(t){this._startOffset=t}get probability(){return this._probability}set probability(t){this._probability=t}get humanize(){return this._humanize}set humanize(t){this._humanize=t}start(t){const e=this.toTicks(t);return this._state.getValueAtTime(e)==="stopped"&&(this._state.add({id:-1,state:"started",time:e}),this._rescheduleEvents(e)),this}stop(t){this.cancel(t);const e=this.toTicks(t);if(this._state.getValueAtTime(e)==="started"){this._state.setStateAtTime("stopped",e,{id:-1});const n=this._state.getBefore(e);let s=e;n!==null&&(s=n.time),this._rescheduleEvents(s)}return this}cancel(t){t=Ss(t,-1/0);const e=this.toTicks(t);return this._state.forEachFrom(e,n=>{this.context.transport.clear(n.id)}),this._state.cancel(e),this}_tick(t){const e=this.context.transport.getTicksAtTime(t);if(!this.mute&&this._state.getValueAtTime(e)==="started"){if(this.probability<1&&Math.random()>this.probability)return;if(this.humanize){let n=.02;Bp(this.humanize)||(n=this.toSeconds(this.humanize)),t+=(Math.random()*2-1)*n}this.callback(t,this.value)}}_getLoopDuration(){return(this._loopEnd-this._loopStart)/this._playbackRate}get loop(){return this._loop}set loop(t){this._loop=t,this._rescheduleEvents()}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._rescheduleEvents()}get loopEnd(){return new wn(this.context,this._loopEnd).toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t),this._loop&&this._rescheduleEvents()}get loopStart(){return new wn(this.context,this._loopStart).toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t),this._loop&&this._rescheduleEvents()}get progress(){if(this._loop){const t=this.context.transport.ticks,e=this._state.get(t);if(e!==null&&e.state==="started"){const n=this._getLoopDuration();return(t-e.time)%n/n}else return 0}else return 0}dispose(){return super.dispose(),this.cancel(),this._state.dispose(),this}}class Wr extends Ve{constructor(){const t=yt(Wr.getDefaults(),arguments,["callback","interval"]);super(t),this.name="Loop",this._event=new Qu({context:this.context,callback:this._tick.bind(this),loop:!0,loopEnd:t.interval,playbackRate:t.playbackRate,probability:t.probability,humanize:t.humanize}),this.callback=t.callback,this.iterations=t.iterations}static getDefaults(){return Object.assign(Ve.getDefaults(),{interval:"4n",callback:ne,playbackRate:1,iterations:1/0,probability:1,mute:!1,humanize:!1})}start(t){return this._event.start(t),this}stop(t){return this._event.stop(t),this}cancel(t){return this._event.cancel(t),this}_tick(t){this.callback(t)}get state(){return this._event.state}get progress(){return this._event.progress}get interval(){return this._event.loopEnd}set interval(t){this._event.loopEnd=t}get playbackRate(){return this._event.playbackRate}set playbackRate(t){this._event.playbackRate=t}get humanize(){return this._event.humanize}set humanize(t){this._event.humanize=t}get probability(){return this._event.probability}set probability(t){this._event.probability=t}get mute(){return this._event.mute}set mute(t){this._event.mute=t}get iterations(){return this._event.loop===!0?1/0:this._event.loop}set iterations(t){t===1/0?this._event.loop=!0:this._event.loop=t}dispose(){return super.dispose(),this._event.dispose(),this}}class sc extends St{constructor(){const t=yt(sc.getDefaults(),arguments,["fade"]);super(t),this.name="CrossFade",this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new HE({context:this.context}),this.a=new jt({context:this.context,gain:0}),this.b=new jt({context:this.context,gain:0}),this.output=new jt({context:this.context}),this._internalChannels=[this.a,this.b],this.fade=new ie({context:this.context,units:"normalRange",value:t.fade}),Qt(this,"fade"),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode="explicit",Dn(this._split,this.a.gain,0),Dn(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(St.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}}class Ca extends St{constructor(t){super(t),this.name="Effect",this._dryWet=new sc({context:this.context}),this.wet=this._dryWet.fade,this.effectSend=new jt({context:this.context}),this.effectReturn=new jt({context:this.context}),this.input=new jt({context:this.context}),this.output=this._dryWet,this.input.fan(this._dryWet.a,this.effectSend),this.effectReturn.connect(this._dryWet.b),this.wet.setValueAtTime(t.wet,0),this._internalChannels=[this.effectReturn,this.effectSend],Qt(this,"wet")}static getDefaults(){return Object.assign(St.getDefaults(),{wet:1})}connectEffect(t){return this._internalChannels.push(t),this.effectSend.chain(t,this.effectReturn),this}dispose(){return super.dispose(),this._dryWet.dispose(),this.effectSend.dispose(),this.effectReturn.dispose(),this.wet.dispose(),this}}class Xi extends St{constructor(){const t=yt(Xi.getDefaults(),arguments,["pan"]);super(t),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner,this.pan=new Xt({context:this.context,param:this._panner.pan,value:t.pan,minValue:-1,maxValue:1}),this._panner.channelCount=t.channelCount,this._panner.channelCountMode="explicit",Qt(this,"pan")}static getDefaults(){return Object.assign(St.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const YE="bit-crusher",$E=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;nm(YE,$E);class rc extends St{constructor(){const t=yt(rc.getDefaults(),arguments,["channels"]);super(t),this.name="Split",this._splitter=this.input=this.output=this.context.createChannelSplitter(t.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(St.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}}class oc extends St{constructor(){const t=yt(oc.getDefaults(),arguments,["channels"]);super(t),this.name="Merge",this._merger=this.output=this.input=this.context.createChannelMerger(t.channels)}static getDefaults(){return Object.assign(St.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}}class Qd extends St{constructor(t){super(t),this.name="StereoEffect",this.input=new jt({context:this.context}),this.input.channelCount=2,this.input.channelCountMode="explicit",this._dryWet=this.output=new sc({context:this.context,fade:t.wet}),this.wet=this._dryWet.fade,this._split=new rc({context:this.context,channels:2}),this._merge=new oc({context:this.context,channels:2}),this.input.connect(this._split),this.input.connect(this._dryWet.a),this._merge.connect(this._dryWet.b),Qt(this,["wet"])}connectEffectLeft(...t){this._split.connect(t[0],0,0),Es(...t),Dn(t[t.length-1],this._merge,0,0)}connectEffectRight(...t){this._split.connect(t[0],1,0),Es(...t),Dn(t[t.length-1],this._merge,0,1)}static getDefaults(){return Object.assign(St.getDefaults(),{wet:1})}dispose(){return super.dispose(),this._dryWet.dispose(),this._split.dispose(),this._merge.dispose(),this}}class Ra extends Ca{constructor(){const t=yt(Ra.getDefaults(),arguments,["decay"]);super(t),this.name="Reverb",this._convolver=this.context.createConvolver(),this.ready=Promise.resolve(),this._decay=t.decay,this._preDelay=t.preDelay,this.generate(),this.connectEffect(this._convolver)}static getDefaults(){return Object.assign(Ca.getDefaults(),{decay:1.5,preDelay:.01})}get decay(){return this._decay}set decay(t){t=this.toSeconds(t),Wn(t,.001),this._decay=t,this.generate()}get preDelay(){return this._preDelay}set preDelay(t){t=this.toSeconds(t),Wn(t,0),this._preDelay=t,this.generate()}generate(){return Ae(this,void 0,void 0,function*(){const t=this.ready,e=new qa(2,this._decay+this._preDelay,this.context.sampleRate),n=new ts({context:e}),s=new ts({context:e}),r=new oc({context:e});n.connect(r,0,0),s.connect(r,0,1);const o=new jt({context:e}).toDestination();r.connect(o),n.start(0),s.start(0),o.gain.setValueAtTime(0,0),o.gain.setValueAtTime(1,this._preDelay),o.gain.exponentialApproachValueAtTime(0,this._preDelay,this.decay);const a=e.render();return this.ready=a.then(ne),yield t,this._convolver.buffer=(yield a).get(),this})}dispose(){return super.dispose(),this._convolver.disconnect(),this}}class th extends Qd{constructor(){const t=yt(th.getDefaults(),arguments,["frequency","depth"]);super(t),this.name="Tremolo",this._lfoL=new gr({context:this.context,type:t.type,min:1,max:0}),this._lfoR=new gr({context:this.context,type:t.type,min:1,max:0}),this._amplitudeL=new jt({context:this.context}),this._amplitudeR=new jt({context:this.context}),this.frequency=new ie({context:this.context,value:t.frequency,units:"frequency"}),this.depth=new ie({context:this.context,value:t.depth,units:"normalRange"}),Qt(this,["frequency","depth"]),this.connectEffectLeft(this._amplitudeL),this.connectEffectRight(this._amplitudeR),this._lfoL.connect(this._amplitudeL.gain),this._lfoR.connect(this._amplitudeR.gain),this.frequency.fan(this._lfoL.frequency,this._lfoR.frequency),this.depth.fan(this._lfoR.amplitude,this._lfoL.amplitude),this.spread=t.spread}static getDefaults(){return Object.assign(Qd.getDefaults(),{frequency:10,type:"sine",depth:.5,spread:180})}start(t){return this._lfoL.start(t),this._lfoR.start(t),this}stop(t){return this._lfoL.stop(t),this._lfoR.stop(t),this}sync(){return this._lfoL.sync(),this._lfoR.sync(),this.context.transport.syncSignal(this.frequency),this}unsync(){return this._lfoL.unsync(),this._lfoR.unsync(),this.context.transport.unsyncSignal(this.frequency),this}get type(){return this._lfoL.type}set type(t){this._lfoL.type=t,this._lfoR.type=t}get spread(){return this._lfoR.phase-this._lfoL.phase}set spread(t){this._lfoL.phase=90-t/2,this._lfoR.phase=t/2+90}dispose(){return super.dispose(),this._lfoL.dispose(),this._lfoR.dispose(),this._amplitudeL.dispose(),this._amplitudeR.dispose(),this.frequency.dispose(),this.depth.dispose(),this}}class eh extends Ca{constructor(){const t=yt(eh.getDefaults(),arguments,["frequency","depth"]);super(t),this.name="Vibrato",this._delayNode=new Gu({context:this.context,delayTime:0,maxDelay:t.maxDelay}),this._lfo=new gr({context:this.context,type:t.type,min:0,max:t.maxDelay,frequency:t.frequency,phase:-90}).start().connect(this._delayNode.delayTime),this.frequency=this._lfo.frequency,this.depth=this._lfo.amplitude,this.depth.value=t.depth,Qt(this,["frequency","depth"]),this.effectSend.chain(this._delayNode,this.effectReturn)}static getDefaults(){return Object.assign(Ca.getDefaults(),{maxDelay:.005,frequency:5,depth:.1,type:"sine"})}get type(){return this._lfo.type}set type(t){this._lfo.type=t}dispose(){return super.dispose(),this._delayNode.dispose(),this._lfo.dispose(),this.frequency.dispose(),this.depth.dispose(),this}}class nh extends St{constructor(){const t=yt(nh.getDefaults(),arguments,["type","size"]);super(t),this.name="Analyser",this._analysers=[],this._buffers=[],this.input=this.output=this._gain=new jt({context:this.context}),this._split=new rc({context:this.context,channels:t.channels}),this.input.connect(this._split),Wn(t.channels,1);for(let e=0;e<t.channels;e++)this._analysers[e]=this.context.createAnalyser(),this._split.connect(this._analysers[e],e,0);this.size=t.size,this.type=t.type,this.smoothing=t.smoothing}static getDefaults(){return Object.assign(St.getDefaults(),{size:1024,smoothing:.8,type:"fft",channels:1})}getValue(){return this._analysers.forEach((t,e)=>{const n=this._buffers[e];this._type==="fft"?t.getFloatFrequencyData(n):this._type==="waveform"&&t.getFloatTimeDomainData(n)}),this.channels===1?this._buffers[0]:this._buffers}get size(){return this._analysers[0].frequencyBinCount}set size(t){this._analysers.forEach((e,n)=>{e.fftSize=t*2,this._buffers[n]=new Float32Array(t)})}get channels(){return this._analysers.length}get type(){return this._type}set type(t){Nt(t==="waveform"||t==="fft",`Analyser: invalid type: ${t}`),this._type=t}get smoothing(){return this._analysers[0].smoothingTimeConstant}set smoothing(t){this._analysers.forEach(e=>e.smoothingTimeConstant=t)}dispose(){return super.dispose(),this._analysers.forEach(t=>t.disconnect()),this._split.dispose(),this._gain.dispose(),this}}class ih extends St{constructor(){super(yt(ih.getDefaults(),arguments)),this.name="MeterBase",this.input=this.output=this._analyser=new nh({context:this.context,size:256,type:"waveform"})}dispose(){return super.dispose(),this._analyser.dispose(),this}}class sh extends ih{constructor(){const t=yt(sh.getDefaults(),arguments,["size"]);super(t),this.name="FFT",this.normalRange=t.normalRange,this._analyser.type="fft",this.size=t.size}static getDefaults(){return Object.assign(St.getDefaults(),{normalRange:!1,size:1024,smoothing:.8})}getValue(){return this._analyser.getValue().map(e=>this.normalRange?Yp(e):e)}get size(){return this._analyser.size}set size(t){this._analyser.size=t}get smoothing(){return this._analyser.smoothing}set smoothing(t){this._analyser.smoothing=t}getFrequencyOfIndex(t){return Nt(0<=t&&t<this.size,`index must be greater than or equal to 0 and less than ${this.size}`),t*this.context.sampleRate/(this.size*2)}}class De extends St{constructor(){const t=yt(De.getDefaults(),arguments,["solo"]);super(t),this.name="Solo",this.input=this.output=new jt({context:this.context}),De._allSolos.has(this.context)||De._allSolos.set(this.context,new Set),De._allSolos.get(this.context).add(this),this.solo=t.solo}static getDefaults(){return Object.assign(St.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(t){t?this._addSolo():this._removeSolo(),De._allSolos.get(this.context).forEach(e=>e._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){De._soloed.has(this.context)||De._soloed.set(this.context,new Set),De._soloed.get(this.context).add(this)}_removeSolo(){De._soloed.has(this.context)&&De._soloed.get(this.context).delete(this)}_isSoloed(){return De._soloed.has(this.context)&&De._soloed.get(this.context).has(this)}_noSolos(){return!De._soloed.has(this.context)||De._soloed.has(this.context)&&De._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),De._allSolos.get(this.context).delete(this),this._removeSolo(),this}}De._allSolos=new Map;De._soloed=new Map;class rh extends St{constructor(){const t=yt(rh.getDefaults(),arguments,["pan","volume"]);super(t),this.name="PanVol",this._panner=this.input=new Xi({context:this.context,pan:t.pan,channelCount:t.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new Ds({context:this.context,volume:t.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=t.mute,Qt(this,["pan","volume"])}static getDefaults(){return Object.assign(St.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class Qs extends St{constructor(){const t=yt(Qs.getDefaults(),arguments,["volume","pan"]);super(t),this.name="Channel",this._solo=this.input=new De({solo:t.solo,context:this.context}),this._panVol=this.output=new rh({context:this.context,pan:t.pan,volume:t.volume,mute:t.mute,channelCount:t.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),Qt(this,["pan","volume"])}static getDefaults(){return Object.assign(St.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(t){this._solo.solo=t}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(t){this._panVol.mute=t}_getBus(t){return Qs.buses.has(t)||Qs.buses.set(t,new jt({context:this.context})),Qs.buses.get(t)}send(t,e=0){const n=this._getBus(t),s=new jt({context:this.context,units:"decibels",gain:e});return this.connect(s),s.connect(n),s}receive(t){return this._getBus(t).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}Qs.buses=new Map;class oh extends St{constructor(){const t=yt(oh.getDefaults(),arguments,["threshold","ratio"]);super(t),this.name="Compressor",this._compressor=this.context.createDynamicsCompressor(),this.input=this._compressor,this.output=this._compressor,this.threshold=new Xt({minValue:this._compressor.threshold.minValue,maxValue:this._compressor.threshold.maxValue,context:this.context,convert:!1,param:this._compressor.threshold,units:"decibels",value:t.threshold}),this.attack=new Xt({minValue:this._compressor.attack.minValue,maxValue:this._compressor.attack.maxValue,context:this.context,param:this._compressor.attack,units:"time",value:t.attack}),this.release=new Xt({minValue:this._compressor.release.minValue,maxValue:this._compressor.release.maxValue,context:this.context,param:this._compressor.release,units:"time",value:t.release}),this.knee=new Xt({minValue:this._compressor.knee.minValue,maxValue:this._compressor.knee.maxValue,context:this.context,convert:!1,param:this._compressor.knee,units:"decibels",value:t.knee}),this.ratio=new Xt({minValue:this._compressor.ratio.minValue,maxValue:this._compressor.ratio.maxValue,context:this.context,convert:!1,param:this._compressor.ratio,units:"positive",value:t.ratio}),Qt(this,["knee","release","attack","ratio","threshold"])}static getDefaults(){return Object.assign(St.getDefaults(),{attack:.003,knee:30,ratio:12,release:.25,threshold:-24})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.disconnect(),this.attack.dispose(),this.release.dispose(),this.threshold.dispose(),this.ratio.dispose(),this.knee.dispose(),this}}class ah extends St{constructor(){const t=yt(ah.getDefaults(),arguments,["threshold"]);super(t),this.name="Limiter",this._compressor=this.input=this.output=new oh({context:this.context,ratio:20,attack:.003,release:.01,threshold:t.threshold}),this.threshold=this._compressor.threshold,Qt(this,"threshold")}static getDefaults(){return Object.assign(St.getDefaults(),{threshold:-12})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.dispose(),this.threshold.dispose(),this}}function Fr(){return Xe().now()}Xe().transport;function ZE(){return Xe().transport}Xe().destination;Xe().destination;Xe().listener;Xe().draw;Xe();const KE=["C","Eb","F","G","Bb"],JE=.5,QE=.12,tf=1.6,ef=-8,t1=-4,e1=1.5,n1=["smoke","dust","salt","sulfate"];function Ys(i,t=2){const e=Math.max(0,Math.round(i));return`${KE[e%5]}${t+Math.floor(e/5)}`}class kr{constructor(t=0){this.v=t,this.init=!1}step(t,e){return this.init?(this.v+=(t-this.v)*(1-Math.exp(-e/JE)),this.v):(this.v=t,this.init=!0,this.v)}}class i1{constructor(){this.master=new Ds(ef).toDestination(),this.analyser=new sh({size:512,smoothing:.55}),this.master.connect(this.analyser),this.limiter=new ah(-1).connect(this.master),this.room=new Ra({decay:3.2,preDelay:.02,wet:.24}).connect(this.limiter),this.bus={};for(const t of["pad","melody","drums","probe"])this.bus[t]=new jt(1).connect(this.room);this._buildEffects(),this._buildProbe(),this.aeroFocus=[1,1,1,1],this.padFilter=new Kn(600,"lowpass").connect(this.bus.pad),this.pad=new Gr(En,{oscillator:{type:"fatsawtooth",count:3,spread:20},envelope:{attack:1.5,decay:.5,sustain:.8,release:3},volume:-20}).connect(this.padFilter),this.padDegree=null,this.melody=[-.75,-.25,.25,.75].map(t=>{const e=new Xi(t).connect(this.bus.melody);return{synth:new En({oscillator:{type:"triangle"},envelope:{attack:.02,decay:.3,sustain:.2,release:1.2},volume:-14}).connect(e),panner:e,degree:new kr,level:new kr}}),this.step=0,this.melodyLoop=new Wr(t=>this._playMelody(t),"8n"),this.drumPan=new Xi(0).connect(this.bus.drums),this.drum=new xo({pitchDecay:.03,octaves:4,envelope:{attack:.001,decay:.35,sustain:0,release:.2},volume:-8}).connect(this.drumPan),this.thunderFilter=new Kn(900,"lowpass").connect(this.drumPan),this.thunder=new Aa({noise:{type:"brown"},envelope:{attack:.005,decay:.9,sustain:0,release:.4},volume:-6}).connect(this.thunderFilter),this.hits={norm:0,lat01:.5,pan:0},this.drumLoop=new Wr(t=>this._playDrums(t),"16n"),this.lastThunder=0,this.cursorPan=new Xi(0).connect(this.limiter),this.cursorSynth=new En({oscillator:{type:"sine"},envelope:{attack:.01,decay:.25,sustain:.15,release:.6},volume:-8}).connect(this.cursorPan),this.cursorDegree=null,this.cursorLast=0,this._buildAerosols(),this.mean=new kr,this.mode="ocean"}_buildAerosols(){const t=()=>{const o=new Xi(0).connect(this.room),a=new jt(0).connect(o);return{pan:o,gain:a,level:new kr,solo:1}},e=t();e.filter=new Kn(2500,"highpass").connect(e.gain),e.synth=new Aa({noise:{type:"white"},envelope:{attack:.001,decay:.03,sustain:0},volume:8}).connect(e.filter);const n=t();n.filter=new Kn(320,"lowpass").connect(n.gain),n.oscs=[new Se("C2","sawtooth"),new Se("G2","sawtooth")],n.oscs.forEach(o=>{o.volume.value=-14,o.connect(n.filter)});const s=t();s.filter=new Kn(2600,"highpass").connect(s.gain),s.trem=new th(.25,.7).connect(s.filter).start(),s.noise=new ts("pink"),s.noise.volume.value=8,s.noise.connect(s.trem);const r=t();r.synth=new Ea({harmonicity:3.01,modulationIndex:12,envelope:{attack:.002,decay:1.4,sustain:0,release:1.2},modulationEnvelope:{attack:.002,decay:.6,sustain:0,release:.6},volume:4}).connect(r.gain),this.aero=[e,n,s,r],this.aeroLoop=new Wr(o=>this._playAerosols(o),"16n"),this.aeroStep=0,this.soloUntil=0}_aerosolSources(t){const[,e,n]=this.aero;for(const s of[...e.oscs,n.noise])t&&s.state!=="started"&&s.start(),!t&&s.state==="started"&&s.stop();t&&this.aeroLoop.state!=="started"&&this.aeroLoop.start(0),t||(this.aeroLoop.stop(),this.aero.forEach(s=>s.gain.gain.rampTo(0,.3)))}cursorType(t){this.mode==="aerosols"&&(this.soloUntil=Fr()+1.5,this.aero.forEach((e,n)=>{e.solo=n===t?1.6:.12}))}_playAerosols(t){if(this.mode!=="aerosols")return;const[e,,,n]=this.aero,s=this.aeroStep++,r=e.level.v*e.solo;r>.08&&Math.random()<Math.min(.9,r*.45)&&e.synth.triggerAttackRelease("64n",t+Math.random()*.05,Math.min(1,.3+r*.3));const o=n.level.v*n.solo;if(s%4===0&&o>.1&&Math.random()<Math.min(.85,.2+o*.35)){const a=10+Math.floor(Math.random()*6)+Math.min(4,Math.round(o*2));n.synth.triggerAttackRelease(Ys(a,2),"8n",t,Math.min(1,.35+o*.25))}}get state(){return Xe().state}async start(){await PE();const t=ZE();t.bpm.value=84,this.melodyLoop.start(0),this.drumLoop.start(0),t.start()}setMode(t){this.mode=t,this.pad.releaseAll(),this.padDegree=null,this.mean=new kr,this.hits={norm:0,lat01:.5,pan:0},this._aerosolSources(t==="aerosols")}setMuted(t){this.master.mute=t}get muted(){return this.master.mute}levels(t=5){const e=this.analyser.getValue(),n=Xe().sampleRate/2,s=[];for(let r=0;r<t;r++){const o=60*Math.pow(100,r/t),a=60*Math.pow(100,(r+1)/t),c=Math.max(1,Math.floor(o/n*e.length)),l=Math.max(c+1,Math.ceil(a/n*e.length));let u=-1/0;for(let h=c;h<l&&h<e.length;h++)u=Math.max(u,e[h]);s.push(Math.max(0,Math.min(1,(u+90)/60)))}return s}attachVoice(t){if(t.__tapped)return;t.__tapped=!0;const e=Xe().rawContext,n=e.createMediaElementSource(t);n.connect(e.destination),this.voiceTap||(this.voiceTap=new jt(1),this.voiceTap.connect(this.analyser)),Dn(n,this.voiceTap)}focus(t=null){const e=n=>t?t.includes(n)?e1:0:1;for(const[n,s]of Object.entries(this.bus))s.gain.rampTo(e(n),.6);this.aeroFocus=n1.map(e)}_buildProbe(){this.probeFilter=new Kn(2400,"lowpass").connect(this.bus.probe),this.probeVibrato=new eh(4.5,.06).connect(this.probeFilter),this.probeSynth=new En({oscillator:{type:"fatsine",count:2,spread:8},portamento:.22,envelope:{attack:.6,decay:.2,sustain:1,release:1.4},volume:-15}).connect(this.probeVibrato),this.probeOn=!1,this.probeDegree=null}probe(t){this.probeSynth||this._buildProbe(),t!==this.probeOn&&(this.probeOn=t,t||(this.probeSynth.triggerRelease(),this.probeDegree=null))}probeValue(t){if(!this.probeOn||t==null)return;const e=Math.round(Math.max(0,Math.min(1,t))*14);if(e===this.probeDegree)return;const n=Ys(e,3);this.probeDegree===null?this.probeSynth.triggerAttack(n):this.probeSynth.setNote(n),this.probeDegree=e}_buildEffects(){this.fxRoom=new Ra({decay:6,preDelay:.03,wet:.5}).connect(this.limiter),this.fx=new jt(.9).connect(this.fxRoom),this.whooshPan=new Xi(0).connect(this.fx),this.whooshGain=new jt(0).connect(this.whooshPan),this.whooshFilter=new Kn({type:"bandpass",frequency:400,Q:1.4}).connect(this.whooshGain),this.whooshNoise=new ts("pink").connect(this.whooshFilter),this.whooshNoise.volume.value=7,this.chimeSynth=new Gr(Ea,{harmonicity:2.01,modulationIndex:6,envelope:{attack:.004,decay:2.2,sustain:0,release:2},modulationEnvelope:{attack:.004,decay:.8,sustain:0,release:.8},volume:-8}).connect(this.fx),this.bedFilter=new Kn(380,"lowpass").connect(this.fxRoom),this.bedLfo=new gr(.045,220,620).connect(this.bedFilter.frequency),this.bed=new Gr(En,{oscillator:{type:"fattriangle",count:3,spread:18},envelope:{attack:5,decay:1,sustain:1,release:6},volume:-28}).connect(this.bedFilter),this.bedOn=!1}whoosh(t=2,e=1,n=1){if(e<.05)return;const s=Fr(),r=s+t*.45,o=s+t;this.whooshNoise.state!=="started"&&this.whooshNoise.start();const a=this.whooshGain.gain,c=this.whooshFilter.frequency,l=this.whooshPan.pan;for(const u of[a,c,l])u.cancelScheduledValues(s);a.setValueAtTime(a.value,s),a.linearRampToValueAtTime(.5*Math.min(1,.35+e),r),a.linearRampToValueAtTime(0,o),c.setValueAtTime(260,s),c.exponentialRampToValueAtTime(1800+1400*e,r),c.exponentialRampToValueAtTime(300,o),l.setValueAtTime(-.6*n,s),l.linearRampToValueAtTime(.6*n,o)}chime(){const t=Fr();["C5","G5","Eb6"].forEach((e,n)=>this.chimeSynth.triggerAttackRelease(e,"2n",t+n*.07,.5-n*.1))}setBed(t){t!==this.bedOn&&(this.bedOn=t,t?(this.bedLfo.state!=="started"&&this.bedLfo.start(),this.bed.triggerAttack(["C2","G2","Bb2","Eb3"])):this.bed.releaseAll())}duck(t){this.master.volume.rampTo(ef+(t?t1:0),t?.25:.8)}update(t,e){if(t){if(this.mode==="ocean"){const n=this.mean.step(t.padMean01??t.mean01,e);this.padFilter.frequency.rampTo(300+n*2500,.3);const s=Math.round(n*6);s!==this.padDegree&&(this.padDegree=s,this.pad.releaseAll(),this.pad.triggerAttack([0,2,4].map(r=>Ys(s+r,2)))),t.bands.forEach((r,o)=>{this.melody[o].degree.step(r.v01*9,e),this.melody[o].level.step(r.level,e)})}else if(this.mode==="aerosols"&&t.classes)Fr()>this.soloUntil&&this.aero.forEach(n=>{n.solo=1}),t.classes.forEach(({level:n,pan:s},r)=>{const o=this.aero[r],a=o.level.step(n,e);o.gain.gain.rampTo(Math.min(1,Math.max(0,a*.5))*Math.min(1.6,o.solo)*this.aeroFocus[r],.25),o.pan.pan.rampTo(s,.4)}),this.aero[1].filter.frequency.rampTo(220+Math.min(1.5,this.aero[1].level.v)*260,.4);else if(this.mode==="lightning"&&t.hits){this.hits=t.hits;const n=this.mean.step(Math.min(1,t.hits.norm/2),e);this.padFilter.frequency.rampTo(160+n*1100,.3),this.padDegree!=="storm"&&(this.padDegree="storm",this.pad.releaseAll(),this.pad.triggerAttack(["C2","G2","Eb3"]))}}}_playDrums(t){if(this.mode!=="lightning")return;const{norm:e,lat01:n,pan:s}=this.hits;if(e<QE||Math.random()>Math.min(1,.25+e*.5))return;this.drumPan.pan.setValueAtTime(Math.max(-1,Math.min(1,s)),t);const r=Ys(n*9,1);this.drum.triggerAttackRelease(r,"16n",t,Math.min(1,.25+e*.45)),e>tf&&t-this.lastThunder>1.5&&Math.random()<.35&&(this.lastThunder=t,this.thunder.triggerAttackRelease("8n",t,Math.min(1,.4+(e-tf)*.4)))}cursor(t,e=0){if(t==null){this.cursorDegree=null;return}const n=Math.round(t*14),s=Fr();n===this.cursorDegree||s-this.cursorLast<.08||(this.cursorDegree=n,this.cursorLast=s,this.cursorPan.pan.rampTo(Math.max(-1,Math.min(1,e)),.03),this.cursorSynth.triggerAttackRelease(Ys(n,3),"16n",s))}_playMelody(t){if(this.mode!=="ocean")return;const e=this.step++%this.melody.length,n=this.melody[e];n.level.v<.05||n.synth.triggerAttackRelease(Ys(n.degree.v,4),"8n",t,Math.min(1,n.level.v))}}class s1{constructor(t){this.summary=t;const{bands:e,cols:n,bandEdges:s=[-90,-45,0,45,90]}=t.meta;this.cells=[];for(let h=0;h<e;h++){const d=s[h],p=s[h+1],g=(d+p)/2,_=Math.sin(p*Math.PI/180)-Math.sin(d*Math.PI/180);for(let m=0;m<n;m++){const f=-180+(m+.5)*360/n;this.cells.push({b:h,c:m,lat:g,area:_,vec:oS(g,f)})}}this._tmp=new B;const r=[],o=t.bytes,a=Math.max(1,Math.floor(o.length/2/2e4));for(let h=0;h<o.length/2;h+=a)o[h*2+1]&&r.push(o[h*2+1]/255);r.sort((h,d)=>h-d),this.fullShare=r.length?Math.max(.05,r[Math.floor(r.length*.9)]):1;const{frames:c}=t,l=[],u=this.cells.reduce((h,d)=>h+d.area,0);for(let h=0;h<c;h+=Math.max(1,Math.floor(c/400))){let d=0;for(const p of this.cells){const g=((h*e+p.b)*n+p.c)*2;d+=o[g]/255*p.area}d>0&&l.push(d/u)}l.sort((h,d)=>h-d),this.hitScale=l.length?l[Math.floor(l.length*.75)]:1,t.classes&&(this.typeScale=[0,1,2,3].map(d=>{const p=[];for(let g=0;g<c;g+=Math.max(1,Math.floor(c/200))){let _=0;for(const m of this.cells)_+=t.classes[((g*e+m.b)*n+m.c)*4+d]/255*m.area;p.push(_/u)}return p.sort((g,_)=>g-_),Math.max(1e-4,p[Math.floor(p.length*.75)])}))}extractClasses(t,e){const n=this.summary;if(!n.classes)return null;const{bands:s,cols:r}=n.meta,o=Math.floor((e%n.frames+n.frames)%n.frames),a=[0,0,0,0],c=[0,0,0,0];let l=0;for(const u of this.cells){const{facing:h,x:d}=t.view(u.vec,this._tmp);if(h<=0)continue;const p=h*u.area;l+=p;const g=((o*s+u.b)*r+u.c)*4;for(let _=0;_<4;_++){const m=n.classes[g+_]/255*p;a[_]+=m,c[_]+=m*d}}return a.map((u,h)=>({level:l?u/l/this.typeScale[h]:0,pan:u?Math.max(-1,Math.min(1,c[h]/u)):0}))}extract(t,e){const n=this.summary;let s=0,r=0;const o=[0,1,2,3].map(()=>({w:0,v:0,area:0}));let a=0,c=0,l=0,u=0;for(const h of this.cells){const{facing:d,x:p}=t.view(h.vec,this._tmp);if(d<=0)continue;const{value:g,share:_}=n.sample(e,h.b,h.c),m=(g-n.meta.vmin)/n.range,f=d*h.area,y=f*_;u+=f,s+=y,r+=y*m;const S=Math.min(3,Math.max(0,Math.floor((p+1)/2*4)));o[S].w+=y,o[S].v+=y*m,o[S].area+=f,a+=f*m,c+=f*m*h.lat,l+=f*m*p}return{frameIndex:Math.floor(e),mean01:s?r/s:0,bands:o.map(h=>({v01:h.w?h.v/h.w:0,level:h.area?Math.min(1,h.w/h.area/this.fullShare):0})),hits:a?{strength:a/u,norm:a/u/this.hitScale,lat01:(c/a+90)/180,pan:Math.max(-1,Math.min(1,l/a))}:{strength:0,norm:0,lat01:.5,pan:0}}}valueAt(t,e,n){const{bands:s,cols:r,bandEdges:o=[-90,-45,0,45,90]}=this.summary.meta;let a=o.findIndex((l,u)=>u>0&&e<=l)-1;a=Math.max(0,Math.min(s-1,a));const c=Math.max(0,Math.min(r-1,Math.floor((n+180)/360*r)));return this.summary.sample(t,a,c)}}class r1{constructor(t,e=2e3){this.el=t,this.minGap=e,this.last=0,this.lastText=""}say(t,{force:e=!1}={}){const n=performance.now();!e&&(n-this.last<this.minGap||t===this.lastText)||(this.last=n,this.lastText=t,this.el.textContent=t)}}function o1(i){"speechSynthesis"in window&&(window.speechSynthesis.cancel(),window.speechSynthesis.speak(new SpeechSynthesisUtterance(i)))}function im(i){if(!i)return"Off the globe";const t=`${Math.abs(i.lat).toFixed(0)}° ${i.lat>=0?"north":"south"}`,e=`${Math.abs(i.lon).toFixed(0)}° ${i.lon>=0?"east":"west"}`;return`${t}, ${e}`}const Zc="show/voice";class a1{constructor(t){this.ctx=t,this.running=!1,this.cancels=new Set,this.recordings=null}async start(t){if(!this.running){this.running=!0,this.ctx.globe.held=!0,this.ctx.sound.setBed(!0),this.recordings=await this._recordings(t);try{for(const e of t){if(!this.running)break;await this._step(e)}}catch(e){console.error("[show] stopped by an error",e)}finally{this.running&&this.stop({finished:!0})}}}stop({finished:t=!1}={}){var s,r,o,a;if(!this.running)return;this.running=!1;for(const c of this.cancels)c();this.cancels.clear(),(s=window.speechSynthesis)==null||s.cancel(),(r=this.audio)==null||r.pause(),this.audio=null;const{globe:e,sound:n}=this.ctx;e.releaseHold(),e.idleFor=0,this.ctx.probe(!1),n.focus(null),n.duck(!1),n.setBed(!1),this.ctx.caption(null),(a=(o=this.ctx).onEnd)==null||a.call(o,{finished:t})}async _step(t){var o;const{ctx:e}=this;let n=!1;if(t.dataset){const a=e.currentId()===t.dataset&&t.seek!=null&&e.position()>t.seek+.01;n=await this._cancellable(e.selectDataset(t.dataset,t.seek??0,a))}let s=t.reach,r=t.then;if(t.seek!=null&&!n&&(t.dataset?(s=t.seek,r=t.speed):e.seek(t.seek)),t.speed!=null&&s==null&&e.setSpeed(t.speed),t.play!=null&&e.setPlaying(t.play),t.focus!==void 0&&e.sound.focus(t.focus),t.probe!=null&&e.probe(t.probe),s!=null){const a=((o=t.fly)==null?void 0:o.seconds)??t.within??3,l=(s-e.position()+1)%1/Math.max(1e-6,e.rate()*a);e.setSpeed(Math.max(.1,Math.min(4,l)))}if(t.fly){const a=e.globe.flyTo(t.fly),c=e.globe.flight;if(c){const l=Math.abs(c.to.spin-c.from.spin)+Math.abs(c.to.tilt-c.from.tilt),u=Math.min(1,l/2+Math.abs(c.to.distance-c.from.distance)*.3);e.sound.whoosh(c.seconds,u,c.to.spin>=c.from.spin?1:-1)}s!=null&&r!=null&&a.then(()=>{this.running&&e.setSpeed(r)}),t.wait!==!1&&await this._cancellable(a)}else s!=null&&(await this._sleep(t.within??3),r!=null&&e.setSpeed(r));t.say&&await this._say(t.say,t.text),t.pause&&await this._sleep(t.pause)}async _say(t,e){if(!this.running)return;const{sound:n}=this.ctx;this.ctx.caption(e),n.duck(!0);try{n.muted?await this._sleep(Kc(e)):this.recordings.has(t)?await this._playFile(`${Zc}/${t}.mp3`,e):await this._speak(e)}finally{this.running&&n.duck(!1)}await this._sleep(.5)}_playFile(t,e){return this._cancellable(new Promise(n=>{const s=new Audio(t);this.audio=s;try{this.ctx.sound.attachVoice(s)}catch{}s.onended=n,s.onerror=()=>this._speak(e).then(n),s.play().catch(()=>this._speak(e).then(n))}))}_speak(t){const e=window.speechSynthesis;return e?this._cancellable(new Promise(n=>{const s=new SpeechSynthesisUtterance(t);s.voice=c1(),s.rate=1;let r=!1;const o=()=>{r||(r=!0,n())};s.onend=o,s.onerror=o,setTimeout(o,(Kc(t)+4)*1e3),e.cancel(),e.speak(s)})):this._sleep(Kc(t))}async _recordings(t){const e=t.filter(s=>s.say).map(s=>s.say);try{const s=await fetch(`${Zc}/index.json`);if(s.ok)return new Set(await s.json())}catch{}const n=await Promise.all(e.map(s=>fetch(`${Zc}/${s}.mp3`,{method:"HEAD"}).then(r=>r.ok&&(r.headers.get("content-type")??"").startsWith("audio")?s:null).catch(()=>null)));return new Set(n.filter(Boolean))}_cancellable(t){return new Promise(e=>{const n=()=>e();this.cancels.add(n),Promise.resolve(t).then(e,e).finally(()=>this.cancels.delete(n))})}_sleep(t){return this._cancellable(new Promise(e=>setTimeout(e,t*1e3)))}}function Kc(i){return Math.max(1.5,i.split(/\s+/).length/2.6)}let Vr;function c1(){var n;if(Vr!==void 0)return Vr;const i=((n=window.speechSynthesis)==null?void 0:n.getVoices())??[],t=i.filter(s=>{var r;return(r=s.lang)==null?void 0:r.startsWith("en")});return Vr=["Samantha","Google US English","Microsoft Aria","Daniel","Karen"].map(s=>t.find(r=>r.name.includes(s))).find(Boolean)??t[0]??null,i.length||(Vr=void 0),Vr??null}const l1=[{dataset:"sst",seek:.16,speed:.5,play:!0,focus:["pad"],fly:{lat:20,lon:-40,zoom:1,seconds:2},wait:!1},{say:"intro-1",text:"Welcome to the Earth Information Jukebox. Everything you are about to hear is real NASA data about our planet, turned into sound."},{say:"intro-2",text:"We will learn the sounds one at a time. Then the planet is yours to explore, with or without sight."},{say:"ocean-1",text:"First, the ocean. This slow chord is the average temperature of the sea surface facing you. Warmer water makes it higher and brighter."},{pause:1.5},{focus:["probe"],probe:!0,fly:{lat:75,lon:-160,zoom:1.5,seconds:4}},{say:"sweep-1",text:"Listen to this single tone. Its pitch is the temperature of the sea in front of you: the warmer the water, the higher the note."},{say:"sweep-2",text:"Let's start at the North Pole, and work our way down to the equator."},{fly:{lat:0,lon:-160,zoom:1.5,seconds:9}},{pause:1.5},{say:"sweep-3",text:"And now, on to the South Pole."},{fly:{lat:-70,lon:-160,zoom:1.5,seconds:9}},{pause:2},{probe:!1},{focus:["melody"],fly:{lat:10,lon:-150,zoom:1,seconds:2},wait:!1},{say:"ocean-4",text:"Now the melody. Four notes play from left to right, one for each slice of the globe in front of you. A higher note means warmer water in that slice."},{pause:2.5},{focus:null,pause:3},{dataset:"lightning",seek:.19,speed:.5,play:!0,focus:["drums"],fly:{lat:0,lon:20,zoom:1.3,seconds:3},wait:!1},{say:"storm-1",text:"Next, lightning, seen by a camera on the International Space Station. Every drum hit is a burst of new lightning on the side of Earth facing you."},{say:"storm-2",text:"The busier the storms, the busier the drums. Storms farther north sound higher, and storms on your left play in your left ear."},{pause:2},{fly:{lat:0,lon:-150,zoom:1.3,seconds:4},reach:.35,then:.25},{say:"storm-3",text:"Over the open Pacific, lightning is rare, and the drums fall quiet."},{pause:1},{focus:null,speed:1,fly:{lat:5,lon:-60,zoom:1,seconds:4},wait:!1},{say:"storm-4",text:"Underneath, a low rumble swells as the whole planet grows stormier."},{pause:3},{dataset:"aerosols",seek:.3,speed:.5,play:!0,focus:["dust"],fly:{lat:18,lon:-20,zoom:1.4,seconds:3},wait:!1},{say:"air-1",text:"Finally, the air itself. Tiny particles called aerosols drift around the world. This low hum is desert dust, blowing off the Sahara and across the Atlantic."},{pause:1.5},{focus:["smoke"],fly:{lat:-12,lon:20,zoom:1.4,seconds:3}},{say:"air-2",text:"This crackle is smoke. In August, fires burn across southern and central Africa."},{pause:1.5},{focus:["salt"],fly:{lat:-30,lon:70,zoom:1.4,seconds:3}},{say:"air-3",text:"This airy shimmer is sea salt, whipped up by winds over the ocean."},{pause:1.5},{focus:["sulfate"],fly:{lat:30,lon:110,zoom:1.4,seconds:3}},{say:"air-4",text:"And these bells are sulfates, mostly from burning fuel and from volcanoes."},{pause:1.5},{focus:null,speed:1,fly:{lat:15,lon:0,zoom:1,seconds:3},wait:!1},{say:"air-5",text:"Together, they tell you what is in the air. Each sound grows louder the more of its particle you can see, and moves left or right with it."},{pause:2.5},{say:"outro-1",text:"That is the jukebox. Drag the globe or use the arrow keys to explore. Point at any spot to hear it, and hold Shift to hear its value read aloud."},{say:"outro-2",text:"The planet is yours."}],ut=i=>document.getElementById(i),sm=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Jr=new r1(ut("live")),u1=1.6,h1=1.35;let Pt,Ye,it=null,Da=null,ze=0,An=!0,Ki=1,Zt=null,Mi=null,Fn=null,eu=-1e9;const ee={on:!1,keyframe:null,wasPlaying:!1,resumedZoomed:!1,texture:null,full:!1,token:0};Pt=new aS(ut("globe"),{reducedMotion:sm});Pt.swapStyle=new URLSearchParams(location.search).get("swap")??"bloom";{const i=new Vf(new Uint8Array([4,6,12,255]),1,1);i.needsUpdate=!0,Pt.setTexture(i);const t=new Bf;Promise.all(["cover/day.jpg","cover/night.jpg"].map(e=>t.loadAsync(e))).then(([e,n])=>{ut("start").classList.contains("leaving")||Pt.setCover(e,n),ut("start").classList.add("ready")}).catch(e=>{console.warn("[cover] textures failed",e),ut("start").classList.add("ready")})}requestAnimationFrame(Sm);async function rm({withShow:i}){ut("start-btn").disabled=!0,ut("explore-btn").disabled=!0,ut("start").classList.add("leaving");const t=Pt.leaveCover();Ye=new i1,await Ye.start(),ut("app").classList.add("intro"),ut("app").hidden=!1,Pt.onZoom=xm,L1(),m1();const e=ch(Oa[0]).then(()=>Pt.coverDataReady());await Promise.all([t,e]),ut("start").hidden=!0,ut("app").classList.remove("intro"),ut("globe").focus(),setTimeout(p1,400),i&&am()}ut("start-btn").addEventListener("click",()=>rm({withShow:!0}));ut("explore-btn").addEventListener("click",()=>rm({withShow:!1}));ut("start-btn").focus();const As=new a1({get globe(){return Pt},get sound(){return Ye},async selectDataset(i,t=0,e=!1){return(it==null?void 0:it.ds.id)===i&&!e?!1:(await ch(Oa.find(n=>n.id===i),{startAt:t}),!0)},seek(i){ut("scrub").value=String(Math.round(i*1e3)),_m(i)},setPlaying(i){ee.on?lc({resume:i}):ac(i)},setSpeed(i){Ki=i,Zt&&(Zt.playbackRate=i),[...ut("speed").options].some(t=>Number(t.value)===i)&&(ut("speed").value=String(i))},currentId(){return(it==null?void 0:it.ds.id)??null},position(){return it?ze/it.summary.frames%1:0},rate(){if(!it)return 0;if(Zt!=null&&Zt.duration)return 1/Zt.duration;const i=it.frames??{};return(i.fps??30)/(i.movieStride??4)/it.summary.frames},probe(i){om=i,Ye.probe(i)},caption(i){i&&(ut("show-caption").textContent=i)},onEnd(){Ki=Number(ut("speed").value),Zt&&(Zt.playbackRate=Ki),ut("show-bar").hidden=!0,document.body.classList.remove("showing"),cm(!1),ut("show-btn").hidden=!1,ut("globe").focus()}});let om=!1;function d1(i=Pt.center()){if(!i||!it)return null;let t=0,e=0;for(let n=-15;n<=15;n+=5){const s=yo({lat:i.lat,lon:(i.lon+n+540)%360-180});s.value01!=null&&(t+=s.value01,e++)}return e?t/e:null}function am(){As.running||(ut("show-caption").textContent="",ut("show-bar").hidden=!1,ut("show-btn").hidden=!0,document.body.classList.add("showing"),cm(!0),As.start(l1))}ut("show-btn").addEventListener("click",am);ut("show-stop").addEventListener("click",()=>As.stop());const f1=["shelf","play","scrub","speed"];function cm(i){for(const t of f1)ut(t).inert=i}document.addEventListener("keydown",i=>{As.running&&i.isTrusted&&i.key==="Escape"&&As.stop()},!0);async function p1(){const i=()=>new Promise(t=>setTimeout(t,300));for(const t of Oa){const e=await Gf(t).catch(()=>null);if(!(!e||e===it)){if(e.events){Pt.prepareEvents(e.events),await i();const n=await um(e.events).catch(()=>null);n&&Pt.renderer.initTexture(n)}e.land&&(await Promise.all([bi(e.land.image),bi(e.land.mask,{data:!0})]).catch(()=>[])).forEach(s=>Pt.renderer.initTexture(s)),e.videoUrl&&fetch(xe.preferHigh&&e.videoUrlHigh?e.videoUrlHigh:e.videoUrl,{headers:{Range:"bytes=0-1500000"}}).catch(()=>{}),await i()}}}function m1(){const i=ut("shelf");for(const t of Oa){const e=document.createElement("button");e.type="button",e.innerHTML=t.short?`<span class="full">${t.title}</span><span class="short" aria-hidden="true">${t.short}</span>`:t.title,e.dataset.id=t.id,e.setAttribute("aria-pressed","false"),e.addEventListener("click",()=>ch(t)),i.appendChild(e)}}const g1=25,nf=3e6,_1=1e4,v1=2,x1=3e4,_i=new URLSearchParams(location.search),xe={res:null,probeMbps:null,note:"",locked:!1,token:0,preferHigh:!1},tr=new Map;function bi(i,t){if(!tr.has(i)){const e=iu(i,t);tr.set(i,e),e.catch(()=>tr.delete(i))}return tr.get(i)}const lm=1.4;function um(i){if(!i.night)return bi(i.base);const t=i.night[8192];return t&&tr.has(t)?tr.get(t).catch(()=>bi(i.night[4096]??t)):bi(i.night[4096]??t)}function hm(i){var e;const t=(e=i.night)==null?void 0:e[8192];!t||dm(i)!==t||bi(t).then(n=>{(it==null?void 0:it.events)===i&&Pt.material.map!==n&&Pt.setTexture(n)}).catch(()=>{})}function dm(i){return i.night?Pt.maxTextureSize>=8192&&Math.max(screen.width,screen.height)*devicePixelRatio>=1800&&i.night[8192]||i.night[4096]||i.night[8192]:null}function y1(i){var e;const t=dm(i);return t&&t===((e=i.night)==null?void 0:e[8192])?8192:i.width}function fm(){var i;return((i=it==null?void 0:it.colorFix)==null?void 0:i[String(xe.res)])??null}async function S1(i){if(!i.videoUrlMax||!navigator.mediaCapabilities)return!1;try{const t=await navigator.mediaCapabilities.decodingInfo({type:"file",video:{contentType:'video/mp4; codecs="hvc1.1.6.L183.B0"',width:6840,height:3420,bitrate:4e7,framerate:30}});return t.supported&&t.smooth&&t.powerEfficient}catch{return!1}}const pm=()=>xe.res===6840;function M1(){const i=Math.max(screen.width,screen.height)*devicePixelRatio;return Pt.maxTextureSize>=4096&&i>=2e3}const Wi=(i,t)=>new Promise(e=>i.addEventListener(t,e,{once:!0}));function T1(i){const t=document.createElement("video");return Object.assign(t,{src:i,muted:!0,loop:!0,playsInline:!0,crossOrigin:"anonymous",preload:"auto"}),t.playbackRate=Ki,t}async function Pa(i,t,{syncFrom:e=null,swap:n=null}={}){const s=T1(i);if(n){const a=c=>new Promise(l=>setTimeout(l,c));if(n.startAt>0&&(s.readyState<1&&await Promise.race([Wi(s,"loadedmetadata"),a(6e3)]),s.duration&&(s.currentTime=Math.min(n.startAt*s.duration,s.duration-gm),await Promise.race([Wi(s,"seeked"),a(6e3)]))),s.readyState<2&&await Promise.race([Wi(s,"loadeddata"),a(6e3)]),n.token!==Zs)return s.removeAttribute("src"),s.load(),!1}if(e){if(s.readyState<1&&await Wi(s,"loadedmetadata"),s.currentTime=e.currentTime,await Wi(s,"seeked"),s.readyState<3&&await Promise.race([Wi(s,"canplay"),new Promise(a=>setTimeout(a,8e3))]),s.readyState<3)return!1;s.currentTime=e.currentTime,await Wi(s,"seeked")}const r=Zt,o=Mi;return Zt=s,Mi=new Cy(s),w1(s,Mi),xe.res=t,ee.on||Pt.setTexture(Mi,fm()),n&&Pt.swapFrom(n.prev,n.done),An&&!ee.on&&s.play().catch(()=>{}),R1(s,it.frames),t===4096&&C1(s),r&&(r.pause(),r.removeAttribute("src"),r.load()),o==null||o.dispose(),!0}function w1(i,t){const e=()=>{Mi===t&&(t.needsUpdate=!0)};i.readyState>=2&&e(),i.addEventListener("loadeddata",e),i.addEventListener("seeked",e)}async function b1(i,t,e){i.readyState<1&&await Wi(i,"loadedmetadata");const n=t?t*8/i.duration/1e6:0,s=()=>i.buffered.length?i.buffered.end(i.buffered.length-1):0,r=performance.now(),o=s(),a=await E1(e),c=Math.max(.05,(performance.now()-r)/1e3),l=Math.max(0,s()-o)*n/c;return a+l}async function E1(i){const t=Number(_i.get("mbps"));if(t)return t;const e=new AbortController,n=setTimeout(()=>e.abort(),_1),s=performance.now();let r=0;try{const a=(await fetch(i,{headers:{Range:`bytes=0-${nf-1}`},cache:"no-store",signal:e.signal})).body.getReader();for(;r<nf;){const{done:c,value:l}=await a.read();if(c)break;r+=l.length}e.abort()}catch{}finally{clearTimeout(n)}return r*8/((performance.now()-s)/1e3)/1e6}async function A1(i){const t=++xe.token,e=_i.get("video");if(!i.videoUrlHigh||e==="2048"){xe.note=e?"forced 2048":"no 4096 file";return}if(e!=="4096"&&!M1()){xe.note="screen too small for 4096";return}if(xe.locked){xe.note="stayed on 2048 after stalls";return}const s=Number(_i.get("mbps"))||await b1(Zt,i.videoBytes,i.videoUrlHigh);if(xe.probeMbps=Number.isFinite(s)?Math.round(s):null,t!==xe.token||it!==i)return;if(s<g1){xe.note=`connection ${Math.round(s)} Mbps: staying on 2048`;return}const r=await Pa(i.videoUrlHigh,4096,{syncFrom:Zt});xe.note=r?"upgraded to 4096":"4096 could not buffer: staying on 2048",r&&(xe.preferHigh=!0)}function C1(i){const t=[];i.addEventListener("waiting",async()=>{if(i!==Zt||!An||i.seeking)return;const e=performance.now();for(t.push(e);t.length&&e-t[0]>x1;)t.shift();t.length>=v1&&(it!=null&&it.videoUrl)&&it.videoUrl!==it.videoUrlHigh&&(xe.locked=!0,xe.note="4096 stalled: dropped to 2048",await Pa(it.videoUrl,2048,{syncFrom:i}))})}let Zs=0;async function ch(i,{startAt:t=0}={}){var l,u,h;const e=++Zs;for(const d of ut("shelf").children)d.setAttribute("aria-pressed",String(d.dataset.id===i.id));it&&Ye.chime();const n=await Gf(i);if(e!==Zs)return;if(!n){Jr.say(`${i.title} isn't built yet. Run the pipeline for ${i.id}.`,{force:!0});return}lc({resume:!1}),it=n,Da=new s1(n.summary),ze=t*n.summary.frames,ut("scrub").value=String(Math.round(t*1e3));const s=Pt.material.map,r=Zt,o=Mi;r==null||r.pause(),Zt=null,Mi=null;const a=()=>{r&&(r.removeAttribute("src"),r.load()),o==null||o.dispose()};if(xe.token++,Pt.clearEvents(),n.events&&_i.get("events")!=="0"){xe.res=null,xe.note=`vector events (${n.events.count.toLocaleString()} dots)`;const d=n.events;Pt.prepareEvents(d);let p;try{p=await um(d)}catch(g){console.warn("[events] base map failed",g),p=await bi(d.base)}if(e!==Zs)return;Pt.setTexture(p),Pt.setEvents(d),Pt.swapFrom(s,a),Pt.zoomFactor>lm&&hm(d)}else if(n.videoUrl){const d={token:e,prev:s,done:a,startAt:t};if(_i.get("video")==="6840"&&await S1(n))await Pa(n.videoUrlMax,6840,{swap:d}),xe.note="forced 6840 (HEVC)";else{_i.get("video")==="6840"&&(xe.note=n.videoUrlMax?"this browser cannot decode 6840 HEVC smoothly":"no 6840 file",console.warn(`[video] ?video=6840: ${xe.note}; using the normal videos`));const p=n.videoUrlHigh&&(_i.get("video")==="4096"||xe.preferHigh&&!xe.locked);if(!await Pa(p?n.videoUrlHigh:n.videoUrl,p?4096:2048,{swap:d}))return;p||A1(n)}}else n.texture&&(Pt.setTexture(n.texture),Pt.swapFrom(s,a));if(e!==Zs)return;Pt.setDetailWidth(((u=(l=n.hires)==null?void 0:l.size)==null?void 0:u[0])??(n.events&&_i.get("events")!=="0"?y1(n.events):2048)),Pt.setLandLayer(null,null),n.land&&_i.get("land")!=="0"&&Promise.all([bi(n.land.image),bi(n.land.mask,{data:!0})]).then(([d,p])=>{it===n&&e===Zs&&Pt.setLandLayer(d,p)}).catch(d=>console.warn("[land] could not load land layer",d)),Ye.setMode(i.sound),ut("credit").innerHTML=`${i.credit} <a href="${i.svs}" target="_blank" rel="noopener">Source</a>`+(n.demo?" · <strong>Demo data</strong>: the pipeline hasn't been run yet.":"")+'<br>Sky: NASA SVS star map and LRO Moon; Sun and planets <a href="https://www.solarsystemscope.com/textures/" target="_blank" rel="noopener">Solar System Scope</a> (CC BY 4.0).',P1(i),z1(i),sn.key=sn.pendingKey=null,Object.assign(Tn,{value:0,level:0,at:0});const c=(h=n.frames)==null?void 0:h.dates;ut("time-start").textContent=c?nu(c[0]):"",ut("time-end").textContent=c?nu(c[1]):"",Jr.say(`${i.title}. ${i.description}`,{force:!0}),xm(Pt.zoomFactor)}function R1(i,t){if(!("requestVideoFrameCallback"in i))return;const e=(n,s)=>{i===Zt&&(ee.on||(ze=mm(s.mediaTime,t)),i.requestVideoFrameCallback(e))};i.requestVideoFrameCallback(e)}function mm(i,t){const{fps:e=30,offset:n=0,movieStride:s=1}=t||{};return Math.max(0,(i*e-n)/s)}function ac(i){An=i,ut("play").setAttribute("aria-label",An?"Pause":"Play"),ut("play").setAttribute("aria-pressed",String(An)),Zt&&(An?Zt.play().catch(()=>{}):Zt.pause())}ut("play").addEventListener("click",()=>{if(ee.on&&!An){ee.resumedZoomed=Pt.zoomFactor>=vm().outAt,lc({resume:!0});return}ac(!An),!An&&(it!=null&&it.hires)&&Zt&&!pm()&&lh()});ut("speed").addEventListener("change",i=>{Ki=Number(i.target.value),Zt&&(Zt.playbackRate=Ki)});const gm=.05;function _m(i){i=Math.min(1,Math.max(0,i)),Zt!=null&&Zt.duration&&(Zt.currentTime=Math.min(i*Zt.duration,Zt.duration-gm)),it&&(ze=Math.min(i,.9999)*it.summary.frames)}let cc=!1;ut("scrub").addEventListener("pointerdown",()=>{cc=!0});addEventListener("pointerup",()=>{cc=!1});addEventListener("pointercancel",()=>{cc=!1});ut("scrub").addEventListener("input",i=>{_m(Number(i.target.value)/1e3),ee.on&&lh()});ut("spin-left").addEventListener("click",()=>Pt.spinBy(.35/Math.sqrt(Math.max(1,Pt.zoomFactor))));ut("spin-right").addEventListener("click",()=>Pt.spinBy(-.35/Math.sqrt(Math.max(1,Pt.zoomFactor))));ut("zoom-in").addEventListener("click",()=>Pt.zoomBy(1.6));ut("zoom-out").addEventListener("click",()=>Pt.zoomBy(1/1.6));function D1(i){ut("mute").setAttribute("aria-pressed",String(i)),ut("mute").setAttribute("aria-label",i?"Unmute":"Mute"),Ye.setMuted(i)}ut("mute").addEventListener("click",i=>{D1(i.currentTarget.getAttribute("aria-pressed")!=="true")});function P1(i){const t=i.typeShort?null:i.legend;ut("legend").hidden=!t,t&&(ut("legend-label").textContent=t.label,ut("legend-bar").style.background=`linear-gradient(to right, ${t.colors.join(", ")})`,ut("legend-min").textContent=t.min,ut("legend-max").textContent=t.max)}function nu(i){return new Date(`${i}T00:00:00Z`).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"})}function vm(){const i=Math.max(0,Pt.maxZoom-1);return{inAt:Math.min(u1,1+.5*i),outAt:Math.min(h1,1+.3*i)}}function xm(i){if(!it)return;it.events&&i>lm&&hm(it.events);const{inAt:t,outAt:e}=vm();i<e?(ee.resumedZoomed=!1,ee.on&&ee.wasPlaying&&lc({resume:!0})):i>=t&&i>1.02&&!ee.on&&!ee.resumedZoomed&&it.hires&&Zt&&!pm()&&!As.running&&lh()}function I1(){var e;const{movieFrames:i}=it.hires,t=ze*(((e=it.frames)==null?void 0:e.movieStride)??1);return i.reduce((n,s)=>Math.abs(s-t)<Math.abs(n-t)?s:n,i[0])}async function lh(){ee.on||(ee.on=!0,ee.wasPlaying=An,ac(!1));const i=I1(),{fps:t=30,offset:e=0,movieStride:n=1}=it.frames||{};if(ze=i/n,Zt&&(Zt.currentTime=(i+e)/t),ee.keyframe===i&&ee.texture&&ee.full){Pt.setTexture(ee.texture);return}const s=++ee.token,r=String(i).padStart(5,"0"),o=it.hires.ext??"webp",a=(c,l)=>{var u;return s!==ee.token||!ee.on?(c.dispose(),!1):((u=ee.texture)==null||u.dispose(),Object.assign(ee,{texture:c,keyframe:i,full:l}),Pt.setTexture(c),!0)};if(ta("Loading detail…"),it.hires.previewSize)try{const c=await iu(`${it.hires.dir}/preview/${r}.jpg`);if(!a(c,!1))return;ta(`Detail ${c.image.width}×${c.image.height} · loading full resolution…`),Jr.say(`Paused for detail at ${vs()}. Press Play to resume.`,{force:!0})}catch(c){console.warn("[detail] preview failed, going straight to full",c)}try{const c=await iu(`${it.hires.dir}/${r}.${o}`);if(!a(c,!0))return;ta(`Detail ${c.image.width}×${c.image.height} · ${vs()} · Play resumes`),it.hires.previewSize||Jr.say(`Paused for detail at ${vs()}. Press Play to resume.`,{force:!0})}catch(c){console.warn("[detail] could not load full still",c),s===ee.token&&ta(ee.texture?`Detail (preview only) · ${vs()}`:"Detail view unavailable")}}function lc({resume:i}){ee.on&&(ee.on=!1,ee.token++,N1(),Mi&&Pt.setTexture(Mi,fm()),i&&ac(!0))}async function iu(i,{data:t=!1}={}){const e=await(await fetch(i)).blob(),n=await createImageBitmap(e),s=Pt.maxTextureSize,r=Math.min(1,s/Math.max(n.width,n.height));n.close();const o=await createImageBitmap(e,{imageOrientation:"flipY",...r<1?{resizeWidth:Math.floor(n.width*r),resizeHeight:Math.floor(n.height*r)}:{}}),a=new Ie(o);return a.colorSpace=t?bn:Pe,a.flipY=!1,a.generateMipmaps=!0,a.minFilter=ji,a.needsUpdate=!0,a}function ta(i){ut("detail-badge").textContent=i,ut("detail-badge").hidden=!1}function N1(){ut("detail-badge").hidden=!0}function L1(){const i=ut("globe");i.addEventListener("pointermove",t=>{if(t.pointerType==="touch"||Pt.dragging){Fn=null;return}const e=i.getBoundingClientRect();Fn=Pt.pick(t.clientX-e.left,t.clientY-e.top),ym(Fn),su()}),i.addEventListener("pointerleave",()=>{Fn=null,Ye.cursor(null),su()}),i.addEventListener("pointerdown",()=>{Fn=null}),i.addEventListener("keydown",t=>{(t.key.startsWith("Arrow")||"+=-_".includes(t.key))&&(eu=performance.now(),Fn=null),t.key==="Shift"&&!t.repeat&&it&&o1(Mm(Fn??Pt.center()))})}function ym(i){if(!it||!i||As.running){Ye.cursor(null);return}const t=yo(i);Ye.cursor(t.value01,i.x??0),t.type!==void 0&&t.type!==sf&&Ye.cursorType(t.type),sf=t.type}let sf,rf=performance.now(),ea=0;const qr=[...document.querySelectorAll("#eq span")],na=qr.map(()=>0),Jc=qr.map(()=>0);function O1(i){if(!Ye||ut("app").hidden)return;const t=Ye.muted?qr.map(()=>0):Ye.levels(qr.length);qr.forEach((e,n)=>{Jc[n]+=(t[n]-Jc[n])*(1-Math.exp(-i/.6));const s=Math.min(1,t[n]*.45+Math.max(0,t[n]-Jc[n])*3);na[n]=s>na[n]?s:Math.max(s,na[n]-i*2.6),e.style.transform=`scaleY(${(.12+.88*(sm?0:na[n])).toFixed(3)})`})}function Sm(i){const t=Math.min(.1,(i-rf)/1e3);if(O1(t),rf=i,!it)Pt.update(t);else{const{summary:e,frames:n}=it;if(Zt?!("requestVideoFrameCallback"in Zt)&&!ee.on&&(ze=mm(Zt.currentTime,n)):An&&(ze=(ze+t*Ki*(((n==null?void 0:n.fps)??30)/((n==null?void 0:n.movieStride)??4)))%e.frames),Pt.setEventsFrame(ze),Pt.setSkyTime(V1(t)),Pt.update(t),ea+=t,ea>=.1){const r=Da.extract(Pt,ze);r.classes=Da.extractClasses(Pt,ze),H1(r);const o=it.ds.padRange;if(o){const a=it.summary.meta.vmin+r.mean01*it.summary.range;r.padMean01=Math.min(1,Math.max(0,(a-o[0])/(o[1]-o[0])))}Ye.update(r,ea),om&&Ye.probeValue(d1()),Pt.keyMoving&&(eu=i),!Fn&&document.activeElement===ut("globe")&&i-eu<3e3&&ym(Pt.center()),ea=0,su()}cc||(ut("scrub").value=String(Math.round(ze/e.frames*1e3)));const s=Number(ut("scrub").value)/10;ut("scrub").style.setProperty("--pct",`${s.toFixed(1)}%`),U1(s)}requestAnimationFrame(Sm)}function vs(){var t;const i=F1();return i?((t=it==null?void 0:it.frames)==null?void 0:t.datesExact)===!1?i:nu(i):""}let of="";function U1(i){var s;const t=ut("date-tracker"),e=((s=it==null?void 0:it.frames)==null?void 0:s.datesExact)!==!1,n=vs();n!==of&&(t.textContent=n,of=n),t.classList.toggle("static",!e),t.hidden=!n,t.style.setProperty("--pct",i.toFixed(2))}function F1(){var s;const i=(s=it==null?void 0:it.frames)==null?void 0:s.dates;if(!i)return"";if(it.frames.datesExact===!1){const r=o=>new Date(`${o}T00:00:00Z`).toLocaleDateString(void 0,{month:"short",year:"numeric",timeZone:"UTC"});return`${r(i[0])} – ${r(i[1])}`}const[t,e]=i.map(r=>new Date(`${r}T00:00:00Z`).getTime()),n=Math.min(1,ze/Math.max(1,it.summary.frames-1));return new Date(t+(e-t)*n).toISOString().slice(0,10)}function k1(){var s;const i=(s=it==null?void 0:it.frames)==null?void 0:s.dates;if(!i)return Date.now();const[t,e]=i.map(r=>Date.parse(`${r}T12:00:00Z`));if(it.frames.datesExact===!1)return t;const n=Math.min(1,ze/Math.max(1,it.summary.frames-1));return t+(e-t)*n}let Gi=null;function V1(i){var a;const t=k1(),e=(a=it==null?void 0:it.frames)==null?void 0:a.dates,n=e&&it.frames.datesExact!==!1;if(Gi===null||!An||!n||ee.on||Math.abs(t-Gi)>2*864e5)return Gi=t,Gi;const s=it.frames,r=Date.parse(`${e[1]}T12:00:00Z`)-Date.parse(`${e[0]}T12:00:00Z`),o=it.summary.frames*(s.movieStride??1)/(s.fps??30);return Gi+=r/o*Ki*i,Gi+=(t-Gi)*Math.min(1,i*4),Gi}function yo(i){var r;if(!i)return{text:"Off the globe",value01:null};const{vmin:t}=it.summary.meta,e=it.summary.range;if(it.grids){it.grids.request(Math.floor(ze)%it.summary.frames);const o=it.grids.lookup(i.lat,i.lon);if(o&&o.type!==void 0){const a=it.ds.typeNames??["Type 1","Type 2","Type 3","Type 4"],c=o.strength>.5?"heavy":o.strength>.2?"moderate":"light";return{text:`${a[o.type]} · ${c}`,short:((r=it.ds.typeShort)==null?void 0:r[o.type])??a[o.type],amount:c,value01:o.strength,type:o.type}}return o&&o.noData&&it.summary.classes?{text:"Clear air",value01:null}:o?o.noData?{text:"N/A",value01:null}:{text:it.ds.format(o.value),value01:(o.value-t)/e}:{text:"…",value01:null}}const{value:n,share:s}=Da.valueAt(ze,i.lat,i.lon);return s>.05?{text:it.ds.format(n),value01:(n-t)/e}:{text:"no data",value01:null}}function Mm(i){return`${it.ds.title}, ${vs()}. ${im(i)}: ${yo(i).text}.`}function B1(i){return i.typeShort?i.typeShort.map((t,e)=>[t,i.typeColors[e]]):i.id==="lightning"?[["Here","#fff34a"],["In view","#fff34a"]]:null}function z1(i){const t=ut("readout-mix"),e=B1(i);t.hidden=!e,t.innerHTML=e?e.map(([n,s])=>`<div class="mix-row"><span class="mix-name">${n}</span><span class="mix-track"><span class="mix-fill" style="background:${s}"></span></span></div>`).join(""):""}function H1(i){if(ut("readout-mix").hidden)return;let t=null;if(i.classes?t=i.classes.map(n=>n.level/2):it!=null&&it.events&&i.hits&&(t=[Tn.value/Xr[3].up,(i.hits.norm??0)/2]),!t)return;const e=ut("readout-mix").querySelectorAll(".mix-fill");t.forEach((n,s)=>{e[s]&&(e[s].style.width=`${Math.round(Math.min(1,Math.max(0,n))*100)}%`)})}const G1=300,sn={key:null,pendingKey:null,since:0};function af(i,t,e){if(ut("readout-place").textContent=e,i===sn.key){sn.pendingKey=null;return}const n=performance.now();if(i!==sn.pendingKey&&(sn.pendingKey=i,sn.since=n),sn.key!==null&&n-sn.since<G1)return;const s=sn.key===null;if(sn.key=i,sn.pendingKey=null,s||ut("readout-value").textContent===t){ut("readout-value").textContent=t;return}const r=ut("readout");r.classList.add("swapping"),setTimeout(()=>{ut("readout-value").textContent=t,r.classList.remove("swapping")},140)}const Xr=[{name:"Quiet",up:0,down:0},{name:"Scattered flashes",up:4e-4,down:15e-5},{name:"Storms",up:.0016,down:.001},{name:"Heavy storms",up:.0045,down:.003}],Tn={value:0,level:0,at:0};function W1(i){const t=performance.now(),e=Math.min(.5,(t-(Tn.at||t))/1e3);Tn.at=t;const{vmin:n}=it.summary.meta,s=it.summary.range,r=1.4,o=Math.max(.2,Math.cos(i.lat*Math.PI/180));let a=0,c=0;for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++){const p=(i.lon+d*r/o+540)%360-180,g=yo({lat:Math.max(-89,Math.min(89,i.lat+h*r)),lon:p});g.value01!=null&&(a+=n+g.value01*s,c++)}const l=c?a/c:0;Tn.value+=(l-Tn.value)*(1-Math.exp(-e/.9));let u=Tn.level;for(;u<Xr.length-1&&Tn.value>Xr[u+1].up;)u++;for(;u>0&&Tn.value<Xr[u].down;)u--;Tn.level=u}function su(){if(!it)return;const i=Fn??Pt.center();ut("readout-source").textContent=Fn?"Cursor":"Center",ut("readout-date").textContent=vs()||"—";const t=yo(i),e=im(i);if(it.events)W1(i),af(`activity ${Tn.level}`,Xr[Tn.level].name,e);else if(it.summary.classes){const n=t.amount?t.amount[0].toUpperCase()+t.amount.slice(1):null;af(t.short?`type ${t.type}`:t.text,t.short??t.text,n?`${n} · ${e}`:e)}else sn.key=sn.pendingKey=null,ut("readout-value").textContent=t.text,ut("readout-place").textContent=e;document.activeElement===ut("globe")&&!Fn&&Jr.say(Mm(i))}
