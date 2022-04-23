import React,{useState,useEffect} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card,Row,Col,Input} from 'antd'
// import {useGetCryptoQuery} from '../services/crypto'

import axios from 'axios'


function Cryptocurrencies({simplified}) {

  const count = simplified ? 10 : 100

const [cryptos,setCryptos] = useState([])
const [loaded,setLoaded] = useState(false)
const [filtered,setFiltered] = useState([])
const [searchTerm,setSearchTerm]= useState('')



const options = {
  method: 'GET',
  url: `https://coinranking1.p.rapidapi.com/coins?limit=${count}`,

  headers: {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '514ac6da62mshd781ce429ba6ba7p140ecejsnaaba63690d4a'
  }
};

useEffect(()=> {
axios.request(options).then(function (response) {

  setCryptos(response.data.data.coins)

  setLoaded(true)
  setFiltered(response.data.data.coins)
  
;

}).catch(function (error) {
  console.error(error);
});
},[])


useEffect(()=> {
  if (loaded=== true){
   const filteredData = cryptos.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
  setFiltered(filteredData)

}
},[searchTerm])


  return (
    <div>
       {(loaded === true) ? ( 
        
    <>
    {!simplified && (
       <div className='search-crypto'>
         <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
       </div>
       )}
       <Row gutter={[32, 32]} className="crypto-card-container">
        {filtered.map((currency)=> ( 
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid} >
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                    <Card 
                    title={`${currency.rank}. ${currency.name}`}
                    extra={<img className='crypto-image' src={currency.iconUrl}/>}
                    hoverable
                    >
                      <p>Price: {`${millify(currency.price)} $`}</p>
                      <p>Market Cap: {millify(currency.marketCap)}</p>
                      <p>Daily Change: {millify(currency.change)}%</p>
                    </Card>
            </Link>
          </Col>
        ))}
      </Row> 
    </>
    ) : <h1>Loading ...</h1>} 
    </div>
    
  )
}

export default Cryptocurrencies