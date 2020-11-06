import React from 'react';
import Select from 'react-select';
import { BrowserRouter as Link, Redirect} from "react-router-dom";

import './Test.css'

// typeChoice

class Test extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            type: {},
            redirect:false
         };
    }

    handleChange = (event) => {
        this.setState({type: event});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.typeChoice(this.state.type);
        setTimeout(()=> this.setState({redirect:true}), 1000);
        //this.props.typeChoice(event)
    }

    render () {

        return (
            <div className="types">
                {this.state.redirect && <Redirect to="/type" />}
                <h1>Here you can take the test to find out what kind of investor are you </h1>
                <button> Take test</button>
                <h2>If you already know, click one the one</h2>
                <form onSubmit={this.handleSubmit}>
                    <Select
                        className="spacer" 
                        options={this.props.investorTypes}
                        onChange={this.handleChange}
                    />
                    <input type='submit' value='submit' />
                </form>
            </div>
        );
    }
}


  export default Test;