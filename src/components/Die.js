import React, { Component } from 'react';
import './Die.css';

class Die extends Component{
    
    render(props){
        return(
            <div className='app-dice'>
                <i className={"fa-solid fa-dice-"+this.props.s1}></i>
                <i className={"fa-solid fa-dice-"+this.props.s2}></i>
            
            </div>
        )
    }
}
export default Die;