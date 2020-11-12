import React, { Component } from 'react';
import Select from 'react-select';
import CoinItem from '../coin-item/coin-item'

class Type extends Component {
    constructor(props) {
        super(props);
        this.state= { 
            currentType: this.props.investorType,
            sum: this.props.sum,
            portfolio: []

        }
        this.props.buildPortfolio(this.state.sum, this.state.currentType.plan, this.props.marketData)

    }
    componentDidMount() {
        this.setState({ portfolio: this.props.buildPortfolio(this.state.sum, this.state.currentType.plan, this.props.marketData) })
    }
    handleChange = (event) => {
        //console.log("event", event);
        this.setState({currentType: event});
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
                    onChange={this.handleChange}
                    />


                <h2>{this.state.currentType.type}</h2>
                <p>{this.state.currentType.text}</p>
                {this.state.portfolio && this.state.portfolio.map((item) => <CoinItem item={item} />)}
            </div>
        );
    }
}

export default Type;