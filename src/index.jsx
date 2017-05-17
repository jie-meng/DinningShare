import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';
import { render } from 'react-dom';
import App from './components/App';
import Home from './components/Pages/Home';
import Host from './components/Pages/Host';
import Guest from './components/Pages/Guest';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute name="home" component={Home}/>
        <Route path="host" name="host" component={Host}/>
        <Route path="guest" name="guest" component={Guest}/>
    </Route>
  </Router>
), document.getElementById('app'));