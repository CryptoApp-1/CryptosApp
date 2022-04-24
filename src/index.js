import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'


import App from './App';
import 'antd/dist/antd.css'



ReactDOM.render(
    <Router basename='/CryptosApp'>

        <App />

    </Router>
,
  document.getElementById('root')
);


