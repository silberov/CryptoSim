import React, { useState } from 'react';
import CoinItem from '../coin-item/coin-item';
import './CoinContainer.css'
import styled from 'styled-components';

//CSS

const MiniDiv=styled.div`
background-color:rgba(0, 15, 30, 1);
display: flex;
justify-content: space-between;
font-size: 12px;
`
const MiniDisplay=styled.p`

color:rgba(251, 59, 108, 1)`

function CoinContainer (props) {
    //console.log('re-render', props)
    return (
        <div>
            <MiniDiv>
                <MiniDisplay>Currency</MiniDisplay>
                <MiniDisplay>Price</MiniDisplay>
                <MiniDisplay>{props.inPortfolio ? "Balance" : "Distribution"}</MiniDisplay>
            </MiniDiv>
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