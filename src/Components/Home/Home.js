import React from 'react';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import styled from 'styled-components';


const Title = styled.h1`
color: rgba(223, 249, 255, 1);
font-size: 2rem;
text-shadow: 2px 2px rgba(251, 59, 108, 1);
`

const Intro = styled.p`
color: rgba(223, 249, 255, 1);
font-size: 1.2rem;
`
const DivBackground = styled.div`
background-color: rgba(0, 15, 30, 1);
opacity: 0.85;
text-align:center;
padding: 10px;
margin-top: 15px;
margin-bottom: 15px
`
const Button = styled.button `

font-family: "Space Mono";
font-weight: bold;
background-color:rgba(183, 207, 214, 1);
font-size: 0.9rem;
width: 200px;
height: 50px;
text-align: center;
box-shadow: 8px 8px;
`
function HomePage() {

    return (
        <DivBackground>
            <Title>Welcome fellow Cryptonaut</Title>
            <br></br>
            <Intro>Cryptosim is an app designed for you to start your safe journey into the Cryptoverse without taking any risks.
            <br></br>
                Here you can practice tracking your different currencies without needing real money and follow their performance, 
                learn about the history of the blockchain and get introduced to a technology that has the potential to shift the world.
                <br></br>
                We wish you good luck in becoming your own bank!
            </Intro>
            <br></br>
                <Link to="/howmuch"><Button>Take me to the Moon</Button></Link>
              
         </DivBackground> 
    )

}


export default HomePage;