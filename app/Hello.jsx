
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class Hello extends Component {
//   render() {
//   	return (
// 	  	<ol>
// 	  		React.Children.map(this.props.children, (child) => {
// 	  			return <li>{child}</li>;
// 	  		})
// 	  	</ol>
//   	);
//   };
// }

// ReactDOM.render(
//   <Hello>
//   	<span>aa</span>
//   	<i>bb</i>
//   </Hello>,
//   document.getElementById('root')
// );

var weekMap = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

var ListItem = React.createClass({
    render: function() {
        return <li>{this.props.data}</li>
    }
});

var OrderList = React.createClass({
    render: function() {
        return <ol>{this.props.data.map(function(text, index, arr) {
            return <ListItem key={index} data={text} />
        })}</ol>
    }
});

ReactDOM.render(
    <OrderList data={weekMap} />, 
    document.getElementById('root')
);