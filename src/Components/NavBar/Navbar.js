import React from 'react';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";




function Navbar() {

    return (
        <div className="navbarItems">
            <nav>
                <ul callName="nav-links">
                   <Link to="/"><li><a>Home</a></li></Link>
                   <Link to="/marketdata"> <li><a>Market</a></li></Link>
                    <li><a>Portfolio</a></li>

                </ul>
            </nav>
        </div>
    )

}


export default Navbar;