import React, {Component} from 'react'

class Palindrome extends Component{
    constructor(){
        super();
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    changeInput(input){
        this.setState({userInput: input})
    }

    solve(input){
        let forwards = input
        let backwards = [...input]
        let palindrome = ''
        backwards = backwards.reverse();
        backwards = backwards.join('');
        if(forwards === backwards){
            palindrome = 'yes'
        } else {
            palindrome = 'no'
        }
        this.setState({palindrome: palindrome})
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(event) => this.changeInput(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.solve(this.state.userInput)}>Is it a palindrome?</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>
            )
        }
    }
    
    
    export default Palindrome