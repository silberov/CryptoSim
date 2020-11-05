import React from 'react';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

function HomePage() {

    return (
        <div className="homePage">
            <h1>Welcome fellow Cryptonaut,</h1>
            <br></br>
            <h2>Cryptosim is an app designed for you to start your safe journey into the Cryptoverse without taking any risks.
                Here you can practice investing in different currencies without needing real money and follow their performance, 
                learn about the history of the blockchain and get introduced to a technology that has the potential to shift the world.

                We wish you good luck in becoming your own bank!
            </h2>
                <Link to="/howmuch"><button>Take me to the Moon</button></Link>
               
         </div> 
    )

}


export default HomePage;