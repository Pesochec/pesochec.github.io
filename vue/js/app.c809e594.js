(function(t){function e(e){for(var i,r,o=e[0],l=e[1],u=e[2],d=0,m=[];d<o.length;d++)r=o[d],s[r]&&m.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(m.length)m.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1195:function(t,e,a){t.exports=a.p+"img/avatar.7b8319e0.png"},"177a":function(t,e,a){},"21bb":function(t,e,a){"use strict";var i=a("bcc9"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],r=(a("5c0b"),a("2877")),o={},l=Object(r["a"])(o,s,n,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,c=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-home"},[a("appheader"),a("div",{staticClass:"page"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"card card-shadow"},[a("ul",{staticClass:"nav nav-tabs nav-tabs-line",attrs:{role:"tablist"}},[t._m(1),a("li",{staticClass:"nav-item active",attrs:{role:"presentation"}},[a("router-link",{staticClass:"btn btn-light",attrs:{to:"/panel/addRegistering",type:"button","data-toggle":"modal","data-target":"#exampleModal"}},[t._v("\nДобавить заявку\n")])],1)]),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"tab-pane",attrs:{id:"activities",role:"tabpanel"}},[a("ul",{staticClass:"list-group list-group-flush "},t._l(t.registering,function(e,i){return a("li",{key:i,staticClass:"list-group-item registering"},[a("div",{staticClass:"registering-info d-flex align-text-bottom"},[a("div",{staticClass:"registering-info__title"},[a("h5",[t._v(t._s(e.title))])]),a("div",{staticClass:"registering-info__date "},[t._v("23.11.18")])]),a("div",{staticClass:"registering-text"},[a("p",[t._v(t._s(e.text))])]),a("h5",[t._v("Коментарии")]),t._l(e.comments,function(e,i){return a("div",{key:i,staticClass:"comment-text"},[a("p",[t._v(t._s(e.id))]),a("p",[t._v(t._s(e.text))])])}),t._m(2,!0)],2)}))])])])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"AddComments",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(3),a("form",{attrs:{action:""}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentsadd.text,expression:"commentsadd.text"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Текст комментария",required:""},domProps:{value:t.commentsadd.text},on:{input:function(e){e.target.composing||t.$set(t.commentsadd,"text",e.target.value)}}})])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Выйти")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.addComments()}}},[t._v("Отправить заявку")])])])])])])],1)},m=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-lg-3"},[i("div",{staticClass:"card card-shadow text-center"},[i("div",{staticClass:"account card-block"},[i("div",{staticClass:"account__avatar"},[i("img",{staticClass:"account__avatar-img",attrs:{src:a("1195"),alt:"Кирилл Трешков"}})]),i("div",{staticClass:"account__info"},[i("h4",{staticClass:"account__info-name"},[t._v("Кирилл Трешков")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item active",attrs:{role:"presentation"}},[a("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#activities","aria-controls":"activities",role:"tab","aria-selected":"true"}},[t._v("Заявки "),a("span",{staticClass:"badge badge-pill badge-danger"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"registering-footer d-flex "},[a("div",{staticClass:"registering-footer__buttons ml-auto"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#AddComments"}},[t._v("+ Коментарий")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Заполните заявку")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"header__topmnu d-flex align-items-center"},[t._m(0),a("div",{staticClass:"header__topmnu-profile ml-auto"},[t._m(1),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Профиль")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Настройки")]),a("div",{staticClass:"dropdown-divider"}),a("a",{staticClass:"dropdown-item",on:{click:t.onLogout}},[t._v("Выйти")])])])])])},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header__topmnu-logo"},[i("a",{attrs:{href:"/"}},[i("img",{attrs:{src:a("cf05"),width:"30",height:"30",alt:""}}),t._v("\n                ЖКХ\n\t\t\t\t")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"header__topmnu-profile--avatar dropdown-toggle",attrs:{id:"dropdownMenuButton","data-toggle":"dropdown","aria-expanded":"false"}},[i("span",{staticClass:"header__topmnu-profile--avatar-img"},[i("img",{staticClass:"img-fluid",attrs:{src:a("1195"),alt:""}})])])}],v={methods:{onLogout:function(){this.$store.dispatch("logoutUser"),this.$router.push("/")}}},g=v,_=(a("7b0e"),Object(r["a"])(g,p,f,!1,null,null,null));_.options.__file="AppHeader.vue";var b=_.exports,h={name:"home",data:function(){return{registeringadd:{title:"",text:""},commentsadd:{text:""}}},computed:{registering:function(){return this.$store.getters.registering}},methods:{registeringAdd:function(){},commentsAdd:function(){}},components:{appheader:b}},C=h,w=(a("21bb"),Object(r["a"])(C,d,m,!1,null,null,null));w.options.__file="Home.vue";var x=w.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"d-flex align-items-center login-conainer justify-content-center"},[a("div",{staticClass:"login__panel "},[t._m(0),a("form",{staticClass:"login-form"},[t.error?a("p",{staticClass:"login__error"},[t._v(t._s(t.error))]):t._e(),a("div",{staticClass:"login-form__input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"login-form__input-fileds",attrs:{type:"email",name:"Почта",id:"login-email",value:"",onkeyup:"this.setAttribute('value', this.value);"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{staticClass:"float-label",attrs:{for:"login-email"}},[t._v("Email")])]),a("div",{staticClass:"login-form__input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"login-form__input-fileds",attrs:{type:"password",name:"Почта",id:"login-password",value:"",onkeyup:"this.setAttribute('value', this.value);"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("label",{staticClass:"float-label",attrs:{for:"login-email"}},[t._v("Пароль")])]),a("div",{staticClass:"login-form__submitbutton"},[a("button",{staticClass:"btn-primary button-max",attrs:{type:"submit",disabled:t.loading},on:{click:function(e){return e.preventDefault(),t.SignIn(e)}}},[t._v("Войти")])])]),a("p",{staticClass:"login__still"},[t._v("Нет аккаунта? "),a("router-link",{attrs:{to:"sign-up"}},[t._v("Зарегистрируйтесь.")])],1)])])])},E=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login__brand d-flex justify-content-center"},[i("div",{staticClass:"login__brand-container"},[i("img",{staticClass:"login__brand-logo",attrs:{src:a("cf05"),alt:""}}),i("h2",{staticClass:"login__brand-name"},[t._v("ЖКХ")])])])}],q={data:function(){return{email:"",password:""}},computed:{error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},methods:{closeError:function(){this.$store.dispatch("cleanError")},SignIn:function(){var t=this,e={email:this.email,password:this.password};this.$store.dispatch("loginUser",e).then(function(){t.$router.push("/panel")}).catch(function(){})}}},$=q,k=(a("bff1"),Object(r["a"])($,y,E,!1,null,null,null));k.options.__file="SignIn.vue";var j=k.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"d-flex align-items-center login-conainer justify-content-center"},[a("div",{staticClass:"login__panel "},[t._m(0),a("form",{staticClass:"login-form"},[t.error?a("p",{staticClass:"login__error"},[t._v(t._s(t.error))]):t._e(),a("div",{staticClass:"login-form__input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"login-form__input-fileds",attrs:{type:"text",id:"login-name",value:"",onkeyup:"this.setAttribute('value', this.value); "},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("label",{staticClass:"float-label",attrs:{for:"login-name"}},[t._v("Ваше Имя")])]),a("div",{staticClass:"login-form__input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"login-form__input-fileds",attrs:{type:"email",id:"login-email",value:"",onkeyup:"this.setAttribute('value', this.value);"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{staticClass:"float-label",attrs:{for:"login-email"}},[t._v("Email")])]),a("div",{staticClass:"login-form__input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"login-form__input-fileds",attrs:{type:"password",id:"login-password",value:"",onkeyup:"this.setAttribute('value', this.value);"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("label",{staticClass:"float-label",attrs:{for:"login-password"}},[t._v("Пароль")])]),t._m(1),a("div",{staticClass:"login-form__submitbutton"},[a("button",{staticClass:"btn-primary button-max",attrs:{type:"submit",disabled:t.loading},on:{click:function(e){return e.preventDefault(),t.SignUp(e)}}},[t._v("Зарегистрируйтесь")])])]),a("p",{staticClass:"login__still"},[t._v("Есть аккаунт? "),a("router-link",{attrs:{to:"/"}},[t._v("Войдите.")])],1)])])])},A=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login__brand d-flex justify-content-center"},[i("div",{staticClass:"login__brand-container"},[i("img",{staticClass:"login__brand-logo",attrs:{src:a("cf05"),alt:""}}),i("h2",{staticClass:"login__brand-name"},[t._v("ЖКХ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-form__input"},[a("input",{staticClass:"login-form__input-fileds",attrs:{type:"password",id:"login-сpassword",value:"",onkeyup:"this.setAttribute('value', this.value);"}}),a("label",{staticClass:"float-label",attrs:{for:"login-сpassword"}},[t._v("Подтвердите Пароль")])])}],L={data:function(){return{username:"",email:"",password:""}},computed:{error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},methods:{closeError:function(){this.$store.dispatch("cleanError")},SignUp:function(){var t=this,e={email:this.email,password:this.password};this.$store.dispatch("registerUser",e).then(function(){t.$router.push("/")}).catch(function(){})}}},O=L,P=Object(r["a"])(O,U,A,!1,null,null,null);P.options.__file="SignUp.vue";var S=P.exports,N=a("2f62"),I={state:{registering:[{id:"1",title:"Забился туалет",date:"23.11.18",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis expedita quas modi quibusdam omnis qui laudantium? Quod excepturi dicta possimus nihil debitis porro quia aliquam natus adipisci, sed nam mollitia sit! Inventore accusamus distinctio sapiente ea temporibus sit obcaecati! Nulla ipsam eveniet possimus magnam vel minima, voluptatibus iusto aliquid, alias doloremque minus earum? Voluptate reprehenderit officiis accusamus velit dolor magni nobis, iste asperiores culpa quia aliquid debitis, facilis vel similique. Natus, nostrum assumenda. Aut, odit dolorem. Cumque doloremque tempore, laudantium beatae quas blanditiis rerum porro! Voluptas perferendis asperiores modi ex itaque officia velit reiciendis recusandae! Pariatur in facilis vel voluptate?",comments:[{id:"1",text:"Я лох и пидор"}]},{id:"2",title:"Замена труб",date:"23.11.18",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis expedita quas modi quibusdam omnis qui laudantium? Quod excepturi dicta possimus nihil debitis porro quia aliquam natus adipisci, sed nam mollitia sit! Inventore accusamus distinctio sapiente ea temporibus sit obcaecati! Nulla ipsam eveniet possimus magnam vel minima, voluptatibus iusto aliquid, alias doloremque minus earum? Voluptate reprehenderit officiis accusamus velit dolor magni nobis, iste asperiores culpa quia aliquid debitis, facilis vel similique. Natus, nostrum assumenda. Aut, odit dolorem. Cumque doloremque tempore, laudantium beatae quas blanditiis rerum porro! Voluptas perferendis asperiores modi ex itaque officia velit reiciendis recusandae! Pariatur in facilis vel voluptate?",comments:[{id:"1",text:"Я лох"}]}]},mutations:{},actions:{},getters:{registering:function(t){return t.registering},myRegistering:function(t){return t.registering}}},M=(a("96cf"),a("1da1")),R=a("d4ec"),B=a("8aa5"),D=function t(e){Object(R["a"])(this,t),this.id=e},T={state:{user:null},mutations:{setUser:function(t,e){t.user=e}},actions:{registerUser:function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(e,a){var i,s,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,s=a.email,n=a.password,i("clearError"),i("setLoading",!0),t.prev=4,t.next=7,B["auth"]().createUserWithEmailAndPassword(s,n);case 7:r=t.sent,i("setUser",new D(r.uid)),i("setLoading",!1),t.next=17;break;case 12:throw t.prev=12,t.t0=t["catch"](4),i("setLoading",!1),i("setError",t.t0.message),t.t0;case 17:case"end":return t.stop()}},t,this,[[4,12]])}));return function(e,a){return t.apply(this,arguments)}}(),loginUser:function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(e,a){var i,s,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,s=a.email,n=a.password,i("clearError"),i("setLoading",!0),t.prev=4,t.next=7,B["auth"]().signInWithEmailAndPassword(s,n);case 7:r=t.sent,i("setUser",new D(r.uid)),i("setLoading",!1),t.next=17;break;case 12:throw t.prev=12,t.t0=t["catch"](4),i("setLoading",!1),i("setError",t.t0.message),t.t0;case 17:case"end":return t.stop()}},t,this,[[4,12]])}));return function(e,a){return t.apply(this,arguments)}}(),autoLoginUser:function(t,e){var a=t.commit;a("setUser",new D(e.uid))},logoutUser:function(t){var e=t.commit;B["auth"]().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user},isUserLogedIn:function(t){return null!==t.user}}},J={state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{setLoading:function(t,e){var a=t.commit;a("setLoading",e)},setError:function(t,e){var a=t.commit;a("setError",e)},clearError:function(t){var e=t.commit;e("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}};i["a"].use(N["a"]);var V=new N["a"].Store({modules:{Registering:I,User:T,Common:J}}),z=function(t,e,a){V.getters.user?a():a("/")};i["a"].use(c["a"]);var F=new c["a"]({mode:"history",base:"/",routes:[{path:"/panel",name:"panel",component:x,beforeEnter:z},{path:"/panel/addRegistering",name:"signin",component:j,beforeEnter:z},{path:"/",name:"signin",component:j},{path:"/sign-up",name:"signup",component:S}]}),H=a("59ca"),K=a("7bb1");i["a"].use(K["a"]),i["a"].config.productionTip=!1,new i["a"]({router:F,store:V,render:function(t){return t(u)},created:function(){var t=this,e={apiKey:"AIzaSyDYPmJ7bvl3-KJBTyXqFB6PvDFuaBt7iro",authDomain:"newjkh21.firebaseapp.com",databaseURL:"https://newjkh21.firebaseio.com",projectId:"newjkh21",storageBucket:"newjkh21.appspot.com",messagingSenderId:"660632660611"};H["initializeApp"](e),H["auth"]().onAuthStateChanged(function(e){e&&t.$store.dispatch("autoLoginUser",e)})}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("5e27"),s=a.n(i);s.a},"5e27":function(t,e,a){},"6dbb":function(t,e,a){},"7b0e":function(t,e,a){"use strict";var i=a("177a"),s=a.n(i);s.a},bcc9:function(t,e,a){},bff1:function(t,e,a){"use strict";var i=a("6dbb"),s=a.n(i);s.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.c809e594.js.map