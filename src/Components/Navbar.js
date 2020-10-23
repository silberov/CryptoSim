import React from 'react';
import menuItems from './MenuItems'
import 'bootstrap/dist/css/bootstrap.min.css';




function Navbar() {

    return (
        <div className="navbarItems">
            <nav>
                <h1 className="navbar-logo">CryptoSim</h1>
                <ul>
                    {menuItems.map((item, index) => {

                        return (
                            <li key={index}>
                                <a className={item.cName}>{item.title}</a>
                            </li>
                        )

                    })
                    }



                </ul>


            </nav>

        </div>
    )

}


export default Navbar;