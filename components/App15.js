import React from 'react';
import { useReducer } from 'react';
const counterReducer = (state, action) => {
    console.log("State", state)
    console.log("Action", action)
    if (action.type === "Monu") {
        return {
            count: state.count + 10
        }
    } else if (action.type === "Aman") {
        return {
            count: state.count - 10
        }
    } else if (action.type === "Hritik") {
        return {
            count: state.count * 2
        }
    } else if (action.type === "Vipin") {
        return {
            count: state.count * 4
        }
    } else if (action.type === "Rohan") {
        return {
            count: state.count * 6
        }
    }
    return state
}
export default function App15() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 })
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => { dispatch({ type: "Monu" }) }}>Change State</button> <br /> <br />
            <button onClick={() => { dispatch({ type: "Aman" }) }}>Change State</button> <br /> <br />
            <button onClick={() => { dispatch({ type: "Hritik" }) }}>Change State</button> <br /> <br />
            <button onClick={() => { dispatch({ type: "Vipin" }) }}>Change State</button> <br /> <br />
            <button onClick={() => { dispatch({ type: "Rohan" }) }}>Change State</button> <br /> <br />
        </div >
    );
}
