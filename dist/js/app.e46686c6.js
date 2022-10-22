(function(){"use strict";var r={4595:function(r,e,n){var t=n(9242),a=n(3396);function i(r,e,n,t,i,o){const u=(0,a.up)("card-game");return(0,a.wg)(),(0,a.j4)(u)}const o={class:"card-game"},u={key:1};function s(r,e,n,t,i,s){const l=(0,a.up)("flip-card");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("button",{onClick:e[0]||(e[0]=(...e)=>r.handleClickRestart&&r.handleClickRestart(...e))},"restart"),r.isInitCardGame?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(r.rows,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"card-game__group-flip-card",key:"row-item-"+e},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.cols,(n=>((0,a.wg)(),(0,a.j4)(l,{url:r.urlCard(e,n),key:"item-"+n,"is-show":r.isShowFlipCard(e,n),onClick:t=>r.handleClickCard(e,n)},null,8,["url","is-show","onClick"])))),128))])))),128)):((0,a.wg)(),(0,a.iD)("div",u," loading... "))])}var l=n(7139);const c=["src"];function d(r,e,n,t,i,o){return(0,a.wg)(),(0,a.iD)("div",{class:(0,l.C_)(["flip-card",{"flip-card--show":r.isShow}])},[(0,a._)("img",{src:r.url},null,8,c)],2)}var f=(0,a.aZ)({props:{url:{type:String,required:!0},isShow:{type:Boolean,required:!0}}}),h=n(89);const p=(0,h.Z)(f,[["render",d]]);var v=p,C=(n(7658),n(4870));async function g(r){const e=[];for(let t=0;t<r;t++)e.push(fetch("https://source.unsplash.com/featured/200x"+(200+t).toString()));const n=await Promise.all(e);return n.map((r=>r.url))}const m=(0,C.iH)([]),w=(0,C.iH)([]);let y,k,b,O=!1;function S(r){return y=r,{initMapCards:x,isInitCardGame:(0,a.Fl)((()=>m.value.length>0)),selectCard:D,isShowCard:F,getUrlCard:M,restartCardGame:G}}async function x(r){k=r,b=await g(k),G()}function G(){O=!1,j(k,b),I(),setTimeout((()=>{O=!0,_()}),4e3)}function _(){m.value.forEach((r=>{r.isOpen=!1}))}function j(r,e){m.value=[];for(let n=0;n<r;n++){const r={url:e[n],num:n,isOpen:!0};m.value.push(r,r)}}function I(){for(let r=m.value.length-1;r>0;r--){const e=Math.floor(Math.random()*(r+1));[m.value[r],m.value[e]]=[m.value[e],m.value[r]]}}function D(r){if(w.value.length!==y&&!1!==O&&(w.value.push(r),w.value.length>y-1)){const r=m.value[w.value[0]].num,e=w.value.every((e=>m.value[e].num==r));e?(w.value.forEach((r=>{m.value[r].isOpen=!0})),Z()):setTimeout((()=>{Z()}),2e3)}}function Z(){w.value=[]}function F(r){return w.value.includes(r)||m.value[r].isOpen}function M(r){return m.value[r].url}const H=2;var T=(0,a.aZ)({components:{FlipCard:v},props:{cols:{type:Number,default:5},rows:{type:Number,default:6}},setup(r){const{selectCard:e,initMapCards:n,restartCardGame:t,isInitCardGame:a,isShowCard:i,getUrlCard:o}=S(H),u=r.cols*r.rows/H;return n(u),{isInitCardGame:a,getUrlCard:o,selectCard:e,isShowCard:i,restartCardGame:t}},methods:{getIndex(r,e){return this.cols*(r-1)+(e-1)},isShowFlipCard(r,e){const n=this.getIndex(r,e);return this.isShowCard(n)},urlCard(r,e){const n=this.getIndex(r,e);return this.getUrlCard(n)},handleClickCard(r,e){const n=this.getIndex(r,e);this.selectCard(n)},handleClickRestart(){this.restartCardGame()}}});const U=(0,h.Z)(T,[["render",s]]);var E=U,P=(0,a.aZ)({name:"App",components:{CardGame:E}});const R=(0,h.Z)(P,[["render",i]]);var q=R;(0,t.ri)(q).mount("#app")}},e={};function n(t){var a=e[t];if(void 0!==a)return a.exports;var i=e[t]={exports:{}};return r[t](i,i.exports,n),i.exports}n.m=r,function(){var r=[];n.O=function(e,t,a,i){if(!t){var o=1/0;for(c=0;c<r.length;c++){t=r[c][0],a=r[c][1],i=r[c][2];for(var u=!0,s=0;s<t.length;s++)(!1&i||o>=i)&&Object.keys(n.O).every((function(r){return n.O[r](t[s])}))?t.splice(s--,1):(u=!1,i<o&&(o=i));if(u){r.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=r.length;c>0&&r[c-1][2]>i;c--)r[c]=r[c-1];r[c]=[t,a,i]}}(),function(){n.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return n.d(e,{a:e}),e}}(),function(){n.d=function(r,e){for(var t in e)n.o(e,t)&&!n.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}}(),function(){var r={143:0};n.O.j=function(e){return 0===r[e]};var e=function(e,t){var a,i,o=t[0],u=t[1],s=t[2],l=0;if(o.some((function(e){return 0!==r[e]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(s)var c=s(n)}for(e&&e(t);l<o.length;l++)i=o[l],n.o(r,i)&&r[i]&&r[i][0](),r[i]=0;return n.O(c)},t=self["webpackChunkcard_game2"]=self["webpackChunkcard_game2"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(4595)}));t=n.O(t)})();
//# sourceMappingURL=app.e46686c6.js.map