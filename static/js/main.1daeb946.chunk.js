(window.webpackJsonpmatikka=window.webpackJsonpmatikka||[]).push([[0],[,,,function(e,t,n){},,,function(e,t,n){e.exports=n.p+"static/media/butterfly.cad1efa9.jpg"},function(e,t,n){e.exports=n.p+"static/media/princesses.eb8b0801.jpg"},function(e,t,n){e.exports=n.p+"static/media/fire_engine.850934ae.jpg"},function(e,t,n){e.exports=n.p+"static/media/penguin.40fd825f.jpg"},function(e,t,n){e.exports=n.p+"static/media/unicorn.e2371059.jpg"},function(e,t,n){e.exports=n.p+"static/media/castle.d188f359.jpg"},function(e,t,n){e.exports=n.p+"static/media/rainbow.70091d51.jpg"},function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),i=n.n(c),o=(n(18),n(1)),s=(n(19),n(3),n(2)),l=n(6),u=n.n(l),m=n(7),f=n.n(m),d=n(8),p=n.n(d),v=n(9),E=n.n(v),N=n(10),g=n.n(N),x=n(11),h=n.n(x),b=n(12),j=n.n(b),w={PERHONEN:u.a,PRINSESSA:f.a,PALOAUTO:p.a,SATEENKAARI:j.a,PINGVIINI:E.a,LINNA:h.a,YKSISARVINEN:g.a},O=function(){var e=Math.floor(11*Math.random()),t=Math.floor(Math.random()*e);return{first:t,second:e-t,result:e}},k=function(e){return Math.floor(Math.random()*e)},I=function(e){for(var t,n=k(e.length);(t=k(e.length))===n;);var a=[n,t].sort((function(e,t){return e-t})),r=Object(s.a)(e).map((function(e){return{c:e,status:"Normal"}}));a.forEach((function(e){r[e].status="Hidden"}));var c=a.map((function(e){return r[e].c}));return{letters:r,blanks:c,image:w[e],guessLetters:L(c)}},S=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","\xc5","\xc4","\xd6"],A=function(){return S[k(S.length)]},y=function(e){for(var t=A();e.includes(t);)t=A();return t},L=function(e){for(var t=[],n=0;n<8;n++)t.push(y(t));for(var a=0;a<e.length;a++)t[k(8)]=e[a];return t};function M(e){var t=e.input,n=t.first,a=t.second,c=t.result,i=e.setDone;return r.a.createElement("div",{className:"flex-container row"},r.a.createElement("div",{className:"flex-item"},n),r.a.createElement("div",{className:"flex-item"},"+"),r.a.createElement("div",{className:"flex-item"},a),r.a.createElement("div",{className:"flex-item"},"="),r.a.createElement("input",{className:"flex-item color-0",type:"tel",onChange:function(e){var t;t=e.target.value,parseInt(t)===c&&i(!0)}}))}var P=function(e,t){return t.splice(t.findIndex((function(t){return t===e})),1),t},C=function(e,t){var n=Object(s.a)(e);return t.forEach((function(e){var t=n.findIndex((function(t){return t.c===e&&"Hidden"===t.status}));-1!==t&&(n[t].status="Solved")})),n};function D(e){var t=e.input,n=t.letters,c=t.blanks,i=t.guessLetters,l=e.setDone,u=Object(a.useState)(Object(s.a)(c)),m=Object(o.a)(u,2),f=m[0],d=m[1],p=Object(a.useState)([]),v=Object(o.a)(p,2),E=v[0],N=v[1],g=function(e){f.includes(e)&&(N([].concat(Object(s.a)(E),[e])),d(P(e,f)),0===f.length&&setTimeout((function(){return l(!0)}),1e3))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-container row belize"},C(n,E).map((function(e,t){return function(e,t,n){return"Hidden"===e.status?r.a.createElement("input",{key:t,className:"flex-item-small silver",type:"text",onChange:function(e){n(e.target.value)}}):"Normal"===e.status?r.a.createElement("div",{key:t,className:"flex-item-small river"},e.c):r.a.createElement("div",{key:t,className:"flex-item-small emerald"},e.c)}(e,t,g)}))),r.a.createElement("div",{className:"flex-container low row"},i.slice(0,4).map((function(e,t){return H(e,t,g,E.includes(e))}))),r.a.createElement("div",{className:"flex-container low row"},i.slice(4,8).map((function(e,t){return H(e,t,g,E.includes(e))}))))}var H=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c="flex-item asphalt ".concat(a?"correct-text":"hollow");return r.a.createElement("div",{key:t,className:c,onClick:function(){n(e)}},e)},R=Object.keys(w).map((function(e){return I(e)}));var T=function(){var e=function(e){m(u+1),i(e)},t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(0),l=Object(o.a)(s,2),u=l[0],m=l[1],f=Object(a.useState)(!0),d=Object(o.a)(f,2),p=d[0],v=d[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header flex-item alizarin"},"LYYTIN LASKUPELI"),c?r.a.createElement("img",{className:"flex-item color-2 responsive-image",src:R[u-1].image,onClick:function(){i(!1)}}):p?r.a.createElement(D,{input:R[u],setDone:e}):r.a.createElement(M,{input:O(),setDone:e}),r.a.createElement("div",{className:"flex-container narrow clouds"},r.a.createElement("button",{className:"flex-item button small pomegranate hollow",value:"valmis",onClick:function(){v(!p),i(!1)}},"VAIHDA PELI")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.1daeb946.chunk.js.map