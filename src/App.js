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
import Portfolio from './Components/portfolio/Portfolio';
import styled from 'styled-components';
import Loader from './Images/loader.gif'

const investorTypes = 
      [ {type: 'HODLler',
        text: "Hodlers are the core, dedicated proponents of cryptocurrencies that populate the polarizing Twitter arguments and got some of the best returns in the 2017 bull market The term “HODL” actually derives itself from a grammatical error on an old Bitcoin post that had a slight misspelling of the word “holding.”",
        plan: [
          {id: "btc-bitcoin", procent: 80}, 
          {id: "link-chainlink", procent: 10},
          {id: "eth-ethereum", procent: 5},
          {id: "usdt-tether", procent: 3},
          {id: "atom-cosmos", procent: 2}
        ]},
        {type: 'Early Investor',
        text: "The institutional investor, on the other hand, is an entirely different animal. Institutional investors in the cryptocurrency market come in two forms: crypto funds run by early bitcoin adopters and funds that have only recently ventured into this new asset class in the hope to generate exuberance returns.",
        plan: [
          {id: "eth-ethereum", procent: 60}, 
          {id: "link-chainlink", procent: 20},
          {id: "usdt-tether", procent: 10},
          {id: "xmr-monero", procent: 7},
          {id: "uni-universe", procent: 3}
        ]},
        {type: 'Trader',
        text: "Professional traders have long been some of the earliest proponents of crypto markets because of one word -- volatility. Professional traders, whether swing traders or arbitrageurs, love market volatility due to the increased chance of profit and loss.",
        plan: [
          {id: "ada-cardano", procent: 40}, 
          {id: "xmr-monero", procent: 20},
          {id: "link-chainlink", procent: 20},
          {id: "btc-bitcoin", procent: 10},
          {id: "uni-universe", procent: 10}
        ]}
      ]



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      invSum: 100,
      investorType: {},
      portfolio: [],
      loading:true,
    };
  }

  fetchFunction = () => {
   
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
            }
            this.setState({ data: finalArray});
            setTimeout(()=>{this.setState({loading:false})},2000)
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
 this.fetchFunction();
}

 //this function gets the sum from howmuch and puts it in the state
 getInvestmentSum = (sum) => {
  this.setState({ invSum: sum })
}

//this function gets the type from test page and puts it in the state
getInvestorType = (type) => {
  this.setState({investorType: type});
  console.log("gettype", type)
}




//this function returns the portfolioacording to the given plan and the market data
portfolioFirstBuild = (iSum, plan) => {
  this.fetchFunction()
  const marketData = this.state.data;
  //console.log("para", iSum, plan, marketData);
  let firstPortfolio = [];
  if (plan && iSum > 0) {
  for (let i = 0; i < plan.length; i++){
       for (let j = 0; j < marketData.length; j++ ) {
         if (plan[i].id === marketData[j].id) {
          firstPortfolio.push({
            id: marketData[j].id,
            symbol: marketData[j].symbol,
             icon: marketData[j].img, 
             name: marketData[j].name, 
             amount: ((iSum * plan[i].procent / 100) / marketData[j].quotes.USD.ath_price), 
             procent: `${plan[i].procent}%`, 
             marketinfo: marketData[j].quotes.USD
            });
         }
       }
    }
  }
    console.log("portfolio", firstPortfolio);
    this.setState({portfolio: firstPortfolio});
    // setTimeout(() => {
    //   console.log(this.state.portfolio)
    // }, 1000);
  return firstPortfolio
}


// the function updates the portfolio with the market data
updateValues = (portfolio) => {
  this.fetchFunction()
  for  (let i =  0; i < portfolio.length; i++) {
    for (let j = 0; j < this.state.data.length; j++) {
      if (portfolio[i].id  === this.state.data[j].id) {
        portfolio[i].marketinfo = this.state.data[j].quotes.USD
      }
    }
  }
}
 
//const portfolio = [{coin: "BTC", amout: 3}, {coin: "BTC", amout: 3}, {coin: "BTC", amout: 3}]


  render() {
   
   

  return this.state.loading ? <div className="loaderdiv"> <img className="pacman" src={Loader} height="400px" width="300px"/> </div> :(
    <Router>
    <div className="App">
      <div className="Container">
     
      <Route component={Home} path = "/"  exact/>
      <Route exact path="/marketdata" render= {()=><Market coinapi={this.state.data} />}></Route>
      <Route exact path="/howmuch" render= {()=><HowMuch sumSubmit={(sum) => this.getInvestmentSum(sum)} />}></Route>
      <Route exact path="/test" render= {()=><Test typeChoice={(type) => this.getInvestorType(type)} investorTypes={investorTypes} />}></Route>
      {/* <Route exact path="/type" render= {()=><Type investorType={{ value: [60, 20, 10, 7, 3], label: 'Middle' }} investmentSum={666}/>}></Route> */}
      <Route exact path="/type" render= {()=><Type investorType={this.state.investorType} allTypes={investorTypes} sum={this.state.invSum} typeChoice={(type) => this.getInvestorType(type)} marketData={this.state.data} portfolio={this.state.portfolio} buildPortfolio={this.portfolioFirstBuild} />}></Route>
      <Route exact path="/portfolio" render= {()=><Portfolio portfolio={this.state.portfolio} />} />
    <Navbar/>
    </div>
    </div>
    </Router>

  );
}
}






export default App;



