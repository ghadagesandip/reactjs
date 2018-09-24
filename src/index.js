import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import {BrowserRouter as Router } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/style.css'

import allReducers from './Reducers/index';

const store = createStore(allReducers, applyMiddleware(logger, thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

