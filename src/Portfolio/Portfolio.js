import React from 'react';
import CoinItem from '../Components/coin-item/coin-item';
import ChartSum from './Chart';


class Portfolio extends React.Component{
  
    constructor(){
        super()
        
    }

    render(){
        return(
            <div>
           <ChartSum />
         
           </div>
        )
    }
}

export default Portfolio