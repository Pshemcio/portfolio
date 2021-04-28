(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{50:function(n,e,t){},58:function(n,e,t){"use strict";t.r(e);var r,o,c,i,a,s,l,d,b,j,u,h,p,f,x,O,m,g,y,v,k,w,z,C,H,L,M,E,F,S,X,Y,N,_,P,q,V=t(0),B=t.n(V),D=t(36),A=t.n(D),T=(t(50),t(30)),R=t(21),U=t(4),W=t(3),K={colors:{primaryColor:"#181818",primaryColorLight:"#252525",secondaryColor:"#f2f5ea",tertiaryColor:"#1ee5ff",tertiaryColorDark:"#1ee5ff1a",quaternaryColor:"#e75a7c"},typography:{primaryFont:"Poppins, Roboto, Helvetica, sans-serif",secondaryFont:"Montserrat, Roboto, Ubuntu, sans-serif"},fontSize:{xs:"14px",sm:"18px",md:"22px",lg:"28px",xl:"36px"},breakpoints:{xs:"512px",sm:"840px",md:"992px",lg:"1200px",xl:"1366px"},structure:{paddingMobile:"20px",paddingDesktop:"10vw"}},Z=K.typography.primaryFont,I=K.colors,J=I.secondaryColor,G=I.primaryColor,Q=I.quaternaryColor,$=Object(W.a)(r||(r=Object(U.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: ",";\n  }\n\n  body {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    overscroll-behavior: contain;\n    background-color: ",";\n    color: ",";\n  }\n\n  a,\n  button {\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  ::selection {\n    background: ",";\n    color: ",";\n  }\n"])),Z,G,J,Q,J),nn=K.colors,en=nn.secondaryColor,tn=nn.tertiaryColor,rn=nn.quaternaryColor,on=(W.c.button(o||(o=Object(U.a)(["\n    padding: 10px 20px;\n    background-color: transparent;\n    border: 1px solid ",";\n    border-radius: ",";\n\n    ","\n"])),rn,(function(n){return"number"===typeof n.rounded?n.rounded.toString()+"px":"5px"}),(function(n){return n.pink&&Object(W.b)(c||(c=Object(U.a)(["\n        background-color: ",";\n        color: ","\n    "])),en,tn)})),W.c.button(i||(i=Object(U.a)(["\n    background-color: red;\n"]))),t(1)),cn=K.colors.secondaryColor,an=Object(W.d)(a||(a=Object(U.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))),sn=W.c.div(s||(s=Object(U.a)(["\n    width: 60px;\n    height: 60px;\n    z-index: 1000;\n    border-radius: 50%;\n    border: 1px solid ",";\n    position: fixed;\n    opacity: 0;\n    pointer-events: none;\n    transition: border 1s;\n    will-change: transform; \n    mix-blend-mode: difference;\n\n    &::before {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        background-color: ",";\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        opacity: 0;\n        transform: translate(-50%, -50%);\n        transition: transform .5s, opacity .5s;\n        transition-timing-function: ease-out;\n    }\n\n    ","\n\n    ","\n\n    ","\n"])),cn,cn,(function(n){return n.ready&&Object(W.b)(l||(l=Object(U.a)(["\n        animation: "," .5s linear forwards;\n    "])),an)}),(function(n){return n.mobile&&Object(W.b)(d||(d=Object(U.a)(["\n        display: none;\n    "])))}),(function(n){return n.hovered&&Object(W.b)(b||(b=Object(U.a)(["\n        transition: border .1s;\n        border: 1px solid rgba(255,255,255, 0);\n\n        &::before {\n            transform: translate(-50%, -50%) scale(1.5);\n            opacity: 1;\n        }\n    "])))})),ln=function(n){var e=n.isHovered,t=n.isMobile,r=Object(V.useRef)(null),o=Object(V.useRef)({mouseX:0,mouseY:0,destinationX:0,destinationY:0,distanceX:0,distanceY:0,key:-1}),c=Object(V.useState)(!1),i=Object(R.a)(c,2),a=i[0],s=i[1];return Object(V.useEffect)((function(){return document.addEventListener("mouseover",(function(){s(!0)})),function(){}}),[]),Object(V.useEffect)((function(){return document.addEventListener("mousemove",(function(n){var e=n.clientX,t=n.clientY;o.current.mouseX=e-r.current.clientWidth/2,o.current.mouseY=t-r.current.clientHeight/2})),function(){}}),[]),Object(V.useEffect)((function(){!function n(){o.current.key=requestAnimationFrame(n);var e=o.current,t=e.mouseX,c=e.mouseY,i=e.destinationX,a=e.destinationY,s=e.distanceX,l=e.distanceY;i&&a?(o.current.distanceX=.1*(t-i),o.current.distanceY=.1*(c-a),Math.abs(o.current.distanceX)+Math.abs(o.current.distanceY)<.1?(o.current.destinationX=t,o.current.destinationY=c):(o.current.destinationX+=s,o.current.destinationY+=l)):(o.current.destinationX=t,o.current.destinationY=c),r.current.style.transform="translate3d(".concat(i,"px, ").concat(a,"px, 0)")}()}),[]),Object(on.jsx)(sn,{ref:r,ready:a,hovered:e,mobile:t})},dn=t(73),bn=K.colors.secondaryColor,jn={initial:{bottom:0},animate:{bottom:"100vh",transition:{duration:.7,ease:[.12,1,.2,1]}},exit:{opacity:0,transition:{duration:.1}},exitStop:{bottom:0,transition:{duration:.6,delay:.9,ease:[.12,1,.2,1]}}},un=Object(W.c)(dn.a.div)(j||(j=Object(U.a)(["\nposition: fixed;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    z-index: 9999;\n    background-color: ",";\n"])),bn),hn=Object(W.c)(un).attrs((function(){return{initial:"initial",variants:jn,animate:"animate",exit:"exit"}}))(u||(u=Object(U.a)(["\n"]))),pn=Object(W.c)(un).attrs((function(){return{variants:jn,exit:"exitStop"}}))(h||(h=Object(U.a)(["\n    bottom: -101vh;\n"]))),fn=function(){return Object(on.jsxs)(on.Fragment,{children:[Object(on.jsx)(hn,{}),Object(on.jsx)(pn,{})]})},xn=W.c.div(p||(p=Object(U.a)(["\n    background-color: transparent;\n"]))),On=W.c.section(f||(f=Object(U.a)(["\n    padding: 4vh 15px;\n"]))),mn=K.typography.secondaryFont,gn=K.colors.tertiaryColor,yn=Object(W.b)(x||(x=Object(U.a)(["\n    z-index: 1;\n    overflow: hidden;\n"]))),vn=W.c.h1(O||(O=Object(U.a)(["\n    ","\n    font-weight: 800;\n    font-size: 39px;\n    padding: 0 2px;\n    letter-spacing: -1px;\n"])),yn),kn=W.c.h2(m||(m=Object(U.a)(["\n    ","\n    font-size: ",";\n    margin-bottom: ",';\n\n    span {\n        &::after {\n            content: ".";\n            color: ',";\n        }\n    }\n"])),yn,(function(n){return n.smaller?"40px":"50px"}),(function(n){return n.smaller?"30px":"inherit"}),gn),wn=W.c.h3(g||(g=Object(U.a)(["\n    ","\n    font-size: 20px;\n    font-family: ",";\n    font-weight: 600;\n"])),yn,mn),zn=W.c.h4(y||(y=Object(U.a)(["\n    ","\n    font-size: 16px;\n    font-family: ",";\n    font-weight: 400;\n"])),yn,mn),Cn=W.c.p(v||(v=Object(U.a)(["\n    ","\n    font-weight: 300;\n    font-family: ",";\n    font-size: 20px;\n"])),yn,mn),Hn=W.c.p(k||(k=Object(U.a)(["\n    ","\n    font-weight: 400;\n    font-family: ",";\n    font-size: 16px;\n    line-height: 1.7em;\n    margin-bottom: .5em;\n\n    ","\n"])),yn,mn,(function(n){return n.nice&&Object(W.b)(w||(w=Object(U.a)(["\n        color: ",";\n        font-weight: 600;\n        margin: 1.5em 0 .5em;\n    "])),gn)})),Ln=t(19),Mn=K.colors,En=Mn.secondaryColor,Fn=Mn.tertiaryColor,Sn=Mn.primaryColor,Xn=K.typography.secondaryFont,Yn=Object(W.b)(z||(z=Object(U.a)(["\n    position: relative;\n    background-color: transparent;\n    color: ",";\n    text-decoration: none;\n    text-align: center;\n    padding: 2px 2px;\n"])),En),Nn=Object(W.b)(C||(C=Object(U.a)(['\n    &::before {\n        content: "";\n        position: absolute;\n        top: ',";\n        left: 0;\n        width: 0;\n        height: 1px;\n        background-color: ",";\n        transition: width .8s cubic-bezier(0.77, 0, 0.175, 1);\n        mix-blend-mode: difference;\n    }\n\n    &:hover::before {\n        width: ",";\n    }\n"])),(function(n){return n.main?"90%":"100%"}),En,(function(n){return n.main?"100%":"calc(100% - 35px)"})),_n=W.c.a(H||(H=Object(U.a)(["\n    ","\n\n    ","\n\n    ","\n"])),Yn,(function(n){return n.iconLink&&Object(W.b)(L||(L=Object(U.a)(["\n        width: 2.5em;\n        height: 1.5em;\n        padding: 0;\n        display: flex;\n        justify-content: center;\n    "])))}),(function(n){return n.intro&&Object(W.b)(M||(M=Object(U.a)(["\n        display: inline-block;\n        text-transform: uppercase;\n        padding: 4px 5px;\n        font-weight: 500;\n        font-size: 14px;   \n        font-family: ",";\n\n        &:nth-of-type(2) {\n            &::before,\n            &::after {\n                content: '/';\n                color: ",";\n                font-weight: 400;\n            }\n\n            &::before {\n                margin-right: 10px;\n            }\n\n            &::after {\n                margin-left: 10px;\n            }\n        }\n    "])),Xn,Fn)})),Pn=Object(W.c)(Ln.c)(E||(E=Object(U.a)(["\n    ","\n    ",";\n    text-transform: uppercase;\n    font-size: 1.6rem;\n    font-weight: 300;\n    font-family: ",";\n    color: ",";\n    letter-spacing: 3px;\n    display: inline-block;\n    padding: clamp(12px, 1vw, 40px);\n    transition: visibility 0s .6s;\n    visibility: ",";\n    \n    &.current {\n    text-decoration: line-through;\n  }\n"])),Yn,Nn,Xn,Sn,(function(n){return n.clicked?"visible":"hidden"})),qn=Object(W.c)(Ln.b)(F||(F=Object(U.a)(["\n    ","\n    ",";\n    font-size: 1.2rem;\n    font-weight: 400;\n    font-family: ",";\n    display: inline-block;\n    line-height: 1.1em;\n    margin-top: 30px;\n\n    "," \n"])),Yn,Nn,Xn,(function(n){return n.arrow&&Object(W.b)(S||(S=Object(U.a)(['\n            &::after {\n            display: inline-block;\n            content: url(\'data:image/svg+xml;charset=UTF-8, <svg width="20" height="20" viewBox="0 0 387 391" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 195.5H385.5M385.5 195.5L191 1M385.5 195.5L191 390" stroke="white" stroke-width= "20"/>\n            </svg>\');\n            margin-left: 20px;\n            transform: translateY(2.5px);\n        }\n    '])))})),Vn=W.c.span(X||(X=Object(U.a)(["\n    font-family: inherit;\n    display: block;\n    opacity: ",";\n    transform: translateY(",");\n    transition: transform 2s "," cubic-bezier(0.12, 1, 0.2, 1), opacity 2s "," cubic-bezier(0.12, .4, 0.2, 1);\n    line-height: inherit;\n\n\n    /* transition: opacity 3s cubic-bezier(0.12, .4, 0.2, 1); */\n    /* transition-delay: ","; */\n\n    &.is-inview {\n        transform: translateY(0);\n        opacity: 1;\n    }\n"])),(function(n){return n.transparent?0:1}),(function(n){return"number"===typeof n.shift?(100*n.shift).toString()+"%":"100%"}),(function(n){return"number"===typeof n.delay?n.delay.toString()+"s":".2s"}),(function(n){return"number"===typeof n.delay?(n.delay+.2).toString()+"s":".1s"}),(function(n){return"number"===typeof n.delay?n.delay.toString()+"s":".5s"})),Bn=W.c.div(Y||(Y=Object(U.a)(["\n    background-color: transparent;\n    overflow: hidden;\n    margin: 7px 0;\n"]))),Dn=W.c.div(N||(N=Object(U.a)(["\n    background-color: transparent;\n    transform: translateX(-100%);\n    height: 50vh;\n    overflow: hidden;\n    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);\n    &.is-inview {\n        transform: translateX(0);\n\n        img {\n            transform: translateX(0) scale(1.1);\n        }\n    }\n"]))),An=W.c.img(_||(_=Object(U.a)(["\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transform: translateX(100%) scale(1.6);\n    transform-origin: left;\n    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);\n"]))),Tn=t(8),Rn=t(74),Un=t(40),Wn=W.c.header(P||(P=Object(U.a)(["\n    position: fixed;\n    top: 15px;\n    left: 0;\n    right: 0;\n    z-index: 5;\n    display: flex;\n    justify-content: space-between;\n    padding: 2px 10vw;\n    mix-blend-mode: difference;\n"]))),Kn=W.c.div(q||(q=Object(U.a)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    list-style: none;\n"]))),Zn=[{name:"Home",path:"/"},{name:"Projekty",path:"/projects"},{name:"O mnie",path:"/about"}];var In=function(n){var e=n.click,t=n.handleClick;return Object(on.jsx)(on.Fragment,{children:Object(on.jsx)(ut,{onClick:t,clicked:e,children:Object(on.jsx)(ht,{clicked:e,children:Zn.map((function(n,t){return Object(on.jsx)(pt,{children:Object(on.jsx)(Pn,{className:"cursor_hover",to:n.path,exact:!0,activeClassName:"current",main:"true",clicked:e?"hack":void 0,children:n.name})},t)}))})})})},Jn=t(41),Gn=t(62);var Qn,$n,ne,ee,te,re,oe,ce,ie,ae,se,le,de,be,je,ue,he,pe,fe=function(){var n=Object(V.useState)(!1),e=Object(R.a)(n,2),t=e[0],r=e[1],o=function(){return r(!t)},c=[{name:"Github",path:"https://github.com/Pshemcio",icon:Object(on.jsx)(Jn.a,{})},{name:"Linkedin",path:"https://www.linkedin.com/in/przemys%C5%82aw-majka-9540b01b7/",icon:Object(on.jsx)(Gn.a,{})}];return Object(on.jsxs)(on.Fragment,{children:[Object(on.jsxs)(Wn,{children:[Object(on.jsx)(bt,{clicked:t,onclick:o}),Object(on.jsx)(Kn,{children:c.map((function(n,e){return Object(on.jsx)(_n,{className:"cursor_hover",target:"_blank",href:n.path,rel:"noreferrer",iconLink:!0,children:n.icon},e)}))})]}),Object(on.jsx)(In,{click:t,handleClick:o})]})},xe=K.colors.secondaryColor,Oe=Object(W.d)(Qn||(Qn=Object(U.a)(["\n  50%,\n  75% {\n    transform: scale(2.5);\n  }\n\n  80%,\n  100% {\n    opacity: 0;\n  }\n"]))),me=W.c.div($n||($n=Object(U.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100%;\n    display: grid;\n    place-content: center;\n    background-color: ",";\n"])),xe),ge=W.c.div(ne||(ne=Object(U.a)(["\n    display: flex;\n"]))),ye=W.c.div(ee||(ee=Object(U.a)(["\n    position: relative;\n    width: 30px;\n    height: 30px;\n    margin: 10px;\n    border-radius: 50%;\n    ",'\n\n    &::before {\n      position: absolute;\n      content: "";\n      width: 100%;\n      height: 100%;\n      background: inherit;\n      border-radius: inherit;\n      animation: '," 2s ease-out infinite;\n      ","\n    }\n"])),(function(n){return n.color&&Object(W.b)(te||(te=Object(U.a)(["\n        background-color: ",";\n    "])),n.color)}),Oe,(function(n){return n.delay&&Object(W.b)(re||(re=Object(U.a)(["\n            animation-delay: ",";\n        "])),n.delay)})),ve=[{color:"#7ef9ff",delay:"0s"},{color:"#89cff0",delay:".2s"},{color:"#4682b4",delay:".4s"},{color:"#0f52ba",delay:".6s"},{color:"#000080",delay:".8s"}],ke=function(){return Object(on.jsx)(me,{children:Object(on.jsx)(ge,{children:ve.map((function(n,e){return Object(on.jsx)(ye,{color:n.color,delay:n.delay},e)}))})})},we=K.colors.tertiaryColor,ze=W.c.div(oe||(oe=Object(U.a)(["\n    min-height: 200vh;\n    background-color: ",";\n"])),we),Ce=function(){return Object(on.jsx)(ze,{id:"contact",children:Object(on.jsx)("h2",{children:"Kontakt"})})},He=W.c.div(ce||(ce=Object(U.a)(["\n    min-height: 200vh;\n    background-color: green;\n"]))),Le=function(){return Object(on.jsx)(He,{id:"footer","data-scroll-section":!0,children:Object(on.jsx)(Ce,{})})},Me=K.colors,Ee=Me.primaryColor,Fe=Me.secondaryColor,Se=W.c.button(ie||(ie=Object(U.a)(["\n    position: relative;\n    z-index: 3;\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n    display: grid;\n    place-content: center;\n    width: 60px;\n    height: 60px;\n    cursor: pointer;\n"]))),Xe=W.c.svg(ae||(ae=Object(U.a)(["\n    width: 50px;\n    height: 50px;\n"]))),Ye=W.c.path(se||(se=Object(U.a)(["\n    fill: none;\n    stroke: ",";\n    stroke-width: 3;\n    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),\n    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke .5s .5s;\n\n    /* "," */\n\n    ","\n\n    ","\n\n    ","\n"])),Fe,(function(n){return n.clicked&&Object(W.b)(le||(le=Object(U.a)(["\n        stroke: ",";\n    "])),Ee)}),(function(n){return n.line1&&Object(W.b)(de||(de=Object(U.a)(["\n        stroke-dasharray: 60 207;\n        stroke-width: 3;\n\n        ","\n    "])),(function(n){return n.clicked&&Object(W.b)(be||(be=Object(U.a)(["\n                stroke-dasharray: 90 207;\n                stroke-dashoffset: -134;\n                stroke-width: 3;\n        "])))}))}),(function(n){return n.line2&&Object(W.b)(je||(je=Object(U.a)(["\n        stroke-dasharray: 60 80;\n        stroke-width: 3;\n\n        ","\n    "])),(function(n){return n.clicked&&Object(W.b)(ue||(ue=Object(U.a)(["\n                stroke-dasharray: 1 60;\n                stroke-dashoffset: -30;\n                stroke-width: 3;\n        "])))}))}),(function(n){return n.line3&&Object(W.b)(he||(he=Object(U.a)(["\n        stroke-dasharray: 60 207;\n        stroke-width: 3;\n\n        ","\n    "])),(function(n){return n.clicked&&Object(W.b)(pe||(pe=Object(U.a)(["\n                stroke-dasharray: 90 207;\n                stroke-dashoffset: -134;\n                stroke-width: 3;\n        "])))}))}));var Ne,_e,Pe,qe,Ve,Be,De,Ae,Te,Re,Ue,We,Ke,Ze,Ie,Je,Ge,Qe,$e,nt,et,tt,rt,ot,ct,it,at,st,lt,dt,bt=function(n){var e=n.onclick,t=n.clicked;return Object(on.jsx)(Se,{className:"cursor_hover",onClick:e,children:Object(on.jsxs)(Xe,{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(on.jsx)(Ye,{clicked:t,line1:!0,d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),Object(on.jsx)(Ye,{clicked:t,line2:!0,d:"M 20,50 H 80"}),Object(on.jsx)(Ye,{clicked:t,line3:!0,d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})]})})},jt=K.colors.secondaryColor,ut=W.c.nav(Ne||(Ne=Object(U.a)(["\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2;\n  background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .3));\n  touch-action: none;\n  clip-path: ",";\n  transition: ",";\n  pointer-events: ",";\n  transition-timing-function: cubic-bezier(.61,-0.02,.34,1.07);\n"])),(function(n){return n.clicked?"circle(150% at 100% 0%)":"circle(0% at 100% 0%)"}),(function(n){return n.clicked?"clip-path 0.6s":"clip-path .8s .1s"}),(function(n){return n.clicked?"all":"none"})),ht=W.c.ul(_e||(_e=Object(U.a)(["\n  padding-top: 25vh;\n  height: 100vh;\n  text-align: center;\n  width: 100%;\n  background-color: ",";\n  list-style: none;\n  clip-path: ",";\n  pointer-events: ",";\n  transition-timing-function: cubic-bezier(.61,-0.02,.34,1.07);\n  transition: ",";\n"])),jt,(function(n){return n.clicked?"circle(100% at 100% 0%)":"circle(0% at 100% 0%)"}),(function(n){return n.clicked?"all":"none"}),(function(n){return n.clicked?"clip-path 0.6s .4s":"clip-path 1s"})),pt=W.c.li(Pe||(Pe=Object(U.a)(["\n    position: relative;\n"]))),ft=function(n){var e=n.HandleMouseoverEffects,t=n.HandleLocomotiveScroll;return e(),t(),Object(on.jsxs)(on.Fragment,{children:[Object(on.jsx)(fn,{}),Object(on.jsxs)(xn,{className:"smooth-scroll",children:[Object(on.jsx)(mt,{}),Object(on.jsx)(Le,{})]})]})},xt=t.p+"static/media/test.b45081c4.jpg",Ot=t.p+"static/media/test2.88eb449a.jpg",mt=function(){return Object(on.jsx)(on.Fragment,{children:Object(on.jsxs)(On,{id:"projects","data-scroll-section":!0,children:[Object(on.jsx)(kn,{children:Object(on.jsx)(Vn,{"data-scroll":!0,children:"Projekty"})}),Object(on.jsxs)(vt,{children:[Object(on.jsx)(kt,{children:Object(on.jsxs)(zt,{className:"cursor_hover",to:"/projects/project",arrow:"true",children:[Object(on.jsx)(wn,{children:"Valorant Form"}),Object(on.jsx)(Bn,{children:Object(on.jsx)(Dn,{"data-scroll":!0,children:Object(on.jsx)(An,{src:xt,alt:"my face"})})}),Object(on.jsx)(wt,{arrow:!0,children:Object(on.jsx)(zn,{children:"Formularz rejestracyjny"})})]})}),Object(on.jsx)(Bn,{children:Object(on.jsx)(Dn,{"data-scroll":!0,children:Object(on.jsx)(An,{src:Ot,alt:"my face"})})}),Object(on.jsx)(Bn,{children:Object(on.jsx)(Dn,{"data-scroll":!0,children:Object(on.jsx)(An,{src:xt,alt:"my face"})})}),Object(on.jsx)(Bn,{children:Object(on.jsx)(Dn,{"data-scroll":!0,children:Object(on.jsx)(An,{src:Ot,alt:"my face"})})})]})]})})},gt=K.colors,yt=(gt.primaryColor,gt.primaryColorLight,gt.secondaryColor),vt=W.c.ul(qe||(qe=Object(U.a)(["\n    list-style: none;\n    margin-top: 15px;\n"]))),kt=W.c.li(Ve||(Ve=Object(U.a)(["\n    margin-bottom: 3em;\n"]))),wt=W.c.div(Be||(Be=Object(U.a)(["\n    width: 100%;\n    display: flex; \n    justify-content: space-between;\n    align-items: center;\n\n    "," \n"])),(function(n){return n.arrow&&Object(W.b)(De||(De=Object(U.a)(['\n            &::after {\n            display: inline-block;\n            content: url(\'data:image/svg+xml;charset=UTF-8, <svg width="20" height="20" viewBox="0 0 387 391" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 195.5H385.5M385.5 195.5L191 1M385.5 195.5L191 390" stroke="white" stroke-width= "20"/>\n            </svg>\');\n            margin-left: 20px;\n            transform: translateY(3px);\n        }\n    '])))})),zt=Object(W.c)(Ln.b)(Ae||(Ae=Object(U.a)(["\n    color: ",";\n    text-decoration: none;\n"])),yt),Ct=function(n){var e=n.HandleMouseoverEffects,t=n.HandleLocomotiveScroll;return e(),t(),Object(on.jsxs)(on.Fragment,{children:[Object(on.jsx)(fn,{}),Object(on.jsxs)(xn,{className:"smooth-scroll","data-scroll-container":!0,children:[Object(on.jsx)(Ht,{}),Object(on.jsx)(Lt,{}),Object(on.jsx)(Bt,{}),Object(on.jsx)(mt,{}),Object(on.jsx)(qn,{className:"cursor_hover",to:"/projects",arrow:"true",children:"Wi\u0119cej"}),Object(on.jsx)(Le,{})]})]})},Ht=function(){return Object(on.jsxs)($t,{"data-scroll-section":!0,children:[Object(on.jsxs)(nr,{children:[Object(on.jsx)(er,{"data-scroll":!0,children:Object(on.jsxs)("svg",{viewBox:"0 0 294 282",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(on.jsx)(tr,{d:"M1 280.028H29.1874V35.089L144.853 151.727H146.797L202.2 94.8658C202.2 87.0899 197.826 72.5102 192.48 67.6503L145.825 112.847H144.853L33.0754 1.06966H1V280.028Z"}),Object(on.jsx)(tr,{d:"M138.049 1.06964H50.571H49.599L76.8145 29.2571H138.049C237.677 24.3972 239.135 169.222 138.049 166.306H78.7584V101.184L50.571 72.9962H49.599V281H78.7584V195.466H138.049C275.584 199.84 277.042 -3.30426 138.049 1.06964Z"}),Object(on.jsx)(tr,{d:"M257.603 1.06966L229.415 29.2571C234.761 35.0193 241.079 47.1691 244.481 55.0146L263.435 36.061V281H292.594V1.06966H257.603Z"})]})}),Object(on.jsxs)(rr,{children:[Object(on.jsx)(vn,{"data-scroll":!0,"data-scroll-speed":"-.5",children:Object(on.jsx)(Vn,{"data-scroll":!0,children:"Przemek Majka"})}),Object(on.jsx)(Cn,{"data-scroll":!0,"data-scroll-speed":"-1",children:Object(on.jsx)(Vn,{"data-scroll":!0,delay:1.2,children:"FrontEnd Developer"})})]}),Object(on.jsxs)(or,{"data-scroll":!0,children:[Object(on.jsx)(_n,{href:"#about",className:"cursor_hover",intro:!0,"data-scroll-to":!0,children:"O mnie"}),Object(on.jsx)(_n,{href:"#projects",className:"cursor_hover",intro:!0,"data-scroll-to":!0,children:"Projekty"}),Object(on.jsx)(_n,{href:"#contact",className:"cursor_hover",intro:!0,"data-scroll-to":!0,children:"Kontakt"})]})]}),Object(on.jsx)(It,{})]})},Lt=function(){return Object(on.jsxs)(On,{id:"about","data-scroll-section":!0,children:[Object(on.jsx)(kn,{children:Object(on.jsx)(Vn,{"data-scroll":!0,children:"Cze\u015b\u0107"})}),Object(on.jsx)(Hn,{children:Object(on.jsx)(Vn,{"data-scroll":!0,shift:.3,transparent:!0,children:"Nazywam si\u0119 Przemys\u0142aw Majka, mieszkam w Krakowie. Swoj\u0105 przygod\u0119 z FrontEndem rozpocz\u0105\u0142em pod koniec 2019 roku. Od tamtej pory na nauk\u0119 po\u015bwi\u0119cam ka\u017cd\u0105 woln\u0105 chwil\u0119 i sprawia mi ona ogromn\u0105 przyjemno\u015b\u0107. Ci\u0105gle d\u0105\u017c\u0119 do poszerzania swoich kompetencji poprzez poznawanie najnowszych rozwi\u0105za\u0144 i technologii."})}),Object(on.jsx)(Hn,{nice:!0,children:Object(on.jsx)(Vn,{"data-scroll":!0,children:"Poszukuj\u0119 pracy jako FrontEnd Developer."})}),Object(on.jsx)(qn,{className:"cursor_hover",to:"/about",arrow:"true",children:"Wi\u0119cej"})]})},Mt=t(44),Et=t(67),Ft=t(68),St=t(63),Xt=t(64),Yt=t(65),Nt=t(66),_t=t(69),Pt=t(70),qt=t(71),Vt=t(72),Bt=function(){var n=[{name:"html",icon:Object(on.jsx)(St.a,{}),color:"#e34c26"},{name:"scc3",icon:Object(on.jsx)(Xt.a,{}),color:"#2965f1"},{name:"javascript",icon:Object(on.jsx)(Yt.a,{}),color:"#f0db4f"},{name:"sass",icon:Object(on.jsx)(Nt.a,{}),color:"#c69"},{name:"bootstrap",icon:Object(on.jsx)(Et.a,{}),color:"#563d7c"},{name:"rwd",icon:Object(on.jsx)(Mt.a,{}),color:"#e75a7c"},{name:"react",icon:Object(on.jsx)(Ft.a,{}),color:"#61dbfb"},{name:"styled components",icon:Object(on.jsx)(_t.a,{}),color:"#fff"},{name:"wordpress",icon:Object(on.jsx)(Pt.a,{}),color:"#21759b"},{name:"Woocommerce",icon:Object(on.jsx)(qt.a,{}),color:"#764abc"},{name:"git",icon:Object(on.jsx)(Jn.a,{}),color:"#fff"},{name:"figma",icon:Object(on.jsx)(Vt.a,{}),color:"#dac9ba"}];return Object(on.jsxs)(On,{id:"skills","data-scroll-section":!0,children:[Object(on.jsx)(kn,{smaller:!0,children:Object(on.jsx)(Vn,{"data-scroll":!0,children:"Umiej\u0119tno\u015bci"})}),Object(on.jsx)(sr,{children:n.map((function(n,e){return Object(on.jsxs)(lr,{className:"cursor_hover",children:[Object(on.jsx)(br,{color:n.color,"data-scroll":!0,children:n.icon}),Object(on.jsx)(dr,{children:n.name})]},e)}))})]})},Dt=K.colors,At=Dt.secondaryColor,Tt=Dt.tertiaryColor,Rt=Object(W.d)(Te||(Te=Object(U.a)(["\n    0% {\n        transform: translateY(0);\n        opacity: .5;\n    }\n\n    50% {\n        transform: translateY(-5px);\n        opacity: 1; \n    }\n    100%  {\n        transform: translateY(0);\n        opacity: .5;\n    }\n"]))),Ut=Object(W.d)(Re||(Re=Object(U.a)(["\n    0%, 30% {\n        opacity: 0;\n    }\n\n    50% {\n        opacity: 1;\n        transform: translateY(-14px) scale(1);\n    }\n    65% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n        transform: translateY(0) scale(.75);\n    }\n"]))),Wt=W.c.a(Ue||(Ue=Object(U.a)(['\n    position: absolute;\n    bottom: 5vh;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100px;\n    height: 60px;\n    text-decoration: none;\n\n    &::after {\n        content: "Scroll Down";\n        font-size: 11px;\n        color: rgba(255,255,255, .6);\n    }\n']))),Kt=W.c.span(We||(We=Object(U.a)(["\n    position: relative;\n    display: block;\n    width: 23px;\n    height: 40px;\n    border: 2px solid ",";\n    border-radius: 100px;\n    margin: 0 auto;\n    animation: "," 2s cubic-bezier(.645,.045,.355,1) infinite;\n"])),At,Rt),Zt=W.c.span(Ke||(Ke=Object(U.a)(["\n    position: relative;\n    display: block;\n    width: 5px;\n    height: 5px;\n    top: 20px;\n    border-radius: 50%;\n    background-color: ",";\n    opacity: .8;\n    margin: 0 auto;\n    animation: "," 2s cubic-bezier(.645,.045,.355,1) infinite;\n"])),Tt,Ut),It=function(){return Object(on.jsx)(Wt,{href:"#about",className:"cursor_hover",intro:!0,"data-scroll-to":!0,children:Object(on.jsx)(Kt,{children:Object(on.jsx)(Zt,{})})})},Jt=(W.c.div(Ze||(Ze=Object(U.a)(["\n    text-align: center;\n"]))),K.colors.primaryColor),Gt=Object(W.d)(Ie||(Ie=Object(U.a)(["\n    80% {\n        stroke-dashoffset: 0;\n        stroke-opacity: 1;\n    }\n    100%{\n        stroke-opacity: .3;\n        stroke-dashoffset: 0;\n    }\n"]))),Qt=Object(W.d)(Je||(Je=Object(U.a)(["\n    20% {\n        stroke-opacity: 0;\n    }\n    100%{\n        stroke-opacity: 0;\n        fill-opacity: 1;\n    }\n"]))),$t=W.c.section(Ge||(Ge=Object(U.a)(["\n    position: relative;\n    height: 100vh;\n    display: grid;\n    place-content: center;\n    background-color: ",";\n    text-align: center;\n    overflow: hidden;\n"])),Jt),nr=W.c.div(Qe||(Qe=Object(U.a)(["\n    width: 100vw;\n    position: relative;\n"]))),er=W.c.div($e||($e=Object(U.a)(["\n    width: 250px;\n    margin: 0 auto;\n\n    &.is-inview {\n        path {\n            animation: "," 3s 1s cubic-bezier(0.43, 0.29, 0.58, 1.01) forwards;\n\n            /* animation: "," 3s 1s cubic-bezier(0.43, 0.29, 0.58, 1.01) forwards, "," 1.5s 3.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; */\n        }\n    }\n"])),Gt,Gt,Qt),tr=W.c.path(nt||(nt=Object(U.a)(["\n    stroke-dasharray: 1500;\n    stroke-dashoffset: 1500;\n    stroke: #39C0D2;\n    stroke-width: 2;\n    fill: url(#header-shape-gradient) #fff;\n    fill-opacity: 0;\n"]))),rr=W.c.div(et||(et=Object(U.a)(["\n    width: 100%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 0;\n    transform: translate(-50%, -50%);\n"]))),or=W.c.div(tt||(tt=Object(U.a)(["\n    position: absolute;\n    width: 100%;\n    top: 105%;\n    left: 50%;\n    transform: translateX(-40%);\n    opacity: 0;\n    transition: opacity 1s 1.5s, transform 1s 1s;\n\n    &.is-inview {\n        opacity: 1;\n        transform: translateX(-50%);\n    }\n"]))),cr=K.colors,ir=cr.secondaryColor,ar=cr.tertiaryColor,sr=W.c.ul(rt||(rt=Object(U.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    list-style: none;\n    padding: 4vh 0;\n    border: 1px solid white;\n"]))),lr=W.c.li(ot||(ot=Object(U.a)(["\n    position: relative;\n    flex-basis: 49%;\n    display: grid;\n    place-items: center;\n    padding: 15px 0;\n"]))),dr=W.c.span(ct||(ct=Object(U.a)(["\n    position: relative;\n    z-index: 1;\n    text-transform: uppercase;\n    font-size: clamp(12px, 3.5vw, 24px);\n    white-space: nowrap;\n    margin-top: 10px;\n"]))),br=W.c.span(it||(it=Object(U.a)(["\n    width: 70%;\n    color: ",";\n    transition: color 4s 1.5s;\n    overflow: hidden;\n\n    svg {\n        transform: rotateX(90deg);\n        opacity: 0;\n        transition: transform 1s .5s, opacity 1s .5s;\n    };\n\n    &.is-inview {\n        color: ",";\n\n        svg {\n        transform: rotateX(0);\n        opacity: 1;\n        };\n    };\n"])),ir,(function(n){return"string"===typeof n.color?n.color:ar})),jr=function(n){var e=n.HandleMouseoverEffects,t=n.HandleLocomotiveScroll;return e(),t(),Object(on.jsxs)(on.Fragment,{children:[Object(on.jsx)(fn,{}),Object(on.jsxs)(xn,{className:"smooth-scroll",children:[Object(on.jsx)("h1",{children:"O mnie :)"}),Object(on.jsx)(Le,{})]})]})},ur=K.colors.quaternaryColor,hr=(W.c.div(at||(at=Object(U.a)(["\n    text-align: center;\n"]))),W.c.section(st||(st=Object(U.a)(["\n    min-height: 200vh;\n    /* background-color: ","; */\n    display: grid;\n    place-content: center;\n"])),ur),W.c.div(lt||(lt=Object(U.a)(["\n    background-color: #fff;\n    height: 20vh;\n    width: 20vh;\n"]))),function(n){var e=n.HandleMouseoverEffects,t=n.HandleLocomotiveScroll;return e(),t(),Object(on.jsxs)(on.Fragment,{children:[Object(on.jsx)(fn,{}),Object(on.jsxs)(xn,{className:"smooth-scroll",children:[Object(on.jsx)("h1",{children:"Hejka"}),Object(on.jsx)("p",{children:"Czemu to zacz\u0119\u0142o dzia\u0142a\u0107 -_-"}),Object(on.jsx)(Le,{})]})]})}),pr=K.colors.primaryColor,fr=W.c.div(dt||(dt=Object(U.a)(["\n    background-color: ",";\n"])),pr);var xr=function(){var n=Object(V.useState)(!1),e=Object(R.a)(n,2),t=e[0],r=e[1],o=Object(V.useState)(!0),c=Object(R.a)(o,2),i=c[0],a=c[1],s=Object(V.useState)(!1),l=Object(R.a)(s,2),d=l[0],b=l[1],j=Object(Tn.f)();Object(V.useEffect)((function(){return setTimeout((function(){b(!0)}),1200),function(){b(!1)}}),[]);var u=function(){var n=navigator.userAgent,e=/Android|Mobi/i.test(n);a(e)},h=function(){Object(V.useEffect)((function(){return window.addEventListener("resize",u),document.querySelectorAll(".cursor_hover").forEach((function(n){n.addEventListener("mouseover",(function(){return r(!0)})),n.addEventListener("mouseout",(function(){return r(!1)}))})),u(),function(){window.removeEventListener("resize",u),document.querySelectorAll(".cursor_hover").forEach((function(n){n.removeEventListener("mouseover",(function(){return r(!0)})),n.removeEventListener("mouseout",(function(){return r(!1)}))}))}}),[])};h();var p={HandleMouseoverEffects:h,HandleLocomotiveScroll:function(){Object(V.useEffect)((function(){var n=new Un.a({el:document.querySelector(".smooth-scroll"),lerp:.09,reloadOnContextChange:!0,smooth:!0});return function(){n.destroy()}}),[])}};return Object(on.jsx)(fr,{className:"App",children:d?Object(on.jsxs)(on.Fragment,{children:[Object(on.jsx)(fe,{}),Object(on.jsx)($,{}),i?Object(on.jsx)(ln,{isMobile:i}):Object(on.jsx)(ln,{isHovered:t}),Object(on.jsx)(Rn.a,{exitBeforeEnter:!0,children:Object(on.jsxs)(Tn.c,{location:j,children:[Object(on.jsx)(Tn.a,{exact:!0,path:"/projects",children:Object(on.jsx)(ft,Object(T.a)({},p))}),Object(on.jsx)(Tn.a,{exact:!0,path:"/projects/project",children:Object(on.jsx)(hr,Object(T.a)({},p))}),Object(on.jsx)(Tn.a,{exact:!0,path:"/about",children:Object(on.jsx)(jr,Object(T.a)({},p))}),Object(on.jsx)(Tn.a,{exact:!0,path:"/",children:Object(on.jsx)(Ct,Object(T.a)({},p))})]},j.pathname)})]}):Object(on.jsx)(ke,{})})},Or=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,75)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),c(n),i(n)}))};A.a.render(Object(on.jsx)(B.a.StrictMode,{children:Object(on.jsx)(Ln.a,{children:Object(on.jsx)(xr,{})})}),document.getElementById("root")),Or()}},[[58,1,2]]]);
//# sourceMappingURL=main.8ff73b3d.chunk.js.map