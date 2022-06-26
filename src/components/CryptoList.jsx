import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CoinList } from '../api/cryptoApi';
import './CryptoList.css'

export const formatNumbers = (x) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const checkPrice = (p) => {
  const priceChange = Math.sign(p);
  if (priceChange === -1) {
    return "red";
  }
  return "green";
};

const CryptoList = () => {
  const [coins, setCoins] = useState([]);

  const fetchData = async () => {
    await axios.get(CoinList())
    .then((response) => {
      return response.data
    }).then((data) => {
      console.log(data);
      setCoins(data)
    }).catch((err) => {
      console.log(err);
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
              <td><Link to={`/coins/${data.id}`}>{data.name}</Link>
                <img src={data.image} alt={data.name} width="30px" height="30px" className='icon-img'/>
               </td>
              <td>{data.market_cap_rank}</td>
              <td>&#x20BD; {formatNumbers(data.current_price?.toFixed(2))}</td>
              <td className={checkPrice(data.price_change_percentage_24h)}>{formatNumbers(data.price_change_percentage_24h?.toFixed(2))}%</td>
              <td>&#x20BD; {formatNumbers(data.market_cap?.toString().slice(0, -6))} </td> 
            </tr> 
            
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoList
