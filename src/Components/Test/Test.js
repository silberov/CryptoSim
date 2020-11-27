import React from 'react';
import Select from 'react-select';
import { BrowserRouter as Link, Redirect} from "react-router-dom";
import styled from 'styled-components'

//CSS


const Button = styled.input `

font-family: "Space Mono";
font-weight: bold;
background-color:rgba(183, 207, 214, 1);
font-size: 0.9rem;
width: 200px;
height: 50px;
text-align: center;
box-shadow: 8px 8px;`


const TitleH2 = styled.h2 `
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
        setTimeout(()=> this.setState({redirect:true}), 1000);
        //this.props.typeChoice(event)
    }

    render () {
        //console.log(this.props)

        return (
            <div className="Container">
            <div className="DivBackground">
                {this.state.redirect && <Redirect to="/type" />}
                <TitleH2>Here you can take the test to find out what kind of investor are you </TitleH2>
                <p>Investing comes with great responsibilty and it is closely correlated with your personality and goals.
                    If you want to find more out about what type of investor you are, you can read this article.
                   
                </p>
               <br></br>
            <TitleH2>    <a href="https://www.interactivecrypto.com/types-of-crypto-traders"  > Go to article</a> </TitleH2>
            <br></br>
                <TitleH2>If you already know, you can just select the one from here:</TitleH2>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <Select
                        className="spacer" 
                        options={this.props.investorTypes}
                        getOptionLabel={(type) => type.type}
                        getOptionValue={type => type.type}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <Button type='submit' value='Submit' />
                </form>
            </div>
            </div>
        );
    }
}


  export default Test;