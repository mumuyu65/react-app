import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/login.js';

import App from './App';

ReactDOM.render((
	<Router>
	    <Switch>
		  <Route exact path='/' component={Login}/>
		  <Route path='/index' component={App}/>
		</Switch>
	</Router>
), document.getElementById('root'));

registerServiceWorker();
