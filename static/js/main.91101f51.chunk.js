(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var r,o,c,a,i,s,d,l,u,b,j,f,p,h,O,x,m,g,y,v,C,w,k,L,E,H,S,X,Y=t(0),z=t.n(Y),M=t(25),q=t.n(M),F=(t(35),t(10)),V=t(2),A=t(30),D=t(17),N=t(5),P=t(26),R=t(20),B=t(3),Z={colors:{primaryColor:"#252525",primaryColorLight:"#181818",secondaryColor:"#f2f5ea",tertiaryColor:"#1ee5ff",tertiaryColorDark:"#1ee5ff1a",quaternaryColor:"#e75a7c"},typography:{primaryFont:"Poppins, Roboto, Helvetica, sans-serif",secondaryFont:"Montserrat, Roboto, Ubuntu, sans-serif"},fontSize:{xs:"14px",sm:"18px",md:"22px",lg:"28px",xl:"36px"},breakpoints:{xs:"512px",sm:"840px",md:"992px",lg:"1200px",xl:"1366px"},structure:{paddingMobile:"20px",paddingDesktop:"10vw"}},G=Z.colors,I=G.secondaryColor,J=G.tertiaryColor,T=G.quaternaryColor,U=B.c.button(r||(r=Object(V.a)(["\n    padding: 10px 20px;\n    background-color: transparent;\n    border: 1px solid ",";\n    border-radius: ",";\n\n    ","\n"])),T,(function(n){return"number"===typeof n.rounded?n.rounded.toString()+"px":"5px"}),(function(n){return n.pink&&Object(B.b)(o||(o=Object(V.a)(["\n        background-color: ",";\n        color: ","\n    "])),I,J)})),W=(B.c.button(c||(c=Object(V.a)(["\n    background-color: red;\n"]))),Z.typography.primaryFont),_=Z.colors,K=_.secondaryColor,Q=_.quaternaryColor,$=Object(B.a)(a||(a=Object(V.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: ",";\n  }\n\n  body {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    overscroll-behavior: contain;\n  }\n\n  ::selection {\n      background: ",";\n      color: ",";\n  }\n"])),W,Q,K),nn=t(1),en=Z.colors.tertiaryColor,tn=Object(B.d)(i||(i=Object(V.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))),rn=B.c.div(s||(s=Object(V.a)(["\n    width: 60px;\n    height: 60px;\n    z-index: 1000;\n    border-radius: 50%;\n    border: 1px solid ",";\n    position: fixed;\n    opacity: 0;\n    pointer-events: none;\n    transition: border .5s;\n    will-change: transform; \n\n    &::before {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        background-color: #fff;\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        opacity: 0;\n        transform: translate(-50%, -50%);\n        transition: transform .3s, opacity .3s;\n        transition-timing-function: ease-out;\n    }\n\n    ","\n\n    ","\n\n    ","\n"])),en,(function(n){return n.ready&&Object(B.b)(d||(d=Object(V.a)(["\n        animation: "," .5s linear forwards;\n    "])),tn)}),(function(n){return n.mobile&&Object(B.b)(l||(l=Object(V.a)(["\n        display: none;\n    "])))}),(function(n){return n.hovered&&Object(B.b)(u||(u=Object(V.a)(["\n        border: none;\n        mix-blend-mode: difference;\n\n        &::before {\n            transform: translate(-50%, -50%) scale(1.5);\n            opacity: 1;\n        }\n    "])))})),on=function(n){var e=n.isHovered,t=n.isMobile,r=Object(Y.useRef)(null),o=Object(Y.useRef)({mouseX:0,mouseY:0,destinationX:0,destinationY:0,distanceX:0,distanceY:0,key:-1}),c=Object(Y.useState)(!1),a=Object(F.a)(c,2),i=a[0],s=a[1];return Object(Y.useEffect)((function(){return document.addEventListener("mouseover",(function(){s(!0)})),function(){}}),[]),Object(Y.useEffect)((function(){return document.addEventListener("mousemove",(function(n){var e=n.clientX,t=n.clientY;o.current.mouseX=e-r.current.clientWidth/2,o.current.mouseY=t-r.current.clientHeight/2})),function(){}}),[]),Object(Y.useEffect)((function(){!function n(){o.current.key=requestAnimationFrame(n);var e=o.current,t=e.mouseX,c=e.mouseY,a=e.destinationX,i=e.destinationY,s=e.distanceX,d=e.distanceY;a&&i?(o.current.distanceX=.1*(t-a),o.current.distanceY=.1*(c-i),Math.abs(o.current.distanceX)+Math.abs(o.current.distanceY)<.1?(o.current.destinationX=t,o.current.destinationY=c):(o.current.destinationX+=s,o.current.destinationY+=d)):(o.current.destinationX=t,o.current.destinationY=c),r.current.style.transform="translate3d(".concat(a,"px, ").concat(i,"px, 0)")}()}),[]),Object(nn.jsx)(rn,{ref:r,ready:i,hovered:e,mobile:t})},cn=Z.colors.secondaryColor,an=B.c.a(b||(b=Object(V.a)(["\n    padding: 10px 20px;\n    background-color: transparent;\n    color: ",";\n    text-decoration: none;\n"])),cn),sn=B.c.div(j||(j=Object(V.a)(["\n    background-color: white;\n"]))),dn=(B.c.h1(f||(f=Object(V.a)(["\n    color: white;\n"]))),B.c.h2(p||(p=Object(V.a)(["\n    background-color: red;\n"]))),t(16)),ln=function(){return Object(Y.useEffect)((function(){new dn.a({el:document.querySelector(".smooth-scroll"),lerp:.09,reloadOnContextChange:!0,smooth:!0})}),[]),Object(nn.jsxs)(sn,{className:"smooth-scroll",children:[Object(nn.jsx)(fn,{}),Object(nn.jsx)(On,{"data-scroll-section":!0,"data-scroll-target":!0})]})},un=Z.colors,bn=un.tertiaryColor,jn=un.tertiaryColorDark,fn=function(){var n=Object(Y.useState)(!1),e=Object(F.a)(n,2),t=e[0],r=e[1];return Object(Y.useEffect)((function(){r(!0)}),[t]),Object(nn.jsxs)(yn,{children:[Object(nn.jsx)(vn,{children:Object(nn.jsxs)("svg",{viewBox:"0 0 294 282",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(nn.jsx)("defs",{children:Object(nn.jsxs)("linearGradient",{id:"header-shape-gradient",x2:"0.8",y2:".7",children:[Object(nn.jsx)("stop",{offset:"0%",stopColor:bn}),Object(nn.jsx)("stop",{offset:"10%",stopColor:bn}),Object(nn.jsx)("stop",{offset:"100%",stopColor:jn})]})}),Object(nn.jsx)(kn,{d:"M1 280.028H29.1874V35.089L144.853 151.727H146.797L202.2 94.8658C202.2 87.0899 197.826 72.5102 192.48 67.6503L145.825 112.847H144.853L33.0754 1.06966H1V280.028Z",loaded:t}),Object(nn.jsx)(kn,{d:"M138.049 1.06964H50.571H49.599L76.8145 29.2571H138.049C237.677 24.3972 239.135 169.222 138.049 166.306H78.7584V101.184L50.571 72.9962H49.599V281H78.7584V195.466H138.049C275.584 199.84 277.042 -3.30426 138.049 1.06964Z",loaded:t}),Object(nn.jsx)(kn,{d:"M257.603 1.06966L229.415 29.2571C234.761 35.0193 241.079 47.1691 244.481 55.0146L263.435 36.061V281H292.594V1.06966H257.603Z",loaded:t})]})}),Object(nn.jsx)(an,{href:"#about","data-scroll-to":!0,children:"Hejka"})]})},pn=Z.colors.quaternaryColor,hn=(B.c.div(h||(h=Object(V.a)(["\n    text-align: center;\n"]))),B.c.section(O||(O=Object(V.a)(["\n    min-height: 100vh;\n    background-color: ",";\n"])),pn)),On=function(){return Object(nn.jsx)(hn,{id:"about",children:Object(nn.jsx)(U,{children:"No elo"})})},xn=Z.colors,mn=xn.primaryColor,gn=xn.primaryColorLight,yn=B.c.header(x||(x=Object(V.a)(["\n    height: 100vh;\n    display: grid;\n    place-content: center;\n    /* background-color: ","; */\n    background-image: radial-gradient(",",",");\n"])),mn,mn,gn),vn=B.c.div(m||(m=Object(V.a)(["\n    width: 220px;\n"]))),Cn=Object(B.d)(g||(g=Object(V.a)(["\n  to {\n        stroke-dashoffset: 0;\n    }\n"]))),wn=Object(B.d)(y||(y=Object(V.a)(["\n  to {\n        fill-opacity: 1;\n    }\n"]))),kn=B.c.path(v||(v=Object(V.a)(["\n    stroke-dasharray: 1500;\n    stroke-dashoffset: 1500;\n    stroke: #39C0D2;\n    stroke-width: 2;\n    fill: url(#header-shape-gradient) #fff;\n    fill-opacity: 0;\n    \n    ","\n"])),(function(n){return n.loaded&&Object(B.b)(C||(C=Object(V.a)(["\n        animation: "," 3s .5s cubic-bezier(0.43, 0.29, 0.58, 1.01) forwards, "," .5s 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n    "])),Cn,wn)})),Ln=Z.colors,En=Ln.primaryColor,Hn=Ln.primaryColorLight,Sn=B.c.div(w||(w=Object(V.a)(["\n    text-align: center;\n    min-height: 220vh;\n    background-image: radial-gradient(",",",");    display: grid;\n    place-content: center;\n\n    \n    ","\n"])),En,Hn,(function(n){return n.white&&Object(B.b)(k||(k=Object(V.a)(["\n            background-image: none;\n            background-color: #fff;\n;\n        "])))})),Xn=function(){return Object(Y.useEffect)((function(){new dn.a({el:document.querySelector(".smooth-scroll"),lerp:.09,reloadOnContextChange:!0,smooth:!0})}),[]),Object(nn.jsxs)(sn,{className:"smooth-scroll",children:[Object(nn.jsx)(Sn,{}),Object(nn.jsx)(Sn,{white:!0})]})},Yn=Z.colors,zn=(Yn.secondaryColor,Yn.tertiaryColor),Mn=(Yn.quaternaryColor,Z.typography.secondaryFont),qn=B.c.nav(L||(L=Object(V.a)(["\n    position: fixed;\n    top: 20px;\n    left: 0;\n    right: 0;\n    z-index: 5;\n    display: flex;\n    justify-content: space-between;\n    padding: 0 10vw;\n\n    ","\n"])),(function(n){return n.grow&&Object(B.b)(E||(E=Object(V.a)(["\n        flex-grow: 1;\n    "])))})),Fn=B.c.ul(H||(H=Object(V.a)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    list-style: none;\n"]))),Vn=B.c.li(S||(S=Object(V.a)(["\n    position: relative;\n\n    a {\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        padding: 2px 2px;\n        text-transform: uppercase;\n        font-size: .75rem;\n        font-weight: 300;\n        font-family: ",";\n        letter-spacing: 3px;\n        color: white;\n        text-align: center;\n\n        &.current {\n            color: ",";\n        } \n\n        svg {\n            font-size: 20px;\n            margin-left: 10px;\n        }\n    }\n"])),Mn,zn),An=B.c.span(X||(X=Object(V.a)(["\n    display: none;\n"])));var Dn,Nn=function(){var n=Object(Y.useState)(!1),e=Object(F.a)(n,2),t=(e[0],e[1],[{name:"Github",path:"https://github.com/Pshemcio",icon:R.a},{name:"Linkedin",path:"https://www.linkedin.com/in/przemys%C5%82aw-majka-9540b01b7/",icon:R.b}]);return Object(nn.jsxs)("div",{children:[Object(nn.jsxs)(qn,{children:[Object(nn.jsx)(Fn,{grow:!0,children:[{name:"Home",path:"/"},{name:"Projekty",path:"/projects"}].map((function(n,e){return Object(nn.jsx)(Vn,{children:Object(nn.jsx)(D.b,{to:n.path,exact:!0,activeClassName:"current",children:n.name})},e)}))}),Object(nn.jsx)(Fn,{children:t.map((function(n,e){return Object(nn.jsx)(Vn,{children:Object(nn.jsxs)("a",{target:"_blank",href:n.path,rel:"noreferrer",children:[Object(nn.jsx)(P.a,{icon:n.icon}),Object(nn.jsx)(An,{children:n.name})]})},e)}))})]}),Object(nn.jsxs)(N.c,{children:[Object(nn.jsx)(N.a,{path:"/projects",render:function(n){return Object(nn.jsx)(Xn,Object(A.a)({},n))}}),Object(nn.jsx)(N.a,{path:"/",children:Object(nn.jsx)(ln,{})})]})]})},Pn=B.c.div(Dn||(Dn=Object(V.a)(["\n    background-color: white;\n"])));var Rn=function(){var n=Object(Y.useState)(!1),e=Object(F.a)(n,2),t=e[0],r=e[1],o=Object(Y.useState)(!0),c=Object(F.a)(o,2),a=c[0],i=c[1];Object(Y.useEffect)((function(){return window.addEventListener("resize",s),function(n){window.removeEventListener("resize",s)}})),Object(Y.useEffect)((function(){return document.querySelectorAll("a").forEach((function(n){n.addEventListener("mouseover",(function(){return r(!0)})),n.addEventListener("mouseout",(function(){return r(!1)}))})),s(),function(){document.querySelectorAll("a").forEach((function(n){n.removeEventListener("mouseover",(function(){return r(!0)})),n.removeEventListener("mouseout",(function(){return r(!1)}))}))}}),[]);var s=function(){var n=navigator.userAgent,e=/Android|Mobi/i.test(n);i(e)};return Object(nn.jsxs)(Pn,{className:"App",children:[Object(nn.jsx)($,{}),a?Object(nn.jsx)(on,{isMobile:a}):Object(nn.jsx)(on,{isHovered:t}),Object(nn.jsx)(Nn,{})]})},Bn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),c(n),a(n)}))};q.a.render(Object(nn.jsx)(z.a.StrictMode,{children:Object(nn.jsx)(D.a,{children:Object(nn.jsx)(Rn,{})})}),document.getElementById("root")),Bn()}},[[43,1,2]]]);
//# sourceMappingURL=main.91101f51.chunk.js.map