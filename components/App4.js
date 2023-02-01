import React, { Component } from 'react'
import '../App.css'
export default class App4 extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
        }
    }


    addOne = () =>{
        this.setState({count:this.state.count+1})
    }
    addTwo = () =>{
        this.setState({count:this.state.count+2})
    }
    addThree = () =>{
        this.setState({count:this.state.count*3})
    }
  render() {
    const count = this.state.count
    return (
      <div className='app'>
        <h1>{count}</h1>
        <button onClick={this.addOne}>AddOne</button>
        <br />
        <button onClick={this.addTwo}>AddTwo</button>
        <br />
        <button onClick={this.addThree}>MultiplyThree</button>
      </div>
    )
  }
}
