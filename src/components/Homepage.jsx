import React, { useState, useEffect } from 'react'
import millify from 'millify'
import {Typography, Row, Col, Statistic} from 'antd'
import {Link} from 'react-router-dom'
import {Cryptocurrencies} from '../components'
import {News} from '../components'
import axios from 'axios'

const { Title}  = Typography


function Homepage() {


  const [bigData, setBigData] = useState({})
  const [loaded, setLoaded] = useState("false")

  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
  
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': '514ac6da62mshd781ce429ba6ba7p140ecejsnaaba63690d4a'
    }
  };
  
useEffect(()=> {
  axios.request(options).then(function (response) {

    setBigData(response.data.data)
    

    
;

  }).catch(function (error) {
    console.error(error);
  });
}, [])

console.log(bigData)






  return (

    <div>
    {(bigData.stats !== undefined) ? (
    <div>
      
      
      <Title level={2} className="heading"> Global Crypto Stats</Title>
        <Row>
            <Col span={12}> <Statistic title="Total Cryptocurrencies" value={millify(bigData.stats.total)}></Statistic></Col>
            <Col span={12}> <Statistic title="Total Exchanges" value={millify(bigData.stats.totalExchanges)}></Statistic></Col>
            <Col span={12}> <Statistic title="Total Market Cap" value={millify(bigData.stats.totalMarketCap)}></Statistic></Col>
            <Col span={12}> <Statistic title="Total 24h Volume" value={millify(bigData.stats.total24hVolume)}></Statistic></Col>
            <Col span={12}> <Statistic title="Total Markets" value={millify(bigData.stats.totalMarkets)}></Statistic></Col>
        </Row>
        <div className='home-heading-container'> 
          <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>        
          <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>        
         </div>
      <Cryptocurrencies simplified />
        <div className='home-heading-container'> 
          <Title level={2} className="home-title">Latest Crypto News</Title>        
          <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>        
         </div>
      <News simplified  />
    </div>
    
    ) : <h1>Loading ...</h1>}
  
  </div> 
  )
}

export default Homepage