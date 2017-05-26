import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import app from './reducers/reducers';
import MainContainer from './containers/MainContainer';
import thunk from 'redux-thunk';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const store = createStore(
  app,
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
    )
)

persistStore(store, {whitelist: ['leagues', 'teams']}); //local storage

ReactDOM.render(
    <Provider store={store}>
    	<Router>
        <Route pattern='/' component={MainContainer}/>
      </Router>
  	</Provider>,
    document.getElementById('app')  
);