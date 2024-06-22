(()=>{"use strict";var n={695:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"body {\n    background: black;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\n.homepage {\n\n    height: 100%;\n    width: 100%;\n    background: black;\n}\n\n.homepage header {\n    height: 10%;\n    display: flex;\n    justify-content: center;\n}\n\n.homepage header img {\n    height: 100%;\n    width: auto;\n}\n\n.homepage #projectTab {\n    height: 50%;\n    max-width: 100%;\n    background: black;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 200px 10px 0px rgba(0, 0, 0, 0.75);\n}\n\n#projectWin{\n    width: 80%;\n    height: 95%;\n    background: black;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    /* border: 3px solid rgba(218, 165, 32, 0.5); */\n    overflow: hidden;\n    /* box-shadow: 0px 8px 4px -4px rgba(218, 165, 32, 1); */\n    border: 2px solid rgba(218, 165, 32, 0.5);\n    /* padding: 10px; */\n    /* border-radius: 10px; */\n}\n\n#projectWin:hover {\n    overflow: scroll;\n    overflow-x: hidden;\n    scrollbar-width: thin;\n    scrollbar-color: goldenrod black;\n    \n}\n\n@keyframes colorChangeProjCard {\n    0% {\n      background-color: rgba(218, 165, 32, 1); /* Initial color */\n    }\n    50% {\n        background-color: rgba(218, 165, 32, 0.75);\n    }\n    100% {\n      background-color: rgba(218, 165, 32, 0.5); /* Final color */\n    }\n}\n\n/* @keyframes projCardScaling {\n    0% {\n\n    }\n    100% {\n        height: 90%;\n    }\n} */\n\n@keyframes projCardImgScale {\n    0% {\n\n    }\n    100% {\n        height: 85%;\n    }\n}\n\n\n.projectCard {\n    height: 70%;\n    width: 30%;\n    /* background: goldenrod; */\n    /* margin: 1%; */\n    /* animation: colorChangeProjCard 1s forwards; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* .projectCard:hover {\n    animation: colorChangeProjCard 1s reverse;\n} */\n\n.projectCard:hover img{\n    animation: projCardImgScale 90ms forwards;\n    cursor: pointer;\n}\n\n.projectCard img{\n    height: 75%;\n    object-fit: contain;\n}\n\n.homepage footer {\n    height: 40%;\n}\n\n#siteDesc {\n    height: 60%;\n    /* color: rgba(218, 165, 32, 1); */\n    color: #a7b0a2;\n    background: #000000;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#siteDesc para {\n    width: 80%;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n#siteFooter {\n    height: 40%;\n    background: #000000;\n}\n\n\n@media (max-width: 780px) {\n    .homepage header {\n        height: 15%;\n        \n        /* background: white; */\n    }\n\n    /* #projectwin {\n        overflow: scroll;\n        overflow-x: hidden;\n        scrollbar-width: thin;\n        scrollbar-color: goldenrod black;\n        -webkit-overflow-scrolling: touch;\n        padding: 0%;\n    } */\n    \n    #projectWin:hover, #projectWin:active {\n        /* overflow: scroll; */\n        -webkit-overflow-scrolling: touch;\n    }\n    \n    .projectCard {\n        min-width: 35%;\n        max-width: 35%;\n        max-height: 35%;\n    }\n\n    .projectCard img{\n        min-width: 75%;\n        max-height: auto;\n        max-width: 75%;\n    }\n\n    #siteDesc {\n        max-height: 80%;\n    }\n\n    #siteDesc para {\n        max-width: 90%;\n    }\n}",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var h=t(p),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)e[h].references++,e[h].updater(g);else{var u=o(g,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:u,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{class n{constructor(){this.link="link",this.name="name",this.img="imgURL"}readLink(){console.log(this.link)}readName(){console.log(this.name)}readImgURL(){console.log(this.img)}changeLink(n){this.link=String(n)}changeName(n){this.name=String(n)}changeImgURL(n){this.img=String(n)}}var e=t(72),r=t.n(e),o=t(825),a=t.n(o),i=t(659),c=t.n(i),s=t(56),l=t.n(s),d=t(540),p=t.n(d),h=t(113),g=t.n(h),u=t(695),m={};m.styleTagTransform=g(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),r()(u.A,m),u.A&&u.A.locals&&u.A.locals,document.addEventListener("DOMContentLoaded",(()=>{!function(n){let e=document.querySelector("#projectWin");e.innerHTML="";for(let t=0;t<n.length;t++){let r=document.createElement("div");r.classList.add("projectCard"),r.addEventListener("click",(()=>{window.open(n[t].link,"")}));let o=new Image;o.onload=function(){r.appendChild(o),e.appendChild(r)},o.onerror=function(){console.error(`Error loading image ${n[t].img}`)},o.src=n[t].img,e.appendChild(r)}}(function(e){let t=[];for(let r=0;r<e.links.length;r++){let o=new n;o.changeLink(e.links[r]),o.changeName([e.names[r]]),o.changeImgURL([e.img[r]]),t.push(o)}return t}({links:["https://ferinsh.github.io/project-weather-app/","https://youtube.com","https://google.com","https://github.com/ferinsh","https://instagram.com","https://ferinsh.github.io/tictactoe/","https://ferinsh.github.io/project-game-rps/"],names:["Weather App","Youtube","Google","Github","Instagram","Tic Tac Toe","Rock Paper Scissors"],img:["./images/weatherapp_logo.png","./images/youtube_logo.png","./images/google_logo.png","./images/github_logo.png","./images/instagram_logo.png","./images/tictactoe_logo.png","./images/rockpaperscissors_logo.png"]}))}))})()})();