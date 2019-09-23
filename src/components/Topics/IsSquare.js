import React, {Component} from 'react'

class IsSquare extends Component {
    constructor(){
        super();
        this.state = {
            userInput: "",
            isSquare: ""
        }
    }

    changeInput = (value) => {
        this.setState({userInput: value})
    }

    solve = (num) =>{
        if(!parseInt(num, 10)){
            this.setState({isSquare: "Please enter a number"})
            return
        } else {
            if (Math.sqrt(parseInt(num, 10)) % 1 === 0){
            this.setState({isSquare: "It's a perfect square!"})
            }   else {
            this.setState({isSquare: `It's not a perfect square...`})
            }
        }
    }

    render(){
        return(
            <div className="puzzleBox squarePB">
            <h4>Square</h4>
            <input className="inputLine" onChange={(event) => this.changeInput(event.target.value)}/>
            <button className="confirmationButton" onClick={() => this.solve(this.state.userInput)}>Is it a perfect square?</button>
            <span className="resultsBox">{this.state.isSquare}</span>
        </div>
        )
    }
}

export default IsSquare