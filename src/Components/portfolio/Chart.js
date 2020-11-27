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
background-color:rgba(3, 8, 14, 1);
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




    

class ChartSum extends React.Component {

    constructor(){
        super()
        this.state={
            chart: 0
        }
    }
 
    render(){

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
                //data: [63.04112170607709, 65.48510206420256, 63.60538927275552, 64.18928071533203, 64.55434296324668, 65.48913187428919, 65.42331865052124, 64.42655040289189, 65.67268797960284, 66.40598587866582, 72.41790079411615, 73.26494290233106, 70.13291258124015, 73.33139671664478, 72.60598534894496, 72.66173451490282, 74.25607883984311, 76.35764230834224, 76.85406035683236, 75.70872962232794, 74.93899458690103, 78.19569526221574, 82.43575815861941, 83.12615940827229, 83.11096338727197, 86.75421441032819, 87.94513729244824, 86.38318205997192, 86.7090115409106, 89.81501152991449, 88.08409148557458]
                data: this.props.data
              }],
              
            }

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