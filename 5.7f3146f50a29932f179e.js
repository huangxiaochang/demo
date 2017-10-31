webpackJsonp([5],{171:function(t,n,e){"use strict";function s(t){d||e(218)}Object.defineProperty(n,"__esModule",{value:!0});var i=e(183),a=e(206),d=!1,l=e(1),c=s,A=l(i.a,a.a,!1,c,"data-v-7724ae76",null);A.options.__file="src\\views\\tabs\\index.vue",A.esModule&&Object.keys(A.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)}),n.default=A.exports},183:function(t,n,e){"use strict";n.a={data:function(){return{tabsList:[{title:"待付款",id:1},{title:"已付款",id:2},{title:"已取消",id:3},{title:"已完成",id:4}],active:1,type:"basic",typeDesc:"卡片",styles:{width:"90%"},content:"第二页"}},methods:{hanlderClick:function(t){this.content=t.title},changeType:function(){"card"===this.type?(this.type="basic",this.typeDesc="卡片"):(this.type="card",this.typeDesc="基础")}}}},194:function(t,n,e){n=t.exports=e(0)(!0),n.push([t.i,"/*\n  这里定义了整个项目的公共的样式\n */\n/*每一个路由页面的标题样式*/\n.title[data-v-7724ae76] {\n  font-size: 24px;\n  color: #99A9BF;\n  margin: 10px;\n}\n/*每一项的标题样式*/\n.title-item[data-v-7724ae76] {\n  display: block;\n  border-left: 8px solid #D3DCE6;\n  color: #E5E9F2;\n  font-size: 18px;\n  padding-left: 10px;\n  margin: 8px;\n}\n/*每一个段落的样式*/\n.content-item[data-v-7724ae76] {\n  margin: 10px;\n  line-height: 1.5;\n  text-indent: 2em;\n  width: 90%;\n  padding-left: 20px;\n}\n/*去除li的默认样式*/\nul[data-v-7724ae76] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.tabs[data-v-7724ae76] {\n  width: 60%;\n}\n.tr-td[data-v-7724ae76] {\n  padding: 10px;\n}\n.content[data-v-7724ae76] {\n  padding-left: 10px;\n  padding-top: 10px;\n}\n.btn-group[data-v-7724ae76] {\n  margin-bottom: 10px;\n}\n","",{version:3,sources:["E:/componentsDemo/componentsDEMO/src/views/tabs/index.vue"],names:[],mappings:"AAAA;;GAEG;AACH,gBAAgB;AAChB;EACE,gBAAgB;EAChB,eAAe;EACf,aAAa;CACd;AACD,YAAY;AACZ;EACE,eAAe;EACf,+BAA+B;EAC/B,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;CACb;AACD,YAAY;AACZ;EACE,aAAa;EACb,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;EACX,mBAAmB;CACpB;AACD,aAAa;AACb;EACE,WAAW;EACX,UAAU;EACV,iBAAiB;CAClB;AACD;EACE,WAAW;CACZ;AACD;EACE,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,oBAAoB;CACrB",file:"index.vue",sourcesContent:["/*\n  这里定义了整个项目的公共的样式\n */\n/*每一个路由页面的标题样式*/\n.title {\n  font-size: 24px;\n  color: #99A9BF;\n  margin: 10px;\n}\n/*每一项的标题样式*/\n.title-item {\n  display: block;\n  border-left: 8px solid #D3DCE6;\n  color: #E5E9F2;\n  font-size: 18px;\n  padding-left: 10px;\n  margin: 8px;\n}\n/*每一个段落的样式*/\n.content-item {\n  margin: 10px;\n  line-height: 1.5;\n  text-indent: 2em;\n  width: 90%;\n  padding-left: 20px;\n}\n/*去除li的默认样式*/\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.tabs {\n  width: 60%;\n}\n.tr-td {\n  padding: 10px;\n}\n.content {\n  padding-left: 10px;\n  padding-top: 10px;\n}\n.btn-group {\n  margin-bottom: 10px;\n}\n"],sourceRoot:""}])},206:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("h2",{staticClass:"title"},[t._v("菜单组件 > 标签页组件")]),t._v(" "),e("h3",{staticClass:"title-item"},[t._v("组件说明")]),t._v(" "),t._m(0),t._v(" "),e("h3",{staticClass:"title-item"},[t._v("示例")]),t._v(" "),e("p",{staticClass:"content-item"},[t._v('\n\t\t实际使用方法如下：\n\t\t<pg-steps :tabsList="tabsList" :active="active" class="tabs" :type="type" :styles="styles" @hanlderClick="hanlderClick">\n\t\t\t<div></div>\n\t\t</pg-steps>\n\t\t\n\t')]),t._v(" "),e("p",{staticClass:"content-item"},[t._v("\n\t\t如下: 可以根据不同的订单状态来获取订单列表，然后更新slot中的内容\n\t")]),t._v(" "),e("h3",{staticClass:"title-item"},[t._v("效果")]),t._v(" "),e("p",{staticClass:"content-item"},[t._v("\n\t\t效果如下\n\t\t\n\t")]),t._v(" "),e("div",{staticClass:"btn-group"},[e("button",{on:{click:t.changeType}},[t._v(t._s(t.typeDesc))])]),t._v(" "),e("pg-tabs",{staticClass:"tabs",attrs:{tabsList:t.tabsList,active:t.active,type:t.type,styles:t.styles},on:{hanlderClick:t.hanlderClick}},[e("div",{staticClass:"content"},[t._v(t._s(t.content))])]),t._v(" "),t._m(1)],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"content-item"},[t._v("\n\t\t标签页中的内容采用slot的形式，用户可以自行定义其中的内容，点击标签的时候，会触发hanlderClick事件，通过该事件，可以获取到点击的标签，然后可以根据获取得内容进行处理，如数据接口的请求，拿到数据之后，更新slot中的内容。\n\t\t"),e("br"),t._v("\n\t\t本组件的标签页有两种模式，一种是基础的类型，另一种是卡片的类型，默认情况下是基础的类型，\n\t\t可以通过type一段来决定使用哪一种类型。\n\t\t"),e("pre",[t._v("\t\t\ttabsList: [\n\t\t\t\t{\n\t\t\t\t\ttitle: '第一页',\n\t\t\t\t\tid: 1\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\ttitle: '第二页',\n\t\t\t\t\tid: 2\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\ttitle: '第三页',\n\t\t\t\t\tid: 3\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\ttitle: '第四页',\n\t\t\t\t\tid: 4\n\t\t\t\t}\n\t\t\t]\n\t\t")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",[e("tr",[e("td",{staticClass:"tr-td"},[t._v("字段")]),e("td",{staticClass:"tr-td"},[t._v("说明")]),e("td",{staticClass:"tr-td"},[t._v("类型")]),e("td",{staticClass:"tr-td"},[t._v("默认值")])]),t._v(" "),e("tr",[e("td",{staticClass:"tr-td"},[t._v("tabsList")]),e("td",[t._v("标签页项")]),e("td",{staticClass:"tr-td"},[t._v("array")]),e("td",{staticClass:"tr-td"},[t._v("[]")])]),t._v(" "),e("tr",[e("td",{staticClass:"tr-td"},[t._v("active")]),e("td",[t._v("开始时所处的标签页")]),e("td",{staticClass:"tr-td"},[t._v("number")]),e("td",{staticClass:"tr-td"},[t._v("0(第一个把标签页)")])]),t._v(" "),e("tr",[e("td",{staticClass:"tr-td"},[t._v("type")]),e("td",[t._v("标签页的类型(basic/card)")]),e("td",{staticClass:"tr-td"},[t._v("string")]),e("td",{staticClass:"tr-td"},[t._v("basic")])]),t._v(" "),e("tr",[e("td",{staticClass:"tr-td"},[t._v("styles")]),e("td",[t._v("样式集合")]),e("td",{staticClass:"tr-td"},[t._v("object")]),e("td",{staticClass:"tr-td"},[t._v("{}")])])])}];s._withStripped=!0;var a={render:s,staticRenderFns:i};n.a=a},218:function(t,n,e){var s=e(194);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(2)("e3f80cc6",s,!1)}});