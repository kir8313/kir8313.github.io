"use strict";(self["webpackChunkcrm_system"]=self["webpackChunkcrm_system"]||[]).push([[175],{5175:function(e,t,r){r.r(t),r.d(t,{default:function(){return H}});var s=r(3396);const n={class:"page-title"},a=(0,s._)("h3",null,"Счет",-1),c=(0,s._)("i",{class:"material-icons"},"refresh",-1),l=[c],u={key:1,class:"row"};function i(e,t,r,c,i,o){const d=(0,s.up)("Loader"),h=(0,s.up)("home-bill"),y=(0,s.up)("home-exchange-rates");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",n,[a,(0,s._)("button",{class:"btn waves-effect waves-light btn-small",onClick:t[0]||(t[0]=(...e)=>o.refresh&&o.refresh(...e))},l)]),i.isLoading?((0,s.wg)(),(0,s.j4)(d,{key:0})):((0,s.wg)(),(0,s.iD)("div",u,[(0,s.Wm)(h,{currency:i.currency},null,8,["currency"]),(0,s.Wm)(y,{rates:i.currency},null,8,["rates"])]))])}var o=r(6541),d=r(4409),h=r(7139);const y={key:0,class:"col s12 m6 l4"},_={class:"card light-blue bill-card"},g={class:"card-content white-text"},m=(0,s._)("span",{class:"card-title"},"Счет в валюте",-1),v={class:"currency-line"},p={class:"currency-line"},w={class:"currency-line"};function f(e,t,r,n,a,c){return null!==e.rates?((0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("div",_,[(0,s._)("div",g,[m,(0,s._)("div",null,[(0,s._)("p",v,[(0,s._)("span",null,(0,h.zw)(e.$currency(c.user.money)),1)]),(0,s._)("p",p,[(0,s._)("span",null,(0,h.zw)(c.convertMoneyUsd)+" $",1)]),(0,s._)("p",w,[(0,s._)("span",null,(0,h.zw)(c.convertMoneyEur)+" €",1)])])])])])):(0,s.kq)("",!0)}var C={props:["currency"],data:()=>({rates:null}),computed:{convertMoneyUsd(){const e=this.rates.find((e=>"USD/RUB"===e.id)).value;return(this.user.money/e*100).toFixed()/100},convertMoneyEur(){const e=this.rates.find((e=>"EUR/RUB"===e.id)).value;return(this.user.money/e*100).toFixed()/100},user(){return this.$store.getters.user}},async mounted(){await this.$store.dispatch("getUser"),this.rates=await this.currency}},b=r(89);const k=(0,b.Z)(C,[["render",f]]);var D=k;const z={class:"col s12 m6 l8"},L={class:"card orange darken-3 bill-card"},U={class:"card-content white-text"},$=(0,s._)("div",{class:"card-header"},[(0,s._)("span",{class:"card-title"},"Курс валют")],-1),x=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Валюта"),(0,s._)("th",null,"Курс"),(0,s._)("th",null,"Дата"),(0,s._)("th",null,"Время")])],-1);function R(e,t,r,n,a,c){return(0,s.wg)(),(0,s.iD)("div",z,[(0,s._)("div",L,[(0,s._)("div",U,[$,(0,s._)("table",null,[x,(0,s._)("tbody",null,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(2,(e=>(0,s._)("tr",{key:e},[(0,s._)("td",null,(0,h.zw)(c.getCurrencyName(e)),1),(0,s._)("td",null,(0,h.zw)(c.getCurrencyRate(e)),1),(0,s._)("td",null,(0,h.zw)(c.getCurrencyDate(e)),1),(0,s._)("td",null,(0,h.zw)(c.getCurrencyTime(e)),1)]))),64))])])])])])}var Z={props:["rates"],data(){return{user:{}}},methods:{getCurrencyName(e){return this.rates[e-1].id.split("/")[0].toLowerCase()},getCurrencyRate(e){return this.rates[e-1].value},getCurrencyDate(e){return this.rates[e-1].date},getCurrencyTime(e){return this.rates[e-1].time}},mounted(){this.user=this.$store.getters.user}};const E=(0,b.Z)(Z,[["render",R]]);var M=E,T={components:{HomeExchangeRates:M,HomeBill:D,TheSidebar:d.Z,TheNavbar:o.Z},data(){return{isLoading:!0,currency:null}},methods:{async refresh(){this.isLoading=!0,this.currency=await this.$store.dispatch("getCurrency"),this.isLoading=!1}},async mounted(){this.currency=await this.$store.dispatch("getCurrency"),this.isLoading=!1}};const B=(0,b.Z)(T,[["render",i]]);var H=B}}]);
//# sourceMappingURL=175.2cc31997.js.map