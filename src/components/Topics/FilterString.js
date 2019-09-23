import React, {Component} from 'react'

class FilterString extends Component{
    constructor(){
        super();

        this.state ={
            unfilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: "",
            filteredArray: []
        }
    }
    
    changeInput = (input) =>{
        this.setState({userInput: input})
    }

    solve = (input) =>{
        const tempArray = this.state.unfilteredArray
        const filter = []
        tempArray.forEach((element) => {
            if (element.includes(input)){
                filter.push(element)
            }
        })
        this.setState({filteredArray: filter})
    }
    
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(event) => this.changeInput(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.solve(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
            )
        }
    }
    
    
    export default FilterString