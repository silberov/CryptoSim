import React from 'react';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import styled from 'styled-components';

// CSS
const Title = styled.h1`
margin: 12px auto;
color: rgba(223, 249, 255, 1);
font-size: 2rem;
text-shadow: 2px 2px rgba(251, 59, 108, 1);
`

const Intro = styled.p`
color: rgba(223, 249, 255, 1);
font-size: 16px;
`

const Button = styled.input `
margin: 24px auto;
font-family: "Space Mono";
font-weight: bold;
background-color:rgba(183, 207, 214, 1);
font-size: 0.9rem;
width: 200px;
height: 50px;
text-align: center;
box-shadow: 8px 8px rgba(223, 249, 255, 0.2);;
border: none;
&:focus {
    outline: none;
    box-shadow: none;
    border: none;
}
&:hover {
    background-color: rgba(251, 59, 108, 1);
    //box-shadow: 8px 8px rgba(251, 59, 108, 0.2);
    box-shadow: none;
}
`

const ImgDiv=styled.div`
display:flex;
align-items:center`
// Code for Component starts here
function HomePage() {

    return (
        <div className="DivBackground">
        
            <Title>Welcome fellow Cryptonaut</Title>
            <p>Cryptoverse is an app designed for you to start your safe journey into the Crypto world without taking any risks.</p>

            <p>
            Here you can practice tracking your different currencies without needing real money and follow their performance, 
            learn about the history of the blockchain and get introduced to a technology that has the potential to shift the world.
            </p>

            <p>
             We wish you good luck in becoming your own bank!
            </p>

                <Link to="/howmuch"><Button type='submit' value='Take me to the Moon' /></Link>
              
         </div> 
    )

}


export default HomePage;
export {Button};