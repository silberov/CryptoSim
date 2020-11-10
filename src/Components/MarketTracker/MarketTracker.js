import React, { useState } from "react";
import axios from "axios";
import CoinMarket from '../coin-market/coin-market';
import HowMuch from '../how-much/how-much';





class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(props) {
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
        
        {this.props.coinapi && this.props.coinapi.map(info => (<CoinMarket coininfo={info} />))}

      </div>
    );
  }
}

export default Market;