import React, {Component} from 'react'

class EvenAndOdd extends Component{
    constructor(){
        super();
        this.state ={
            evenArray: [],
            oddArray: [],
            userInput: ""
        }  
    }

    changeInput = (input) =>{
        // console.log(event.target)
        this.setState({userInput: input})
    }

    solve = (string) =>{
        const newArray = string.split(',')
        let evens = []
        let odds = []

        newArray.forEach((element) =>{
            if(element % 2 === 0){
                evens.push(parseInt(element, 10))
            } else {
                odds.push(parseInt(element, 10))
            }
        })
        this.setState({evenArray: evens, oddArray: odds})
    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(event) => this.changeInput(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.solve(this.state.userInput)}>Separate</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
            )
        }
    }
    
    
    export default EvenAndOdd