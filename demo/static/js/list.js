webpackJsonp([10],{"/T4Z":function(t,o,a){"use strict";var e=a("gt1m"),s=a("wFu8");a.n(s);e.default.use(s.InfiniteScroll),o.a={name:"list",data:function(){return{length:0,loading:!1,list:[],topStatus:"",bottomStatus:"",allLoaded:!1}},methods:{loadTop:function(){var t=this;setTimeout(function(){t.length=0,t.list=[],t.add(5),t.$refs.loadmore.onTopLoaded()},2e3*Math.random()+1e3)},handleTopChange:function(t){this.topStatus=t},loadBottom:function(){var t=this;setTimeout(function(){t.add(5),t.$refs.loadmore.onBottomLoaded()},2e3*Math.random()+1e3)},handleBottomChange:function(t){this.bottomStatus=t},loadMore:function(){var t=this;this.loading=!0,setTimeout(function(){t.add(5),t.loading=!1,t.bottomStatus="loading"},2e3*Math.random()+1e3)},add:function(t){for(var o=this,a=this.length;a<this.length+t;a++)!function(t){var a={name:"标题"+t,fade:!0};o.list.push(a),setTimeout(function(){a.fade=!1},100)}(a);this.length+=t},swipeItem:function(t){this.list.splice(t,1)}},mounted:function(){this.add(5)}}},JSUB:function(t,o,a){var e=a("mUQf");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("6imX")("5a042bc6",e,!0)},"X5+7":function(t,o,a){"use strict";function e(t){a("JSUB")}Object.defineProperty(o,"__esModule",{value:!0});var s=a("/T4Z"),n=a("kudE"),i=a("25r8"),l=e,r=i(s.a,n.a,l,null,null);o.default=r.exports},kudE:function(t,o,a){"use strict";var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("mt-header",{attrs:{title:"列表",fixed:""}},[a("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.back},slot:"left"},[t._v("返回")]),t._v(" "),a("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1),t._v(" "),a("div",{staticClass:"has-header"},[a("mt-loadmore",{ref:"loadmore",attrs:{maxDistance:100,"top-method":t.loadTop,"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded},on:{"top-status-change":t.handleTopChange,"bottom-status-change":t.handleBottomChange}},[a("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},[a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.topStatus,expression:"topStatus !== 'loading'"}],staticClass:"loadmore-arrow",class:{rotate:"drop"===t.topStatus}},[t._v("↓")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.topStatus,expression:"topStatus === 'loading'"}]},[a("mt-spinner",{attrs:{type:"fading-circle",color:"#26a2ff",size:20}}),t._v(" "),a("span",{staticStyle:{position:"relative",top:"-4px",left:"4px",color:"#26a2ff"}},[t._v("加载中...")])],1)]),t._v(" "),t._l(t.list,function(o,e){return a("mt-cell-swipe",{key:e,staticClass:"fade",class:{"fade-out":o.fade},attrs:{title:o.name,value:"带链接",right:[{content:"<i class='fa fa-fw fa-remove'></i> 删除",style:{background:"#ef4f4f",color:"#fff"},handler:function(){return t.swipeItem(e)}}]}})}),t._v(" "),a("div",{staticClass:"mint-loadmore-bottom",attrs:{slot:"bottom"},slot:"bottom"},[a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.bottomStatus,expression:"bottomStatus !== 'loading'"}],staticClass:"loadmore-arrow",class:{rotate:"drop"===t.bottomStatus}},[t._v("↑")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.bottomStatus,expression:"bottomStatus === 'loading'"}]},[a("mt-spinner",{attrs:{type:"fading-circle",color:"#26a2ff",size:20}}),t._v(" "),a("span",{staticStyle:{position:"relative",top:"-4px",left:"4px",color:"#26a2ff"}},[t._v("加载中...")])],1)])],2)],1)],1)},s=[],n={render:e,staticRenderFns:s};o.a=n},mUQf:function(t,o,a){o=t.exports=a("bKW+")(!1),o.push([t.i,".rotate{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.loadmore-arrow{-webkit-transition:all .3s ease-out;transition:all .3s ease-out;display:inline-block;font-size:24px;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1;color:#26a2ff}.mint-loadmore-top{height:44px}.mint-loadmore-bottom{height:54px}.mint-loadmore-top{margin-top:-45px}div[class^=mint-spinner-]{display:inline-block}.fade{opacity:1;-webkit-transition:all .2s ease-in .1s;transition:all .2s ease-in .1s}.fade.fade-out{opacity:0}",""])}});