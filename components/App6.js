import React from 'react';
import { useState } from 'react';
import '../App.css'

function App6() {

    const [like, setLike] = useState(0)
    const [Unlike, setUnlike] = useState(0)

    const add = () => {
        setLike(like + 1)
        setUnlike(Unlike - 1)
    }
    const sub = () => {
        setUnlike(Unlike + 1)
        setLike(like - 1)
    }
    return (
        <div className='app'>
            <br />
            <button onClick={add}>Like |{like} </button>
            <br />
            <button onClick={sub}>Dislike | {Unlike} </button>
        </div>
    );
}

export default App6;
