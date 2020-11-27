import React from 'react';
import NumericLabel from 'react-pretty-numbers';
import './coin-market.css';
import styled from 'styled-components'
import CoinItem from '../coin-item/coin-item';


//CSS
const CoinNames=styled.h3 `
color:rgba(223, 249, 255, 1);
font-size: 1rem;`

const CoinItemDiv= styled.div`
margin: auto;
padding: 16px;
background-color: #000F1E;
border: 1px solid rgba(223, 249, 255, 1);
display: flex;
justify-content: space-between;
align-items: center;`

//Copmponent Code
class CoinMarket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: props.coininfo.img,
            name: props.coininfo.name,
            rank: props.coininfo.rank,
            symbol: props.coininfo.symbol,
            price: props.coininfo.quotes.USD.price,
            change1: props.coininfo.quotes.USD.percent_change_1h,
            change24: props.coininfo.quotes.USD.percent_change_24h,
            change7d: props.coininfo.quotes.USD.percent_change_7d,
            supply: props.coininfo.total_supply,
        }
        
    }

    render () {

        const priceForm = {
            'justification': 'R',
            'locales': 'en-US',
            'currency':true,
            'currencyIndicator': 'USD',
            'precision': 2,
            'wholenumber': null,
            'commafy': true,
            'shortFormat': true,
            'shortFormatMinValue': 10000,
            'shortFormatPrecision': 1,
            };

        return (
            <CoinItemDiv>
                <div style={{display: "flex", alignItems:"center"}}>
                <div className="coinSymbol">
                    <img src={this.state.icon} alt="" />
                </div>
                <div>
                    <CoinNames>{this.state.name}</CoinNames>
                    <div className="subinfo gray">
                        <p className="rank">{this.state.rank}</p>
                        <p className="symbol">{this.state.symbol}</p>
                    </div>
                </div>
                </div>
                <div>
                    <p className={`${this.state[this.props.userChoice] > 0
                        ? 'changePos'
                        : 'changeNeg' }`}>
                        {this.state[this.props.userChoice]} %
                    </p>
                </div>
                <div className="priceMarket">
                    <NumericLabel params={priceForm}>{this.state.price}</NumericLabel>

                </div>
            </CoinItemDiv>
        );
    }
}

export default CoinMarket;