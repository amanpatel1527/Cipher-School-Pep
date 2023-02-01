import React from 'react'
function Ele1(props) {
    return (
        <h1>I am element one</h1>
    )
}

function Ele2(props) {
    return (
        <h1>I am element two</h1>
    )
}
function RealOutput(props) {
    const isOutput = props.isOutput;
    if (isOutput) {
        return <Ele1 />
    }
    else {
        return <Ele2 />
    }
}
function App2() {

    return (
        <div>
            <RealOutput isOutput={true}/>
        </div>
    )
}

export default App2