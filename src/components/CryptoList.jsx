import axios from 'axios'
import React, { useState, useEffect } from 'react'

const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10'

// const [cryptos, setCryptos] = useState([])

const fetchData = async() => {
  try {
    const response = await axios.get(url)

    console.log(response);
  } catch (error) {
    console.log(error);
  }
} 

fetchData()

const CryptoList = () => {

  return (
    <div>CryptoList</div>
  )
}

export default CryptoList