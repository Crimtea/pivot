"use strict";(self["webpackChunkpivot"]=self["webpackChunkpivot"]||[]).push([[825],{8825:function(t,s,e){e.r(s),e.d(s,{default:function(){return l}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"sidebar"},[s("div",{staticClass:"list"},t._l(t.pages,(function(e,i){return s("div",{key:i,class:{show:e.show}},[s("div",{class:{group:e.group,active:t.$route.path==e.path},on:{click:function(s){return t.changeActive(e)}}},[s("div",{staticClass:"icon"}),t._v(" "+t._s(e.group||e.title)+" ")]),t._l(e.list,(function(e,i){return s("div",{key:i,class:{active:t.$route.path==e.path},on:{click:function(s){return t.changeActive(e)}}},[s("div",{staticClass:"icon"}),t._v(" "+t._s(e.title)+" ")])}))],2)})),0)])},a=[],h=(e(4114),e(2277)),n={name:"PivotSidebar",data(){return{pages:h.A}},mounted(){let t=[],s=0;for(let e=0;e<this.pages.length;e++)this.pages[e].meta.for&&(s=this.pages[e].meta.subnum||1,t.push({show:!1,group:this.pages[e].meta.for,list:[]})),s?(this.$route.path==this.pages[e].path&&console.log(t[t.length-1].show=!0),t[t.length-1].list.push({path:this.pages[e].path,title:this.pages[e].meta.title}),s--):t.push({path:this.pages[e].path,title:this.pages[e].meta.title});this.pages=t},methods:{changeActive(t){t.group?t.show=!t.show:this.$router.push(t.path)}}},o=n,p=e(1656),u=(0,p.A)(o,i,a,!1,null,"7468e67c",null),l=u.exports}}]);
//# sourceMappingURL=825.5f8c336d.js.map