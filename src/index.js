import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(
		reducers, //reducers,
		{}, //estado inicial
		applyMiddleware(reduxThunk)
	)

const homeContainer = document.getElementById('home-container')

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, homeContainer);
