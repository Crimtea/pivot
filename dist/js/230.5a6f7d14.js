"use strict";(self["webpackChunkpivot"]=self["webpackChunkpivot"]||[]).push([[230],{6230:function(s,t,e){e.r(t),e.d(t,{default:function(){return l}});var i=function(){var s=this,t=s._self._c;return t("div",{staticClass:"login"},[t("div",{staticClass:"left"}),t("div",{staticClass:"mid"},[t("div",{staticClass:"logo"},[s._v("pivot")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}}),t("button",{on:{click:function(t){return s.login()}}},[s._v("Login")])]),t("div",{staticClass:"right"})])},o=[],a=(e(4114),{name:"PivotLogin",data(){return{password:""}},mounted(){},methods:{login(){this.password==this.$store.state.at()?(this.$store.state.login=!0,this.$router.push("/home"),this.$message("登录成功","success")):this.$message("登录失败","danger")}}}),n=a,r=e(1656),u=(0,r.A)(n,i,o,!1,null,"1969050e",null),l=u.exports}}]);
//# sourceMappingURL=230.5a6f7d14.js.map