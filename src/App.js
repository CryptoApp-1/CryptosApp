import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import {Switch, Route, Link, Routes } from 'react-router-dom'
import {Layout, typography, Space, Typography} from 'antd'
import {Navbar,Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News}  from './components';
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

function App() {  




  return (
     <>
    <div className='app'>
      <div className='navbar'>
      <Navbar/>
      </div>
      <div className='main'>
        <Layout>
           <div className='routes'>
          {/* <BrowserRouter basename='/CryptosApp '> */}
              <Switch >
                 <Route exact path="/CryptosApp/">
                    <Homepage />
                 </Route>
                 <Route exact path="/CryptosApp/exchanges">
                    {/* <Exchanges  /> */}
                 </Route>
                 <Route exact path="/CryptosApp/cryptocurrencies">
                    <Cryptocurrencies />
                 </Route>
                 <Route exact path="/CryptosApp/crypto/:coinId">
                    <CryptoDetails />
                 </Route>
                 <Route exact path="/CryptosApp/news">
                    <News />
                 </Route>
               <Redirect from='/' to='/CryptosApp/'/>
              </Switch>
              {/* </BrowserRouter> */}
           </div>
        </Layout>
      </div>
    
    
    </div>
      <div className='footer' >
      <Typography.Title level={5} style={{color: 'white', textAlign:'center'}} >
            CryptoApp <br/>
            All rights reserverd
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          {/* <Link to='/exchanges'>Exchanges</Link> */}
          <Link to='/news'>News</Link>
        </Space>
      </div>
</>
  )
}

export default App
