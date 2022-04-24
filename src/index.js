import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router} from 'react-router-dom'
import { HashRouter } from 'react-router-dom';


import App from './App';
import 'antd/dist/antd.css'



ReactDOM.render(
    <HashRouter  basename='/CryptosApp'>

        <App />

    </HashRouter >
,
  document.getElementById('root')
);


