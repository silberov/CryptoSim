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
import styled from 'styled-components';



const DivBackground = styled.div`
height: 220px;
width:400px;
text-align:center;
padding: 10px;
margin-top: 15px;
margin-bottom: 15px
`
const ChartDiv=styled.div`
display:flex;
align-content:flex-end;
margin-top:10px;
margin-bottom:10px
`



const data={
    labels:["14:00","15:00","16:00","17:00"],
    datasets: [{
        fill: true,
        responsive: true,
          lineTension: 0.5,
          backgroundColor: 'rgba(0, 15, 30, 0.95)',
          borderColor: 'gradient',
          pointBorderColor: '#111',
          pointBackgroundColor: 'rgba(223, 249, 255, 1)',
          pointBorderWidth: 2,
        backgroundColor: 'rgba(251, 59, 108, 0.65)',
        data: [
          '',437, 1387, 2298, 5324, 13811, 28508, 34014
        ]
      }],
      
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
            <DivBackground> 
           <ChartDiv> 
            <Line data={data}/>
            </ChartDiv>
            </DivBackground>

        )
    }
}

export default ChartSum;
