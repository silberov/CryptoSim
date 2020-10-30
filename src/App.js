import React from 'react';
import { Route, BrowserRouter as Router,Link} from "react-router-dom";
import HowMuch from './Components/how-much'
import Test from './Components/Types/Test'


function App() {
  return (
    <Router>
    <div className="App">
      <HowMuch />
      <Test />
      {/* <Route component={HomePage} exact path="/"/>
      <Route component={Market} path= "/market"/>
      <Route component={HowMuch} path= "/howmuch"/>
      <Route component={Test} path= "/taketest"/>
      <Route component={Type1} path= "/type1"/>
      <Route component={Type2} path= "/type2"/>
      <Route component={Type3} path= "/type3"/>
      <Route component={Portfolio} path= "/portfolio"/>
      <Route component={Buy} path= "/buy"/>
      <Route component={Sell} path= "/sell"/> */}
    </div>
    </Router>
  );
}

export default App;



function Market(){

  return(
    <div>
<h2>current market data goes here</h2>

  <button>next</button>

    </div>


  )
 
}



function HomePage(){

  return(
    <div>
      <h1>Welcome to CryptoSim</h1>
      <Link to= "/howmuch"><button>Start simulation</button></Link>
    </div>
  )
};





function Type1(){

  return(
    <div>
     

     <h2>You are type 1</h2>
   <Link to ="type2">  <h3>Change to type2</h3></Link>
   <Link to ="type3">  <h3>Change to type3</h3></Link>
     
     
   <Link to="/portfolio">  <button>Go to portfolio</button> </Link> 



    </div>


  )

};


function Type2(){

  return(
    <div>
     
     
     
     <h2>You are type 2</h2>

     <Link to ="type1">  <h3>Change to type1</h3></Link>
   <Link to ="type3">  <h3>Change to type3</h3></Link>
     
     
     
     <Link to="/portfolio">  <button>Go to portfolio</button> </Link> 




    </div>


  )

};





function Type3(){

  return(
    <div>
     
     
     
     <h2>You are type 3</h2>

     <Link to ="type1">  <h3>Change to type1</h3></Link>
   <Link to ="type2">  <h3>Change to type2</h3></Link>
      
     
     
     <Link to="/portfolio">  <button>Go to portfolio</button> </Link> 




    </div>


  )

};


function Portfolio(){

  return(
    <div>

      <h2> Here you can see your investment</h2>

<Link to= "/buy"><button>BUY</button></Link>
<Link to= "/sell"><button>SELL</button></Link>


    </div>


  )

};

function Buy(){

  return(
    <div>

      <h1>Buy Crypto</h1>

<button>buy</button>

    </div>


  )

};

function Sell(){

  return(
    <div>
      <h1>Sell Crypto</h1>

<button>sell</button>

    </div>


  )

};