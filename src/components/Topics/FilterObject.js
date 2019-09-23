import React, {Component} from 'react'

class FilterObject extends Component{
    constructor(){
        super();
        this.state ={
            unfilteredArray: [{
                name: 'Jimmy Joe',
                title: 'Hack0r',
                age: 12,
              },
              {
                name: 'Jeremy Schrader',
                age: 24,
                hairColor: 'brown'
              },
              {
                name: 'Carly Armstrong',
                title: 'CEO',
              },
              {
                name: 'Cole Finlayson',
                hairColor: 'brown'
              }],
            userInput: "",
            filteredArray: []
        }
    }

    changeInput = (input) =>{
        this.setState({userInput: input})
    }

    solve = (input) =>{
        let tempArray = this.state.unfilteredArray;
        let filter = []
        tempArray.forEach((object) =>{
            if(object.hasOwnProperty(input)){
                filter.push(object)
            }
        })
        this.setState({filteredArray: filter})
    }
    
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(event) => this.changeInput(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.solve(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
            )
        }
    }


    
    
    export default FilterObject