import React, { Component } from 'react'
import "./index.css"

export default class App extends Component {

  state={
    lastName:"huang",
    sonMsg:"",
    count: 0
  }

  //提供回调函数，用来接收数据
  getChildMsg=(data)=>{
    console.log("接收到子组件中传递的数据：",data)
    this.setState({
      sonMsg: data
    })
  }

  addOne=()=>{
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() {
    return (
      <div className='Parent'>
      father compoment: {this.state.lastName} 
      <p>son msg: {this.state.sonMsg}</p>
      <Son lastName={this.state.lastName} getMsg={this.getChildMsg}></Son>
      <Child1 count={this.state.count}></Child1>
      <Child2 addOne={this.addOne}></Child2>
      
      <br></br>
      
      </div>
    )
  }
}

class Son extends Component{
  
  state={
    childMsg: 'jessic'
  }

  handleClick=()=>{
    this.props.getMsg(this.state.childMsg)
  }

  render(){
    return (
      <div className="Son">
          <p>son compoment: {this.props.lastName}</p>
          <button onClick={this.handleClick}>add</button>
      </div>
    )
  }
}

class Child1 extends Component{
  render(){
    return (
      <div>
          <p>Count: {this.props.count}</p>
      </div>
    )
  }
}
class Child2 extends Component{
  render(){
    return (
      <div>
         <button onClick={this.props.addOne}>+1</button>
      </div>
    )
  }
}