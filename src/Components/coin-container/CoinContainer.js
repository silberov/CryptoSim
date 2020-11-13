import React, { useState } from 'react';
import CoinItem from '../coin-item/coin-item';
import './CoinContainer.css'


function CoinContainer (props) {
    // const [count, setCount] = useState(0);

    return (
        <div>
            <div className="headline">
                <p>Currency</p>
                <p>Price</p>
                <p>{props.inPortfolio ? "Balance" : "Distribution"}</p>
            </div>
            {props.portfolio.map((item) => <CoinItem item={item} />)}
        </div>
        
    );
}

export default CoinContainer;