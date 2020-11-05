import React from 'react';
import { BrowserRouter as Link} from "react-router-dom";

class HowMuch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
      }

    handleSubmit = (event) => {
        this.props.sumSubmit(this.state.value)
        event.preventDefault();
    }

    render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <h2>How much would you like to invest?</h2>
            
                <p>Text explaining the steplorem ipsum dolor sit amet, consectetur adipiscing</p>
                <input onChange={this.handleChange} value={this.state.value} name="sum" />
            
                <input  type="submit" value="Submit" />
        </form>
    </div>
    )
    }
};

  export default HowMuch;