import React, { useState } from "react";
import axios from "axios";
import CoinMarket from '../coin-market/coin-market'




class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: this.props.coinapi
    };
  }

  render(props) {
    //console.log("yo?", this.props.coinapi)
    return (
      <div>
        <div class="text">
          <h2 class="text">Current market data</h2>
          <p>Here you can see the up to date market data.</p>
          
        </div>
        <div>
          <button>1H</button>
          <button>24H</button>
          <button>7D</button>
        </div>
        
        {this.props.coinapi && this.props.coinapi.map(info => (<CoinMarket coininfo={info} />))})

        {/* <caption>
          Data Source:
          <a target="_blank" rel="noopener noreferrer" href="https://coinpaprika.com/">
            coinpaprika
          </a>
        </caption> */}
      </div>
    );
  }
}

export default Market;