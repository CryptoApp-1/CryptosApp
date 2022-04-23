import {  Col, Row ,Typography } from 'antd'
import React from 'react'
import {Line} from 'react-chartjs-2'
import millify from 'millify'

import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

const {Title} = Typography

function LineChart({coinHistory , historyLoaded , currentPrice, coinName}) {

    const coinPrice = [];
    const coinTimestamp = [];




      if (historyLoaded === true)  { 
        for (let i = 0; i < coinHistory.history.length; i += 1) {
            coinPrice.push(coinHistory.history[i].price);
          }
          
          for (let i = 0; i < coinHistory.history.length; i += 1) {
            coinTimestamp.push(new Date((coinHistory.history[i].timestamp)*1000).toLocaleDateString());
          }
 
      }

      const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };

      const options = {
        scales: {
          xAxess:{

                  reverse: true

          },
          yAxes: 
            {
              ticks: {
                beginAtZero: true,
              },
            },
          
        },
      };

 
    
     

  return (
    <div >
         {(historyLoaded === true) ? ( 
        <>
        {console.log(coinHistory)}
        {console.log(coinTimestamp)}
      
        <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />   
        
        </>
        ) : <h1>Loading ...</h1>} 
    </div>
  )
}

export default LineChart