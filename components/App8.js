import React, { Component } from 'react';

export default class App8 extends Component {
    constructor() {
        super()
        this.name = React.createRef()
        this.password = React.createRef()
    }
    submitHandler(event){
        event.preventDefault()
        console.log(this.name.current.value,this.password.current.value);
    }
    render() {
        return (
            <div>
                <h1>UnControlled</h1>
                <form onSubmit={(event)=>{this.submitHandler(event)}} >
                    <input type="text" placeholder='Enter Your Name' ref={this.name} /> <br /><br />
                    <input type="password" placeholder='Enter your password' ref={this.password} />
                    <br /> <br />
                    <button type='submit' >Submit</button>
                </form>
            </div>
        );
    }
}
