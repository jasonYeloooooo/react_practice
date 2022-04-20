import React, { Component } from 'react'

export default class App extends Component {
  
  state={
    count: 10,
    msg : '',
    sisterMsg: ''
  }

  sonToFather=(data)=>{
    this.setState({
      msg: data
    })
  }

  sisterToFather=(data)=>{
    this.setState({
      sisterMsg: data
    })
  }

  render() {
    return (
      <div>
      <p>father: {this.state.msg}</p>

      <Son countValue={this.state.count} sendMsg={this.sonToFather} sisterMsg={this.state.sisterMsg}></Son>
      <Sister send={this.sisterToFather}></Sister>

      </div>
    )
  }
}

class Son extends Component{

  state={
    msg: "react",
  }

  handleClick=()=>{
    this.props.sendMsg(this.state.msg)
  }

  render(){
    return (
      <div>
        <p>{this.props.countValue}</p>
        <button onClick={this.handleClick}>click</button>
        <p>sister msg:{this.props.sisterMsg}</p>
      </div>
    )
  }
}

class Sister extends Component{
  state={
    msg:"fuck you brother"
  }


  render(){
    return (
      <div>
        <button onClick={()=>{this.props.send(this.state.msg)}}>send msg to brother</button>
      </div>
    )
  }
}
