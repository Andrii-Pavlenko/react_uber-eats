(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t(40)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),s=t.n(l),c=t(11),i=(t(30),t(9)),o=t(19),m=t(3),u={SAVE_RESTAURANTS:"SAVE_RESTAURANTS",SET_LOAD_RESTAURANTS_ERROR:"SET_LOAD_RESTAURANTS_ERROR",START_LOADING:"START_LOADING",STOP_LOADING:"STOP_LOADING"};function _(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?_(t,!0).forEach(function(a){Object(m.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var g={restaurantListData:null,isLoading:!1,error:null};var h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Object(i.c)(),f=[o.a],p=Object(i.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u.SAVE_RESTAURANTS:return d({},e,{error:null,restaurantListData:a.payload});case u.SET_LOAD_RESTAURANTS_ERROR:return d({},e,{error:a.payload,restaurantListData:null});case u.START_LOADING:return d({},e,{isLoading:!0});case u.STOP_LOADING:return d({},e,{isLoading:!1});default:return e}},h(i.a.apply(void 0,f))),E=t(4),v=t(5),b=t(7),N=t(6),O=t(8),S=(t(31),function(e){var a=e.imageUrl,t=e.title,n=e.categories,l=e.etaRange;return r.a.createElement("div",{className:"restaurant-card"},r.a.createElement("img",{src:a,alt:t,className:"restaurant-card__img"}),r.a.createElement("h2",{className:"restaurant-card__title"},t),r.a.createElement("div",{className:"restaurant-card__categories"},n.join(" \u2022 ")),r.a.createElement("div",{className:"restaurant-card__eta"},l))});S.defaultProps={categories:[],etaRange:""};var y=S,k=(t(32),t(33),function(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"lds-roller"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),R=(t(34),function(e){var a=e.message;return r.a.createElement("div",{className:"error"},r.a.createElement("p",{className:"error__text"},a),r.a.createElement("a",{href:"/",className:"error__link"},"Go Home"))});R.defaultProps={message:"Sorry, something went wrong"};var A=function(e){function a(){return Object(E.a)(this,a),Object(b.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(O.a)(a,e),Object(v.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.loadRestaurants)()}},{key:"render",value:function(){var e=this.props,a=e.restaurantsData,t=e.error;return e.isLoading?r.a.createElement(k,null):t?r.a.createElement(R,{message:t}):r.a.createElement("div",{className:"restaurants-list"},a.map(function(e){var a=e.title,t=e.uuid,n=e.heroImageUrl,l=e.categories,s=e.etaRange;return r.a.createElement(y,{key:t,uuid:t,title:a,imageUrl:n,categories:l,etaRange:s?s.errorMessage:"20 - 30 min"})}))}}]),a}(n.Component);A.defaultProps={restaurantsData:[],error:null,isLoading:!1};var T=t(12),j=function(e){return e},D=Object(T.a)(j,function(e){var a=e.restaurantListData;if(!a)return[];var t=a.feedItems,n=a.storesMap;return t.map(function(e){var a=e.uuid;return n[a]})}),w=Object(T.a)(j,function(e){return e.error}),U=Object(T.a)(j,function(e){return e.isLoading});var L={loadRestaurants:function(){return function(e){e({type:u.START_LOADING}),fetch("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants").then(function(e){return e.json()}).then(function(a){var t=a.data;e(function(e){return{type:u.SAVE_RESTAURANTS,payload:e}}(t))}).catch(function(a){return e(function(e){return{type:u.SET_LOAD_RESTAURANTS_ERROR,payload:e}}(a.message))}).finally(function(){return e({type:u.STOP_LOADING})})}}},C=Object(c.b)(function(e){return{restaurantsData:D(e),error:w(e),isLoading:U(e)}},L)(A),I=(t(35),t(16)),P=t.n(I),M=(t(36),function(e){function a(){var e,t;Object(E.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(t=Object(b.a)(this,(e=Object(N.a)(a)).call.apply(e,[this].concat(l)))).state={isFocused:!1},t.inputRef=Object(n.createRef)(),t.handleFocus=function(){return t.setState({isFocused:!0})},t.handleBlur=function(){return t.setState({isFocused:!1})},t.focus=function(){return t.inputRef.current.focus()},t}return Object(O.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){var e=this.props,a=e.iconUrl,t=e.value,n=e.onChange,l=e.type,s=e.placeholder,c=e.name,i=e.className,o=e.isSmall,u=e.label,_=this.state.isFocused,d=P()("control__input-wrapper",Object(m.a)({"control__input-wrapper--focused":_},i,!!i)),g=P()("control__input",{"control__input--small":o,"control__input--time":"time"===l});return r.a.createElement("label",{className:"control"},u&&r.a.createElement("p",{className:"control__label"},u),r.a.createElement("div",{className:d},!!a&&r.a.createElement("img",{src:a,alt:s,className:"control__icon"}),r.a.createElement("input",{ref:this.inputRef,type:l,name:c,onChange:n,onFocus:this.handleFocus,onBlur:this.handleBlur,value:t,placeholder:s,className:g})))}}]),a}(n.PureComponent));M.defaultProps={type:"text",placeholder:"",iconUrl:"",className:"",isSmall:!0,label:""};var V=function(e){function a(){var e,t;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(b.a)(this,(e=Object(N.a)(a)).call.apply(e,[this].concat(r)))).state={address:"",time:"",search:"",isMobileSearchVisible:!1,isMobileDeliveryInfoVisible:!1},t.handleChange=function(e){var a=e.target;t.setState(Object(m.a)({},a.name,a.value))},t.toggleSearch=function(){return t.setState(function(e){return{isMobileSearchVisible:!e.isMobileSearchVisible,isMobileDeliveryInfoVisible:!1}})},t.toggleDeliveryInfo=function(){return t.setState(function(e){return{isMobileDeliveryInfoVisible:!e.isMobileDeliveryInfoVisible,isMobileSearchVisible:!1}})},t.closeMobile=function(){return t.setState({isMobileSearchVisible:!1,isMobileDeliveryInfoVisible:!1})},t}return Object(O.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){var e=this.state,a=e.address,t=e.time,n=e.search,l=e.isMobileSearchVisible,s=e.isMobileDeliveryInfoVisible;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header__inner"},r.a.createElement("img",{src:"./images/logo.svg",alt:"Uber Eats",className:"header__logo"}),r.a.createElement("div",{className:"header__delivery-info"},r.a.createElement(M,{name:"address",value:a,onChange:this.handleChange,placeholder:"Address",iconUrl:"./images/place.svg"}),r.a.createElement(M,{name:"time",value:t,onChange:this.handleChange,placeholder:"Time",type:"time"})),r.a.createElement("div",{className:"header__search"},r.a.createElement(M,{name:"search",value:n,onChange:this.handleChange,placeholder:"Search",iconUrl:"./images/search.svg"})),r.a.createElement("div",{className:"header__toggle-buttons"},r.a.createElement("button",{onClick:this.toggleDeliveryInfo,type:"button",className:"header__toggle-btn"},r.a.createElement("img",{src:"./images/place.svg",alt:"place icon"})),r.a.createElement("button",{onClick:this.toggleSearch,type:"button",className:"header__toggle-btn"},r.a.createElement("img",{src:"./images/search.svg",alt:"search icon"}))),r.a.createElement("a",{className:"header__link",href:"/sign-in"},"Sign In")),(l||s)&&r.a.createElement("div",{className:"header__mobile-controls mobile-controls"},l&&r.a.createElement(M,{label:"Find",name:"search",value:n,onChange:this.handleChange,placeholder:"Search",iconUrl:"./images/search.svg",isSmall:!1}),s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{label:"Where",name:"address",value:a,onChange:this.handleChange,placeholder:"Address",iconUrl:"./images/place.svg",isSmall:!1}),r.a.createElement(M,{label:"To",name:"time",value:t,onChange:this.handleChange,placeholder:"Time",type:"time",isSmall:!1})),r.a.createElement("button",{onClick:this.closeMobile,type:"button",className:"mobile-controls__close"},r.a.createElement("img",{src:"./images/close.svg",alt:"search icon"})))))}}]),a}(n.Component),F=(t(37),t(38),function(e){var a=e.name,t=e.value,n=e.onSelect,l=e.options,s=e.iconUrl;return r.a.createElement("div",{className:"select"},r.a.createElement("select",{name:a,value:t,onChange:n,className:"select__input"},l.map(function(e){var a=e.value,n=e.label;return r.a.createElement("option",{value:a,selected:t===a},n)})),!!s&&r.a.createElement("img",{className:"select__icon",src:s,alt:"select icon"}),r.a.createElement("img",{className:"select__arrow",src:"./images/arrow.svg",alt:"arrow down"}))});F.defaultProps={onSelect:function(){},options:[],iconUrl:""};var G=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer__top-part"},r.a.createElement("div",{className:"footer__main"},r.a.createElement("div",{className:"footer__logo-container"},r.a.createElement("img",{src:"./images/footer-logo.svg",alt:"Uber Eats",className:"footer__logo"}),r.a.createElement(F,{name:"language",options:[{value:"en",label:"English"},{value:"ua",label:"Ukrainian"},{value:"ru",label:"Russian"}],value:"en",iconUrl:"./images/planet.svg"})),r.a.createElement("div",{className:"footer__mobile-apps"},r.a.createElement("a",{href:"#",className:"footer__mobile-app"},r.a.createElement("img",{src:"./images/apple-store.png",alt:"Apple Store"})),r.a.createElement("a",{href:"#",className:"footer__mobile-app"},r.a.createElement("img",{src:"./images/google-play.png",alt:"Google Play"})))),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{href:"#",className:"links__link links__link--intended"},"About UberEats"),r.a.createElement("a",{href:"#",className:"links__link"},"Read our blog"),r.a.createElement("a",{href:"#",className:"links__link"},"Sign up to deliver"),r.a.createElement("a",{href:"#",className:"links__link"},"Add your restaurant")),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{href:"#",className:"links__link  links__link--intended"},"Get help"),r.a.createElement("a",{href:"#",className:"links__link"},"Read FAQs"),r.a.createElement("a",{href:"#",className:"links__link"},"View all cities"))),r.a.createElement("div",{className:"footer__bottom-part"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2019 Uber Technologies Inc."),r.a.createElement("div",{className:"footer__misc"},r.a.createElement("div",{className:"footer__bottom-links links"},r.a.createElement("a",{href:"#",className:"links__link"},"Privacy policy"),r.a.createElement("a",{href:"#",className:"links__link"},"Terms of use"),r.a.createElement("a",{href:"#",className:"links__link"},"Pricing")),r.a.createElement("div",{className:"footer__social social"},r.a.createElement("a",{href:"#",className:"social__link"},r.a.createElement("img",{src:"./images/facebook.svg",alt:"Facebook"})),r.a.createElement("a",{href:"#",className:"social__link"},r.a.createElement("img",{src:"./images/twitter.svg",alt:"Twitter"})),r.a.createElement("a",{href:"#",className:"social__link"},r.a.createElement("img",{src:"./images/instagram.svg",alt:"Instagram"})))))))},B=function(){return r.a.createElement(c.a,{store:p},r.a.createElement(V,null),r.a.createElement("main",{className:"page"},r.a.createElement("div",{className:"content"},r.a.createElement(C,null))),r.a.createElement(G,null))};t(39);s.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.fb28684b.chunk.js.map