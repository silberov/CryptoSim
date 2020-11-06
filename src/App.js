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






const investorTypes = [
  { procent: [80, 10, 5, 3, 2], coins: ["BTC", "LINK", "ETH", "USDT", "ATOM"], label: 'HODLler' },
  { procent: [60, 20, 10, 7, 3], coins: ["ETH", "LINK", "USDT", "XMR", "UNI"], label: 'Early Investor' },
  { procent: [40, 20, 20, 10, 10], coins: ["ADA", "XMR", "LINK", "BTC", "UNI"], label: 'Trader' },
];


class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      investmentSum: 0,
      investorType: {}
    };
  }
  componentDidMount() {
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
        // console.log("apiresponse", marketData);
        //   this.setState({ name: marketData.name, rank: marketData.rank})
        // console.log("working?",  marketData[1].name)
        let finalArray = [];

        // Add the icons to the state

        //console.log(marketData);

        for (let i = 0; i < cryptoArray.length; i++) {
          // console.log("state?",this.state.data)
          // console.log("namefromcArray", cryptoArray[i].name);
          for (let j = 0; j < marketData.length; j++) {
            if (cryptoArray[i].symbol === marketData[j].symbol) {
                marketData[j].img = cryptoArray[i]['img']
              // console.log("matching data", marketData[j]);
              finalArray.push(marketData[j]);
            //   console.log("pls work", finalArray)
              // {name: marketData[j].name,
              // rank:marketData[j].rank}

              //concating the arrays so I can display the img//

              this.setState({ data: finalArray });
            }
          }

        }
      })
      .catch((err) => {
        console.log(err);
      });
  }



  render() {
   
    //this function gets the sum from howmuch and puts it in the state
    const getInvestmentSum = (sum) => {
      //console.log("sum", sum)
      this.setState({investmentSum: sum}, ()=>{console.log(this.state.investementSum)});
    }

    //this function gets the type from test page and puts it in the state
    const getInvestorType = (type) => {
      this.setState({investorType: type});
      //console.log("got type", this.state.investorType);
    }

    // const invCalc = () => {
    //   const invArr = [];
    //   for (let i = 0; i < this.state.investorType.value.length; i++){
    //       invArr.push(this.state.investorType.value[i]*this.state.investmentSum/100);
    //   }
    //   return invArr;
    // }

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route component={Home} path = "/"  exact/>
      <Route exact path="/marketdata" render= {()=><Market coinapi={this.state.data} />}></Route>
      <Route exact path="/howmuch" render= {()=><HowMuch sumSubmit={(sum) => getInvestmentSum(sum)} />}></Route>
      <Route exact path="/test" render= {()=><Test typeChoice={(type) => getInvestorType(type)} investorTypes={investorTypes} />}></Route>
      {/* <Route exact path="/type" render= {()=><Type investorType={{ value: [60, 20, 10, 7, 3], label: 'Middle' }} investmentSum={666}/>}></Route> */}
      <Route exact path="/type" render= {()=><Type investorType={this.state.investorType} investmentSum={this.state.investmentSum} />}></Route>
    </div>
    </Router>

  );
}
}






export default App;



