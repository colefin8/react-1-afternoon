import React, {Component} from 'react'

class Sum extends Component{
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    changeInput1 = (value) =>{
        this.setState({number1: value})
    }

    changeInput2 = (value) =>{
        this.setState({number2: value})
    }

    solve = (num1, num2) =>{
        let sum = parseInt(num1)+parseInt(num2);
        this.setState({sum: sum})
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(event) => this.changeInput1(event.target.value)}/>
                <input className="inputLine" onChange={(event) => this.changeInput2(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.solve(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
            )
        }
    }
    
    
    export default Sum