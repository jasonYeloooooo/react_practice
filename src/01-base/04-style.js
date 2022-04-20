import React, { Component } from 'react'
import "./index.css" //倒入css模块  webpack支持

export default class App extends Component {
  render() {
    var myname  = "jason"
    var obj = {
      background: "yellow"
    }
    return (
      <div>
        
      {10+20} ---{myname}

        <div  style={obj}>1111111</div>
        <div  style={{background: "red"}}>1111111</div>
        <div className="active">33333333333</div>
        </div>
    )
  }
}
