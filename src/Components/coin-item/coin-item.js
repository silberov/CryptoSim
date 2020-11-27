import React from 'react';
import NumericLabel from 'react-pretty-numbers';
import './coin-item.css'
import styled from 'styled-components'

//CSS
const CoinItemDiv= styled.div`
margin: auto;
padding: 16px;
background-color: #000F1E;
border: 1px solid rgba(223, 249, 255, 1);
display: flex;
justify-content: space-between;
align-items: center;`


const CoinNames=styled.h3 `
text-align: left;
margin: auto 24px auto 24px;
color:rgba(223, 249, 255, 1);
font-size: 1rem;`

// Component Code

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
        <CoinItemDiv>
            <div style={{display:"flex", width: "200px;"}}>
                <div className="coinSymbol">
                    <img src={props.icon} alt={`symbol of ${props.name}`}/>
                </div>
                <CoinNames>{props.name}</CoinNames>
                
            </div>
            <div className="price">
                <NumericLabel params={priceForm}>{props.marketinfo.price}</ NumericLabel>
                <p className={`${props.marketinfo.percent_change_7d > 0 
                ? 'changePos' 
                : 'changeNeg'}`}>
                        {props.marketinfo.percent_change_7d}
                </p>
            </div>
        
            <div className="investment">
                <NumericLabel params={priceForm}>{props.amount * props.marketinfo.price}</ NumericLabel>
                <p className="gray">{props.gray}</p>
            </div>
        </CoinItemDiv>
    );

}

export default CoinItem;