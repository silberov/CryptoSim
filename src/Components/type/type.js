import React, { Component } from 'react';
import CoinItem from '../coin-item/coin-item'

class Type extends Component {
    constructor(props) {
        super(props);
        this.state= { 
            currentType: this.props.investorType,
            sum: this.props.investmentSum,

        }

    }
    
    render() {

        return (
            <div>
                <h2>{this.state.currentType.label} Invrstor Type</h2>
                <CoinItem />
                <CoinItem />
                <CoinItem />
                <CoinItem />
                <CoinItem />
            </div>
        );
    }
}

export default Type;