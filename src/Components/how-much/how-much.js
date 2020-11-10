import React from 'react';
import { BrowserRouter as Link, Redirect} from "react-router-dom";

class HowMuch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sum: 0};
    }

    handleChange = (event) => {
        this.setState({sum: event.target.value});
        this.props.sumSubmit(event.target.value);
        //console.log(this.state.sum);
      }

    handleSubmit = (event) => {
      event.preventDefault();
      //console.log("state", this.state.sum);
        //this.props.sumSubmit(this.state.sum);
      setTimeout(()=> this.setState({redirect:true}), 1000)
    }

    render() {
    return(
      <div>
        {this.state.redirect && <Redirect to="/test" />}
        <form onSubmit={this.handleSubmit}>
            <h2>How much would you like to invest?</h2>
            
                <p>Text explaining the steplorem ipsum dolor sit amet, consectetur adipiscing</p>
                <input onChange={this.handleChange} value={this.state.value} name="sum" />
            
                <input type="submit" value="Submit" />
        </form>
    </div>
    )
    }
};

  export default HowMuch;