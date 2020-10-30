import React from 'react';
import { Route, BrowserRouter as Router,Link} from "react-router-dom";
import HowMuch from './Components/how-much'
import Test from './Components/Test/Test'


function App() {
  return (
 
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

  );
}

export default App;



