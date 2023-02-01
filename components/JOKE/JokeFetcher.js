import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../JOKE/Joke.css'

function JokeFetcher() {
    const [joke, setJoke] = useState({})

    let getJoke = async () => {
        let url = "https://official-joke-api.appspot.com/random_joke"
        let data = await fetch(url)
        let parseData = await data.json()
        setJoke(parseData)
    }
    useEffect(() => {
        getJoke();
    }, [])
    const ClickMe = async () => {
        await getJoke();
    }
    return (
        <div className='container my-3 mx-5'>
            <button className='container my-3 mx-5' onClick={ClickMe}>Throw A Joke</button>
            <div className='container my-5'>
                <h1>{joke.setup}</h1>
                <h1>{joke.punchline}</h1>
            </div>
        </div>
    );
}

export default JokeFetcher;
