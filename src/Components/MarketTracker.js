import React, { useState } from "react";
import btc from "../Images/btc.svg";
import eth from "../Images/eth.svg";
import link from "../Images/link.svg";
import ada from "../Images/ada.svg";
import xmr from "../Images/xmr.svg";
import tether from "../Images/usdt.svg";
import cro from "../Images/cro.svg";
import cosmos from "../Images/atom.svg";
import uni from "../Images/uni.png";
import binance from "../Images/bnb.svg";
import axios from "axios";
let cryptoArray = [
  { name: "Bitcoin", img: btc, symbol: "BTC" },
  { name: "Ethereum", img: eth, symbol: "ETH" },
  { name: "Chainlink", img: link, symbol: "LINK" },
  { name: "Cardano", img: ada, symbol: "ADA" },
  { name: "Monero", img: xmr, symbol: "XMR" },
  { name: "Tether", img: tether, symbol: "USDT" },
  { name: "Crypto.com", img: cro, symbol: "CRO" },
  { name: "Cosmos", img: cosmos, symbol: "ATOM" },
  { name: "Uniswap", img: uni, symbol: "UNI" },
  { name: "Binance", img: binance, symbol: "BNB" },
];
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
          "x-rapidapi-key": "881aac81e1msh5b35cf46c5be8fcp1aafdbjsnec347adc64a7",
        },
      })
      .then((response) => {
        const marketData = response.data;
        // console.log("apiresponse", marketData);
        //   this.setState({ name: marketData.name, rank: marketData.rank})
        // console.log("working?",  marketData[1].name)
        let finalArray = [];
        for (let i = 0; i < cryptoArray.length; i++) { // console.log("state?",this.state.data)
          // console.log("namefromcArray", cryptoArray[i].name);
          for (let j = 0; j < marketData.length; j++) {
            if (cryptoArray[i].symbol === marketData[j].symbol) {
              // console.log("matching data", marketData[j]);


              finalArray.push(marketData[j]);
              console.log("pls work", finalArray)
              // {name: marketData[j].name,
              // rank:marketData[j].rank}
              this.setState({ data: finalArray });
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    // console.log("array works outside", cryptoArray);
    console.log("state?", this.state.data)
   

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
            <li>Name</li>
            <li>Price</li>
            <li>Change (24h)</li>
            <li scope="col">Market Cap</li>
          </ul>
        </thead>
        <tbody>



          {this.state.data.map(info => {
            return (<tr><td>{info.rank}</td>
              <td>{info.img}</td>
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