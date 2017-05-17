import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import app from './reducers/reducers';
import MainContainer from './containers/MainContainer';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const store = createStore(
  app,
  compose(autoRehydrate())
)

persistStore(store); //local storage

ReactDOM.render(
    <Provider store={store}>
    	<Router>
        <Route pattern='/' component={MainContainer}/>
      </Router>
  	</Provider>,
    document.getElementById('app')  
);