import React, { Component } from 'react'

export default class Cheaderr extends Component {
  render() {
    return (
      <div>
       
      {this.props.data.welcome}
      {this.props.data.title}
      {this.props.data.Dob}
      {this.props.data.author.Fname}
      {this.props.data.author.Lname}
      </div>
    )
  }
}
