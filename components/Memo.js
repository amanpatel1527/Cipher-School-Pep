import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

export default function Memo() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 2)
    }
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 20) i++
        return counterOne % 2 === 0
    }, [counterOne])
    return (
        <div>
            <button onClick={incrementOne}>Counter1 = {counterOne}</button> <br /> <br />
            <span>{isEven ? "Even Number" : "Odd Number"}</span> <br /> <br />
            <button onClick={incrementTwo}>Counter2 = {counterTwo}</button>
        </div>
    );
}
