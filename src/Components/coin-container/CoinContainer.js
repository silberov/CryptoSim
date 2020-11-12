import React, { useState } from 'react';
import CoinItem from '../coin-item/coin-item';
//marketData, portfolio, inPortfolio
function CoinContainer (props) {
    const matchCoins  = (portfolio, marketData) => {
        for (let i = 0; i < portfolio.length; i++) {
            for (let j = 0; j < marketData.length; j++) {

            }
        }
        // const display = 
    }
    
    
    return (
        <div>
            <div className="headline">
                <p>Currency</p>
                <p>Price</p>
                <p>{inPortfolio ? "Balance" : "Distribution"}</p>
            </div>
            {portfolio.map((coin) => {marketData.map((marketCoin) =>)coin.symbol === }<CoinItem item={coin} />)}
        </div>
        
    );
}

export default CoinContainer;