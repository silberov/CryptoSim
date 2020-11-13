// we need to sum the investment amount and save the data every 24h 
//we need to store this data in the state and display the change in a chart
//equation for sum? 
// how to use history?
//using Chart.js
//the historic change in state has to be displayed
// need a function that changes the state every 24h according to the sum 
// componentDidupdate, checks when the state updated 


import React from 'react';
import {Line} from 'react-chartjs-2';
import './chart.css';



const data={
    labels:["14:00","15:00","16:00","17:00"],
    datasets:[
        {label: "SUM change",
        data:[6850,6950,6450,6788]
    }
    ],

}

class ChartSum extends React.Component {

    constructor(){
        super()
        this.state={
            chart: 0
        }
    }

    render(){

        return(
            <div> 
            <h3>SUM of Portfolio Displayed Here</h3>
           <div className="chart"> 
            <Line data={data}/>
            </div>
            </div>

        )
    }
}

export default ChartSum;
