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
     const [chartData, setChartData] = useState([]);
     const [chartLabels, setChartLabels] = useState([]);

     
useEffect(() => {
    calcGeneralSum(props.portfolio);
    //let sum = 0;
    const requests = props.portfolio.map(coin => getHistoricle(coin.id));

        //sum = sum  + coin.amount * coin.marketinfo.ath_price
    Promise.all(requests).then((output) => {
        console.log(output)
        setHistorical(output);
      });

}, []);

useEffect(() => {
    historical[0] && buildChartData(props.portfolio, historical)
}, [historical])


    const calcGeneralSum = (portfolio) => {
        let sum = 0;
        portfolio.map((coin) => sum = sum  + (coin.amount * coin.marketinfo.ath_price))
        console.log("sum", sum);
        setGeneralSum(sum);
    }

    function buildChartData(portfolio, past) {
        console.log("past", past)
        let dataInternal = [];
        let labels = [];
        for (let i = 0; i < portfolio.length; i++) {

            for (let j = 0; j < past[i].market.length; j++) {
                if (i === 0) {
                    //console.log(portfolio[i].amount * past[i].market[j].close)
                    dataInternal.push(portfolio[i].amount * past[i].market[j].close);

                    //labels.push(past[i].market[j].time_close)
                } else {
                    dataInternal[j] =  dataInternal[j] + portfolio[i].amount * past[i].market[j].close
                }
                //console.log(past[i].market[j].time_close)
                //console.log(dataInternal)
            }
        }
        console.log(dataInternal)
        setChartData(dataInternal)
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
            <ChartSum data={chartData} />
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