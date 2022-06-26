import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../api/cryptoApi';
import { checkPrice, formatNumbers} from './CryptoList';

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
      <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
        />
    </div>
  )
}

export default Crypto

