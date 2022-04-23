
import React, { useEffect,useState } from 'react';

import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import axios from 'axios';
import {LineChart} from '../components'



const { Title, Text } = Typography;
const { Option } = Select;

function CryptoDetails() {
      const[timePeriod,setTimePeriod]= useState('5y')
      const { coinId} = useParams()
      const [data,setData]=useState([])
      const [coinLoaded,setCoinLoaded] = useState(false)

      const [coinHistory,setCoinHistory] = useState([])
      const [historyLoaded,setHistoryLoaded] = useState(false) 

      const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];




      const options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
      
        headers: {
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          'X-RapidAPI-Key': '514ac6da62mshd781ce429ba6ba7p140ecejsnaaba63690d4a'
        }
      };
      
      useEffect(()=> {
      axios.request(options).then(function (response) {
      
        setData(response.data.data.coin)

        setCoinLoaded(true)
        
      ;
      
      }).catch(function (error) {
        console.error(error);
      });
      },[])


//   hostory coin fetching ---------------------
      const optionss = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${coinId}/history`,
        params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: timePeriod},
        headers: {
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          'X-RapidAPI-Key': '514ac6da62mshd781ce429ba6ba7p140ecejsnaaba63690d4a'
        }
      };
      
      useEffect(()=> {
      axios.request(optionss).then(function (response) {
      
         setCoinHistory(response.data.data)
        console.log(response.data.data)
        setHistoryLoaded(true)

        
      ;
      
      }).catch(function (error) {
        console.error(error);
      });
      },[timePeriod])












      const stats = coinLoaded === true ? [
        { title: 'Price to USD', value: `$ ${data.price && millify(data.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: data.rank, icon: <NumberOutlined /> },
        { title: 'Market Cap', value: `$ ${data.marketCap && millify(data.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${data.allTimeHigh.price && millify(data.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
      ] : [];
    
      const genericStats = coinLoaded === true ?  [
        { title: 'Number Of Markets', value: data.numberOfMarkets, icon: <FundOutlined /> },
        { title: 'Number Of Exchanges', value: data.numberOfExchanges, icon: <MoneyCollectOutlined /> },
        { title: 'Aprroved Supply', value: data.supply.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Supply', value: `$ ${data.supply.total && millify(data.supply.total)}`, icon: <ExclamationCircleOutlined /> },
        { title: 'Circulating Supply', value: `$ ${data.supply.circulating && millify(data.supply.circulating)}`, icon: <ExclamationCircleOutlined /> },
      ] : [];



      
  return (
    

     <div>
        {(coinLoaded === true && historyLoaded === true) ? ( 

        <Col className="coin-detail-container">
      <     Col className="coin-heading-container">
              <Title level={2} className="coin-name">
                {data.name} ({data.symbol}) Price
              </Title>
             <p>{data.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
            </Col>
            <Select defaultValue={timePeriod} className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimePeriod(value)}>
        {time.map((date) => <Option key={date}>{date}</Option>)}
      </Select>
      <LineChart coinHistory={coinHistory} historyLoaded={historyLoaded}  currentPrice={millify(data.price)} coinName={data.name} />

      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">{data.name} Value Statistics</Title>
            <p>An overview showing the statistics of {data.name}, such as the base and quote currency, the rank, and trading volume.</p>
          </Col>
          {stats.map(({ icon, title, value }) => (
           
            <Col className="coin-stats" key={title}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">Other Stats Info</Title>
            <p>An overview showing the statistics of {data.name}, such as the base and quote currency, the rank, and trading volume.</p>
          </Col>
          {genericStats.map(({ icon, title, value }) => (
            <Col className="coin-stats" key={title}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
      </Col>
      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading">What is {data.name}?</Title>
          {HTMLReactParser(data.description)}
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">{data.name} Links</Title>
          {data.links.map((link ,id) => (
            <Row className="coin-link" key={id}>
              <Title level={5} className="link-name">{link.type}</Title>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </Row>
          ))}
        </Col>
      </Col>
      </Col>

) : <h1>Loading ...</h1>} 
     </div>
    
   
  )
}

export default CryptoDetails