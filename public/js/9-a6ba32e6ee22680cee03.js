webpackJsonp([9],{148:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(6),i=function(e){return e&&e.__esModule?e:{"default":e}}(s);t["default"]={data:function(){return{article:{}}},created:function(){var e=this;this.loading=!0,http.get("/articles/7").then(function(t){var a=t.body.article;e.article={headline:a.en_headline,subhead:a.en_subhead,callout:a.en_callout,body:a.en_body},"es"===e.$cookie.get("language")&&(e.article={headline:a.es_headline,subhead:a.es_subhead,callout:a.es_callout,body:a.es_body}),e.loading=!1})["catch"](function(e){})},components:{"psg-speak":i["default"]}}},176:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("psg-page",{attrs:{article:e.article,loading:e.loading}},[a("div",{attrs:{slot:"copy"},slot:"copy"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[a("img",{staticClass:"img-responsive",attrs:{src:"/img/individual_counseling.jpg",alt:"Individual Counseling"}}),e._v(" "),a("hr"),e._v(" "),a("img",{staticClass:"img-responsive",attrs:{src:"/img/group_counseling.jpg",alt:"Group Counseling"}})])]),e._v(" "),a("div",{staticClass:"col-md-8"},[a("div",{domProps:{innerHTML:e._s(e.article.body)}}),e._v(" "),a("psg-speak",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],attrs:{text:e.article.body,primary:"true"}})],1)])])])},staticRenderFns:[]}},43:function(e,t,a){var s=a(1)(a(148),a(176),null,null);e.exports=s.exports}});