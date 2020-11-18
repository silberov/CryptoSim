import React from 'react';
import NumericLabel from 'react-pretty-numbers';
import './coin-item.css'

function CoinItem (props) {

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
    const amountForm = {
        'justification': 'R',
        'locales': 'en-US',
        'currency':true,
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
                <img src={props.icon} alt={`symbol of ${props.name}`}/>
            </div>
            <h3>{props.name}</h3>
            <div className="price">
                <NumericLabel params={priceForm}>{props.marketinfo.ath_price}</ NumericLabel>
                <p className={`${props.marketinfo.percent_change_7d > 0 
                ? 'changePos' 
                : 'changeNeg'}`}>
                        {props.marketinfo.percent_change_7d}
                </p>
            </div>
            <div className="investment">
                <NumericLabel params={priceForm}>{props.amount * props.marketinfo.ath_price}</ NumericLabel>
                <p className="gray">{props.gray}</p>
            </div>
        </div>
    );

}

export default CoinItem;