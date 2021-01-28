(()=>{"use strict";var e={937:(e,n,t)=>{var r=t(294),a=t(935),l=t(379),o=t.n(l),c=t(731);o()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;var u=t(575),i=t.n(u),s=t(913),p=t.n(s),m=t(506),d=t.n(m),f=t(205),h=t.n(f),v=t(585),b=t.n(v),E=t(754),x=t.n(E),y=t(713),g=t.n(y);const k=function(e){var n=e.todos.map((function(n){return r.createElement("li",{key:n.id,onClick:e.someCoolFn},n.value)}));return r.createElement("ul",null,n)};const w=function(e){h()(l,e);var n,t,a=(n=l,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=x()(n);if(t){var a=x()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return b()(this,e)});function l(){var e;i()(this,l);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return e=a.call.apply(a,[this].concat(t)),g()(d()(e),"state",{user:"John",items:[{id:1,value:"item one"},{id:2,value:"item two"},{id:3,value:"item three"}]}),e}return p()(l,[{key:"someCoolFn",value:function(){alert("Hello!")}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,this.state.user,", this is your list:"),r.createElement(k,{todos:this.state.items,someCoolFn:this.someCoolFn}))}}]),l}(r.Component);var C=t(38),N=t.n(C),A=(0,r.createContext)();const Z=function(e){var n=(0,r.useState)([]),t=N()(n,2),a=t[0],l=t[1];return r.createElement(A.Provider,{value:{fruits:a,setFruits:l}},e.children)};var F=(0,r.createContext)();const P=function(e){var n=(0,r.useState)([]),t=N()(n,2),a=t[0],l=t[1];return r.createElement(F.Provider,{value:{sweets:a,setSweets:l}},e.children)};var R=t(319),S=t.n(R),_=t(669);o()(_.Z,{insert:"head",singleton:!1}),_.Z.locals;const z=function(){var e=(0,r.useContext)(A),n=e.fruits,t=e.setFruits,a=n.map((function(e,n){return r.createElement("li",{key:n},e)}));return(0,r.useEffect)((function(){var e=setInterval((function(){return console.log("sth")}),1e3);return function(){clearInterval(e)}})),r.createElement(r.Fragment,null,r.createElement("button",{type:"button",className:"btn-green",onClick:function(){return t([].concat(S()(n),["apple"]))}},"Add 1 apple"),r.createElement("button",{type:"button",className:"btn-green",onClick:function(){return t([].concat(S()(n),["orange"]))}},"Add 1 orange"),r.createElement("button",{type:"button",className:"btn-green",onClick:function(){return t([].concat(S()(n),["lemon"]))}},"Add 1 lemon"),r.createElement("p",null,"My fruits:"),r.createElement("ul",null,a))};var j=t(501);o()(j.Z,{insert:"head",singleton:!1}),j.Z.locals;const I=function(){var e=(0,r.useContext)(F),n=e.sweets,t=e.setSweets,a=n.map((function(e,n){return r.createElement("li",{key:n},e)}));return r.createElement(r.Fragment,null,r.createElement("button",{type:"button",className:"btn-pink",onClick:function(){return t([].concat(S()(n),["chocolate"]))}},"Add 1 chocolate"),r.createElement("button",{type:"button",className:"btn-pink",onClick:function(){return t([].concat(S()(n),["lollipop"]))}},"Add 1 lollipop"),r.createElement("button",{type:"button",className:"btn-pink",onClick:function(){return t([].concat(S()(n),["cookie"]))}},"Add 1 cookie"),r.createElement("p",null,"My sweets:"),r.createElement("ul",null,a))};var M=t(757),O=t.n(M),D=t(926),H=t.n(D),B=t(705);o()(B.Z,{insert:"head",singleton:!1}),B.Z.locals;const J=function(){var e=(0,r.useState)([]),n=N()(e,2),t=n[0],a=n[1];return(0,r.useEffect)((function(){!function(){var e=H()(O().mark((function e(){var n,t,l;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,l=t.map((function(e,n){return r.createElement("div",{key:n,className:"user-card"},r.createElement("p",null,"Name: ".concat(e.name)),r.createElement("p",null,"Email: ".concat(e.email)),r.createElement("p",null,"Company: ".concat(e.company.name)),r.createElement("p",null,"Phone: ".concat(e.phone)))})),a(l);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),r.createElement("div",{className:"users-container"},t)},q=function(){return r.createElement("div",{className:"App"},r.createElement("h1",null,"React Playground"),r.createElement("div",{className:"horizontal-line"}),r.createElement(Z,null,r.createElement(z,null)),r.createElement("div",{className:"horizontal-line"}),r.createElement(P,null,r.createElement(I,null)),r.createElement("div",{className:"horizontal-line"}),r.createElement(w,null),r.createElement("div",{className:"horizontal-line"}),r.createElement(J,null))};a.render(r.createElement(q,null),document.getElementById("root"))},731:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,".App {\n  margin: 1rem;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.App h1 {\n  color: #b61919;\n}\n\n.App .horizontal-line {\n  margin: 10px 0;\n  width: 50%;\n  border-top: 1px solid black;\n}\n",""]);const l=a},669:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,".btn-green {\n  margin: 5px;\n  padding: 10px;\n  border: none;\n  border-radius: 3px;\n  background: #3fe296;\n  color: black;\n}\n",""]);const l=a},501:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,".btn-pink {\n  margin: 5px;\n  padding: 10px;\n  border: none;\n  border-radius: 3px;\n  background: #f835e8;\n  color: black;\n}\n",""]);const l=a},705:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,".users-container {\n  max-width: 1000px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.user-card {\n  border: 1px solid black;\n  margin: 5px;\n  padding: 0 15px;\n  width: 270px;\n}\n\n.user-card:nth-child(even) {\n  background: #d6d6d6;\n}\n",""]);const l=a}},n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.x=e=>{},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={179:0},n=[[937,350]],r=e=>{},a=(a,l)=>{for(var o,c,[u,i,s,p]=l,m=0,d=[];m<u.length;m++)c=u[m],t.o(e,c)&&e[c]&&d.push(e[c][0]),e[c]=0;for(o in i)t.o(i,o)&&(t.m[o]=i[o]);for(s&&s(t),a&&a(l);d.length;)d.shift()();return p&&n.push.apply(n,p),r()},l=self.webpackChunkreact_app_template=self.webpackChunkreact_app_template||[];function o(){for(var r,a=0;a<n.length;a++){for(var l=n[a],o=!0,c=1;c<l.length;c++){var u=l[c];0!==e[u]&&(o=!1)}o&&(n.splice(a--,1),r=t(t.s=l[0]))}return 0===n.length&&(t.x(),t.x=e=>{}),r}l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l));var c=t.x;t.x=()=>(t.x=c||(e=>{}),(r=o)())})(),t.x()})();