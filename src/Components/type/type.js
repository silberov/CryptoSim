import React, { Component } from 'react';
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
    
    render() {
        console.log(this.props);
        return (
            <div>

                <h2>{this.state.currentType.type}</h2>
                <p>{this.state.currentType.text}</p>
                {this.state.portfolio && this.state.portfolio.map((item) => <CoinItem item={item} />)}
            </div>
        );
    }
}

export default Type;