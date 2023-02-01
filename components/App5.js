import React, { useState } from 'react';

function App5() {
    const [count,setCount] = useState(0)
    const addone = ()=>{
        setCount(count+1)
    }
    const addtwo =()=>{
        setCount(count+2)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addone}>AddOne</button>
      <br />
      <button onClick={addtwo}>Addtwo</button>
      <br />
    </div>
  );
}

export default App5;
