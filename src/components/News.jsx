import React, { useState ,useEffect } from 'react'
import { Select, Typography, Row, Col, Avatar, Card} from 'antd'
import moment from 'moment'
import axios from "axios";

const  {Text, Title} = Typography
const { Option } = Select

function News({simplified }) {

  const [newsCategory,setNewsCategory]= useState('Cryptocurrency')
  const count = simplified ? 6 : 22
  const [cryptoNews,setCryptoNews] = useState([])
  const [loaded,setLoaded] = useState(false)
  const [cryptos,setCryptos]=useState({})
  const [coinsLoaded,setCoinsLoaded]=useState(false)
  
  const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

  const options = {
    method: 'GET',
    url: `https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&freshness=Day&count=${count}`,  
    params: {safeSearch: 'Off', textFormat: 'Raw'},
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
      'X-RapidAPI-Key': '514ac6da62mshd781ce429ba6ba7p140ecejsnaaba63690d4a'
    }
  };
  useEffect(()=> {
  axios.request(options).then(function (response) {
    console.log(response.data);
    setCryptoNews(response.data)
    setLoaded(true)
  }).catch(function (error) {
    console.error(error);
  });

  
},[newsCategory])

const optionss = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins?limit=50',

  headers: {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '514ac6da62mshd781ce429ba6ba7p140ecejsnaaba63690d4a'
  }
};

useEffect(()=> {
axios.request(optionss).then(function (response) {

  setCryptos(response.data.data.coins)
  setCoinsLoaded(true)
;

}).catch(function (error) {
  console.error(error);
});
},[])


  return (
    <div>
      {(loaded === true && coinsLoaded === true) ? ( 
      <>
      <Row gutter={[ 24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {cryptos.map((currency) => <Option value={currency.name} key={currency.uuid}>{currency.name}</Option>)}
            {console.log(newsCategory)}
          </Select>
        </Col>
      )}

      { cryptos === undefined ? console.log('not yet') : console.log(cryptos)}
        {cryptoNews.value.map((news, i)=> (
          <Col xs={24} sm={12} lg={8} key={i} >
            <Card hoverable className='news-card'>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>{news.name}</Title>
                  <img  style={{maxWidth: '200px' , maxHeight: '100px'}}  src={  news.image === undefined ? demoImage : news.image.thumbnail.contentUrl} alt="" />
                </div>
                <p>
                  {news.description > 100 ? `${news.description.substring(0, 100)} ...` : news.description}
                </p>
                <div>
                   <div>
                      <Avatar src={news.provider[0].image === undefined ? demoImage : news.provider[0].image.thumbnail.contentUrl}  alt=''/>
                      <Text className='provider-name'>{news.provider[0].name}</Text>
                   </div>
                      <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
                </div>
              </a>
                
            </Card>
          </Col>
        ))}

      </Row>

      </>
          ) : <h1>Loading ...</h1>} 
    </div>
  )
}

export default News