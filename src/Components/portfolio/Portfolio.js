import React, { useState, useEffect } from 'react';
import CoinContainer from '../coin-container/CoinContainer';
import ChartSum from './Chart';
import NumericLabel from 'react-pretty-numbers';


function Portfolio(props) {
     const [generalSum, setGeneralSum] = useState(0);
     const [historical, setHistorical] = useState([]);
     const [lebil, setLebil] = useState(0);
     let marketData = [];
     
useEffect(() => {
    calcGeneralSum(props.portfolio);
}, []);


    const calcGeneralSum = (portfolio) => {
        let sum = 0;

        for (let i = 0; i < portfolio.length; i++) {
            sum = sum + (portfolio[i].amount * portfolio[i].marketinfo.ath_price);
            getHistoricle(portfolio[i].id);            
        }
        setGeneralSum(sum);

    }
    let today = new Date(),
     startDate = today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate(),
     endDate = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + (today.getDate()-1);

const getHistoricle = (coinid) => {
    console.log('historical', historical)
    // let market = [];
    fetch(`https://api.coinpaprika.com/v1/coins/${coinid}/ohlcv/historical?start=${startDate}&end=${endDate}`)
    .then(resp => resp.json())
    //.then((data) => console.log(data))
    .then((re) => {
        console.log("resp", re)
        // market = {id: coinid, data: re};
        setHistorical([...historical, {id: coinid, data: re}])
        // console.log("test", [...historical, =]);
        // setLebil(lebil + 1);

    });
    // return market;
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



    console.log("historical", historical)
    console.log('hello')
    return(
        <div className="Portfolio">
            <div style={{fontSize: "36px", fontWeight: "bolder"}}>
                <NumericLabel  params={priceForm}>{generalSum}</NumericLabel>
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