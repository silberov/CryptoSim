import React from 'react';
import NumericLabel from 'react-pretty-numbers';
import './coin-item.css'

class CoinItem extends React.Component {
    constructor (props) {
        super(props);
        this.state  = {
            coinInvested: {
                symbol: this.props.item.coin, 
                amount : this.props.item.amount,
                name: this.props.item.name,
                icon: this.props.item.icon,
                gray: this.props.item.gray
            },
            coinMarket: {
                price: 13636.32,
                change: -0.21
            }
            

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
            <div className='coinItem'>
                <div className="coinSymbol">
                    <img src={this.state.coinInvested.icon} alt=""/>
                </div>
                <h3>{this.state.coinInvested.name}</h3>
                <div className="price">
                    <NumericLabel params={priceForm}>{this.state.coinMarket.price}</ NumericLabel>
                    <p className={`${this.state.coinMarket.change > 0 
                    ? 'changePos' 
                    : 'changeNeg'}`}>
                         {this.state.coinMarket.change}
                    </p>
                </div>
                <div className="investment">
                    <NumericLabel params={priceForm}>{this.state.coinInvested.amount * this.state.coinMarket.price}</ NumericLabel>
                    <p className="gray">{this.state.coinInvested.gray}</p>
                </div>
            </div>
        );
    }
}

export default CoinItem;