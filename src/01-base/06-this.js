import React, { Component } from 'react'

export default class App extends Component {
  
  constructor(){
    super()
    this.onIncrement2 = this.onIncrement2.bind(this)
  }
  
  onIncrement(){
    this.setState({
      count: this.state.count+1
    })
  }
  onIncrement2(){
    this.setState({
      count: this.state.count+1
    })
  }
  onIncrement3=()=>{
    this.setState({
      count: this.state.count+1
    })
  }
  state = {
    count: 0
  }

  render() {
    return (
      <div>
        <p> {this.state.count}</p>

        <button onClick={()=> this.onIncrement()}>+1(arrow)</button>
        <button onClick={this.onIncrement2}>+1(constructor)</button>
        <button onClick={this.onIncrement3}>+1(Arrow function)</button>

      </div>
    )
  }
}
