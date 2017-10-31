webpackJsonp([4],{172:function(t,n,e){"use strict";function i(t){l||e(219)}Object.defineProperty(n,"__esModule",{value:!0});var a=e(184),s=e(207),l=!1,A=e(1),o=i,c=A(a.a,s.a,!1,o,"data-v-9b5ae066",null);c.options.__file="src\\views\\timePack\\index.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)}),n.default=c.exports},184:function(t,n,e){"use strict";n.a={data:function(){return{value:""}}}},195:function(t,n,e){n=t.exports=e(0)(!0),n.push([t.i,"/*\n  这里定义了整个项目的公共的样式\n */\n/*每一个路由页面的标题样式*/\n.title[data-v-9b5ae066] {\n  font-size: 24px;\n  color: #99A9BF;\n  margin: 10px;\n}\n/*每一项的标题样式*/\n.title-item[data-v-9b5ae066] {\n  display: block;\n  border-left: 8px solid #D3DCE6;\n  color: #E5E9F2;\n  font-size: 18px;\n  padding-left: 10px;\n  margin: 8px;\n}\n/*每一个段落的样式*/\n.content-item[data-v-9b5ae066] {\n  margin: 10px;\n  line-height: 1.5;\n  text-indent: 2em;\n  width: 90%;\n  padding-left: 20px;\n}\n/*去除li的默认样式*/\nul[data-v-9b5ae066] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n","",{version:3,sources:["E:/componentsDemo/componentsDEMO/src/views/timePack/index.vue"],names:[],mappings:"AAAA;;GAEG;AACH,gBAAgB;AAChB;EACE,gBAAgB;EAChB,eAAe;EACf,aAAa;CACd;AACD,YAAY;AACZ;EACE,eAAe;EACf,+BAA+B;EAC/B,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;CACb;AACD,YAAY;AACZ;EACE,aAAa;EACb,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;EACX,mBAAmB;CACpB;AACD,aAAa;AACb;EACE,WAAW;EACX,UAAU;EACV,iBAAiB;CAClB",file:"index.vue",sourcesContent:["/*\n  这里定义了整个项目的公共的样式\n */\n/*每一个路由页面的标题样式*/\n.title {\n  font-size: 24px;\n  color: #99A9BF;\n  margin: 10px;\n}\n/*每一项的标题样式*/\n.title-item {\n  display: block;\n  border-left: 8px solid #D3DCE6;\n  color: #E5E9F2;\n  font-size: 18px;\n  padding-left: 10px;\n  margin: 8px;\n}\n/*每一个段落的样式*/\n.content-item {\n  margin: 10px;\n  line-height: 1.5;\n  text-indent: 2em;\n  width: 90%;\n  padding-left: 20px;\n}\n/*去除li的默认样式*/\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n"],sourceRoot:""}])},207:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("h2",{staticClass:"title"},[t._v("菜单组件 > 时间选择组件")]),t._v(" "),e("h3",{staticClass:"title-item"},[t._v("组件说明")]),t._v(" "),e("p",{staticClass:"content-item"},[t._v("\n\t\t时间选择器同样在对外提供了slot,允许用户自行设置需要的内容，而且该组件的选择面板是有slot中定义的内容进行点击事件触发的，同时在文档document中定义的事件监听的处理程序，如果用户点击的不是选择面板的区域，将会触发关闭选择面板的事件。\n\t\t此外 ，组件提供了唯一的对外获取数据的方法，那就是进行value字段的双向绑定。\n\t")]),t._v(" "),e("p",{staticClass:"content-item"},[t._v("\n\t\t在实现的过程中，难点是如果确定用户选择到的时间。本组件的实现的方法是在选择的面板中，定义了一个区块，只用处于该区块中的时分秒都会当成用户选择到的时间，但是由此产生的另一个问题就是，如果可以使用户可以让不同的时分秒处于定义好的区块？由于本组件中的选择面板的高度是固定了，每一项的高度也是固定的，所以采用的方法是获取每一个选择列的滚动条的滚动的位置，由滚动的距离来计算处于选择区块的时分秒，由于要获取滚动条的位置，该组件进行了获取Dom的操作，这是一个缺点。\n\t\t用户除了可以通过滚动条来让某一个时分秒处于选择的区块，还可以进行点击时分秒，点击之后会进行滚动条的滚动操作，根据计算应该滚动的距离进行滚动。这样就可以解决了用户选择时分秒的问题。\n\t")]),t._v(" "),e("p",{staticClass:"content-item"},[t._v("\n\t\t但是由于会出现滚动条，而自带的滚动条的样式不是太友好，所以本组件进行滚动条样式的自定义，还有进行了滚条的显示和隐藏，只有鼠标在选择的区域之内，才会出现滚动条，否则隐藏滚动条。这样优化了用户的体验。\n\t")]),t._v(" "),e("h3",{staticClass:"title-item"},[t._v("示例")]),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"content-item"},[t._v("\n\t\t只需要使用sync进行双向绑定组件的value字段，即可获取用户选择到的时间，组件的value字段的类型是String,时间格式如下\n\t\t'09:02:00'\n\t")]),t._v(" "),e("h3",{staticClass:"title-item"},[t._v("效果")]),t._v(" "),e("p",{staticClass:"content-item"},[t._v("\n\t\t效果如下\n\t\t\n\t")]),t._v(" "),e("pg-time-pack",{attrs:{value:t.value},on:{"update:value":function(n){t.value=n}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"pg-time-pack",attrs:{type:"text",readonly:""},domProps:{value:t.value},on:{input:function(n){n.target.composing||(t.value=n.target.value)}}})])],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"content-item"},[t._v("\n\t\t只需在需要使用的地方引入:<pg-time-pack>/*这里是slot的内容*/</pg-time-pack>\n\t\t比如：\n\t\t"),e("pre",[t._v('\t\t\t<pg-time-pack :value.sync="value">\n\t\t\t\t<input type="text" class="pg-time-pack" v-model="value" readonly>\n\t\t\t</pg-time-pack>\n\t\t')])])}];i._withStripped=!0;var s={render:i,staticRenderFns:a};n.a=s},219:function(t,n,e){var i=e(195);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(2)("65f373a2",i,!1)}});