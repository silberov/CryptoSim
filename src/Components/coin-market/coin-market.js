import React from 'react';
import NumericLabel from 'react-pretty-numbers';
import './coin-market.css';

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
                            {this.state.change24}%
                    </p>
                </div>
                <div className="priceMarket">
                    <NumericLabel params={priceForm}>{this.state.price}</NumericLabel>

                </div>
            </div>
        );
    }
}

export default CoinMarket;