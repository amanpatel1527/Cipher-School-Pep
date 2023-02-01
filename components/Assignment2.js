import React, { Component } from 'react';

export default class Assignment2 extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            currentState :"Blue",
        }
    }

  render() {
    return (
      <div>
      <h1 style={{color:this.state.currentState}}>Aman Patel</h1>
      <button onClick={()=>{this.setState({currentState:"Black"})}} >Black</button>
      <button onClick={()=>{this.setState({currentState:"red"})}} >Red</button>
      <button onClick={()=>{this.setState({currentState:"Green"})}} >Green</button>
      <button onClick={()=>{this.setState({currentState:"Grey"})}} >Grey</button>
      </div>
    );
  }
}
