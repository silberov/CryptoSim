import React from 'react';
import { BrowserRouter as Link, Redirect} from "react-router-dom";
import styled from 'styled-components';
import styles from 'styled-components'

//CSS



const Title=styled.h2 `
text-shadow: 2px 2px rgba(251, 59, 108, 1);
text-align:center`


const Inputfield=styled.input`
background-color:rgba(148, 163, 167, 1);
display:flex;
align-item:center;
height:40px;
width:300px;
border:1.5px solid black;
border-box:box-sizing;
margin:auto;

`
const Button = styled.input `

font-family: "Space Mono";
font-weight: bold;
background-color:rgba(183, 207, 214, 1);
font-size: 0.9rem;
width: 200px;
height: 50px;
text-align: center;
box-shadow: 8px 8px;
`
//Component Code
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
      <div className="Container">
      <div className="DivBackground">
        {this.state.redirect && <Redirect to="/test" />}
        <form onSubmit={this.handleSubmit}>
            <Title>How much would you like to invest?</Title>
            <br></br>
            
                <p>Here you can decide, how much of your FIAT you would like to turn into Magic Internet Money.
                  <br></br>
                   We advise you to stay realistic so you can get and idea of how Crypto Currencies work in real life.
                   <br></br>
                   You can type the amount here:
                </p>
                <br></br> 
                <Inputfield onChange={this.handleChange} value={this.state.value} name="sum" />
                <br></br>
            
                <Button type="submit" value="Submit" />
        </form>
    </div>
    </div>
    )
    }
};

  export default HowMuch;