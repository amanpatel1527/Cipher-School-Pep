import React, { useState } from 'react'
import { useEffect } from 'react'

export default function App13() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Monu")
    useEffect(() => {
        console.log("1");
        const eventHandler = () => console.log("Hii");
        document.addEventListener("click", eventHandler)
        return ()=>{
            console.log("2");
            document.removeEventListener("click",eventHandler)
        }
    },[count])
    return (
        <div>
            <h1>{count}</h1>
            <h1>{name}</h1>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <br /><br />
            <button onClick={() => setName("Aman")}>Update Name</button>
        </div>
    )
}
