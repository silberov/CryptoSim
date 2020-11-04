import React, { useState } from "react";
import axios from "axios";




class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: this.props.coinapi
    };
  }

  render(props) {
    console.log("yo?", this.props.coinapi)
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

        {this.props.coinapi.map(info => {
            
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