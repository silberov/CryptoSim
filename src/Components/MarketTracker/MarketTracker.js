import React, { useState } from "react";
import axios from "axios";
import CoinMarket from '../coin-market/coin-market';
import HowMuch from '../how-much/how-much';




const choices = [
  { id: "change24", text: "24H" },
  { id: "change1", text: "1H" },
  { id: "change7d", text: "7D" }
]

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: this.props.coinapi
    };
  }

  handleDateChange(event) {

    this.setState({ userChoice: event.target.value })
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

          {choices.map(button => <button value={button.id} onClick={(event) => this.handleDateChange(event)} > {button.text} </button>)}
        </div>
<<<<<<< HEAD

        {this.props.coinapi && this.props.coinapi.map(info => (<CoinMarket coininfo={info} userChoice={this.state.userChoice} />))})
=======
        
        {this.props.coinapi && this.props.coinapi.map(info => (<CoinMarket coininfo={info} />))}
>>>>>>> 5c0fbdf76e44f7b1bf149cbf7520c617f16361ae


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