import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../api/cryptoApi';
import { formatNumbers } from './CryptoList';
import ReactHtmlParser from 'react-html-parser';
import CoinChart from './CoinChart';

const Crypto = () => {
  const {id} = useParams()

  const [coin, setCoin] = useState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id))
    console.log(data);
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div className='container'>
      <h1>Crypto details</h1>
      <h2>Name: {coin?.name} || Symbol: {coin?.symbol} || Category: {coin?.categories}</h2>
      <p>Current price: &#x20BD;{formatNumbers(coin?.market_data.current_price.rub)}</p>
      <p>Market cap: &#x20BD;{formatNumbers(coin?.market_data.market_cap.rub.toString().slice(0, -6))}</p>
      <p>Rank: {coin?.coingecko_rank}</p>
      <img
        src={coin?.image.large}
        alt={coin?.name}
        height="200"
      />
      <p>Description: {ReactHtmlParser(coin?.description.en.split(". ")[0])}</p>

      <CoinChart coin={coin} />
    </div>
  )
}

export default Crypto

