(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-register"],{"07c5":function(e,t,n){"use strict";n.r(t);var i=n("1e7e"),s=n("0c54");for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);n("8b30");var o=n("2877"),r=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"3e1e0859",null);t["default"]=r.exports},"0c54":function(e,t,n){"use strict";n.r(t);var i=n("7b90"),s=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=s.a},"1e7e":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showPopup?n("v-uni-view",{staticClass:"uni-popup"},[n("v-uni-view",{staticClass:"uni-popup__mask",class:[e.ani,e.animation?"ani":"",e.custom?"":"uni-custom"],on:{click:function(t){t=e.$handleEvent(t),e.close(!0)}}}),n("v-uni-view",{staticClass:"uni-popup__wrapper",class:[e.type,e.ani,e.animation?"ani":"",e.custom?"":"uni-custom"],on:{click:function(t){t=e.$handleEvent(t),e.close(!0)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.clear(t)}}},[e._t("default")],2)],1)],1):e._e()},s=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s})},"4f56":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"login_title"},[n("v-uni-view",{staticClass:"login_logo",style:"background: url("+e.img_url+"qs_logo.png) no-repeat center;background-size: cover;"}),n("v-uni-view",{staticClass:"login_center"},[n("v-uni-view",{staticClass:"login_uesr"},[n("v-uni-view",{staticClass:"login_uesr_img",style:"background: url("+e.img_url+"user_name.png) rgba(255, 255, 255, 0.19) no-repeat center;background-size: 80%;"}),n("v-uni-input",{staticClass:"login_uesr_input",attrs:{type:"text",placeholder:"输入用户名","placeholder-style":"color:white"},on:{blur:function(t){t=e.$handleEvent(t),e.user_name_2(t)}},model:{value:e.user_name,callback:function(t){e.user_name=t},expression:"user_name"}})],1),n("v-uni-view",{staticClass:"login_uesr"},[n("v-uni-view",{staticClass:"login_phone_img",style:"background: url("+e.img_url+"user_phone.png) rgba(255, 255, 255, 0.19) no-repeat center;background-size: 80%;"}),n("v-uni-input",{staticClass:"login_uesr_input",attrs:{type:"text",placeholder:"输入手机号","placeholder-style":"color:white"},on:{blur:function(t){t=e.$handleEvent(t),e.user_phone_2(t)}},model:{value:e.user_phone,callback:function(t){e.user_phone=t},expression:"user_phone"}})],1),n("v-uni-view",{staticClass:"login_uesr"},[n("v-uni-view",{staticClass:"login_yzm_img",style:"background: url("+e.img_url+"user_yzm.png) rgba(255, 255, 255, 0.19) no-repeat center;background-size: 80%;"}),n("v-uni-input",{staticClass:"login_yzm_input",attrs:{type:"text",placeholder:"输入验证码","placeholder-style":"color:white"},on:{blur:function(t){t=e.$handleEvent(t),e.user_yzm_2(t)}},model:{value:e.user_yzm,callback:function(t){e.user_yzm=t},expression:"user_yzm"}}),n("v-uni-button",{staticClass:"login_yzm_btn",attrs:{plain:"true"},on:{click:function(t){t=e.$handleEvent(t),e.huoq_yzm(t)}}},[e._v(e._s(e.btn_yzm))])],1),n("v-uni-view",{staticClass:"login_uesr"},[n("v-uni-view",{staticClass:"login_psw_img",style:"background: url("+e.img_url+"user_psw.png) rgba(255, 255, 255, 0.19) no-repeat center;background-size: 80%;"}),n("v-uni-input",{staticClass:"login_psw_input",attrs:{type:"password",placeholder:"请输入密码","placeholder-style":"color:white"},on:{blur:function(t){t=e.$handleEvent(t),e.user_psw_2(t)}},model:{value:e.user_psw,callback:function(t){e.user_psw=t},expression:"user_psw"}})],1),n("v-uni-view",{staticClass:"login_uesr"},[n("v-uni-view",{staticClass:"login_psw_img",style:"background: url("+e.img_url+"user_psw.png) rgba(255, 255, 255, 0.19) no-repeat center;background-size: 80%;"}),n("v-uni-input",{staticClass:"login_psw_input",attrs:{type:"password",placeholder:"请确认输入密码","placeholder-style":"color:white"},on:{blur:function(t){t=e.$handleEvent(t),e.user_psw1_2(t)}},model:{value:e.user_psw1,callback:function(t){e.user_psw1=t},expression:"user_psw1"}})],1),n("v-uni-view",{staticClass:"login_uesr"},[n("v-uni-view",{staticClass:"login_uesr_btn",on:{click:function(t){t=e.$handleEvent(t),e.lj_register(t)}}},[e._v("立即注册")])],1),n("v-uni-view",{staticClass:"login_uesr"},[n("v-uni-navigator",{staticClass:"login_uesr_p1",attrs:{url:"login"}},[e._v("立即登录")]),n("v-uni-navigator",{staticClass:"login_uesr_p2",attrs:{url:"forgetPsw"}},[e._v("忘记密码")])],1)],1),n("v-uni-view",[n("uni-popup",{ref:"popup",attrs:{type:"center"}},[n("v-uni-view",[e._v(e._s(e.tanchu_center))]),n("v-uni-view",{staticClass:"tanchu_red"},[e._v(e._s(e.tanchu_red))])],1)],1)],1)},s=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s})},7274:function(e,t,n){var i=n("b82e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=n("4f06").default;s("4db16920",i,!0,{sourceMap:!1,shadowMode:!1})},"7b90":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniPopup",props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},custom:{type:Boolean,default:!1},maskClick:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},data:function(){return{ani:"",showPopup:!1}},watch:{show:function(e){e?this.open():this.close()}},created:function(){},methods:{clear:function(){},open:function(){var e=this;this.$emit("change",{show:!0}),this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){e.ani="uni-"+e.type},30)})},close:function(e){var t=this;!this.maskClick&&e||(this.$emit("change",{show:!1}),this.ani="",this.$nextTick(function(){setTimeout(function(){t.showPopup=!1},300)}))}}};t.default=i},"8b30":function(e,t,n){"use strict";var i=n("9511"),s=n.n(i);s.a},9511:function(e,t,n){var i=n("f1d7");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=n("4f06").default;s("16448ffa",i,!0,{sourceMap:!1,shadowMode:!1})},a34a:function(e,t,n){"use strict";var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n("cebc")),a=i(n("07c5")),o=n("2f62"),r={computed:(0,s.default)({},(0,o.mapState)(["img_url","api"])),components:{uniPopup:a.default},data:function(){return{user_name:"",user_phone:"",user_yzm:"",user_psw:"",user_psw1:"",user_name_1:!1,user_phone_1:!1,user_yzm_1:!1,user_psw_1:!1,user_psw1_1:!1,btn_yzm:"获取验证码",yzm_num:"",yzm:!1,tanchu_center:"",tanchu_red:"",user_name_zz:/^[-_a-zA-Z0-9]{4,16}$/,user_phone_zz:/^1[34578]\d{9}$/,user_yzm_zz:/^[0-9]{4}$/,user_psw_zz:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/,times_:""}},onLaunch:function(){},methods:{lj_register:function(){var e=this;e.times_=uni.getStorageSync("token"),this.user_name_1&&this.user_phone_1&&this.user_yzm_1&&this.user_psw_1&&this.user_psw1_1?uni.request({header:{authorization:e.times_,"content-type":"application/x-www-form-urlencoded"},url:e.api+"/register",method:"POST",data:{u_name:e.user_name,u_phone:e.user_phone,u_psw:e.user_psw1},success:function(t){1==t.data?(e.tanchu_center="恭喜您注册成功，1秒后自动跳转至登录页面！",e.tanchu_red="",e.$refs.popup.open(),setTimeout(function(){uni.navigateTo({url:"./../../pages/login/login",success:function(){}})},1e3)):(e.tanchu_center=t.data,e.tanchu_red="",e.$refs.popup.open())}}):(this.tanchu_center="请正确填写注册信息！",this.tanchu_red="（按要求填写！）",this.$refs.popup.open())},user_name_2:function(){""!=this.user_name&&this.user_name_zz.test(this.user_name)?this.user_name_1=!0:(this.tanchu_center="请输入您正确的用户名！",this.tanchu_red="（个人姓名只能包含数字、字母、下划线！）",this.user_name_1=!1)},user_phone_2:function(){""!=this.user_phone&&this.user_phone_zz.test(this.user_phone)?this.user_phone_1=!0:(this.tanchu_center="请输入您正确的手机号码！",this.tanchu_red="（请输入11位有效号码！）",this.user_phone_1=!1)},user_yzm_2:function(){""!=this.user_yzm&&this.user_yzm_zz.test(this.user_yzm)?this.user_yzm_1=!0:(this.tanchu_center="请输入您正确的手机验证码！",this.tanchu_red="（请输入6位有效验证码！）",this.user_yzm_1=!1)},user_psw_2:function(){""!=this.user_psw&&this.user_psw_zz.test(this.user_psw)?this.user_psw_1=!0:(this.tanchu_center="请输入密码！",this.tanchu_red="（请输入只包含数字、字母、且不少于6位的密码！）",this.user_psw_1=!1)},user_psw1_2:function(){this.user_psw1!==this.user_psw?(this.tanchu_center="两次输入密码不相同！",this.tanchu_red="（请输入只包含数字、字母、且不少于6位的密码！）",this.user_psw1_1=!1):this.user_psw1_1=!0},huoq_yzm:function(){if("获取验证码"==this.btn_yzm)if(this.user_phone_1){this.btn_yzm=60;var e=this,t=setInterval(function(){e.btn_yzm-=1,0==e.btn_yzm&&(clearInterval(t),e.btn_yzm="获取验证码")},1e3)}else this.tanchu_center="请输入真实手机号码！",this.tanchu_red="（手机号码不正确！）",this.$refs.popup.open();else this.tanchu_center="请您稍后重试！",this.tanchu_red="",this.$refs.popup.open()}}};t.default=r},b82e:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'.login_title[data-v-6bd775b9]{width:100%;height:100%;overflow:hidden}.login_title .login_logo[data-v-6bd775b9]{width:50%;height:%?100?%;margin:%?20?% auto}.login_title .login_center[data-v-6bd775b9]{margin:%?30?% auto;padding:%?80?% 0;background:#0e6eb8}.login_title .login_center .login_uesr[data-v-6bd775b9]{padding:%?20?% %?170?%;zoom:1}.login_title .login_center .login_uesr .login_uesr_p1[data-v-6bd775b9]{color:#fff;font-size:%?24?%;float:left}.login_title .login_center .login_uesr .login_uesr_p2[data-v-6bd775b9]{color:#fff;font-size:%?24?%;float:right}.login_title .login_center .login_uesr .login_uesr_img[data-v-6bd775b9]{float:left;width:%?60?%;height:%?60?%}.login_title .login_center .login_uesr .login_phone_img[data-v-6bd775b9]{float:left;width:%?60?%;height:%?60?%}.login_title .login_center .login_uesr .login_yzm_img[data-v-6bd775b9]{float:left;width:%?60?%;height:%?60?%}.login_title .login_center .login_uesr .login_psw_img[data-v-6bd775b9]{float:left;width:%?60?%;height:%?60?%}.login_title .login_center .login_uesr .login_uesr_input[data-v-6bd775b9]{background:hsla(0,0%,100%,.19);width:%?330?%;float:left;margin-left:%?20?%;height:%?60?%;border:none;color:#fff;text-indent:1em;font-size:%?24?%}.login_title .login_center .login_uesr .login_yzm_input[data-v-6bd775b9]{background:hsla(0,0%,100%,.19);width:%?180?%;float:left;margin-left:%?20?%;height:%?60?%;border:none;color:#fff;text-indent:1em;font-size:%?24?%}.login_title .login_center .login_uesr .login_psw_input[data-v-6bd775b9]{background:hsla(0,0%,100%,.19);width:%?330?%;float:left;margin-left:%?20?%;height:%?60?%;border:none;color:#fff;text-indent:1em;font-size:%?24?%}.login_title .login_center .login_uesr .login_uesr_btn[data-v-6bd775b9]{background:hsla(0,0%,100%,.19);color:#fff;font-size:%?30?%;height:%?80?%;text-align:center;line-height:%?80?%;border:none}.login_title .login_center .login_uesr .login_yzm_btn[data-v-6bd775b9]{width:%?140?%;color:#fff;font-size:%?24?%;height:%?60?%;text-align:center;line-height:%?60?%;border:1px solid hsla(0,0%,100%,.19);padding:0 %?5?%;margin-left:%?10?%;float:left}.login_title .login_center .login_uesr[data-v-6bd775b9]:after{content:"";clear:both;display:block}',""])},c959:function(e,t,n){"use strict";n.r(t);var i=n("4f56"),s=n("da3c");for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);n("f4fd");var o=n("2877"),r=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"6bd775b9",null);t["default"]=r.exports},da3c:function(e,t,n){"use strict";n.r(t);var i=n("a34a"),s=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=s.a},f1d7:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-popup[data-v-3e1e0859]{position:fixed;top:0;bottom:0;left:0;right:0;z-index:99999;overflow:hidden}.uni-popup__mask[data-v-3e1e0859]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:998;background:rgba(0,0,0,.4);opacity:0}.uni-popup__mask.ani[data-v-3e1e0859]{-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.uni-popup__mask.uni-bottom[data-v-3e1e0859],.uni-popup__mask.uni-center[data-v-3e1e0859],.uni-popup__mask.uni-top[data-v-3e1e0859]{opacity:1}.uni-popup__wrapper[data-v-3e1e0859]{position:absolute;z-index:999;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-popup__wrapper.ani[data-v-3e1e0859]{-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.uni-popup__wrapper.top[data-v-3e1e0859]{top:0;left:0;width:100%;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%)}.uni-popup__wrapper.bottom[data-v-3e1e0859]{bottom:0;left:0;width:100%;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%)}.uni-popup__wrapper.center[data-v-3e1e0859]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-3e1e0859]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box[data-v-3e1e0859]{padding:%?30?%;background:#fff}.uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box[data-v-3e1e0859]{position:relative;max-width:80%;max-height:80%;overflow-y:scroll}.uni-popup__wrapper.uni-custom.bottom .uni-popup__wrapper-box[data-v-3e1e0859],.uni-popup__wrapper.uni-custom.top .uni-popup__wrapper-box[data-v-3e1e0859]{width:100%;max-height:500px;overflow-y:scroll}.uni-popup__wrapper.uni-bottom[data-v-3e1e0859],.uni-popup__wrapper.uni-top[data-v-3e1e0859]{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.uni-popup__wrapper.uni-center[data-v-3e1e0859]{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1}',""])},f4fd:function(e,t,n){"use strict";var i=n("7274"),s=n.n(i);s.a}}]);