import React from 'react'
import './App1.css'

function App1() {
    const people = [
        {id:1,name:"Aman",Skills:["HTML","Css","Js","React"]},
        {id:2,name:"Hritik",Skills:["Cyber","NetCutter","HTML","Css",]},
        {id:3,name:"Vipin",Skills:["Devops","Excel","HTML","Css",]}
    ]
  return (
    <div className='app'  >
        {people.map((person,index)=>{
            return(
                <div key={index}>
                    <h2>Name:{person.name}</h2>
                    {person.Skills.map((skill,index)=>{
                        return (
                            <div key={index}>
                                <h3>Skills: {person.Skills} </h3>
                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default App1