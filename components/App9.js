import React from 'react';
import { useRef } from 'react';

export default function App9() {
    const inputNameRef = useRef()
    const inputPswdRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(inputNameRef.current.value, inputPswdRef.current.value);
    }
    return (
        <div>
            <h1>Uncontrolled FB Components</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Enter Your Name' ref={inputNameRef} /> <br /> <br />
                <input type="password" placeholder='Enter Your Password' ref={inputPswdRef} /> <br /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
