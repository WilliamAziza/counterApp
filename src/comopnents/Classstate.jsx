import React, { Component } from 'react';

class Classstate extends Component {
    constructor (props){
     super(props) 
     this.state = {
        count: 0
     }  
    }
    numberIncrease =(e)=> {
        this.setState({count:this.state.count +1})
    }
    numberDecrease =(e)=> {
        this.setState({count:this.state.count -1})
    }
    render() {
        return (
            <div>
                <h1>Counter:{this.state.count}</h1>
                <button onClick={this.numberIncrease}>Increase</button>
                <button onClick={this.numberDecrease} className='decrease'>Decrease</button>
            </div>
        );
    }
}

export default Classstate;

