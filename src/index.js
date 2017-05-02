import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './containers/MainContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import app from './reducers/reducers';

const store = createStore(app);

ReactDOM.render(
    <Provider store={store}>
    	<MainContainer />
  	</Provider>,
    document.getElementById('app')  
);