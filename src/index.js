import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
// wrapping Router around App, so that the entire application can inherit Router's properties.

<Router>
    <App />
</Router>
, document.getElementById('root'));
