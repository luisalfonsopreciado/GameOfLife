(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{12:function(e,n,t){e.exports={Board:"Board_Board__Zn9WF"}},15:function(e,n,t){e.exports=t(26)},20:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(4),c=t.n(o),l=(t(20),t(8)),u=t.n(l),i=t(11),f=t(3),s=t(9),m=function(e,n){for(var t=[],a=0;a<e;a++){t[a]=[];for(var r=0;r<n;r++)t[a][r]=Math.random()<=.8?0:1}return t},v=t(7),d=t.n(v),g=r.a.memo((function(e){var n=e.row,t=e.col,a=e.val,o=e.changeBoard,c=e.isMouseDown,l=[d.a.Cell];1===a&&l.push(d.a.Active);return r.a.createElement("div",{className:l.join(" "),draggable:!1,onMouseEnter:function(){c&&(o(n,t,1),l.push(d.a.Active))}})}),(function(e,n){return e.val===n.val&&e.isMouseDown===n.isMouseDown})),h=t(12),p=t.n(h),b=t(40),E=function(e,n,t,a){var r=!1,o=m(e.length,e[0].length),c=0,l=setInterval((function(){c++;for(var u=0;u<e.length;u++)for(var i=0;i<e[u].length;i++){var f=w(u,i,e);o[u][i]=f<2||f>3?0:3===f?1:e[u][i]}var s=e;e=o,o=s,r=j(e),n(e),(c>=t||r)&&(a(!1),clearInterval(l))}),250)},j=function(e){for(var n=0;n<e.length;n++)for(var t=0;t<e[n].length;t++)if(1===e[n][t])return!1;return!0},w=function(e,n,t){var a=0;return e>0&&1===t[e-1][n]&&a++,n>0&&1===t[e][n-1]&&a++,e<t.length-1&&1===t[e+1][n]&&a++,n<t[e].length-1&&1===t[e][n+1]&&a++,e>0&&n>0&&1===t[e-1][n-1]&&a++,e>0&&n<t[e].length-1&&1===t[e-1][n+1]&&a++,e<t.length-1&&n>0&&1===t[e+1][n-1]&&a++,e<t.length-1&&n<t[e].length-1&&1===t[e+1][n+1]&&a++,a},O=function(){var e=Object(a.useState)(20),n=Object(f.a)(e,2),t=n[0],o=n[1],c=function(e,n){var t=Object(a.useState)((function(){return m(e,n)})),r=Object(f.a)(t,2),o=r[0],c=r[1];return[o,c,function(e,n,t){var a=Object(s.a)(o);a[e][n]=t,c(a)},function(){for(var e=Object(s.a)(o),n=0;n<o.length;n++)for(var t=0;t<o[n].length;t++)e[n][t]=0;c(e)}]}(t,t),l=Object(f.a)(c,4),v=l[0],d=l[1],h=l[2],j=l[3],w=Object(a.useState)(!1),O=Object(f.a)(w,2),C=O[0],M=O[1],_=Object(a.useState)(!1),k=Object(f.a)(_,2),A=k[0],B=k[1];Object(a.useEffect)((function(){d(m(t,t))}),[t,d]);var S=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B(!0),E(v,d,t,B);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=v.map((function(e,n){return v.map((function(e,t){return r.a.createElement(g,{key:[n,t],isMouseDown:C,row:n,col:t,val:v[n][t],changeBoard:h})}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:"auto"}},r.a.createElement(b.a,{onClick:S,disabled:A},"Run Animation"),r.a.createElement(b.a,{onClick:function(){d(m(t,t))},disabled:A},"New Random Grid"),r.a.createElement(b.a,{onClick:j,disabled:A},"Clear Grid"),r.a.createElement(b.a,{onClick:function(){return o(30===t?10:30)},disabled:A},"Toggle Grid Size")),r.a.createElement("div",{className:p.a.Board,onMouseDown:function(){M(!0)},onMouseUp:function(){M(!1)},draggable:!1,style:{gridTemplateColumns:"repeat(".concat(t,", 1fr)"),gridTemplateRows:"repeat(".concat(t,", 1fr)")}},y))},C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Game of Life"),r.a.createElement("br",null),r.a.createElement(O,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))},7:function(e,n,t){e.exports={Cell:"Cell_Cell__1C8zh",Active:"Cell_Active__1WAud"}}},[[15,1,2]]]);
//# sourceMappingURL=main.cca7c0bf.chunk.js.map