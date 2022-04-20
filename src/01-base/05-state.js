import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      count : 0
    }
  }
  
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={()=> this.setState({count: this.state.count+1})}>+1</button>
      </div>
    )
  }
}
