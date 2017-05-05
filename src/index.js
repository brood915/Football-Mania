import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import app from './reducers/reducers';
import MainContainer from './containers/MainContainer';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const store = createStore(app);

ReactDOM.render(
    <Provider store={store}>
    	<Router>
        <Route pattern='/' component={MainContainer}/>
      </Router>
  	</Provider>,
    document.getElementById('app')  
);