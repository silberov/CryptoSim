import React, { Component } from 'react';
import { BrowserRouter as Link, Redirect} from "react-router-dom";
import Select from 'react-select';
import CoinContainer from '../coin-container/CoinContainer';
import styled from 'styled-components'


//CSS starts here

const DivBackground = styled.div`
background-color:rgba(0, 15, 30, 0.85);
text-align:center;
padding: 10px;
margin-top: 15px;
margin-bottom: 15px;
`
const TitleH2 = styled.h2 `
text-shadow: 2px 2px rgba(251, 59, 108, 1);
`
const Input = styled.input`
margin: 24px auto;
font-family: "Space Mono";
font-weight: bold;
background-color:rgba(183, 207, 214, 1);
font-size: 0.9rem;
width: 200px;
height: 50px;
text-align: center;
box-shadow: 8px 8px rgba(223, 249, 255, 0.2);
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
const Button = styled.button `
margin: 24px auto;
font-family: "Space Mono";
font-weight: bold;
background-color:rgba(183, 207, 214, 1);
font-size: 0.9rem;
width: 200px;
height: 50px;
text-align: center;
box-shadow: 8px 8px rgba(223, 249, 255, 0.2);
border: none;
// &:focus {
//     outline: none;
//     box-shadow: none;
//     border: none;
// }
// &:hover {
//     background-color: rgba(251, 59, 108, 1);
//     //box-shadow: 8px 8px rgba(251, 59, 108, 0.2);
//     box-shadow: none;
//  }
`


//Code for Component starts here
class Type extends Component {
    state={
        redirect: false
    }

    componentDidMount() {
        this.props.buildPortfolio(this.props.sum, this.props.investorType.plan, this.props.marketData);
    }

    handleChange = (event) => {
        this.props.typeChoice(event);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.investorType !==  this.props.investorType) {
            this.props.buildPortfolio(this.props.sum, this.props.investorType.plan, this.props.marketData);
        }
    }
    
    render() {
        return (
            <div className="DivBackground">
                {this.state.redirect && <Redirect to="/portfolio" />}
                <Select
                    className="spacer" 
                    options={this.props.allTypes}
                    getOptionLabel={(type) => type.type}
                    getOptionValue={type => type.type}
                    value={this.currentType}
                    onChange={(event) => this.props.typeChoice(event)}
                    />
                <TitleH2>{this.props.investorType.type}</TitleH2>
                <p>{this.props.investorType.text}</p>
                {this.props.portfolio && <CoinContainer portfolio={this.props.portfolio} inPortfolio={false} />}
               <br></br>
                <Input onClick={()=> this.setState({redirect: true})} type="submit" value="Invest" />
                <br/>
                <Button onClick={()=> this.setState({redirect: true})}>Invest</Button>

            </div>
        );
    }
}

export default Type;