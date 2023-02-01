import React from 'react'

function Number(numbers) {
    const Number = numbers.map((x, i) => <li key={i}>(x)</li>)
    return (
        <div>{Number}</div>
    )
}

export default Number