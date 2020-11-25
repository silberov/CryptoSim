import React, { useState } from "react";
import axios from "axios";
import CoinMarket from '../coin-market/coin-market';
import HowMuch from '../how-much/how-much';
import styled from 'styled-components'

//CSS
const DivBackground = styled.div`
background-color:rgba(0, 15, 30, 0.85);
text-align:center;
padding: 10px;
margin-top: 15px;
margin-bottom: 15px
`
const TitleH2 = styled.h2 `
text-shadow: 2px 2px rgba(251, 59, 108, 1);
`
const ButtonMini= styled.button `
font-family: "Space Mono";
font-weight: bold;
background-color:rgba(183, 207, 214, 1);
font-size: 0.9rem;
width: 100px;
height: 30px;
text-align: center;
`

//Component Code

const choices = [
  { id: "change24", text: "24H" },
  { id: "change1", text: "1H" },
  { id: "change7d", text: "7D" }
]

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice:"change24"
      // data: this.props.coinapi
    };
  }

  handleDateChange(event) {

    this.setState({ userChoice: event.target.value })
  }

  render(props) {
    return (
      <DivBackground>
        <div class="text">
          <TitleH2>Market data</TitleH2>
          <p>Staying up-to-date is essential when you invest in Crypto.<br></br>
          Here you can always see the market changes and current prices for each Crypto Currency.</p>
          <br></br>

        </div>
        <div>
        
          {choices.map(button => <ButtonMini value={button.id} onClick={(event) => this.handleDateChange(event)} > {button.text} </ButtonMini>)}
        </div>

        {this.props.coinapi && this.props.coinapi.map(info => (<CoinMarket coininfo={info} userChoice={this.state.userChoice} />))})
       

      </DivBackground>
    );
  }
}

export default Market;