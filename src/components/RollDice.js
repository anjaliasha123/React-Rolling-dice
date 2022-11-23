import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

let dieList;
class RollDice extends Component{
    
    constructor(props){
        super(props);
        this.state= {
            num1: 1,
            num2: 1
        }
        this.updateNums = this.updateNums.bind(this);
        dieList = ["one","two","three","four","five","six"];
    }
    updateNums(){
        let rand1 = Math.floor(Math.random()*6 + 1);
        let rand2 = Math.floor(Math.random()*6 + 1);
        this.setState({
            num1: rand1,
            num2: rand2
        });
        console.log(this.state.num1, this.state.num2)
    }

    render(){
        return(
            <div className='app-roll-dice'>
                <Die s1={dieList[this.state.num1 - 1]} s2={dieList[this.state.num2 - 1]}/>
                <button className='roll-dice' onClick={this.updateNums}>Roll Dice</button>
            </div>
        )
    }
}
export default RollDice;