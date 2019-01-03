(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"131":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),n=_interopRequireDefault(o(1)),r=_interopRequireDefault(o(63)),i=_interopRequireDefault(o(2)),l=_interopRequireDefault(o(65)),c=o(62),u=_interopRequireDefault(o(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var s=function(e){function AtNoticebar(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtNoticebar);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtNoticebar.__proto__||Object.getPrototypeOf(AtNoticebar)).apply(this,arguments)),t="J_"+Math.ceil(1e6*Math.random()).toString(36);return e.state={"show":!0,"animElemId":t,"dura":15,"isWEAPP":n.default.getEnv()===n.default.ENV_TYPE.WEAPP,"isALIPAY":n.default.getEnv()===n.default.ENV_TYPE.ALIPAY,"isWEB":n.default.getEnv()===n.default.ENV_TYPE.WEB},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtNoticebar,u.default),a(AtNoticebar,[{"key":"onClose","value":function onClose(){var e;this.setState({"show":!1}),this.props.onClose&&(e=this.props).onClose.apply(e,arguments)}},{"key":"onGotoMore","value":function onGotoMore(){var e;this.props.onGotoMore&&(e=this.props).onGotoMore.apply(e,arguments)}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(){this.timeout||(this.interval&&clearInterval(this.interval),this.initAnimation())}},{"key":"componentDidMount","value":function componentDidMount(){this.props.marquee&&this.initAnimation()}},{"key":"initAnimation","value":function initAnimation(){var e=this,t=this.state,o=t.isWEAPP,a=t.isALIPAY;this.timeout=setTimeout(function(){if(e.timeout=null,e.state.isWEB){var t=document.querySelector("."+e.state.animElemId);if(!t)return;var r=t.getBoundingClientRect().width/+e.props.speed;e.setState({"dura":r})}else if(o||a){(a?n.default.createSelectorQuery():n.default.createSelectorQuery().in(e.$scope)).select("."+e.state.animElemId).boundingClientRect().exec(function(t){if(t=t[0]){var o=t.width,a=o/+e.props.speed,r=n.default.createAnimation({"duration":1e3*a,"timingFunction":"linear"}),i=n.default.createAnimation({"duration":0,"timingFunction":"linear"}),l=n.default.createAnimation({"duration":0,"timingFunction":"linear"}),c=function animBody(){l.opacity(0).step(),e.setState({"animationData":l.export()}),setTimeout(function(){i.translateX(0).step(),e.setState({"animationData":i.export()})},300),setTimeout(function(){l.opacity(1).step(),e.setState({"animationData":l.export()})},600),setTimeout(function(){r.translateX(-o).step(),e.setState({"animationData":r.export()})},900)};c(),e.interval=setInterval(c,1e3*a+1e3)}})}},100)}},{"key":"render","value":function render(){var e=this.props,t=e.single,o=e.icon,a=e.marquee,n=e.customStyle,r=this.props,u=r.showMore,s=r.close,f=this.state.dura,p=this.props.moreText;t||(u=!1),p||(p="查看详情");var m={},d=["at-noticebar__content-inner"];a&&(s=!1,m["animation-duration"]=f+"s",d.push(this.state.animElemId));var b={"at-noticebar--marquee":a,"at-noticebar--weapp":a&&(this.state.isWEAPP||this.state.isALIPAY),"at-noticebar--more":!a&&u,"at-noticebar--single":!a&&t};return this.state.show&&i.default.createElement(c.View,{"className":(0,l.default)(["at-noticebar"],b,this.props.className),"style":n},s&&i.default.createElement(c.View,{"className":"at-noticebar__close","onClick":this.onClose.bind(this)},i.default.createElement(c.Text,{"className":"at-icon at-icon-close"})),i.default.createElement(c.View,{"className":"at-noticebar__content"},o&&i.default.createElement(c.View,{"className":"at-noticebar__content-icon"},i.default.createElement(c.Text,{"className":(0,l.default)("at-icon",function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{"value":o,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=o,e}({},"at-icon-"+o,o))})),i.default.createElement(c.View,{"className":"at-noticebar__content-text"},i.default.createElement(c.View,{"animation":this.state.animationData,"className":(0,l.default)(d),"style":m},this.props.children))),u&&i.default.createElement(c.View,{"className":"at-noticebar__more","onClick":this.onGotoMore.bind(this)},i.default.createElement(c.Text,{"className":"text"},p),i.default.createElement(c.View,{"className":"at-noticebar__more-icon"},i.default.createElement(c.Text,{"className":"at-icon at-icon-chevron-right"}))))}}]),AtNoticebar}();t.default=s,s.defaultProps={"close":!1,"single":!1,"marquee":!1,"speed":100,"moreText":"查看详情","showMore":!1,"icon":"","customStyle":{},"onClose":function onClose(){},"onGotoMore":function onGotoMore(){}},s.propTypes={"close":r.default.bool,"single":r.default.bool,"marquee":r.default.bool,"speed":r.default.number,"moreText":r.default.string,"showMore":r.default.bool,"icon":r.default.string,"customStyle":r.default.oneOfType([r.default.object,r.default.string]),"onClose":r.default.func,"onGotoMore":r.default.func}},"132":function(e,t,o){},"16":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),n=_interopRequireDefault(o(1)),r=_interopRequireDefault(o(2)),i=o(62),l=_interopRequireDefault(o(131)),c=_interopRequireDefault(o(68));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}o(132);var u=function(e){function NoticebarPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NoticebarPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NoticebarPage.__proto__||Object.getPrototypeOf(NoticebarPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NoticebarPage,n.default.Component),a(NoticebarPage,[{"key":"onGotoMore","value":function onGotoMore(){n.default.getEnv()===n.default.ENV_TYPE.WEB?alert("您点击了更多!"):n.default.showModal({"content":"点击了更多!","cancelText":"取消"})}},{"key":"render","value":function render(){return r.default.createElement(i.View,{"className":"page"},r.default.createElement(c.default,{"title":"NoticeBar 通告栏"}),r.default.createElement(i.View,{"className":"doc-body"},r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"文字"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,null,"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"跑马灯"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"marquee":!0},"[纯文字]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]")),r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"marquee":!0,"icon":"volume-plus"},"[带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]")),r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"marquee":!0},"[超长文本]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]")))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"图标"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"icon":"volume-plus","single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"icon":"volume-plus"},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"查看更多"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"showMore":!0,"single":!0,"onGotoMore":this.onGotoMore.bind(this)},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"showMore":!0,"icon":"volume-plus","single":!0,"onGotoMore":this.onGotoMore.bind(this)},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"showMore":!0,"moreText":"更多内容","onGotoMore":this.onGotoMore.bind(this)},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"showMore":!0,"moreText":"更多内容","icon":"volume-plus","onGotoMore":this.onGotoMore.bind(this)},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"关闭按钮"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"close":!0,"single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"close":!0,"icon":"volume-plus","single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"close":!0,"moreUrl":"https://taro.aotu.io/","single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"close":!0,"icon":"volume-plus","moreUrl":"https://taro.aotu.io/","single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"close":!0},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"close":!0,"moreUrl":"https://taro.aotu.io/"},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),r.default.createElement(i.View,{"className":"bar-item"},r.default.createElement(l.default,{"close":!0,"icon":"volume-plus","moreUrl":"https://taro.aotu.io/"},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏"))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),NoticebarPage}();t.default=u},"62":function(e,t,o){e.exports=o(0)(18)},"63":function(e,t,o){e.exports=o(66)()},"64":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=o(1);_interopRequireDefault(r),_interopRequireDefault(o(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var i=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":n(e))){var t="";return Object.keys(e).forEach(function(o){var a=o.replace(/([A-Z])/g,"-$1").toLowerCase();t+=a+":"+e[o]+";"}),t}return e&&"string"==typeof e?e:""},l=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,r.Component),a(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":n(e))&&t&&"object"===(void 0===t?"undefined":n(t))?Object.assign({},e,t):i(e)+i(t)}}]),AtComponent}();l.options={"addGlobalClass":!0},t.default=l},"65":function(e,t,o){e.exports=o(0)(19)},"66":function(e,t,o){"use strict";var a=o(67);function emptyFunction(){}e.exports=function(){function shim(e,t,o,n,r,i){if(i!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"67":function(e,t,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"68":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),n=o(1),r=(_interopRequireDefault(n),_interopRequireDefault(o(2))),i=_interopRequireDefault(o(63)),l=o(62);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}o(69);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,n.Component),a(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return r.default.createElement(l.View,{"className":"doc-header"},r.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":i.default.string}},"69":function(e,t,o){}}]);