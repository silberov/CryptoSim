import React from 'react';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import styled from 'styled-components';

// CSS
const Title = styled.h1`
color: rgba(223, 249, 255, 1);
font-size: 2rem;
text-shadow: 2px 2px rgba(251, 59, 108, 1);
`

const Intro = styled.p`
color: rgba(223, 249, 255, 1);
font-size: 16px;
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

const ImgDiv=styled.div`
display:flex;
align-items:center`
// Code for Component starts here
function HomePage() {

    return (
        <div className="DivBackground">
            <div>
            <img src="https://media3.giphy.com/media/l49JMVDvP8D38LHwI/giphy.gif?cid=ecf05e477dgvajkbyzzficp2hpfpo1efpb1s9k72277p2yuf&rid=giphy.gif" height="70px" width="70px" />
            </div>
            <Title>Welcome fellow Cryptonaut</Title>
            <br></br>
            <p>Cryptosim is an app designed for you to start your safe journey into the Cryptoverse without taking any risks.
            <br></br>
                Here you can practice tracking your different currencies without needing real money and follow their performance, 
                learn about the history of the blockchain and get introduced to a technology that has the potential to shift the world.
                <br></br>
                We wish you good luck in becoming your own bank!
            </p>
            <br></br>
                <Link to="/howmuch"><Button>Take me to the Moon</Button></Link>
              
         </div> 
    )

}


export default HomePage;
export {Button};