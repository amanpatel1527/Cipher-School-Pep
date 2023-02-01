import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Assingment3() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("1");
        const interval = setInterval(() => {
            console.log("Hii");
        }, 1000)
        return () => {
            console.log("2");
            clearInterval(interval)
        }
    }, [count])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
        </div>
    )
}
