import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import app from './reducers/reducers';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import Leagues from './containers/Leagues'; 
import Tournaments from './containers/Tournaments';
import Players from './containers/Players';
import Saved from './containers/Saved';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

const store = createStore(app);

ReactDOM.render(
    <Provider store={store}>
    	<Router>
    		<div id="main">
    		<Route component = {Header} />
    		<Switch id='mainContent'>
    		<Route exact path="/" component={Home}/>
      		<Route path="/leagues" component={Leagues}/>
      		<Route path="/tournaments" component={Tournaments}/>
      		<Route path="/players" component={Players}/>
      		<Route path="/saved" component={Saved}/>
      		</Switch>
        <Route component = {Footer} />
      		</div>
      	</Router>
  	</Provider>,
    document.getElementById('app')  
);