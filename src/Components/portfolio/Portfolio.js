import React, { useState, useEffect } from 'react';
import CoinContainer from '../coin-container/CoinContainer';
import ChartSum from './Chart';
import NumericLabel from 'react-pretty-numbers';


function Portfolio(props) {
    //console.log("props",props)

     const [generalSum, setGeneralSum] = useState(0);
     const [historical, setHistorical] = useState([]);
     const [lebil, setLebil] = useState(0)
     
    // const [generalChange, setGeneralChange] = useState(0);
useEffect(() => {
    //setGeneralSum(calcGeneralSum(props.portfolio));
    calcGeneralSum(props.portfolio)
    

}, []);



// useEffect(() => {
//     let today = new Date(),
//     startDate = today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate(),
//     endDate = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + (today.getDate()-1);
//     console.log(startDate, endDate); 
// },[])

    const calcGeneralSum = (portfolio) => {
        let sum = 0;
        let marketData = [];
        for (let i = 0; i < portfolio.length; i++) {
            sum = sum + (portfolio[i].amount * portfolio[i].marketinfo.ath_price);
            getHistoricle(portfolio[i].id);
        }
        setGeneralSum(sum);
        return sum;
    }
    let today = new Date(),
     startDate = today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate(),
     endDate = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + (today.getDate()-1);
     //console.log(startDate, endDate);

const getHistoricle = (coinid) => {
    let market = [];
    //console.log(coinid);
    fetch(`https://api.coinpaprika.com/v1/coins/${coinid}/ohlcv/historical?start=${startDate}&end=${endDate}`)
    .then(resp => resp.json())
    //.then((data) => console.log(data))
    .then((re) => {
        console.log("resp", re)
        market = {id: coinid, data: re};
        console.log("test", [...historical, market]);
        setLebil(lebil + 1);
        //console.log(lebil + 1);
        //setHistorical([...historical, market]);
        setHistorical([...historical, {id: coinid, data: re}]);
        console.log("market", market);
        console.log({historical})
        console.log({lebil})
    });
    console.log("market", market);
    return market;
}
    
    //console.log("generalSum", generalSum)
    //console.log(Date());
    

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
    console.log({historical})
    return(
        <div className="Portfolio">
            <div style={{fontSize: "36px", fontWeight: "bolder"}}>
                <NumericLabel  params={priceForm}>{generalSum}</NumericLabel>
                {/* <p>{generalChange}</p> */}
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