'use strict';
const ReactDOM = require('react-dom');
import {BrowserRouter as Router,   Route,  Link,  Redirect,  withRouter, browserHistory, IndexRoute } from 'react-router-dom'
import Navigation from './component/Navigation';
import Home from './component/Home';
import About from './component/About';
import { CookiesProvider } from 'react-cookie';
import React, { Component } from 'react';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {employees: []};
	}
	componentDidMount() {
    }
	render() {
        return (
			<div>
				<div>
					<ul>
						<li>
							<Link to="/Navigation">Navigation</Link>
						</li>
						<li>
						  <Link to="/Home">Home</Link>
						</li>
						<li>
						  <Link to="/About">About</Link>
						</li>
					</ul>
					{this.props.children}
			   </div>
			</div>
		)
	}
}

ReactDOM.render(
	(
		<CookiesProvider>
			<Router>
				<App>
					<Route exact path="/" component={Home}/>
					<Route  path="/Home" component={Home} />
					<Route path="/Navigation" component={Navigation} />
					<Route path="/About" component={About} />
				</App>
			</Router>
		</CookiesProvider>
), document.getElementById('react'));

