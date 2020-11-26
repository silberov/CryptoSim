import React, { useState } from 'react';
import CoinContainer from '../coin-container/CoinContainer';
import ChartSum from './Chart';
import styled from 'styled-components';

//CSS

const ButtonMini= styled.button `
font-family: "Space Mono";
font-weight: bold;
background-color:rgba(183, 207, 214, 1);
font-size: 0.9rem;
width: 100px;
height: 30px;
text-align: center;
`




function Portfolio(props) {
    console.log(props)

    // const [generalSum, setGeneralSum] = useState(0);
    // const [generalChange, setGeneralChange] = useState(0);

    // const calcGeneralSum = (portfolio) => {
    //     let sum = 0;
    //     for (let i = 0; i < portfolio.length; i++) {
    //         sum = sum + (portfolio[i].amount * portfolio[i].marketinfo.ath_price);
    //     }
    //     return sum;
    // }

    // const calcGeneralChange = (portfolio, time) => {
    //     let chnage = 0;
    //     for (let i = 0; i < portfolio.length; i++) {
    //         chnage = chnage + portfolio[i].marketinfo[`percent_change_${time}`];
    //     }
    //     return chnage;
    // }

    // setGeneralSum(calcGeneralSum(props.portfolio));
    // setGeneralChange(calcGeneralChange(props.portfolio, "6h"))

    //generalChange = generalChange + (props.portfolio[i].marketinfo.percent_change_6h)

    return(
        <div className="Portfolio">
            <div>
                {/* <h2>{generalSum}</h2>
                <p>{generalChange}</p> */}
            </div>
            <ChartSum />
            <div className="changeButtons">
                <ButtonMini>1h</ButtonMini>
                <ButtonMini>6h</ButtonMini>
                <ButtonMini>1d</ButtonMini>
                <ButtonMini>7d</ButtonMini>
            </div>
            <CoinContainer portfolio={props.portfolio} inPortfolio={true} />
        </div>
    )

}

export default Portfolio