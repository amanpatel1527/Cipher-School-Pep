import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Child from './Child';


export default function Parent() {
    const [counterOne, setCOunterOne] = useState(0)
    const [counterTwo, setCOunterTwo] = useState(0)
    const incrementTwo = () => {
        setCOunterTwo(counterTwo + 2)
    }
    const incrementOne = () => {
        setCOunterOne(counterOne + 1)
    }
    const fun = useCallback(() => {
        console.log("Aman");
    }, [counterTwo])
    return (
        <div>
            <Child counterTwo={counterTwo} fun={fun} />
            <button onClick={incrementOne}>Counter :{counterOne}</button>
            <button onClick={incrementTwo}>Counter :{counterTwo}</button>
        </div>
    );
}
