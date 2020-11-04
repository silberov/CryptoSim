import React from 'react';
import { Route, BrowserRouter as Router,Link} from "react-router-dom";
import HowMuch from './Components/how-much/how-much';

// import Market from "./Components/MarketTracker"
//import Market from "./Components/MarketTracker2"
import "./App.css"

import Coin from './Components/coin-item/coin-item';
import Market1 from "./Components/MarketTracker";
import "./App.css";

//import Logo from "./Components/Logo";

import "./App.css";
import Test from './Components/Test/Test'



function App() {
  return (
 
    <div className="App">
      <HowMuch />
      <Market1 />
      <Coin />


      <Test />
 
    </div>

  );
}




// this.setState({ data: marketData[j], name: marketData[j].name, rank:marketData[j].rank});


export default App;



