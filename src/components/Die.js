import React, { Component } from 'react';
import './Die.css';

class Die extends Component{
    
    render(props){
        return(
            <div className='app-dice'>
                <i className={"fa-solid fa-dice-"+this.props.s1} data-shake={this.props.status}></i>
                <i className={"fa-solid fa-dice-"+this.props.s2} data-shake={this.props.status}></i>
            
            </div>
        )
    }
}
export default Die;