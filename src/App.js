import React from 'react';
import { Route, BrowserRouter as Router,Link} from "react-router-dom";
import HowMuch from './Components/how-much/how-much';

import Navbar from "./Components/Navbar"

import Logo from "./Components/Logo"
// import Market from "./Components/MarketTracker"
import Market from "./Components/MarketTracker"
import "./App.css"
import axios from 'axios';
import Coin from './Components/coin-item/coin-item';


//import Logo from "./Components/Logo";
import Market1 from "./Components/MarketTracker";
import "./App.css";
//import axios from 'axios';



function App() {
  return (

    <div className="App">
      <HowMuch />
      <Market1 />
      <Coin />


    </div>

  );
}




// this.setState({ data: marketData[j], name: marketData[j].name, rank:marketData[j].rank});


export default App;
