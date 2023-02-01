import React from 'react'

export default function Numbers({ numbers }) {
    const Number = numbers.map((x) => <li>{x}</li>)
    return (
        <div>
            <ul>{Number}</ul>
        </div>
    )
}
