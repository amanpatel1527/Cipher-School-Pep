import React, { useState } from 'react'
import { useEffect } from 'react'

export default function App14() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Monu")
    useEffect(() => {
        setInterval(() => {
            console.log("Hii");
        }, 1000)
    }, [count])
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
