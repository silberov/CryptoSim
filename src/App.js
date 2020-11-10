import React from 'react';
import { Route, BrowserRouter as Router,Link} from "react-router-dom";
import HowMuch from './Components/how-much/how-much';
import Navbar from "./Components/NavBar/Navbar";
import Type from './Components/type/type'
import axios from 'axios'
import Market from "./Components/MarketTracker/MarketTracker";
import "./App.css";
import Test from './Components/Test/Test.js'
import {apiKey} from "./config/config"
import {cryptoArray} from './utils/cryptoArray.js';
import Home from './Components/Home/Home';




class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      invSum: 0,
      investorType: {},
      portfolio: []
    };
  }
  componentDidMount() {

     const fetchFunction = () => {
    
    const url = "https://coinpaprika1.p.rapidapi.com/tickers";
    axios
      .get(url, {
        headers: {
          "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      })
      .then((response) => {
        const marketData = response.data;
        let finalArray = [];

        // Add the icons to the state

        for (let i = 0; i < cryptoArray.length; i++) {
          for (let j = 0; j < marketData.length; j++) {
            if (cryptoArray[i].symbol === marketData[j].symbol) {
                marketData[j].img = cryptoArray[i]['img']
              finalArray.push(marketData[j]);
              this.setState({ data: finalArray });
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  fetchFunction()
}



  render() {
   
    //this function gets the sum from howmuch and puts it in the state
    const getInvestmentSum = (sum) => {
      this.setState({ invSum: sum })
      //sum && this.setState({ investmentSum: sum });
      //console.log("sum inv", this.state.invSum);
      //this.setState({investmentSum: sum}, ()=>{console.log("sum updated",sum,  this.state.investementSum)});
    }

    //this function gets the type from test page and puts it in the state
    const getInvestorType = (type) => {
      this.setState({investorType: type});
    }


    const investorTypes = 
      [ {type: 'HODLler',
        text: "Hodlers are the core, dedicated proponents of cryptocurrencies that populate the polarizing Twitter arguments and got some of the best returns in the 2017 bull market The term “HODL” actually derives itself from a grammatical error on an old Bitcoin post that had a slight misspelling of the word “holding.”",
        plan: [
          {coin: "BTC", procent: 80}, 
          {coin: "LINK", procent: 10},
          {coin: "ETH", procent: 5},
          {coin: "USDT", procent: 3},
          {coin: "ATOM", procent: 2}
        ]},
        {type: 'Early Investor',
        text: "The institutional investor, on the other hand, is an entirely different animal. Institutional investors in the cryptocurrency market come in two forms: crypto funds run by early bitcoin adopters and funds that have only recently ventured into this new asset class in the hope to generate exuberance returns.",
        plan: [
          {coin: "ETH", procent: 60}, 
          {coin: "LINK", procent: 20},
          {coin: "USDT", procent: 10},
          {coin: "XMR", procent: 7},
          {coin: "UNI", procent: 3}
        ]},
        {type: 'Trader',
        text: "Professional traders have long been some of the earliest proponents of crypto markets because of one word -- volatility. Professional traders, whether swing traders or arbitrageurs, love market volatility due to the increased chance of profit and loss.",
        plan: [
          {coin: "ADA", procent: 40}, 
          {coin: "XMR", procent: 20},
          {coin: "LINK", procent: 20},
          {coin: "BTC", procent: 10},
          {coin: "UNI", procent: 10}
        ]}
      ]

    const portfolioFirstBuild = (iSum, plan, marketData) => {
      console.log("para", iSum, plan, marketData);
      const firstPortfolio = [];
      if (plan && iSum !== 0) {
      for (let i = 0; i < plan.length; i++){
          //console.log("plan", plan[i]);
           for (let j = 0; j < marketData.length; j++ ) {
            //console.log(marketData[j].symbol)
             if (plan[i].coin === marketData[j].symbol) {
              firstPortfolio.push({coin: plan[i].coin, icon: marketData[j].img, name: marketData[j].name, amount: (marketData[j].quotes.USD.price * (iSum * plan[i].procent / 100)), gray: `${plan[i].procent}%`});
               console.log(firstPortfolio);
             }
           }
        }
      }
        console.log("portfolio", firstPortfolio);
      return firstPortfolio
    }

    //const portfolio = [{coin: "BTC", amout: 3}, {coin: "BTC", amout: 3}, {coin: "BTC", amout: 3}]

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route component={Home} path = "/"  exact/>
      <Route exact path="/marketdata" render= {()=><Market coinapi={this.state.data} />}></Route>
      <Route exact path="/howmuch" render= {()=><HowMuch sumSubmit={(sum) => getInvestmentSum(sum)} />}></Route>
      <Route exact path="/test" render= {()=><Test typeChoice={(type) => getInvestorType(type)} investorTypes={investorTypes} />}></Route>
      {/* <Route exact path="/type" render= {()=><Type investorType={{ value: [60, 20, 10, 7, 3], label: 'Middle' }} investmentSum={666}/>}></Route> */}
      <Route exact path="/type" render= {()=><Type investorType={this.state.investorType} sum={this.state.invSum} typeChoice={(type) => getInvestorType(type)} marketData={this.state.data} buildPortfolio={portfolioFirstBuild} />}></Route>
    </div>
    </Router>

  );
}
}






export default App;



