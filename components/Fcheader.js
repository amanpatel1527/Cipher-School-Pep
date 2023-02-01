import React, { Component } from 'react'
import Cheaderr from './Cheaderr'

const data = {
    welcome:"Welcome to react class ",
    title:"Props in classes ",
    author:{
        Fname:"Aman ",
        Lname:"Patel "
    },
    Dob:"12-08-2002 "
}
export default class Fcheader extends Component {
    
  render() {
    return (
      <div>
      <Cheaderr data={data}/>
      </div>
    )
  }
}
