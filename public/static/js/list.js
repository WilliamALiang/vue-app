webpackJsonp([15],{"1gSM":function(t,e,o){t.exports=o.p+"static/img/head_bg.jpg"},"97Sy":function(t,e,o){var n=o("tPUW");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("2eaaa3d7",n,!0,{})},J2yT:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-header",{attrs:{title:"列表",fixed:""}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.back},slot:"left"},[n("span",[t._v("返回")])]),t._v(" "),n("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1),t._v(" "),n("div",{staticClass:"has-header"},[n("mt-loadmore",{ref:"loadmore",attrs:{maxDistance:100,"top-method":t.loadTop,"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded},on:{"top-status-change":t.handleTopChange,"bottom-status-change":t.handleBottomChange}},[n("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},[n("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.topStatus,expression:"topStatus !== 'loading'"}],staticClass:"loadmore-arrow",class:{rotate:"drop"===t.topStatus}},[t._v("↓")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.topStatus,expression:"topStatus === 'loading'"}]},[n("mt-spinner",{attrs:{type:"fading-circle",color:"#26a2ff",size:20}}),t._v(" "),n("span",{staticStyle:{position:"relative",top:"-4px",left:"4px",color:"#26a2ff"}},[t._v("加载中...")])],1)]),t._v(" "),t._l(t.list,function(e,i){return n("mt-cell-swipe",{key:i,staticClass:"list",attrs:{right:t.swipeRight(i)}},[n("div",{staticStyle:{padding:"10px 0"},attrs:{slot:"title"},slot:"title"},[n("img",{staticClass:"img-head",attrs:{src:o("1gSM")}}),t._v(" "),n("div",{staticStyle:{"padding-left":"10px",display:"inline-block",height:"48px","line-height":"24px","vertical-align":"middle"}},[n("span",[t._v("张三")]),n("br"),t._v(" "),n("span",{staticStyle:{color:"#999","font-size":"14px"}},[t._v("男")]),t._v(" "),n("span",{staticStyle:{margin:"0 10px",color:"#999","font-size":"14px"}},[t._v("25岁")]),t._v(" "),n("span",{staticStyle:{color:"#999","font-size":"14px"}},[t._v(t._s(Math.random()))])])])])}),t._v(" "),n("div",{staticClass:"mint-loadmore-bottom",attrs:{slot:"bottom"},slot:"bottom"},[n("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.bottomStatus,expression:"bottomStatus !== 'loading'"}],staticClass:"loadmore-arrow",class:{rotate:"drop"===t.bottomStatus}},[t._v("↑")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.bottomStatus,expression:"bottomStatus === 'loading'"}]},[n("mt-spinner",{attrs:{type:"fading-circle",color:"#26a2ff",size:20}}),t._v(" "),n("span",{staticStyle:{position:"relative",top:"-4px",left:"4px",color:"#26a2ff"}},[t._v("加载中...")])],1)])],2)],1)],1)},i=[],a={render:n,staticRenderFns:i};e.a=a},R4HR:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,".rotate{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.loadmore-arrow{-webkit-transition:all .3s ease-out;transition:all .3s ease-out;display:inline-block;font-size:24px;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1;color:#26a2ff}.mint-loadmore-top{height:44px}.mint-loadmore-bottom{height:54px}.mint-loadmore-top{margin-top:-45px}div[class^=mint-spinner-]{display:inline-block}.img-head{width:48px;height:48px;border-radius:50%}.list .mint-cell-swipe-button{line-height:68px}",""])},"X5+7":function(t,e,o){"use strict";function n(t){o("lsq6")}Object.defineProperty(e,"__esModule",{value:!0});var i=o("tZ8l"),a=o("J2yT"),s=o("VU/8"),r=n,l=s(i.a,a.a,!1,r,null,null);e.default=l.exports},bCKv:function(t,e,o){t.exports=function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};return e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=222)}({1:function(t,e){t.exports=o("7+uW")},222:function(t,e,o){t.exports=o(30)},30:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(5),i=(o.n(n),o(88));o.d(e,"default",function(){return i.a})},5:function(t,e){},87:function(t,e,o){"use strict";var n=o(1),i=o.n(n),a="@@InfiniteScroll",s=function(t,e){var o,n,i,a,s,r=function(){t.apply(a,s),n=o};return function(){if(a=this,s=arguments,o=Date.now(),i&&(clearTimeout(i),i=null),n){var t=e-(o-n);t<0?r():i=setTimeout(function(){r()},t)}else r()}},r=function(t){return t===window?Math.max(window.pageYOffset||0,document.documentElement.scrollTop):t.scrollTop},l=i.a.prototype.$isServer?{}:document.defaultView.getComputedStyle,c=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var o=l(e).overflowY;if("scroll"===o||"auto"===o)return e;e=e.parentNode}return window},d=function(t){return t===window?document.documentElement.clientHeight:t.clientHeight},u=function(t){return t===window?r(window):t.getBoundingClientRect().top+r(window)},f=function(t){for(var e=t.parentNode;e;){if("HTML"===e.tagName)return!0;if(11===e.nodeType)return!1;e=e.parentNode}return!1},p=function(){if(!this.binded){this.binded=!0;var t=this,e=t.el;t.scrollEventTarget=c(e),t.scrollListener=s(m.bind(t),200),t.scrollEventTarget.addEventListener("scroll",t.scrollListener);var o=e.getAttribute("infinite-scroll-disabled"),n=!1;o&&(this.vm.$watch(o,function(e){t.disabled=e,!e&&t.immediateCheck&&m.call(t)}),n=Boolean(t.vm[o])),t.disabled=n;var i=e.getAttribute("infinite-scroll-distance"),a=0;i&&(a=Number(t.vm[i]||i),isNaN(a)&&(a=0)),t.distance=a;var r=e.getAttribute("infinite-scroll-immediate-check"),l=!0;r&&(l=Boolean(t.vm[r])),t.immediateCheck=l,l&&m.call(t);var d=e.getAttribute("infinite-scroll-listen-for-event");d&&t.vm.$on(d,function(){m.call(t)})}},m=function(t){var e=this.scrollEventTarget,o=this.el,n=this.distance;if(!0===t||!this.disabled){var i=r(e),a=i+d(e),s=!1;if(e===o)s=e.scrollHeight-a<=n;else{s=a+n>=u(o)-u(e)+o.offsetHeight+i}s&&this.expression&&this.expression()}};e.a={bind:function(t,e,o){t[a]={el:t,vm:o.context,expression:e.value};var n=arguments,i=function(){t[a].vm.$nextTick(function(){f(t)&&p.call(t[a],n),t[a].bindTryCount=0;var e=function(){t[a].bindTryCount>10||(t[a].bindTryCount++,f(t)?p.call(t[a],n):setTimeout(e,50))};e()})};if(t[a].vm._isMounted)return void i();t[a].vm.$on("hook:mounted",i)},unbind:function(t){t[a]&&t[a].scrollEventTarget&&t[a].scrollEventTarget.removeEventListener("scroll",t[a].scrollListener)}}},88:function(t,e,o){"use strict";var n=o(87),i=o(5),a=(o.n(i),o(1)),s=o.n(a),r=function(t){t.directive("InfiniteScroll",n.a)};!s.a.prototype.$isServer&&window.Vue&&(window.infiniteScroll=n.a,s.a.use(r)),n.a.install=r,e.a=n.a}})},lsq6:function(t,e,o){var n=o("R4HR");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("8e39d470",n,!0,{})},tPUW:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,"",""])},tZ8l:function(t,e,o){"use strict";var n=o("97Sy"),i=(o.n(n),o("bCKv")),a=o.n(i);o("7+uW").default.use(a.a),e.a={name:"list",data:function(){return{length:0,loading:!1,list:[],topStatus:"",bottomStatus:"",allLoaded:!1}},methods:{swipeRight:function(t){var e=this;return[{content:"<i class='fa fa-fw fa-remove'></i> 删除",style:{background:"#ef4f4f",color:"#fff"},handler:function(){return e.swipeItem(t)}}]},loadTop:function(){var t=this;setTimeout(function(){t.length=0,t.list=[],t.add(10),t.$refs.loadmore.onTopLoaded()},2e3*Math.random()+1e3)},handleTopChange:function(t){this.topStatus=t},loadBottom:function(){var t=this;setTimeout(function(){t.add(10),t.$refs.loadmore.onBottomLoaded()},2e3*Math.random()+1e3)},handleBottomChange:function(t){this.bottomStatus=t},loadMore:function(){var t=this;this.loading=!0,setTimeout(function(){t.add(10),t.loading=!1,t.bottomStatus="loading"},2e3*Math.random()+1e3)},add:function(t){for(var e=this.length;e<this.length+t;e++){var o={name:"标题"+e,fade:!0};this.list.push(o)}this.length+=t},swipeItem:function(t){this.list.splice(t,1)}},created:function(){this.add(10)}}}});