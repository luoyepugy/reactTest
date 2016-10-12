'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _HostList = require('./components/HostList');

var _HostList2 = _interopRequireDefault(_HostList);

var _TicketList = require('./components/TicketList');

var _TicketList2 = _interopRequireDefault(_TicketList);

var _UserCenter = require('./components/UserCenter');

var _UserCenter2 = _interopRequireDefault(_UserCenter);

require('../public/css/common.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Router.run(routers, Router.HistoryLocation, (Handler) => {
// 	React.render(
// 		<Handler />,
// 		document.getElementById('app')
// 	);
// });

_reactDom2.default.render(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: _App2.default },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/hostList', component: _HostList2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/ticketList', component: _TicketList2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/userCenter', component: _UserCenter2.default })
    )
), document.getElementById('app'));