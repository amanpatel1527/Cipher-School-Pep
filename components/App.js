import React from 'react'

function App() {
  const anything = [
    ["Monu", "React", "Html"],
    ["Hritik", "Js", "Java"],
    ["Panno", "BBA", "Other"]
  ]
  return (
    <div>
      <h1>Array Rendering</h1>
      <h3>{anything.map((item, index) => {
        return (
          <ol key={index} >
            {item.map((subItem, subIndex) => {
              return <li key={subIndex} >{subItem} {subIndex}</li>
            })}
          </ol>
        )
      })}</h3>

    </div>
  )
}

export default App