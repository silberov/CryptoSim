import React from 'react';

class CoinItem extends React.Component {
    constructor (props) {
        super(props);
        this.state  = {
            coinInvested: {
                symbol: "BTC", 
                amount : 3,
            },
            coinMarket: {
                price: 13636.32,
                change: -0.21
            }

        }
    }
    render () {
        return (
            <div>
                <div className="coinSymbol"></div>
                <h3>Bitcoin</h3>
                <div className="price">
                    <p>{this.state.coinMarket.price}</p>
                    <p className={`${this.state.coinMarket.change > 0 
                    ? 'changePos' 
                    : 'changeNeg'}`}>
                         {this.state.coinMarket.change}
                    </p>
                </div>
                <div className="investment">
                    <p>{}</p>
                    <p>{this.state.coin.amount}+" "{this.state.coin.symbol}+</p>
                </div>
            </div>
        );
    }
}

export default CoinItem;