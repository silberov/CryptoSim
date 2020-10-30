import React from 'react';
import { Route, BrowserRouter as Router,Link} from "react-router-dom";
import HowMuch from './Components/how-much'
import Test from './Components/Test/Test'


function App() {
  return (
 
    <div className="App">
      <HowMuch />
      <Test />
 
    </div>

  );
}

export default App;



