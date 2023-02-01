import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

const x = new Set()

export default function App19() {
    const [counter, setCounter] = useState(0)
    const [Number, setNumber] = useState(0)

    const incrementCounter = useCallback(() => {
        setCounter(counter + 1)
    }, [counter])
    const decrementCounter = useCallback(() => {
        setCounter(counter - 1)
    }, [counter])
    const incrementNumber = useCallback(() => {
        setNumber(Number + 1)
    }, [Number])

    x.add(incrementCounter)
    x.add(decrementCounter)
    x.add(incrementNumber)

    alert(x.size)
    return (
        <div>
            count : {counter}
            <br /> <br />
            Number : {Number}
            <br /><br />
            <button onClick={incrementCounter}>Increment Counter</button>
            <br /> <br />
            <button onClick={decrementCounter}>Decerement Counter</button>
            <br /> <br />
            <button onClick={incrementNumber}>Increment Number</button>

        </div>
    );
}
