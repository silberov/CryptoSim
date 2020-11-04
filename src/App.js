import React from 'react';
import { Route, BrowserRouter as Router,Link} from "react-router-dom";
import HowMuch from './Components/how-much/how-much';
import Navbar from "./Components/NavBar/Navbar"
import Logo from "./Components/Home/Logo"
import "./App.css"
import axios from 'axios'
import Market from "./Components/MarketTracker/MarketTracker.js";
import "./App.css";
import Test from './Components/Test/Test.js'
import {apiKey} from "./config/config"
import {cryptoArray} from './utils/cryptoArray.js';
import CoinItem from './Components/coin-item/coin-item';
import Home from './Components/Home/Home'



const investorTypes = [
  { value: [80, 10, 5, 3, 2], label: 'Safe' },
  { value: [60, 20, 10, 7, 3], label: 'Middle' },
  { value: [40, 20, 20, 10, 10], label: 'Risky' },
];


class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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


        console.log(marketData);

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
    // console.log("array works outside", cryptoArray);
    console.log("state?", this.state.data)
   

  return (
    <Router>
    <div className="App">
      <Route component={Home} path = "/"  exact/>
     <Route exact path="/marketdata" render= {()=><Market coinapi={this.state.data} />}></Route>
     <Route exact path="/takethetest" render= {()=><Test investors={investorTypes} />}></Route>
      <Navbar />
    </div>
    </Router>

  );
}
}






export default App;



