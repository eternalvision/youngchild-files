parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Kv6H":[function(require,module,exports) {
const t=document.querySelector(".canvas"),e=t.getContext("2d");let n,i,o,a;const r=8,s=10,d={},f=[];function x(){o=window.devicePixelRatio||1,n=window.innerWidth,i=window.innerHeight,t.width=n*o,t.height=i*o,e.scale(o,o)}function c(){l(),requestAnimationFrame(c)}function l(){if(e.clearRect(0,0,n,i),a){if(f.push({...d}),f.length>s&&f.shift(),f.length>3){e.beginPath(),e.moveTo(f[0].x,f[0].y);for(var t=2;t<f.length-2;t++){const n=f[t],i=f[t+1];e.quadraticCurveTo(n.x,n.y,(n.x+i.x)/2,(n.y+i.y)/2)}e.quadraticCurveTo(f[t].x,f[t].y,f[t+1].x,f[t+1].y),e.lineWidth=r,e.lineCap="round",e.strokeStyle="#fff",e.stroke()}d.x+=.2*(d.tx-d.x),d.y+=.2*(d.ty-d.y),d.vx*=.8,d.x+=d.vx,e.beginPath(),e.arc(d.x,d.y,r,0,2*Math.PI),e.fillStyle="#6a6376",e.fill()}}function u(t){const e=a;t&&(a=t),a&&(d.tx=a.offsetLeft-12-r,d.ty=a.offsetTop+a.offsetHeight/2,"number"!=typeof d.x&&(d.x=d.tx,d.y=d.ty),a!==e&&(d.vx=-8-Math.abs(d.tx-d.x)/5))}document.body.addEventListener("focus",t=>u(t.target),!0),x(),c(),window.addEventListener("resize",()=>{requestAnimationFrame(()=>{x(),u(),l()})}),window.addEventListener("scroll",()=>{requestAnimationFrame(()=>{u(),l()})});
},{}]},{},["Kv6H"], null)
//# sourceMappingURL=/eternalvision/canvas-form.13ebe647.js.map