import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HistoricalChart } from '../api/cryptoApi'
import { Line } from "react-chartjs-2";

const CoinChart = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  // Todo remove id 
  const {id} = useParams()

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(id, days));
    setHistoricData(data.prices);
  };

  console.log(historicData);

  useEffect(() => {
    fetchHistoricData();
  }, [days]);

  return (
    <div>CoinChart
 
    </div>
  )
}

export default CoinChart