import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { checkPrice, formatNumbers } from './CryptoList';

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
    }).catch((err) => {
      console.log(err)
    })
  };

  useEffect(() => {
    fetchDataById()
    console.log("Params", params);
  }, [params])

  

  return (
    <div>
      <h1>Crypto details</h1>
      <h3>{crypto.name}</h3>
      <h4>{crypto.rank}</h4>
      <p>&#36;{crypto.price}</p>
    </div>
  )
}

export default Crypto

