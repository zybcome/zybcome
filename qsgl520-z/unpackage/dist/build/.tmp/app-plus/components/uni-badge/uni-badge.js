(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{3533:function(t,e,n){},"51dc":function(t,e,n){"use strict";n.r(e);var u=n("ecf2"),a=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);e["default"]=a.a},a60f:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},d382:function(t,e,n){"use strict";n.r(e);var u=n("a60f"),a=n("51dc");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("dbca");var r=n("2877"),c=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},dbca:function(t,e,n){"use strict";var u=n("3533"),a=n.n(u);a.a},ecf2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"uni-badge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},computed:{setClass:function(){var t=["uni-badge-"+this.type,"uni-badge--"+this.size];return!0===this.inverted&&t.push("uni-badge-inverted"),t.join(" ")}},methods:{onClick:function(){this.$emit("click")}}};e.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("d382"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);                
