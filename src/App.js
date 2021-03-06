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
      
              <Switch >
                 <Route exact path="/">
                    <Homepage />
                 </Route>
                 <Route exact path="/exchanges">
                    {/* <Exchanges  /> */}
                 </Route>
                 <Route exact path="/cryptocurrencies">
                    <Cryptocurrencies />
                 </Route>
                 <Route exact path="/crypto/:coinId">
                    <CryptoDetails />
                 </Route>
                 <Route exact path="/news">
                    <News />
                 </Route>

               
              </Switch>
            
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
