import React, { useState } from 'react';
import cryptoArray from './crypto';
import axios from 'axios';
function Market() {


  const [coins, setCoins] = useState();
  function getCoinData() {

   fetch('https://coinpaprika1.p.rapidapi.com/tickers', {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
        "x-rapidapi-key": "881aac81e1msh5b35cf46c5be8fcp1aafdbjsnec347adc64a7"
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data));

    let coinData = data
    console.log("hey",coinData)


  }

  getCoinData()


  function getMarketData() {

    const url = "https://coinpaprika1.p.rapidapi.com/global"
    axios.get(url, {
      "headers": {
        "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
        "x-rapidapi-key": "881aac81e1msh5b35cf46c5be8fcp1aafdbjsnec347adc64a7"
      }
    })
      .then(response => {

        const marketData = response.data;
        console.log("what?", marketData)
      })
      .catch(err => {
        console.log(err);
      });
  }

  // getMarketData()


  return (
    <div>
      <div class="text">
        <h2 class="text">Current market data</h2>
        <p>Here you can see the up to date market data.</p>
      </div>

      <thead className="thead-dark">
        <ul>
          <li scope="col">Rank</li>

          <li scope="col">Logo</li>
          <li scope="col">Name</li>
          <li scope="col">Price</li>
          <li scope="col">Market Cap</li>
        </ul>
      </thead>


      <button>next</button>



      <caption>Data Source:
                      <a target="_blank" rel="noopener noreferrer" href="https://coinpaprika.com/">coinpaprika</a>
      </caption>

    </div>


  )

}

export default Market;
