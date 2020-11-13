import React, { Component } from 'react';
import Select from 'react-select';
import CoinContainer from '../coin-container/CoinContainer';


class Type extends Component {
    constructor(props) {
        super(props);
        this.state= { 
            currentType: this.props.investorType,
            sum: this.props.sum,
            portfolio: this.props.portfolio

        }
        //this.props.buildPortfolio(this.state.sum, this.state.currentType.plan, this.props.marketData)

    }
    componentDidMount() {
        this.setState({ portfolio: this.props.buildPortfolio(this.state.sum, this.state.currentType.plan, this.props.marketData) })
    }
    handleChange = (event) => {
        console.log("event", event);
        this.setState({currentType: event});
        
        this.setState({ portfolio: this.props.buildPortfolio(this.state.sum, this.state.currentType.plan, this.props.marketData) });
        console.log("state", this.state);
        
    }

    
    
    render() {
        //console.log("type props", this.props);
        return (
            <div>
                <Select
                    className="spacer" 
                    options={this.props.allTypes}
                    getOptionLabel={(type) => type.type}
                    getOptionValue={type => type.type}
                    value={this.currentType}
                    onChange={this.handleChange}
                    />
                <h2>{this.state.currentType.type}</h2>
                <p>{this.state.currentType.text}</p>
                <CoinContainer portfolio={this.state.portfolio} inPortfolio={false} />
                {/* {this.state.portfolio && <CoinContainer portfolio={this.state.portfolio} inPortfolio={false} />} */}
                {/* {this.state.portfolio && this.state.portfolio.map((item) => <CoinItem item={item} />)} */}
                <button>Invest</button>
            </div>
        );
    }
}

export default Type;