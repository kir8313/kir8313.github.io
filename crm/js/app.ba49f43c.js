(function(){"use strict";var t={2959:function(t,e,n){var a=n(9242),r=n(3396);function o(t,e,n,a,o,i){const s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)((0,r.LL)(i.page),null,{default:(0,r.w5)((()=>[(0,r.Wm)(s)])),_:1})}var i=n(7139);const s={class:"app-main-layout"},c={class:"app-page"},u={class:"fixed-action-btn"},l=(0,r._)("i",{class:"large material-icons"},"add",-1);function d(t,e,n,a,o,d){const p=(0,r.up)("the-navbar"),m=(0,r.up)("the-sidebar"),g=(0,r.up)("router-view"),h=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(p,{onToggleSidebar:d.changeIsOpen},null,8,["onToggleSidebar"]),(0,r.Wm)(m,{isOpen:d.isOpen},null,8,["isOpen"]),(0,r._)("main",{class:(0,i.C_)(["app-content",{full:!d.isOpen}])},[(0,r._)("div",c,[(0,r.Wm)(g)])],2),(0,r._)("div",u,[(0,r.Wm)(h,{class:"btn-floating btn-large blue",to:"/record"},{default:(0,r.w5)((()=>[l])),_:1})])])}var p=n(6541),m=n(4409),g={components:{TheSidebar:m.Z,TheNavbar:p.Z},methods:{changeIsOpen(){this.$store.commit("changeIsOpen")}},computed:{isOpen(){return this.$store.getters.isOpen}},async mounted(){Object.keys(this.$store.getters.info).length||await this.$store.dispatch("getInfo")}},h=n(89);const f=(0,h.Z)(g,[["render",d]]);var y=f;const v={class:"grey darken-1 empty-layout"};function w(t,e,n,a,o,i){const s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",v,[(0,r.Wm)(s)])}var b=n(2130),O={computed:{error(){return this.$store.getters.error}},watch:{error(t){this.$error(b.Z[t.code]||"Неожиданная ошибка")}}};const k=(0,h.Z)(O,[["render",w]]);var j=k,_={components:{AuthLayout:j,MainLayout:y},computed:{page(){return(this.$route.meta.page||"login")+"-layout"}}};const $=(0,h.Z)(_,[["render",o]]);var C=$,S=n(678),I=n(7301),T=n(4275);const U={apiKey:"AIzaSyAYw1uvN04N8D4swT8iQM0Ugo6wvAqV94o",authDomain:"crm-vue-63b53.firebaseapp.com",projectId:"crm-vue-63b53",storageBucket:"crm-vue-63b53.appspot.com",messagingSenderId:"114537269626",appId:"1:114537269626:web:a0cd9497ced989d7e6eec3"},D=(0,I.v0)((0,T.ZF)(U));const P=(0,I.w7)(D),E=[{path:"/login",component:()=>Promise.all([n.e(997),n.e(311)]).then(n.bind(n,6311)),meta:{page:"auth"}},{path:"/register",component:()=>Promise.all([n.e(997),n.e(121)]).then(n.bind(n,7121)),meta:{page:"auth"}},{path:"/",component:()=>n.e(175).then(n.bind(n,5175)),meta:{page:"main",auth:!0}},{path:"/categories",component:()=>Promise.all([n.e(997),n.e(586)]).then(n.bind(n,1586)),meta:{page:"main",auth:!0}},{path:"/detail/:id",component:()=>n.e(147).then(n.bind(n,8147)),meta:{page:"main",auth:!0}},{path:"/history",component:()=>n.e(994).then(n.bind(n,7994)),meta:{page:"main",auth:!0}},{path:"/planning",component:()=>n.e(400).then(n.bind(n,400)),meta:{page:"main",auth:!0}},{path:"/profile",component:()=>Promise.all([n.e(997),n.e(388)]).then(n.bind(n,1388)),meta:{page:"main",auth:!0}},{path:"/record",component:()=>Promise.all([n.e(997),n.e(704)]).then(n.bind(n,4704)),meta:{page:"main",auth:!0}},{path:"/:error(.*)*",redirect:"/"}],N=(0,S.p7)({history:(0,S.PO)("/"),linkActiveClass:"active",linkExactActiveClass:"active",routes:E});N.beforeEach(((t,e)=>{const n=t.matched.some((t=>t.meta.auth));(0,I.Aj)(D,(t=>{t||!n||localStorage.getItem("token")||N.push("/login?message=login")}))}));var A=N,x=n(65);const Z="https://crm-vue-63b53-default-rtdb.europe-west1.firebasedatabase.app/users/",L="https://crm-vue-63b53-default-rtdb.europe-west1.firebasedatabase.app/category/",F="https://crm-vue-63b53-default-rtdb.europe-west1.firebasedatabase.app/record/";var J={state:{user:null},getters:{user(t){return t.user}},mutations:{updateUser(t,e){t.user=e},updateName(t,e){t.user.name=e}},actions:{async login({dispatch:t,commit:e},{email:n,password:a}){try{const t=await(0,I.e5)(D,n,a);localStorage.setItem("token",t.user.uid)}catch(r){throw e("changeError",r),r}},async logout({commit:t}){await P,t("clearInfo")},async register({dispatch:t,commit:e},{email:n,password:a,name:r,money:o}){try{await(0,I.Xb)(D,n,a);const e=await t("getUid");await fetch(`${Z}${e}.json`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,name:r,money:o})}),localStorage.setItem("token",e)}catch(i){throw e("changeError",i),i}},async getUser({dispatch:t,commit:e}){const n=await t("getUid"),a=await fetch(Z+n+".json"),r=await a.json();await e("updateUser",r)},async changeName({dispatch:t,commit:e,getters:n},a){const r=await t("getUid");await fetch(`${Z}${r}.json`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({...n.user,name:a})}),e("updateName",a)}}},W={state:{info:{}},actions:{async getInfo({dispatch:t,commit:e}){const n=await t("getUid"),a=await fetch(Z+n+".json"),r=await a.json();e("setInfo",r)},async updateInfo({dispatch:t,commit:e,getters:n},a){const r=await t("getUid"),o={...n.info,money:a};await fetch(Z+r+".json",{method:"PUT",body:JSON.stringify(o)}),e("setInfo",o)}},mutations:{setInfo(t,e){t.info=e},clearInfo(t){t.info={},localStorage.clear()}},getters:{info(t){return t.info}}},B={state:{categories:[]},getters:{categories(t){return t.categories}},mutations:{setCategories(t,e){t.categories=e},updateCategories(t,e){t.categories.push(e)},changeCategory(t,{id:e,title:n,limit:a}){const r=t.categories.findIndex((t=>t.id===e));t.categories[r]={id:e,title:n,limit:a}}},actions:{async sendCategory({dispatch:t,commit:e,getters:n},{title:a,limit:r}){try{await t("getCategories");const o=await t("getUid");await fetch(`${L}${o}.json`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:a,limit:r})}),e("updateCategories",{id:Date.now(),title:a,limit:r}),localStorage.setItem("categories",JSON.stringify(n.categories))}catch(o){throw e("changeError",o),o}},async getCategories({dispatch:t,commit:e}){try{const n=await t("getUid"),a=await fetch(`${L}${n}.json`),r=await a.json();if(null!==r){const t=Object.keys(r).map((t=>({...r[t],id:t})));e("setCategories",t),localStorage.setItem("categories",JSON.stringify(t))}else console.log("categories = null")}catch(n){}},async getCategoryById({dispatch:t,commit:e},n){try{const e=await t("getUid"),a=await fetch(`${L}${e}/${n}.json`),r=await a.json();if(null!==r)return{...r,id:n};console.log("this category = null")}catch(a){}},async changeCategory({dispatch:t,commit:e,getters:n},{title:a,limit:r,id:o}){try{const i=await t("getUid");await fetch(`${L}${i}/${o}.json`,{method:"PUT",body:JSON.stringify({title:a,limit:r})}),e("changeCategory",{id:o,title:a,limit:r}),localStorage.setItem("categories",JSON.stringify(n.categories))}catch(i){throw e("changeError",i),i}}}},q={actions:{async sendAmount({dispatch:t,commit:e},{id:n,typeMoney:a,amount:r,description:o,date:i}){try{const e=await t("getUid");await fetch(F+e+".json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n,typeMoney:a,amount:r,description:o,date:i})})}catch(s){throw e("changeError",s),s}},async getAmounts({dispatch:t,commit:e}){try{const e=await t("getUid"),n=await fetch(F+e+".json"),a=await n.json();return a?Object.keys(a).map((t=>({...a[t],amountId:t}))):a}catch(n){throw e("changeError",n),n}},async getAmountById({dispatch:t,commit:e},n){try{const e=await t("getUid"),a=await fetch(F+e+".json"),r=await a.json();if(r){const t=Object.keys(r).map((t=>({...r[t],amountId:t}))).find((t=>t.amountId===n));return{...t}}return r}catch(a){throw e("changeError",a),a}}}},z=(0,x.MT)({state:{error:null,isOpen:!0},getters:{error(t){return t.error},isOpen(t){return t.isOpen}},mutations:{changeError(t,e){t.error=e},resetError(t){t.error=null},changeIsOpen(t){t.isOpen=!t.isOpen}},actions:{async getCurrency(){const t=await fetch(`https://webservice.1prime.ru/pttable?host=1prime.ru&encoding=utf-8&template=prime_fxcur_jsonp&time=${Date.now()}`);return await t.json()},async getUid(){const t=D.currentUser;return t?t.uid:localStorage.getItem("token")?localStorage.getItem("token"):null}},modules:{auth:J,info:W,category:B,record:q}}),R={install(t,e){t.config.globalProperties.$alert=t=>M.toast({html:t}),t.config.globalProperties.$error=t=>M.toast({html:`Тут ошибка: ${t}`})}},Y=n(1033),K={install(t,e){t.config.globalProperties.$currency=t=>new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(t)}},H={install(t){t.config.globalProperties.$date=(t,e="date")=>{const n={};e.includes("date")&&(n.day="2-digit",n.month="long",n.year="numeric"),e.includes("time")&&(n.hour="2-digit",n.minute="2-digit",n.second="2-digit");const a="ru-RU";return new Intl.DateTimeFormat(a,n).format(new Date(t))}}},Q={mounted(t,{value:e}){M.Tooltip.init(t,{html:e})},unmounted(t){const e=M.Tooltip.getInstance(t);e&&e.destroy&&e.destroy()}};n(1178),n(5778);let V;(0,I.Aj)(D,(()=>{V||(V=(0,a.ri)(C).component("Loader",Y.Z).use(z).use(A).use(R).use(K).use(H).directive("tooltip",Q).mount("#app"))}))},2130:function(t,e){e["Z"]={logout:"Вы вышли из системы.",login:"Войдите в систему",feature:"Форма находится в разработке","auth/wrong-password":"Неверный пароль.","auth/user-not-found":"Пользователь с таким email не найден","auth/too-many-requests":"Много попыток входа","auth/email-already-in-use":"Пользователь с таким email уже зарегистрирован"}},1033:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(3396);const r={class:"app-loader"},o=(0,a.uE)('<div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>',1),i=[o];function s(t,e,n,o,s,c){return(0,a.wg)(),(0,a.iD)("div",r,i)}var c={},u=n(89);const l=(0,u.Z)(c,[["render",s]]);var d=l},6541:function(t,e,n){n.d(e,{Z:function(){return I}});var a=n(3396),r=n(7139),o=n(9242);const i=t=>((0,a.dD)("data-v-48163c24"),t=t(),(0,a.Cn)(),t),s={class:"navbar orange lighten-1"},c={class:"nav-wrapper"},u={class:"navbar-left"},l=i((()=>(0,a._)("i",{class:"material-icons black-text"},"dehaze",-1))),d=[l],p={class:"black-text"},m={class:"right hide-on-small-and-down"},g={class:"dropdown-trigger black-text",href:"#","data-target":"dropdown",ref:"dropdown"},h={key:0},f=i((()=>(0,a._)("i",{class:"material-icons right"},"arrow_drop_down",-1))),y={id:"dropdown",class:"dropdown-content"},v=i((()=>(0,a._)("i",{class:"material-icons"},"account_circle",-1))),w=(0,a.Uk)("Профиль "),b=i((()=>(0,a._)("li",{class:"divider",tabindex:"-1"},null,-1))),O=i((()=>(0,a._)("i",{class:"material-icons"},"assignment_return",-1))),k=(0,a.Uk)("Выйти "),j=[O,k];function _(t,e,n,i,l,O){const k=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",s,[(0,a._)("div",c,[(0,a._)("div",u,[(0,a._)("button",{class:"burger",onClick:e[0]||(e[0]=e=>t.$emit("toggleSidebar"))},d),(0,a._)("span",p,(0,r.zw)(O.currentDay),1)]),(0,a._)("ul",m,[(0,a._)("li",null,[(0,a._)("a",g,[O.user?((0,a.wg)(),(0,a.iD)("span",h,(0,r.zw)(O.user.name),1)):(0,a.kq)("",!0),f],512),(0,a._)("ul",y,[(0,a._)("li",null,[(0,a.Wm)(k,{to:"/profile",class:"black-text"},{default:(0,a.w5)((()=>[v,w])),_:1})]),b,(0,a._)("li",null,[(0,a._)("a",{href:"#",class:"black-text",onClick:e[1]||(e[1]=(0,o.iM)(((...t)=>O.logout&&O.logout(...t)),["prevent"]))},j)])])])])])])}var $={emits:["toggleSidebar"],data:()=>({day:(new Date).getDate(),month:(new Date).getMonth()+1,year:(new Date).getFullYear()}),methods:{async logout(){await this.$store.dispatch("logout"),await this.$router.push("/login?message=logout")},isMoreTen(t){return t>10?t:"0"+t}},computed:{currentDay(){return`${this.isMoreTen(this.day)}.${this.isMoreTen(this.month)}.${(new Date).getFullYear()}`},user(){return this.$store.getters.user}},async mounted(){M.Dropdown.init(this.$refs.dropdown,{}),await this.$store.dispatch("getUser")}},C=n(89);const S=(0,C.Z)($,[["render",_],["__scopeId","data-v-48163c24"]]);var I=S},4409:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(3396),r=n(7139);function o(t,e,n,o,i,s){const c=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("ul",{class:(0,r.C_)(["sidenav","app-sidenav",{open:n.isOpen}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.links,(t=>((0,a.wg)(),(0,a.iD)("li",{key:t.id},[(0,a.Wm)(c,{to:t.url,class:"waves-effect waves-orange pointer",exact:t.exact},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(t.title),1)])),_:2},1032,["to","exact"])])))),128))],2)}var i={props:["isOpen"],data:()=>({links:[{id:1,title:"Счет",url:"/",exact:!0},{id:2,title:"История",url:"/history"},{id:3,title:"Планирование",url:"/planning"},{id:4,title:"Новая запись",url:"/record"},{id:5,title:"Категории",url:"/categories"}]}),methods:{isActiveRout(t){return this.$route.fullPath===t}}},s=n(89);const c=(0,s.Z)(i,[["render",o]]);var u=c}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,o){if(!a){var i=1/0;for(l=0;l<t.length;l++){a=t[l][0],r=t[l][1],o=t[l][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(s=!1,o<i&&(i=o));if(s){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[a,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{121:"29d37b34",147:"4059964e",175:"2cc31997",311:"cda2a3a7",388:"5db95f9b",400:"21792694",586:"38fcedad",704:"9f7d75cd",994:"154b8729",997:"605fd7cf"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".3571e30b.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="crm-system:";n.l=function(a,r,o,i){if(t[a])t[a].push(r);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=a),t[a]=[r];var p=function(e,n){s.onerror=s.onload=null,clearTimeout(m);var r=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),a(c)}};return r.onerror=r.onload=o,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===t||o===e)return r}},a=function(a){return new Promise((function(r,o){var i=n.miniCssF(a),s=n.p+i;if(e(i,s))return r();t(a,s,r,o)}))},r={143:0};n.f.miniCss=function(t,e){var n={704:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=a(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,a){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=t[e]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(e),s=new Error,c=function(a){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,i=a[0],s=a[1],c=a[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(e&&e(a);u<i.length;u++)o=i[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},a=self["webpackChunkcrm_system"]=self["webpackChunkcrm_system"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2959)}));a=n.O(a)})();
//# sourceMappingURL=app.ba49f43c.js.map