import React from 'react';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";




function Navbar() {

    return (
        <div className="navbarItems">
            <nav>
                <ul callName="nav-links">
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/marketdata">Market</Link></li>
                   <li><Link to="/howmuch">How much</Link></li>
                    <li>Portfolio</li>
                </ul>
            </nav>
        </div>
    )

}


export default Navbar;