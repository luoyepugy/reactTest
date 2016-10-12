
import React from 'react';
import {hashHistory, browserHistory, Router, Route, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';

import App from './components/App';
import Home from './components/Home';
import HostList from './components/HostList';
import TicketList from './components/TicketList';
import UserCenter from './components/UserCenter';
import '../public/css/common.css'

// Router.run(routers, Router.HistoryLocation, (Handler) => {
// 	React.render(
// 		<Handler />,
// 		document.getElementById('app')
// 	);
// });

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={ App }>
        	<IndexRoute component={ Home } />
        	<Route path="/hostList" component={ HostList } />
            <Route path="/ticketList" component={ TicketList } />
            <Route path="/userCenter" component={ UserCenter } />
        </Route>
    </Router>, document.getElementById('app')
);