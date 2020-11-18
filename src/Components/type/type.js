import React, { Component } from 'react';
import Select from 'react-select';
import CoinContainer from '../coin-container/CoinContainer';


class Type extends Component {

    componentDidMount() {
        this.props.buildPortfolio(this.props.sum, this.props.investorType.plan, this.props.marketData)
    }

    handleChange = (event) => {
        this.props.typeChoice(event);
        //this.setState({currentType: event});
        console.log("event" ,event);
        //console.log("event", event);
        //console.log(this.props.buildPortfolio(this.state.sum, this.state.currentType.plan, this.props.marketData)) 
    }

    componentDidUpdate(prevProps) {
        if (prevProps.investorType !==  this.props.investorType) {
            this.props.buildPortfolio(this.props.sum, this.props.investorType.plan, this.props.marketData)
        }
    }

    
    
    render() {
        console.log("type props", this.props);
        return (
            <div>
                <Select
                    className="spacer" 
                    options={this.props.allTypes}
                    getOptionLabel={(type) => type.type}
                    getOptionValue={type => type.type}
                    value={this.currentType}
                    onChange={(event) => this.props.typeChoice(event)}
                    />
                <h2>{this.props.investorType.type}</h2>
                <p>{this.props.investorType.text}</p>
                {this.props.portfolio && <CoinContainer portfolio={this.props.portfolio} inPortfolio={false} />}
                {/* {this.state.portfolio && <CoinContainer portfolio={this.state.portfolio} inPortfolio={false} />} */}
                {/* {this.state.portfolio && this.state.portfolio.map((item) => <CoinItem item={item} />)} */}
                <button>Invest</button>
            </div>
        );
    }
}

export default Type;