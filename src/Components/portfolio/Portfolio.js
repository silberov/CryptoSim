import React, { useState, useEffect } from 'react';
import CoinContainer from '../coin-container/CoinContainer';
import ChartSum from './Chart';
import styled from 'styled-components';
import NumericLabel from 'react-pretty-numbers';


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

const SumDisplay=styled.div`
text-shadow: 2px 2px rgba(251, 59, 108, 1);
font-size:36px;
font-weight:bolder;
text-align:center;

`


const DivBackground = styled.div`
background-color:rgba(0, 15, 30, 0.85);
text-align:center;
padding: 10px;
margin-top: 50px;
`


const getHistoricle = (coinid) => {
    let today = new Date(),
     startDate = today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate(),
     endDate = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + (today.getDate()-1);

    return fetch(`https://api.coinpaprika.com/v1/coins/${coinid}/ohlcv/historical?start=${startDate}&end=${endDate}`)
    .then(resp => resp.json())
    //.then((data) => console.log(data))
    .then((data) => {
        //console.log("resp", data)
        // console.log({id: coinid, market: data})
        return {id: coinid, market: data}
    });

}    

function Portfolio(props) {
     const [generalSum, setGeneralSum] = useState(0);
     const [historical, setHistorical] = useState([]);
 

     
useEffect(() => {
    calcGeneralSum(props.portfolio);

    const requests = props.portfolio.map(coin => getHistoricle(coin.id));
        // console.log(getHistoricle(coin.id))
        //sum = sum  + coin.amount * coin.marketinfo.ath_price
    Promise.all(requests).then((output) => {
        console.log(output)
        setHistorical(output);
      });

}, []);


    const calcGeneralSum = (portfolio) => {
        let sum = 0;


        setGeneralSum(sum);

    }



    const priceForm = {
        'justification': 'L',
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



    //console.log("historical", historical)
    //console.log('hello')
    return(
        <DivBackground>
            <SumDisplay>
                <NumericLabel params={priceForm}>{generalSum}</NumericLabel>
            </SumDisplay>
            <ChartSum />
            <div className="changeButtons">
                <ButtonMini>1h</ButtonMini>
                <ButtonMini>6h</ButtonMini>
                <ButtonMini>1d</ButtonMini>
                <ButtonMini>7d</ButtonMini>
            </div>
            <CoinContainer portfolio={props.portfolio} inPortfolio={true} />
        </DivBackground>
    )

}

export default Portfolio