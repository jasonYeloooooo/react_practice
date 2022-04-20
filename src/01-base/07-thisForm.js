import React, { Component } from 'react'

export default class App extends Component {
  
  state = {
    txt: ''
  }
  render() {
    return (
      <div>
        <p>{this.state.txt}</p>
        <input type="text" value={this.state.txt} onChange={e => this.setState ({ txt: e.target.value})} /> 

      </div>
    )
  }
}
