import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './CryptoList.css'

export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const checkPrice = (p) => {
  const priceChange = Math.sign(p);
  if (priceChange === -1) {
    return "&#8595";
  }
  return "&#8593";
};


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
    }).catch((err) => {
      console.log(err)
    })
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Rank</th>
            <th>Price</th>
            <th>Change 24h</th>
            <th>MarketCap</th>
          </tr>
          {coins.map(data => (
            <tr key={data.id}>
              <td>{data.name}
                <img src={data.icon} alt={data.name} width="30px" height="30px" className='icon-img'/>
              </td>
              <td>{data.rank}</td>  
              <td>{formatNumbers(data.price.toFixed(2))} &#36;</td>
              <td className={checkPrice(data.priceChange1d)}>
                {data.priceChange1d}
              </td>
              <td>{formatNumbers(data.marketCap.toFixed(2))} &#36;</td>
            </tr> 
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoList
