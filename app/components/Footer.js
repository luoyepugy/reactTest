
import React, { Component } from 'react';
import {Link} from 'react-router';

class Footer extends Component {
  render() {
    return (
      <div className="mui-row footer">
      	<div className="mui-col-xs-3"><Link to="/">发现</Link></div>
      	<div className="mui-col-xs-3"><Link to="/hostList">活动号</Link></div>
      	<div className="mui-col-xs-3"><Link to="/ticketList">票券</Link></div>
      	<div className="mui-col-xs-3"><Link to="/userCenter">我的</Link></div>
      </div>
    );
  }
}

export default Footer;