import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const homeContainer = document.getElementById('home-container')

ReactDOM.render(<App />, homeContainer);
registerServiceWorker();
