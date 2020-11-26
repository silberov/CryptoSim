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
margin-bottom: 15px
`
const TitleH2 = styled.h2 `
text-shadow: 2px 2px rgba(251, 59, 108, 1);
`
const Button = styled.button `

font-family: "Space Mono";
font-weight: bold;
background-color:rgba(183, 207, 214, 1);
font-size: 0.9rem;
width: 200px;
height: 50px;
text-align: center;
box-shadow: 8px 8px;`


//Code for Component starts here
class Type extends Component {
    state={
        redirect: false
    }

    componentDidMount() {
        this.props.buildPortfolio(this.props.sum, this.props.investorType.plan, this.props.marketData)
    }

    handleChange = (event) => {
        this.props.typeChoice(event);
        //this.setState({currentType: event});
        //console.log("event" ,event);
        //console.log(this.props.buildPortfolio(this.state.sum, this.state.currentType.plan, this.props.marketData)) 
    }

    componentDidUpdate(prevProps) {
        if (prevProps.investorType !==  this.props.investorType) {
            this.props.buildPortfolio(this.props.sum, this.props.investorType.plan, this.props.marketData)
        }
    }

    
    
    render() {
        //console.log("type props", this.props);
        return (
            <DivBackground>
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
                {/* {this.state.portfolio && <CoinContainer portfolio={this.state.portfolio} inPortfolio={false} />} */}
                {/* {this.state.portfolio && this.state.portfolio.map((item) => <CoinItem item={item} />)} */}
               <br></br>
                <Button onClick={()=> this.setState({redirect: true})}>Invest</Button>
            </DivBackground>
        );
    }
}

export default Type;