import axios from 'axios'
import { useState, useEffect } from 'react'

const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10'

const CryptoList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async() => {
      const result = await axios.get(`${url}`)
      setItems(result.data)
      console.log(result);
    }
    fetchItems()
  }, [])

  return (
    <div>
     <h1>CryptoList</h1> 
      <section>
        {items.map((item) => (
          <h5 key={item.id} >{item.name}</h5>
        ))}
      </section>
    </div>
  )
}

export default CryptoList