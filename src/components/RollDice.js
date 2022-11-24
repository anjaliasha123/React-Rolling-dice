import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

let dieList;
class RollDice extends Component{
    
    constructor(props){
        super(props);
        this.state= {
            num1: 1,
            num2: 1,
            rolling: false
        }
        this.updateNums = this.updateNums.bind(this);
        dieList = ["one","two","three","four","five","six"];
    }
    updateNums(){
        let rand1 = Math.floor(Math.random()*6 + 1);
        let rand2 = Math.floor(Math.random()*6 + 1);
        this.setState({
            num1: rand1,
            num2: rand2,
            rolling: true
        });
        setTimeout(()=>{
            this.setState({rolling: false})
            
        },1000);
        console.log(this.state.num1, this.state.num2)
    }

    render(){
        return(
            <div className='app-roll-dice'>
                <Die 
                s1={dieList[this.state.num1 - 1]} 
                s2={dieList[this.state.num2 - 1]} 
                status={this.state.rolling}/>
                <button className='roll-dice' onClick={this.updateNums} disabled={this.state.rolling}>
                    {this.state.rolling? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}
export default RollDice;