import React from 'react';
import { BrowserRouter as Link} from "react-router-dom";
import CoinItem from '../coin-item/coin-item';

function Type1(){

    return(
      <div>
        <h2>You are type 1</h2>
        <Link to ="type2">  <h3>Change to type2</h3></Link>
        <Link to ="type3">  <h3>Change to type3</h3></Link>
        <Link to="/portfolio">  <button>Go to portfolio</button></Link> 

        <CoinItem />
      </div>
    )
  };

  export default Type1;