import React from 'react';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Logo from "./Components/Logo"
import Market from "./Components/MarketTracker"
import "./App.css"
import axios from 'axios';




function App() {
  return (

    <Router>
      <div className="App">
        <Logo />


        <Route component={HomePage} exact path="/" />
        <Route component={Market} path="/market" />
     
        <Route component={Howmuch} path="/howmuch" />
        <Route component={Test} path="/taketest" />
        <Route component={Type1} path="/type1" />
        <Route component={Type2} path="/type2" />
        <Route component={Type3} path="/type3" />
        <Route component={Portfolio} path="/portfolio" />
        <Route component={Buy} path="/buy" />
        <Route component={Sell} path="/sell" />
        < Navbar />
      </div>
    </Router>
  );
}

export default App;







function HomePage() {

  return (
    <div>

      <h1>Welcome to CryptoSim</h1>
      <Link to="/howmuch"><button>Start simulation</button></Link>


    </div>


  )

};


function Howmuch() {

  return (
    <div>
      <form>
        <label>
          How much would you like to invest?
    <input type="text" name="name" />
        </label>
        <Link to="/taketest"><input type="submit" value="Submit" /></Link>
      </form>


    </div>


  )

};

function Test() {

  return (
    <div>
      <h1>Here you can take the test to find out what kind of investor are you </h1>

      <button> Take test</button>

      <h2>If you already know, click one the one</h2>
      <Link to="/type1"><p>Type1</p></Link>
      <Link to="/type2"><p>Type2</p></Link>
      <Link to="/type3"><p>Type3</p></Link>

    </div>


  )

};

function Type1() {

  return (
    <div>


      <h2>You are type 1</h2>
      <Link to="type2">  <h3>Change to type2</h3></Link>
      <Link to="type3">  <h3>Change to type3</h3></Link>


      <Link to="/portfolio">  <button>Go to portfolio</button> </Link>



    </div>


  )

};


function Type2() {

  return (
    <div>



      <h2>You are type 2</h2>

      <Link to="type1">  <h3>Change to type1</h3></Link>
      <Link to="type3">  <h3>Change to type3</h3></Link>



      <Link to="/portfolio">  <button>Go to portfolio</button> </Link>




    </div>


  )

};





function Type3() {

  return (
    <div>



      <h2>You are type 3</h2>

      <Link to="type1">  <h3>Change to type1</h3></Link>
      <Link to="type2">  <h3>Change to type2</h3></Link>



      <Link to="/portfolio">  <button>Go to portfolio</button> </Link>




    </div>


  )

};


function Portfolio() {

  return (
    <div>

      <h2> Here you can see your investment</h2>

      <Link to="/buy"><button>BUY</button></Link>
      <Link to="/sell"><button>SELL</button></Link>


    </div>


  )

};

function Buy() {

  return (
    <div>

      <h1>Buy Crypto</h1>

      <button>buy</button>

    </div>


  )

};

function Sell() {

  return (
    <div>
      <h1>Sell Crypto</h1>

      <button>sell</button>

    </div>


  )

};