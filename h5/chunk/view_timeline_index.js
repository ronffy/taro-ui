(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"146":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=(_interopRequireDefault(n(1)),_interopRequireDefault(n(63))),o=_interopRequireDefault(n(2)),a=n(62),l=_interopRequireDefault(n(65)),c=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=function(e){function AtTimeline(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTimeline),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTimeline.__proto__||Object.getPrototypeOf(AtTimeline)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTimeline,c.default),r(AtTimeline,[{"key":"render","value":function render(){var e=this.props,t=e.pending,n=e.items,r=e.customStyle,i=["at-timeline"];t&&i.push("at-timeline--pending");var c={"at-timeline--pending":t},u=n.map(function(e,t){var n=e.title,r=void 0===n?"":n,i=e.color,c=e.icon,u=e.content,s=void 0===u?[]:u,f=(0,l.default)(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({"at-icon":!0},"at-icon-"+c,c)),p=["at-timeline-item"];i&&p.push("at-timeline-item--"+i);var m=["at-timeline-item__dot"];return c&&m.push("at-timeline-item__icon"),o.default.createElement(a.View,{"className":(0,l.default)(p),"key":t},o.default.createElement(a.View,{"className":"at-timeline-item__tail"}),o.default.createElement(a.View,{"className":(0,l.default)(m)},c&&o.default.createElement(a.Text,{"className":f})),o.default.createElement(a.View,{"className":"at-timeline-item__content"},o.default.createElement(a.View,{"className":"at-timeline-item__content-item"},r),s.map(function(e,t){return o.default.createElement(a.View,{"className":"at-timeline-item__content-item at-timeline-item__content--sub","key":t},e)})))});return o.default.createElement(a.View,{"className":(0,l.default)(i,c,this.props.className),"style":r},u)}}]),AtTimeline}();t.default=u,u.defaultProps={"pending":!1,"items":[],"customStyle":{}},u.propTypes={"pending":i.default.bool,"items":i.default.arrayOf(i.default.object),"customStyle":i.default.oneOfType([i.default.object,i.default.string])}},"147":function(e,t,n){},"21":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(2)),a=n(62),l=_interopRequireDefault(n(146)),c=_interopRequireDefault(n(68));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(147);var u=function(e){function TimelinePage(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TimelinePage);for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=n=_possibleConstructorReturn(this,(e=TimelinePage.__proto__||Object.getPrototypeOf(TimelinePage)).call.apply(e,[this].concat(i))),n.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TimelinePage,i.default.Component),r(TimelinePage,[{"key":"render","value":function render(){return o.default.createElement(a.View,{"className":"page"},o.default.createElement(c.default,{"title":"Timeline 时间轴"}),o.default.createElement(a.View,{"className":"doc-body"},o.default.createElement(a.View,{"className":"panel"},o.default.createElement(a.View,{"className":"panel__title"},"基础用法"),o.default.createElement(a.View,{"className":"panel__content"},o.default.createElement(a.View,{"className":"example-item"},o.default.createElement(l.default,{"items":[{"title":"刷牙洗脸"},{"title":"吃早餐"},{"title":"上班"},{"title":"睡觉"}]})))),o.default.createElement(a.View,{"className":"panel"},o.default.createElement(a.View,{"className":"panel__title"},"自定义颜色"),o.default.createElement(a.View,{"className":"panel__content"},o.default.createElement(a.View,{"className":"example-item"},o.default.createElement(l.default,{"items":[{"title":"刷牙洗脸"},{"title":"吃早餐","color":"green"},{"title":"上班","color":"red"},{"title":"睡觉","color":"yellow"}]})))),o.default.createElement(a.View,{"className":"panel"},o.default.createElement(a.View,{"className":"panel__title"},"自定义图标"),o.default.createElement(a.View,{"className":"panel__content"},o.default.createElement(a.View,{"className":"example-item"},o.default.createElement(l.default,{"items":[{"title":"刷牙洗脸","icon":"check-circle"},{"title":"吃早餐","icon":"clock"},{"title":"上班","icon":"clock"},{"title":"睡觉","icon":"clock"}]})))),o.default.createElement(a.View,{"className":"panel"},o.default.createElement(a.View,{"className":"panel__title"},"幽灵节点"),o.default.createElement(a.View,{"className":"panel__content"},o.default.createElement(a.View,{"className":"example-item"},o.default.createElement(l.default,{"pending":!0,"items":[{"title":"刷牙洗脸"},{"title":"吃早餐"},{"title":"上班"},{"title":"睡觉"}]})))),o.default.createElement(a.View,{"className":"panel"},o.default.createElement(a.View,{"className":"panel__title"},"丰富内容"),o.default.createElement(a.View,{"className":"panel__content"},o.default.createElement(a.View,{"className":"example-item"},o.default.createElement(l.default,{"pending":!0,"items":[{"title":"刷牙洗脸","content":["大概8:00"],"icon":"check-circle"},{"title":"吃早餐","content":["牛奶+面包","餐后记得吃药"],"icon":"clock"},{"title":"上班","content":["查看邮件","写PPT","发送PPT给领导"],"icon":"clock"},{"title":"睡觉","content":["不超过23:00"],"icon":"clock"}]}))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),TimelinePage}();t.default=u},"62":function(e,t,n){e.exports=n(0)(18)},"63":function(e,t,n){e.exports=n(66)()},"64":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(1);_interopRequireDefault(o),_interopRequireDefault(n(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var a=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":i(e))){var t="";return Object.keys(e).forEach(function(n){var r=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=r+":"+e[n]+";"}),t}return e&&"string"==typeof e?e:""},l=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,o.Component),r(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":i(e))&&t&&"object"===(void 0===t?"undefined":i(t))?Object.assign({},e,t):a(e)+a(t)}}]),AtComponent}();l.options={"addGlobalClass":!0},t.default=l},"65":function(e,t,n){e.exports=n(0)(19)},"66":function(e,t,n){"use strict";var r=n(67);function emptyFunction(){}e.exports=function(){function shim(e,t,n,i,o,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"67":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"68":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(1),o=(_interopRequireDefault(i),_interopRequireDefault(n(2))),a=_interopRequireDefault(n(63)),l=n(62);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(69);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,i.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(l.View,{"className":"doc-header"},o.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":a.default.string}},"69":function(e,t,n){}}]);