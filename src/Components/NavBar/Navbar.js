import React from 'react';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import styles from 'styled-components';



//CSS 
const Navigation= styles.div`
background-color:rgba(183, 207, 214, 1);
font-size: 0.9rem;
font-color:black;
`



//Component

function Navbar() {

    return (
        <div className="navbarItems">
            <Navigation>
                <ul callName="nav-links">
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/marketdata">Market</Link></li>
                   <li><Link to="/howmuch">How much</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
            </Navigation>
        </div>
    )

}


export default Navbar;