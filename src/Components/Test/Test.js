import React from 'react';
import Select from 'react-select';

import './Test.css'


const investorTypes = [
    { value: [80, 10, 5, 3, 2], label: 'Safe' },
    { value: [60, 20, 10, 7, 3], label: 'Middle' },
    { value: [40, 20, 20, 10, 10], label: 'Risky' },
  ];

class Test extends React.Component {
    constructor (props) {
        super(props);
        this.state = { value: [] };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.value});
        //console.log(event.value)
    }
    render () {

        return (
            <div className="types">
                <h1>Here you can take the test to find out what kind of investor are you </h1>
                <button> Take test</button>
                <h2>If you already know, click one the one</h2>
                <form>
                    <Select
                        className="spacer" 
                        options={investorTypes}
                        onChange={this.handleChange}
                    />
                    <input type='submit' value='submit' />
                </form>


            </div>
        );
    }
}


  export default Test;