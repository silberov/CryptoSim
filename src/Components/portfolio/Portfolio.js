import React, { useState } from "react";
import CoinContainer from "../coin-container/CoinContainer";

function Portfolio (props) {
    return (
        <div>
            <div>
            <h1>investment sum</h1>
            <div><p>change</p></div>
            </div>
            <div className="chart"></div>
            <CoinContainer portfolio={props.portfolioData} marketData={props.marketData} inPortfolio={true} />
        </div>
    );
}

export default Portfolio;