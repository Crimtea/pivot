"use strict";(self["webpackChunkpivot"]=self["webpackChunkpivot"]||[]).push([[172],{8172:function(t,a,e){e.r(a),e.d(a,{default:function(){return r}});e(4114);var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"my-wallet __card"},[a("div",{staticClass:"__title"},[t._v("我的钱包")]),a("div",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"title"},[t._v("总计：")]),a("div",{staticClass:"total"},[t._v(t._s(t.total))]),a("button",{on:{click:function(a){return t.list.push({name:"",balance:""})}}},[t._v("新增")])]),t._l(t.list,(function(e,n){return a("div",{key:n,staticClass:"row"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],staticClass:"title",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.balance,expression:"item.balance"}],staticClass:"balance",attrs:{type:"text"},domProps:{value:e.balance},on:{input:function(a){a.target.composing||t.$set(e,"balance",a.target.value)}}}),a("button",{staticStyle:{"margin-left":"10px"},on:{click:function(a){return t.list.splice(n,1)}}},[t._v("删除")])])})),a("div",{staticClass:"row"},[a("button",{on:{click:function(a){return t.generate()}}},[t._v("生成 ↓")]),a("button",{on:{click:function(a){return t.parse()}}},[t._v("解析 ↑")])]),a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data,expression:"data"}],domProps:{value:t.data},on:{input:function(a){a.target.composing||(t.data=a.target.value)}}})])],2)])},i=[],s={name:"PivotMyWallet",data(){return{data:"",list:[{name:"微信零钱",balance:"7.95"},{name:"微信零钱通",balance:"0.17"},{name:"农业银行",balance:"2518.80"},{name:"建设银行",balance:"83.26"},{name:"工商银行",balance:"10"},{name:"股票",balance:"2630.50"},{name:"黄金",balance:"419.14"},{name:"待发工资",balance:"6600"},{name:"QQ钱包",balance:"82.66"},{name:"现金",balance:"160"}]}},computed:{total(){let t=this.list.reduce(((t,a)=>t+Number(a.balance)),0);return t.toFixed(2)}},mounted(){},methods:{generate(){this.data=JSON.stringify(this.list)},parse(){this.list=JSON.parse(this.data)}}},l=s,c=e(1656),o=(0,c.A)(l,n,i,!1,null,"43ed8b84",null),r=o.exports}}]);
//# sourceMappingURL=172.fa19bfd2.js.map