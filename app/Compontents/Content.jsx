

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Content extends Component {
  render() {
    return (
      <div>Content</div>
    );
  }
}

export default Content;

ReactDOM.render(
	<div>
		<Header />
		<Content />
		<Footer />
	</div>,
	document.getElementById('root')
);