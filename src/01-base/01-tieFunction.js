import React, { Component } from 'react'

export default class App extends Component {
  handleClick(e){
    e.preventDefault();
    console.log("click the evnet")
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click</button>
        <a href="http://www.baidu.com" onClick={this.handleClick} >click this</a>
      </div>
      
    )
  }
}
