import React, { useState } from "react";
import axios from "axios";
import {cryptoArray} from '../utils/crypto.js';
import {apiKey} from '../config/config';

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const url = "https://coinpaprika1.p.rapidapi.com/tickers";
    axios
      .get(url, {
        headers: {
          "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      })
      .then((response) => {
        const marketData = response.data;
        let finalArray = [];

        // Add the icons to the statt
        let newArray = marketData.filter(market => cryptoArray.some((crypto => crypto.symbol === market.symbol)));
        newArray = [...marketData, ...newArray];
        console.log("newArray:", newArray);
        this.setState({data:newArray});

      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    // console.log("array works outside", cryptoArray);
    // console.log("state?", this.state.data)


    return (
      <div>
        <div class="text">
          <h2 class="text">Current market data</h2>
          <p>Here you can see the up to date market data.</p>
        </div>
        <thead className="thead-dark">
          <ul>
            <li>Rank</li>
            <li>Logo</li>
            <li>Coin</li>
            <li>Name</li>
            <li>Price</li>
            <li>Change (24h)</li>
            <li scope="col">Market Cap</li>
          </ul>
        </thead>
        <tbody>



          {this.state.data.map(info => {
            
            return (<tr><td>{info.rank}</td>
             <td><img src={info.img} width="25" height="25" className="d-inline-block align-top" alt="" /></td>
              <td>{info.symbol}</td>
              <td>{info.name}</td>
              <td>{info.quotes.USD.price}</td>
              <td>{info.quotes.USD.percent_change_1h}</td>
              <td>{info.quotes.USD.market_cap}</td>
            </tr>)
          }



          )}

          <td></td>
          <td></td>
          <td></td>
          <td></td>


        </tbody>
        <button>next</button>
        <caption>
          Data Source:
          <a target="_blank" rel="noopener noreferrer" href="https://coinpaprika.com/">
            coinpaprika
          </a>
        </caption>
      </div>
    );
  }
}
export default Market;