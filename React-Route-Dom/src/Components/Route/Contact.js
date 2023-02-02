import React from 'react'
import Navbar from './Navbar'

export default function Contact() {
    return (
        <div>
            <Navbar />
            <br /><br />
            <div className="container mb-3">
                <label for="exampleFormControlInput1" className="form-label"><b>Your Email Address</b></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className=" container mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"><b>Explain Your Query</b></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write here...'></textarea>
            </div>
        </div>
    )
}
