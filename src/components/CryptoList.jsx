import axios from 'axios'
import { useState, useEffect } from 'react'

const CryptoList = () => {
  const [coins, setCoins] = useState([]);
  const API_URL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10';

  const fetchData = async () => {
    await axios.get(API_URL)
    .then((response) => {
      return response.data;
    }).then((data)=> {
      let coinsData = data.coins
      console.log(coinsData);
      setCoins(coinsData)
    })
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
       {coins.map(data => (
        <div key={data.id}>
          <h2>{data.name}</h2>
        </div> 
       ))} 
      </div>
    </div>
  )
}

export default CryptoList
