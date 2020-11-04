import React, { useState } from "react";
import axios from "axios";
import { apiKey } from "../config/config";
import {cryptoArray} from '../utils/cryptoArray.js';




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
        // console.log("apiresponse", marketData);
        //   this.setState({ name: marketData.name, rank: marketData.rank})
        // console.log("working?",  marketData[1].name)
        let finalArray = [];

        // Add the icons to the state


        console.log(marketData);

        for (let i = 0; i < cryptoArray.length; i++) {
          // console.log("state?",this.state.data)
          // console.log("namefromcArray", cryptoArray[i].name);
          for (let j = 0; j < marketData.length; j++) {
            if (cryptoArray[i].symbol === marketData[j].symbol) {
                console.log('one is matching')
                marketData[j].img = cryptoArray[i]['img']
              // console.log("matching data", marketData[j]);


              finalArray.push(marketData[j]);
            //   console.log("pls work", finalArray)
              // {name: marketData[j].name,
              // rank:marketData[j].rank}

              //concating the arrays so I can display the img//

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
              <td>{info.quotes.USD.price}    </td>
              <td>{info.quotes.USD.percent_change_1h}   </td>
              <td>{info.quotes.USD.market_cap}   </td>
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