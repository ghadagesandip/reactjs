import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/style.css'
import {BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();

