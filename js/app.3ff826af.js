(function(t){function e(e){for(var s,n,o=e[0],l=e[1],u=e[2],d=0,v=[];d<o.length;d++)n=o[d],r[n]&&v.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(v.length)v.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1195:function(t,e,a){t.exports=a.p+"img/avatar.7b8319e0.png"},"21bb":function(t,e,a){"use strict";var s=a("bcc9"),r=a.n(s);r.a},4257:function(t,e,a){},"42cd":function(t,e,a){"use strict";var s=a("f5c6"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.loading?a("div",{staticClass:"preloader"},[t._m(0)]):t._e(),a("router-view")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader-overlay"},[a("div",{staticClass:"loader-content"},[a("div",{staticClass:"loader-index"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])])])}],n={data:function(){return{loading:!0}},mounted:function(){var t=this;setTimeout(function(){t.loading=!1},2100)},watch:{$route:function(){var t=this;this.loading=!0,setTimeout(function(){t.loading=!1},2100)}}},o=n,l=(a("5c0b"),a("2877")),u=Object(l["a"])(o,r,i,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,d=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-home"},[a("appheader"),a("div",{staticClass:"page"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"card card-shadow text-center"},[a("div",{staticClass:"account card-block"},[t._m(0),a("div",{staticClass:"account__info"},[a("h4",{staticClass:"account__info-name"},[t._v(t._s(t.user.username))])])])])]),a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"card card-shadow"},[a("ul",{staticClass:"nav nav-tabs nav-tabs-line",attrs:{role:"tablist"}},[t._m(1),a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("router-link",{staticClass:"btn btn-light",attrs:{tag:"button",to:"/addproduct",type:"button","data-toggle":"modal","data-target":"#exampleModal"}},[t._v("Добавить заявку")])],1)]),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"tab-pane active show",attrs:{id:"activities",role:"tabpanel"}},[a("ul",{staticClass:"list-group list-group-flush active"},t._l(t.products,function(e,s){return a("li",{key:s,staticClass:"list-group-item registering"},[a("div",{staticClass:"registering-info d-flex align-text-bottom"},[a("div",{staticClass:"registering-info__title"},[a("h5",[t._v(t._s(e.title))])]),a("div",{staticClass:"registering-info__date"},[t._v(t._s(e.vendor))])]),a("div",{staticClass:"registering-text"},[a("p",[t._v(t._s(e.text))])]),a("p",[t._v("Коментарии")]),t._l(e.comment,function(e,s){return a("div",{key:s,staticClass:"comment-text"},[a("p",[t._v(t._s(e.id))]),a("p",[t._v(t._s(e.text))])])}),a("div",{staticClass:"registering-footer d-flex"},[a("div",{staticClass:"registering-footer__buttons ml-auto"},[t.user.isAdmin?a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#AddComments"}},[t._v("+ Коментарий")]):t._e()])])],2)})),a("router-link",{attrs:{to:"/sign-in"}},[t._v("Главная")])],1)])])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"AddComments",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),a("form",{attrs:{action:""}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentsadd.text,expression:"commentsadd.text"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Текст комментария",required:""},domProps:{value:t.commentsadd.text},on:{input:function(e){e.target.composing||t.$set(t.commentsadd,"text",e.target.value)}}})])]),t._m(3)])])])])],1)},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account__avatar"},[s("img",{staticClass:"account__avatar-img",attrs:{src:a("1195"),alt:"Кирилл Трешков"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item active",attrs:{role:"presentation"}},[a("a",{staticClass:"nav-link active",attrs:{"data-toggle":"tab",href:"#activities","aria-controls":"activities",role:"tab","aria-selected":"true"}},[t._v("\n                  Заявки\n                  "),a("span",{staticClass:"badge badge-pill badge-danger"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Заполните заявку")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Выйти")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Отправить заявку")])])}],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"header__topmnu d-flex align-items-center"},[t._m(0),a("div",{staticClass:"header__topmnu-profile ml-auto"},[t._m(1),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Профиль")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Настройки")]),a("div",{staticClass:"dropdown-divider"}),t.isUserLoggedIn?a("a",{staticClass:"dropdown-item",on:{click:function(e){return e.preventDefault(),t.onLogout(e)}}},[t._v("Выйти")]):t._e()])])])])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header__topmnu-logo"},[s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:a("cf05"),width:"30",height:"30",alt:""}}),t._v("\n        ЖКХ\n      ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"header__topmnu-profile--avatar dropdown-toggle",attrs:{id:"dropdownMenuButton","data-toggle":"dropdown","aria-expanded":"false"}},[s("span",{staticClass:"header__topmnu-profile--avatar-img"},[s("img",{staticClass:"img-fluid",attrs:{src:a("1195"),alt:""}})])])}],f={methods:{onLogout:function(){this.$store.dispatch("logoutUser"),this.$router.push("/")}},computed:{isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn}}},_=f,h=(a("ed6b"),Object(l["a"])(_,p,g,!1,null,null,null));h.options.__file="NavBar.vue";var b=h.exports,C={data:function(){return{commentsadd:{text:""}}},computed:{products:function(){return this.$store.getters.product},user:function(){return this.$store.getters.user}},components:{appheader:b}},w=C,x=(a("21bb"),Object(l["a"])(w,v,m,!1,null,null,null));x.options.__file="Home.vue";var y=x.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"d-flex align-items-center login-conainer justify-content-center"},[s("div",{staticClass:"login__panel"},[s("div",{staticClass:"login__brand d-flex justify-content-center"},[s("div",{staticClass:"login__brand-container"},[s("img",{staticClass:"login__brand-logo",attrs:{src:a("cf05"),alt:""}}),s("h2",{staticClass:"login__brand-name"},[t._v("ЖКХ")]),s("router-link",{attrs:{to:"/"}},[t._v("Главная")])],1)]),s("form",{staticClass:"login-form"},[t.error?s("p",{staticClass:"login__error"},[t._v(t._s(t.error))]):t._e(),s("div",{staticClass:"login-form__input"},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"login-form__input-fileds",attrs:{type:"email",name:"email",id:"login-email",value:"",onkeyup:"this.setAttribute('value', this.value);"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("label",{staticClass:"float-label",attrs:{for:"login-email"}},[t._v("Email")])]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("email"),expression:"errors.has('email')"}],staticClass:"login__error"},[t._v("Введите правильный email")]),s("div",{staticClass:"login-form__input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required|min:6",expression:"'required|min:6'"}],staticClass:"login-form__input-fileds",attrs:{type:"password",name:"password",id:"login-password",value:"",onkeyup:"this.setAttribute('value', this.value);"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("label",{staticClass:"float-label",attrs:{for:"login-email"}},[t._v("Пароль")])]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("password"),expression:"errors.has('password')"}],staticClass:"login__error"},[t._v("Введите пароль не менее 6 символов")]),s("div",{staticClass:"login-form__submitbutton"},[s("button",{staticClass:"btn-primary button-max",attrs:{type:"submit",disabled:t.loading},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("Войти")])])]),s("p",{staticClass:"login__still"},[t._v("Нет аккаунта?\n          "),s("router-link",{attrs:{to:"sign-up"}},[t._v("Зарегистрируйтесь.")])],1)])])])},E=[],k={data:function(){return{email:"",password:""}},methods:{onSubmit:function(){var t=this;if(this.$validator.validateAll(),!this.errors.any()){var e={email:this.email,password:this.password};this.$store.dispatch("loginUser",e).then(function(){t.$router.push("/")}).catch(function(){})}}},computed:{loading:function(){return this.$store.getters.loading},error:function(){return this.$store.getters.error},user:function(){return this.$store.getters.user}}},N=k,U=(a("42cd"),Object(l["a"])(N,$,E,!1,null,null,null));U.options.__file="SignIn.vue";var A=U.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"d-flex align-items-center login-conainer justify-content-center"},[a("div",{staticClass:"login__panel"},[t._m(0),a("form",{staticClass:"login-form"},[t.error?a("p",{staticClass:"login__error"},[t._v(t._s(t.error))]):t._e(),a("div",{staticClass:"login-form__input"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"login-form__input-fileds",attrs:{type:"text",id:"login-name",name:"username",value:"",onkeyup:"this.setAttribute('value', this.value); "},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("label",{staticClass:"float-label",attrs:{for:"login-name"}},[t._v("Ваше Имя")])]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("username"),expression:"errors.has('username')"}],staticClass:"login__error"},[t._v("Введите Ваше имя и Фамилию")]),a("div",{staticClass:"login-form__input"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"login-form__input-fileds",attrs:{type:"email",id:"login-email",name:"email",value:"",onkeyup:"this.setAttribute('value', this.value);"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{staticClass:"float-label",attrs:{for:"login-email"}},[t._v("Email")])]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("email"),expression:"errors.has('email')"}],staticClass:"login__error"},[t._v("Введите правильный email")]),a("div",{staticClass:"login-form__input"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6",expression:"'required|min:6'"},{name:"model",rawName:"v-model",value:t.password,expression:"password"}],ref:"password",staticClass:"login-form__input-fileds",attrs:{type:"password",id:"login-password",name:"password",value:"",onkeyup:"this.setAttribute('value', this.value);"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("label",{staticClass:"float-label",attrs:{for:"login-password"}},[t._v("Пароль")])]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("password"),expression:"errors.has('password')"}],staticClass:"login__error"},[t._v("Введите пароль не менее 6 символов")]),a("div",{staticClass:"login-form__input"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password|min:6",expression:"'required|confirmed:password|min:6'"},{name:"model",rawName:"v-model",value:t.cpassword,expression:"cpassword"}],staticClass:"login-form__input-fileds",attrs:{type:"password",id:"login-сpassword",name:"cpassword","data-vv-as":"password",value:"",onkeyup:"this.setAttribute('value', this.value);"},domProps:{value:t.cpassword},on:{input:function(e){e.target.composing||(t.cpassword=e.target.value)}}}),a("label",{staticClass:"float-label",attrs:{for:"login-сpassword"}},[t._v("Подтвердите Пароль")])]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("cpassword"),expression:"errors.has('cpassword')"}],staticClass:"login__error"},[t._v("Пароли не совпадают")]),a("div",{staticClass:"login-form__submitbutton"},[a("button",{staticClass:"btn-primary button-max",attrs:{type:"submit",disabled:t.loading},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("Зарегистрируйтесь")])])]),a("p",{staticClass:"login__still"},[t._v("Есть аккаунт?\n          "),a("router-link",{attrs:{to:"/sign-in"}},[t._v("Войдите.")])],1)])])])},L=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login__brand d-flex justify-content-center"},[s("div",{staticClass:"login__brand-container"},[s("img",{staticClass:"login__brand-logo",attrs:{src:a("cf05"),alt:""}}),s("h2",{staticClass:"login__brand-name"},[t._v("ЖКХ")])])])}],O={data:function(){return{username:"",email:"",password:"",cpassword:""}},methods:{onSubmit:function(){var t=this;this.$validator.validateAll().then(function(e){if(e){var a={email:t.email,username:t.username,password:t.password};t.$store.dispatch("registerUser",a).then(function(){t.$router.push("/sign-in")}).catch(function(t){})}})}},computed:{loading:function(){return this.$store.getters.loading},error:function(){return this.$store.getters.error}}},q=O,P=Object(l["a"])(q,j,L,!1,null,null,null);P.options.__file="SignUp.vue";var I=P.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-home"},[a("appheader"),a("div",{staticClass:"page"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"card card-shadow text-center"},[a("div",{staticClass:"account card-block"},[t._m(0),a("div",{staticClass:"account__info"},[a("h4",{staticClass:"account__info-name"},[t._v(t._s(t.user.username))])])])])]),a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"card card-shadow"},[a("router-link",{attrs:{to:"/"}},[t._v("Назад")]),a("h1",[t._v("Добавить заявку")]),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Заголовок")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"regtite",name:"regtite",placeholder:"Заголовок"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("regtite"),expression:"errors.has('regtite')"}],staticClass:"login__error"},[t._v("Поле обязательно для заполнения ")]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"vendor"}},[t._v("Кто нужен")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.vendor,expression:"vendor"}],staticClass:"form-control",attrs:{type:"type",name:"regvendor",id:"regvendor",placeholder:"Кто нужен"},domProps:{value:t.vendor},on:{input:function(e){e.target.composing||(t.vendor=e.target.value)}}})]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("regvendor"),expression:"errors.has('regvendor')"}],staticClass:"login__error"},[t._v("Поле обязательно для заполнения ")]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"regtext"}},[t._v("Текст заявки")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{type:"type",name:"regtext",id:"regtext",placeholder:"Текст заявки"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("regtext"),expression:"errors.has('regtext')"}],staticClass:"login__error"},[t._v("Поле обязательно для заполнения ")]),a("div",{staticClass:"form-group form-check"}),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.createRegistering()}}},[t._v("Отправить заявку")])])],1)])])])])],1)},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account__avatar"},[s("img",{staticClass:"account__avatar-img",attrs:{src:a("1195"),alt:"Кирилл Трешков"}})])}],R={data:function(){return{text:"",title:"",vendor:""}},computed:{user:function(){return this.$store.getters.user}},methods:{createRegistering:function(){var t=this;this.$validator.validateAll().then(function(e){e&&alert(t.text)})}},components:{appheader:b}},T=R,D=Object(l["a"])(T,S,M,!1,null,null,null);D.options.__file="NewRegistering.vue";var B,z,W=D.exports,J={},G=Object(l["a"])(J,B,z,!1,null,null,null);G.options.__file="ChecOut.vue";var H=G.exports,K=a("2f62"),X={state:{product:[{id:"1",title:"Засорился туалет",vendor:"Сантехник",comment:[{id:"1",text:"Бла бла бла"}]}]},mutations:{},actions:{},getters:{product:function(t){return t.product}}},F=(a("96cf"),a("1da1")),Q=a("d4ec"),V=a("8aa5"),Y=function t(e,a,s){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Object(Q["a"])(this,t),this.id=e,this.email=a,this.username=s,this.isAdmin=r},Z={state:{user:{},isAuth:!1},mutations:{setUser:function(t,e){t.user=e,t.isAuth=!0},unsetUser:function(t){t.user={},t.isAuth=!1}},actions:{registerUser:function(){var t=Object(F["a"])(regeneratorRuntime.mark(function t(e,a){var s,r,i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,r=a.email,i=a.password,n=a.username,s("clearError"),s("setLoading",!0),t.prev=4,t.next=7,V["auth"]().createUserWithEmailAndPassword(r,i);case 7:V["database"]().ref("users/"+V["auth"]().currentUser.uid).set({username:n,email:r,isAdmin:!1}),s("unsetUser"),s("setLoading",!1),t.next=17;break;case 12:throw t.prev=12,t.t0=t["catch"](4),s("setLoading",!1),s("setError",t.t0.message),t.t0;case 17:case"end":return t.stop()}},t,this,[[4,12]])}));return function(e,a){return t.apply(this,arguments)}}(),loginUser:function(){var t=Object(F["a"])(regeneratorRuntime.mark(function t(e,a){var s,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,r=a.email,i=a.password,s("clearError"),s("setLoading",!0),t.prev=4,t.next=7,V["auth"]().signInWithEmailAndPassword(r,i);case 7:V["database"]().ref("users/"+V["auth"]().currentUser.uid).on("value",function(t){if(t.val()){var e=t.val(),a=e.username,r=e.isAdmin;s("setUser",new Y(V["auth"]().currentUser.uid,V["auth"]().currentUser.email,a,r)),s("setLoading",!1)}}),t.next=15;break;case 10:throw t.prev=10,t.t0=t["catch"](4),s("setLoading",!1),s("setError",t.t0.message),t.t0;case 15:case"end":return t.stop()}},t,this,[[4,10]])}));return function(e,a){return t.apply(this,arguments)}}(),autoLoginUser:function(t,e){var a=t.commit;V["database"]().ref("users/"+V["auth"]().currentUser.uid).on("value",function(t){if(t.val()){var s=t.val(),r=s.username,i=s.isAdmin;a("setUser",new Y(e.uid,e.email,r,i)),a("setLoading",!1)}}),a("setUser",new Y(e.uid,e.email))},logoutUser:function(t){var e=t.commit;V["auth"]().signOut(),e("unsetUser")}},getters:{user:function(t){return t.user},isUserLoggedIn:function(t){return!1!==t.isAuth},isUserNotLoggedIn:function(t){return!1===t.isAuth}}},tt={state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{setLoading:function(t,e){var a=t.commit;a("setLoading",e)},setError:function(t,e){var a=t.commit;a("setError",e)},clearError:function(t){var e=t.commit;e("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}};s["a"].use(K["a"]);var et=new K["a"].Store({modules:{product:X,user:Z,common:tt}}),at=function(t,e,a){et.getters.isUserLoggedIn?a():a("/sign-in?loginError=true")},st=function(t,e,a){et.getters.isUserNotLoggedIn?a():a("/")};s["a"].use(d["a"]);var rt=new d["a"]({mode:"history",routes:[{path:"/sign-in",name:"sign-in",component:A,beforeEnter:st},{path:"/sign-up",name:"sign-up",component:I,beforeEnter:st},{path:"/",name:"registering",component:y,beforeEnter:at},{path:"/addproduct",name:"registering-new",component:W,beforeEnter:at},{path:"/checout",name:"checout",component:H}]}),it=a("7bb1");s["a"].use(it["a"]),s["a"].config.productionTip=!1,new s["a"]({router:rt,store:et,render:function(t){return t(c)},created:function(){var t={apiKey:"AIzaSyCglq3W6XIvktb1nwke7GnyMkz67IeeCNA",authDomain:"finaltextcase.firebaseapp.com",databaseURL:"https://finaltextcase.firebaseio.com",projectId:"finaltextcase",storageBucket:"finaltextcase.appspot.com",messagingSenderId:"248813363746"};V["initializeApp"](t);var e=this;V["auth"]().onAuthStateChanged(function(t){t?(e.$store.dispatch("autoLoginUser",t),e.$router.push("/")):e.$router.push("/sign-in")})}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("5e27"),r=a.n(s);r.a},"5e27":function(t,e,a){},bcc9:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},ed6b:function(t,e,a){"use strict";var s=a("4257"),r=a.n(s);r.a},f5c6:function(t,e,a){}});
//# sourceMappingURL=app.3ff826af.js.map