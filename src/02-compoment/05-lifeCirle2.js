import React, { Component } from 'react'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }

  handleState=()=>{
    this.setState({
      count: this.state.count +1
    })
  }



  render() {
    console.warn("生命周期钩子函数：render")
    return (
      <div>
        <Counter count={this.state.count}/>
        <button onClick={this.handleState}> hit the bean </button>
        <button onClick={()=>{ this.forceUpdate()}}> force update</button>
      </div>
    )
  }
}


class Counter extends Component{

  //每次渲染都会触发（渲染UI）
  render(){
    console.warn("=====son componemt=====生命周期钩子函数：render")
    return <h1 id='value'>Count hit bean value: {this.props.count}</h1>
  }

  //组件更新（完成DOM渲染）后 发送网络请求 dom操作
  componentDidUpdate(prevProps){
    console.warn("=====son componemt=====生命周期钩子函数：update")
    console.log(document.getElementById("value").innerHTML)

    //如果调用setState 必须放在一个if条件中
    //this.setState({}) 如果直接调用setState也会导致递归更新
    console.log("prevpros",prevProps,", currentpros:",this.props)
    //正确做法 比较更新前后是否相同 来决定是否更新渲染组件
    if(prevProps.count !== this.props.count){
      this.setState({})
    }
  }
}