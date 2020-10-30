import React from 'react';
import './coin-item.css'

class CoinItem extends React.Component {
    constructor (props) {
        super(props);
        this.state  = {
            coinInvested: {
                symbol: "BTC", 
                amount : 3,
            },
            coinMarket: {
                icon: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1.png',
                price: 13636.32,
                change: -0.21
            }

        }
    }
    render () {
        return (
            <div className='coinItem'>
                <div className="coinSymbol">
                    <img src={this.state.coinMarket.icon} alt=""/>
                </div>
                <h3>Bitcoin</h3>
                <div className="price">
                    <p>{this.state.coinMarket.price} $</p>
                    <p className={`${this.state.coinMarket.change > 0 
                    ? 'changePos' 
                    : 'changeNeg'}`}>
                         {this.state.coinMarket.change}
                    </p>
                </div>
                <div className="investment">
                    <p>{this.state.coinInvested.amount * this.state.coinMarket.price} $</p>
                    <p className="gray">{this.state.coinInvested.amount} {this.state.coinInvested.symbol}</p>
                </div>
            </div>
        );
    }
}

export default CoinItem;