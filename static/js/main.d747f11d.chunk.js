(this.webpackJsonptwitter=this.webpackJsonptwitter||[]).push([[0],{148:function(e,t,n){"use strict";n.r(t);var c=n(185),r=n(1),a=n(39),i=n.n(a),s=n(38),o=n(46),j=n(22),u=n(11),l=n(190),b=n(45),d=n(109),O=n(28),f=Object(d.a)({apiKey:"AIzaSyCqYZcQS7lXHZdBySvpzQU0vwjyTWJ5OFY",authDomain:"twitter-clone-edb7e.firebaseapp.com",projectId:"twitter-clone-edb7e",storageBucket:"twitter-clone-edb7e.appspot.com",messagingSenderId:"44496871065",appId:"1:44496871065:web:5e6c5a3bfe6c7263472208",measurementId:"G-56ZF1V82G7"}),h=Object(b.c)(f),x=Object(O.f)(f),p=n(4),m=Object(r.createContext)({currentUser:null,signInWithGoogle:function(){return Promise},login:function(){return Promise},register:function(){return Promise},logout:function(){return Promise}}),g=function(){return Object(r.useContext)(m)},v=function(e){var t=e.children,n=Object(r.useState)(null),c=Object(u.a)(n,2),a=c[0],i=c[1],s=Object(r.useState)(!0),o=Object(u.a)(s,2),j=o[0],d=o[1];return Object(r.useEffect)((function(){d(!0);var e=Object(b.d)(h,(function(e){i(e||null),d(!1)}));return function(){e()}}),[]),j?Object(p.jsx)(l.a,{children:"Loading..."}):Object(p.jsx)(m.Provider,{value:{currentUser:a,signInWithGoogle:function(){var e=new b.a;return Object(b.g)(h,e)},login:function(e,t){return Object(b.f)(h,e,t)},register:function(e,t){return Object(b.b)(h,e,t)},logout:function(){return Object(b.h)(h)},forgotPassword:function(e){return Object(b.e)(h,e,{url:"http://localhost:3000/login"})}},children:t})},y=n(193),w=n(191),S=n(194),I=n(195),C=n(189),P=n(35),E=n(115),k=function(e){var t=e.children,n=e.to,c=Object(E.a)(e,["children","to"]),r=Object(j.h)(n);return Object(p.jsx)(s.b,Object(P.a)(Object(P.a)({to:n},c),{},{style:{textDecoration:"none"},children:Object(p.jsx)(C.a,{variant:"text",sx:function(e){return{color:e.palette.common.white,textDecoration:r?"underline":"none"}},children:t})}))},D=function(){var e=g(),t=e.currentUser,n=e.logout;return Object(p.jsx)(w.a,{children:Object(p.jsx)(y.a,{maxWidth:"xl",children:Object(p.jsxs)(S.a,{children:[Object(p.jsx)(I.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(p.jsx)(s.b,{to:"/",style:{textDecoration:"none",color:"#fff"},children:"Twitter"})}),t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k,{to:"/profile",children:"Profile"}),Object(p.jsx)(k,{to:"/my-posts",children:"My Posts"}),Object(p.jsx)(k,{to:"/add-post",children:"Add post"}),Object(p.jsx)(C.a,{sx:{color:function(e){return e.palette.common.white}},onClick:n,children:"Logout"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k,{to:"/login",children:"Login"}),Object(p.jsx)(k,{to:"/register",children:"Register"})]})]})})})},W=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(D,{}),Object(p.jsx)(y.a,{maxWidth:"xl",sx:{my:"78px"},children:Object(p.jsx)(j.b,{})})]})},U=function(){return Object(p.jsx)("div",{children:"NotFound"})},T=n(0),L=n.n(T),F=n(3),G=n(182),A=n(186),B=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=g().currentUser,i=Object(r.useState)(!1),s=Object(u.a)(i,2),j=s[0],l=s[1],b=Object(o.useToasts)().addToast,d=function(){var e=Object(F.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),l(!0),e.next=4,Object(O.a)(Object(O.b)(x,"posts"),{title:n,createdAt:new Date,userId:a.uid,userEmail:a.email}).then((function(e){b("Post added successfully",{appearance:"success"})}));case 4:l(!1),c("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(G.a,{component:"form",onSubmit:d,spacing:2,children:[Object(p.jsx)(A.a,{value:n,onChange:function(e){return c(e.target.value)},multiline:!0,rows:4}),Object(p.jsx)(C.a,{type:"submit",disabled:j,variant:"contained",children:"Create post"})]})},J=n(111),R=n.n(J),Z=n(192),z=n(196),Q=function(){var e=g(),t=e.register,n=e.signInWithGoogle,c=e.login,a=Object(o.useToasts)().addToast,i="/register"===Object(j.g)().pathname,s=Object(r.useState)(""),b=Object(u.a)(s,2),d=b[0],O=b[1],f=Object(r.useState)(""),h=Object(u.a)(f,2),x=h[0],m=h[1],v=Object(r.useState)(!1),y=Object(u.a)(v,2),w=y[0],S=y[1];return Object(p.jsxs)(G.a,{spacing:2,alignItems:"center",children:[Object(p.jsx)(I.a,{variant:"h3",children:i?"Register":"Login"}),Object(p.jsx)(l.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(p.jsxs)(Z.a,{sx:{width:600,p:2},children:[Object(p.jsxs)(l.a,{component:"form",children:[Object(p.jsx)(A.a,{fullWidth:!0,margin:"normal",label:"Email",value:d,onChange:function(e){return O(e.target.value)}}),Object(p.jsx)(A.a,{fullWidth:!0,margin:"normal",label:"Password",type:"password",value:x,onChange:function(e){return m(e.target.value)}}),Object(p.jsx)(C.a,{fullWidth:!0,variant:"contained",sx:{my:2},onClick:function(){return i?function(e,n){S(!0),t(e,n).catch((function(e){a(e.message,{appearance:"error"})})).finally((function(){S(!1)}))}(d,x):function(e,t){S(!0),c(e,t).catch((function(e){a(e.message,{appearance:"error"})})).finally((function(){S(!1)}))}(d,x)},disabled:w,children:i?"Sign Up":"Sign In"})]}),Object(p.jsx)(z.a,{sx:{my:2},children:Object(p.jsx)(I.a,{children:"OR"})}),Object(p.jsx)(l.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(p.jsx)(C.a,{startIcon:Object(p.jsx)(R.a,{}),variant:"contained",onClick:function(){S(!0),n().catch((function(e){a(e.message,{appearance:"error"})})).finally((function(){S(!1)}))},disabled:w,children:"Sign in with Google"})})]})})]})},Y=n(112),q=n.n(Y),H=n(113),K=n.n(H),M=n(197),N=n(198),V=function(e){var t=e.id,n=e.createdAt,c=e.title,a=e.userEmail,i=e.isEdit,s=e.updatePost,o=e.setIsEdit,b=Object(j.i)(),d=Object(r.useState)(c),O=Object(u.a)(d,2),f=O[0],h=O[1];return Object(p.jsxs)(M.a,{sx:{width:600,p:2,cursor:"pointer"},onClick:function(){b("/post/".concat(t))},children:[Object(p.jsxs)(G.a,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(p.jsx)(I.a,{sx:function(e){return{fontWeight:e.typography.fontWeightBold}},children:a}),Object(p.jsx)(I.a,{children:new Date(1e3*n.seconds).toLocaleString()})]}),Object(p.jsx)(l.a,{children:i?Object(p.jsxs)(G.a,{component:"form",onSubmit:function(e){e.preventDefault(),s(f)},direction:"row",alignItems:"center",spacing:1,children:[Object(p.jsx)(A.a,{value:f,onChange:function(e){return h(e.target.value)}}),Object(p.jsx)(N.a,{type:"submit",children:Object(p.jsx)(q.a,{})}),Object(p.jsx)(N.a,{onClick:function(){return o(!1)},children:Object(p.jsx)(K.a,{})})]}):c})]})},X=[{element:function(){var e=Object(r.useState)(),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(u.a)(a,2),s=i[0],o=i[1];return Object(r.useEffect)((function(){o(!0);var e=Object(O.h)(Object(O.b)(x,"posts")),t=Object(O.g)(e,(function(e){var t=[];e.forEach((function(e){t.push(Object(P.a)(Object(P.a)({},e.data()),{},{id:e.id}))})),c(t),o(!1)}));return function(){return t()}}),[]),Object(p.jsxs)(G.a,{direction:"column",spacing:3,alignItems:"center",children:[Object(p.jsx)(I.a,{variant:"h4",children:"\u0412\u0441\u0435 \u043f\u043e\u0441\u0442\u044b"}),s&&Object(p.jsx)(l.a,{children:"Loading..."}),n&&n.map((function(e){return Object(p.jsx)(V,Object(P.a)({},e),e.id)}))]})},private:!1},{element:function(){var e=g().currentUser;return Object(p.jsx)("div",{children:e&&e.email})},path:"profile",private:!0},{element:Q,path:"login",private:!1,onlyPublic:!0},{element:Q,path:"register",private:!1,onlyPublic:!0},{element:B,path:"add-post",private:!0},{element:function(){var e=Object(j.j)().id,t=Object(r.useState)(),n=Object(u.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(!1),s=Object(u.a)(i,2),b=s[0],d=s[1],f=Object(r.useState)(!1),h=Object(u.a)(f,2),m=h[0],v=h[1],y=g().currentUser,w=Object(o.useToasts)().addToast,S=Object(j.i)(),I=Object(r.useState)(!1),E=Object(u.a)(I,2),k=E[0],D=E[1],W=Object(r.useState)(!1),U=Object(u.a)(W,2),T=U[0],G=U[1],A=Object(r.useCallback)(Object(F.a)(L.a.mark((function t(){var n,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(O.d)(x,"posts",e),t.next=3,Object(O.e)(n);case 3:(c=t.sent).exists()?a(Object(P.a)(Object(P.a)({},c.data()),{},{id:c.id})):a(null),d(!1);case 6:case"end":return t.stop()}}),t)}))),[e]);Object(r.useEffect)((function(){d(!0),A()}),[A]);return b?Object(p.jsx)(l.a,{children:"Loading..."}):Object(p.jsx)(l.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:c?Object(p.jsxs)(l.a,{children:[(null===y||void 0===y?void 0:y.uid)===c.userId&&Object(p.jsxs)(l.a,{sx:{display:"flex",flexDirection:"row-reverse",mb:2},children:[Object(p.jsx)(C.a,{disabled:m,onClick:function(){v(!0),Object(O.c)(Object(O.d)(x,"posts",c.id)).then((function(){w("\u041f\u043e\u0441\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d",{appearance:"success"}),S("/my-posts")})).catch((function(e){w(e.message,{appearance:"error"})})).finally((function(){v(!1)}))},variant:"contained",sx:{ml:2},children:"Delete"}),Object(p.jsx)(C.a,{variant:"contained",disabled:T,onClick:function(){return D((function(e){return!e}))},children:"Edit"})]}),Object(p.jsx)(V,Object(P.a)({isEdit:k,setIsEdit:D,updatePost:function(e){G(!0),Object(O.i)(Object(O.d)(x,"posts",c.id),{title:e}).then((function(e){d(!0),A(),w("\u041f\u043e\u0441\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d",{appearance:"success"})})).catch((function(e){w(e.message,{appearance:"error"})})).finally((function(){G(!1),D(!1)}))}},c))]}):Object(p.jsx)(l.a,{children:"\u041e\u0448\u0438\u0431\u043a\u0430"})})},path:"post/:id",private:!1},{element:function(){var e=g().currentUser,t=Object(r.useState)([]),n=Object(u.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(!1),s=Object(u.a)(i,2),o=s[0],j=s[1];return Object(r.useEffect)((function(){j(!0);var t=Object(O.h)(Object(O.b)(x,"posts"),Object(O.j)("userId","==",e.uid)),n=Object(O.g)(t,(function(e){var t=[];e.forEach((function(e){t.push(Object(P.a)(Object(P.a)({},e.data()),{},{id:e.id}))})),a(t),j(!1)}));return function(){return n()}}),[e.uid]),o?Object(p.jsx)(l.a,{children:"Loading..."}):Object(p.jsx)(G.a,{direction:"column",spacing:3,alignItems:"center",children:c&&c.map((function(e){return Object(p.jsx)(V,Object(P.a)({},e),e.id)}))})},path:"my-posts",private:!0}],$=function(){var e=g().currentUser;return Object(p.jsx)(j.e,{children:Object(p.jsxs)(j.c,{path:"/",element:Object(p.jsx)(W,{}),children:[X.map((function(t,n){var c;return c=t.private?e?Object(p.jsx)(t.element,{}):Object(p.jsx)(j.a,{to:"/"}):Object(p.jsx)(t.element,{}),t.onlyPublic&&(c=e?Object(p.jsx)(j.a,{to:"/"}):Object(p.jsx)(t.element,{})),Object(p.jsx)(j.c,{index:!t.path,element:c,path:t.path},n)})),Object(p.jsx)(j.c,{path:"*",element:Object(p.jsx)(U,{})})]})})};var _=function(){return Object(p.jsx)(v,{children:Object(p.jsx)($,{})})};n(144).config(),i.a.render(Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(c.a,{}),Object(p.jsx)(s.a,{basename:"/",children:Object(p.jsx)(o.ToastProvider,{autoDismiss:!0,placement:"bottom-center",children:Object(p.jsx)(_,{})})})]}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.d747f11d.chunk.js.map