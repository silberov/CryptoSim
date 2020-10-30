import React from 'react';
import { BrowserRouter as Link} from "react-router-dom";

class HowMuch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit (event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <h2>How much would you like to invest?</h2>
            <label>
                Text explaining the steplorem ipsum dolor sit amet, consectetur adipiscing
                <input onChange={this.handleChange} value={this.state.value} name="sum" />
            </label>
            <input  type="submit" value="Submit" />
            {/* <Link to={{
                pathname: '/taketest',
                state: {
                    sum: this.state.value
                }
                }}><input  type="submit" value="Submit" /></Link> */}
        </form>
    </div>
    )
    }
};

  export default HowMuch;