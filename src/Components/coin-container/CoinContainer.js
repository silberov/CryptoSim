import React, { useState } from 'react';
import CoinItem from '../coin-item/coin-item';
import './CoinContainer.css'


function CoinContainer (props) {
    //console.log('re-render', props)
    return (
        <div>
            <div className="headline">
                <p>Currency</p>
                <p>Price</p>
                <p>{props.inPortfolio ? "Balance" : "Distribution"}</p>
            </div>
            {props.portfolio && props.portfolio.map((item) => 
            <CoinItem name={item.name} 
            icon={item.icon} 
            marketinfo={item.marketinfo}
            amount={item.amount}
            gray={props.inPortfolio ? (`${Math.round(item.amount * 100) / 100} ${item.symbol}`) : item.procent}/>)}
        </div>
        
    );
}

export default CoinContainer;