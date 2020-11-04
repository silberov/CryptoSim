import React from 'react';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";




function Navbar() {

    return (
        <div className="navbarItems">
            <nav>
                <ul callName="nav-links">
                   <li><a>Home</a></li>
                    <li><a>Market</a></li>
                    <li><a>Portfolio</a></li>

                </ul>
            </nav>
        </div>
    )

}


export default Navbar;