import React, { useState, useEffect } from 'react';
import CoinContainer from '../coin-container/CoinContainer';
import ChartSum from './Chart';
import NumericLabel from 'react-pretty-numbers';


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
        <div className="Portfolio">
            <div style={{fontSize: "36px", fontWeight: "bolder"}}>
                <NumericLabel params={priceForm}>{generalSum}</NumericLabel>
            </div>
            <ChartSum />
            <div className="changeButtons">
                <button>1h</button>
                <button>6h</button>
                <button>1d</button>
                <button>7d</button>
            </div>
            <CoinContainer portfolio={props.portfolio} inPortfolio={true} />
        </div>
    )

}

export default Portfolio