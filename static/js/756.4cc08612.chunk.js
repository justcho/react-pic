"use strict";(self.webpackChunkreact_pic=self.webpackChunkreact_pic||[]).push([[756],{756:function(e,s,r){r.r(s);var n,a,i=r(1413),t=r(168),o=(r(2791),r(3517)),l=r(4382),c=r(7846),m=r(376),d=r(9570),u=r(7689),p=r(184),x=o.ZP.div(n||(n=(0,t.Z)(["\n  max-width: 600px;\n  margin: 30px auto;\n  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  padding: 20px;\n"]))),h=o.ZP.h1(a||(a=(0,t.Z)(["\n  text-align: center;\n  margin-bottom: 30px;\n"]))),Z={labelCol:{span:6},wrapperCol:{span:18}},g={wrapperCol:{offset:6,span:18}};s.default=function(){var e=(0,l.m)().AuthStore,s=(0,u.s0)();return(0,p.jsxs)(x,{children:[(0,p.jsx)(h,{children:"\u6ce8\u518c"}),(0,p.jsxs)(c.Z,(0,i.Z)((0,i.Z)({},Z),{},{name:"basic",onFinish:function(r){e.setUsername(r.username),e.setPassword(r.password),e.register().then((function(e){s("/")})).catch((function(e){console.log("\u767b\u5f55\u5931\u8d25\uff0c\u4ec0\u4e48\u90fd\u4e0d\u505a")}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[(0,p.jsx)(c.Z.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8f93\u5165\u7528\u6237\u540d"},{validator:function(e,s){return/\W/.test(s)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf"):s.length<4||s.length>10?Promise.reject("\u957f\u5ea6\u4e3a4\uff5e10\u4e2a\u5b57\u7b26"):Promise.resolve()}}],children:(0,p.jsx)(m.Z,{})}),(0,p.jsx)(c.Z.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8f93\u5165\u5bc6\u7801"},{min:4,message:"\u6700\u5c114\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u592710\u4e2a\u5b57\u7b26"}],children:(0,p.jsx)(m.Z.Password,{})}),(0,p.jsx)(c.Z.Item,{label:"\u786e\u8ba4\u5bc6\u7801",name:"confirmPassword",rules:[{required:!0,message:"\u518d\u6b21\u786e\u8ba4\u5bc6\u7801"},function(e){var s=e.getFieldValue;return{validator:function(e,r){return s("password")===r?Promise.resolve():Promise.reject("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4")}}}],children:(0,p.jsx)(m.Z.Password,{})}),(0,p.jsx)(c.Z.Item,(0,i.Z)((0,i.Z)({},g),{},{children:(0,p.jsx)(d.ZP,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})}))]}))]})}}}]);
//# sourceMappingURL=756.4cc08612.chunk.js.map