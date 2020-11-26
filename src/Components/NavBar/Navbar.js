import React from 'react';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
//CSS

import styled from 'styled-components';

//NavBar Icons
import HomeIcon from './Imgs/Home.png';
import InvestIcon from './Imgs/Invest.png';
import MarketIcon from './Imgs/Market.png';
import PortfIcon from './Imgs/Portfolio.png';

//CSS

const NavbarDiv=styled.div`
overflow: hidden;
background-color:rgba(0, 15, 30, 0.95);
position: fixed;
bottom: 0;
width: 100%;
height: 65px;` 

const MenuIcons=styled.ul`
display:flex;
justify-content:space-evenly`




//Component

function Navbar() {

    return (
        <NavbarDiv>
            
                <MenuIcons>
                 <Link to="/"> <li><img src={HomeIcon} height="30px" width="30px"></img></li></Link>
                   <Link to="/marketdata"><li><img src={MarketIcon} height="30px" width="30px"></img></li></Link>
                   <Link to="/howmuch"><li><img src={InvestIcon} height="30px" width="30px"></img></li></Link>
                    <Link to="/portfolio"><li><img src={PortfIcon} height="30px" width="30px"></img></li></Link>
            </MenuIcons>
        </NavbarDiv>
    )

}


export default Navbar;