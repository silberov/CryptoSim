import React from 'react';
import './coin-market.css'

class CoinMarket extends React.Component {
    constructor (props) {
        super(props);
        this.state  = {
            coinMarket: {
                icon: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1.png',
                name: "Bitcoin",
                rank: 1,
                symbol: "BTC",
                price: 13636.32,
                change1: -0.21,
                change24: 3.63,
                change7d: 12.17,
                supply: 18528331,
            }
        }
    }
    render () {
        return (
            <div className='coinMarket'>
                <div className="coinSymbol">
                    <img src={this.state.coinMarket.icon} alt=""/>
                </div>
                <div>
                    <p className="coinName">Bitcoin</p>
                    <div className="subinfo gray">
                        <p className="rank">{this.state.coinMarket.rank}</p>
                        <p className="symbol">{this.state.coinMarket.symbol}</p>
                    </div>
                </div>
                <div>
                    <p className={`${this.state.coinMarket.change24 > 0 
                        ? 'changePos' 
                        : 'changeNeg'}`}>
                            {this.state.coinMarket.change24} %
                    </p>
                </div>
                <div className="priceMarket">
                    <p>{this.state.coinMarket.price} $</p>

                </div>
            </div>
        );
    }
}

export default CoinMarket;