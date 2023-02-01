import React, { Component } from 'react';

export default class App10 extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            password: "",
        }
    }
    submit()
    {
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>Controlled Component</h1>
                <form action="">
                    <input type="text" placeholder='Name' onChange={(event) => { this.setState({ name: event.target.value }) }} /> <br /><br />
                    <input type="password" placeholder='Password' onChange={(event) => { this.setState({ password: event.target.value }) }} /> <br /><br />
                    <button onClick={()=>{this.submit()}} >Submit</button>
                </form>
            </div>
        );
    }
}
