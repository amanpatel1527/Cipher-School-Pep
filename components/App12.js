import React, { Component } from 'react'
import '../App.css';
export default class App12 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCLassActive: false,
        }
    }
    toggle = () => {
        this.setState({
            isCLassActive: !this.state.isCLassActive
        })
    }
    render() {
        return (
            <div>
                <h1 className={this.state.isCLassActive ? "active" : "Monu"}>Aman Patel</h1>
                <button onClick={this.toggle}>Click Me</button>
            </div>
        )
    }
}
