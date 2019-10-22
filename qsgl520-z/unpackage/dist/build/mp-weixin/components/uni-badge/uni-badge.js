(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{"1c00":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return i})},"47af":function(t,e,n){},6266:function(t,e,n){"use strict";var u=n("47af"),i=n.n(u);i.a},8892:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"uni-badge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},computed:{setClass:function(){var t=["uni-badge-"+this.type,"uni-badge--"+this.size];return!0===this.inverted&&t.push("uni-badge-inverted"),t.join(" ")}},methods:{onClick:function(){this.$emit("click")}}};e.default=u},bbad:function(t,e,n){"use strict";n.r(e);var u=n("1c00"),i=n("def4");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("6266");var r=n("2877"),f=Object(r["a"])(i["default"],u["a"],u["b"],!1,null,null,null);e["default"]=f.exports},def4:function(t,e,n){"use strict";n.r(e);var u=n("8892"),i=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bbad"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);                
