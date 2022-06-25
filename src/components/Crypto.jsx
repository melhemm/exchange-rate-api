import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { checkPrice, formatNumbers } from './CryptoList';

// console.log(formatNumbers(4567891313)); 

const Crypto = () => {
  const params = useParams()

  const [crypto, setCrypto] = useState('')

  const API_URL = `https://api.coinstats.app/public/v1/coins/${params.id}`;

  const fetchDataById = async () => {
    await axios.get(API_URL)
    .then((response) => {
      return response.data;
    }).then((data)=> {
      let coinsData = data.coin
      console.log(coinsData);
      setCrypto(coinsData)
      let priceText = coinsData.price
      console.log((priceText.toFixed(2)))
    }).catch((err) => {
      console.log(err)
    })
  };

  useEffect(() => {
    fetchDataById()
    console.log("Params", params);
  }, [params])

  

  return (
    <div className='container'>
      <h1>Crypto details</h1>
      <img src={crypto.icon} alt={crypto.name} width="30px" height="30px" className='icon-img'/>
      <h3>{crypto.name}</h3>
      <h4>{crypto.rank}</h4>
      <p>&#36; {crypto.price}</p>
      <p>{crypto.priceChange1d}</p>
      <p>{crypto.priceChange1h}</p>
      <p>{crypto.priceChange1w}</p>
      <p>&#36;{crypto.marketCap}</p>
      <p>&#36;{crypto.totalSupply}</p>
      <p>{crypto.websiteUrl}</p>
    </div>
  )
}

export default Crypto

