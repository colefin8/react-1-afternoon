import React, {Component} from 'react'
import EvenandOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'
import IsSquare from '../Topics/IsSquare'

class TopicBrowser extends Component{
render(){
    return(
        <div>
            <div className="row">
                <EvenandOdd/>
                <FilterObject/>
            </div>
            <div className="row">
                <FilterString/>
                <Palindrome/>
            </div>
            <div className="row">
                <Sum/>
                <IsSquare/>
            </div>
        </div>
        )
    }
}


export default TopicBrowser