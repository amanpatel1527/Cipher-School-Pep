import React, { Component } from 'react'

export default class Assingment extends Component {
    constructor() {
        super()
        this.Fname = React.createRef()
        this.Lname = React.createRef()
        this.title = React.createRef()
        this.Country = React.createRef()
    }
    submitHandler(event) {
        event.preventDefault()
        const data = {
            fname: this.Fname.current.value,
            lname: this.Lname.current.value,
            title: this.title.current.value,
            country: this.Country.current.value,
        }
        console.log(data);
    }
    render() {
        return (
            <div>
                <h1>UnControlled Forms</h1>
                <form onSubmit={(event) => { this.submitHandler(event) }}>
                    <input type="text" placeholder='Enter Your First name' ref={this.Fname} /> <br /> <br />
                    <input type="text" placeholder='Enter Your Last name' ref={this.Lname} /> <br /> <br />
                    <input type="text" placeholder='Enter Title' ref={this.title} /> <br /> <br />
                    <input type="text" placeholder='Enter Country' ref={this.Country} /> <br /> <br />
                    <button type='submit' >Submit</button>
                </form>
            </div>
        )
    }
}
