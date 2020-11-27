import React from 'react';
import Select from 'react-select';
import { BrowserRouter as Link, Redirect} from "react-router-dom";
import styled from 'styled-components';
import './Test.css';

//CSS


const Button = styled.input `
margin: 24px auto;
font-family: "Space Mono";
font-weight: bold;
background-color:rgba(183, 207, 214, 1);
font-size: 0.9rem;
width: 200px;
height: 50px;
text-align: center;
box-shadow: 8px 8px rgba(223, 249, 255, 0.2);;
border: none;
&:focus {
    outline: none;
    box-shadow: none;
    border: none;
}
&:hover {
    background-color: rgba(251, 59, 108, 1);
    //box-shadow: 8px 8px rgba(251, 59, 108, 0.2);
    box-shadow: none;
}
`


const TitleH2 = styled.h2 `
margin: 12px auto;
text-shadow: 2px 2px rgba(251, 59, 108, 1);`


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
        this.setState({redirect:true});
    }

    render () {

        return (
            <div className="DivBackground">
                {this.state.redirect && <Redirect to="/type" />}
                <TitleH2>Here you can take the test to find out what kind of investor are you </TitleH2>
                <p>
                    Investing comes with great responsibilty and it is closely correlated with your personality and goals.
                    If you want to find more out about what type of investor you are, you can read this article.  
                </p>
                <a href="https://www.interactivecrypto.com/types-of-crypto-traders" >Go to article</a>
                <p style={{paddingTop:"24px"}}><strong>If you already know, you can just select the one from here:</strong></p>

                <form onSubmit={this.handleSubmit}>
                    <div style={{width:"400px", margin:"24px auto 0"}}>
                    <Select
                        options={this.props.investorTypes}
                        getOptionLabel={(type) => type.type}
                        getOptionValue={type => type.type}
                        onChange={this.handleChange}
                    />
                    </div>
                    <Button type='submit' value='Submit' />
                </form>
            </div>

        );
    }
}


  export default Test;