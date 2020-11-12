import React, { useState } from "react";
import CoinContainer from "../coin-container/CoinContainer";

function Portfolio () {
    return (
        <div>
            <div>
            <h1>investment sum</h1>
            <div><p>change</p></div>
            </div>
            <div className="chart"></div>
            <CoinContainer />
            
        </div>
    );
}

export default Portfolio;