import React from 'react';
import './coin-market.css'

class CoinMarket extends React.Component {
    constructor (props) {
        super(props);
        this.state  = {
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
        //console.log("coinmaket", props.coininfo)
    }

    render () {
        return (
            <div className='coinMarket'>
                <div className="coinSymbol">
                    <img src={this.state.icon} alt=""/>
                </div>
                <div>
                    <p className="coinName">{this.state.name}</p>
                    <div className="subinfo gray">
                        <p className="rank">{this.state.rank}</p>
                        <p className="symbol">{this.state.symbol}</p>
                    </div>
                </div>
                <div>
                    <p className={`${this.state.change24 > 0 
                        ? 'changePos' 
                        : 'changeNeg'}`}>
                            {this.state.change24} %
                    </p>
                </div>
                <div className="priceMarket">
                    <p>{this.state.price} $</p>

                </div>
            </div>
        );
    }
}

export default CoinMarket;