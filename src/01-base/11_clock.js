import React, { Component } from 'react'

export default class Clock extends Component {
  constructor(props){
      super(props);
      this.state = {date: new Date()}
  }
  //当组件渲染完毕后调用
  componentDidMount(){
      //在这个里面就可以开启定时器来执行定时任务
      this.id = setInterval(()=>{
             this.setState({
                 date: new Date()
             });
      },1000);
  }
  //当组件被移除的时候调用
  componentWillUnmount(){
       clearInterval(this.id);
  }
  render(){
      return (
          <div>
              <h1>欢迎来到黑马程序员-大前端学科</h1>
              <div>{this.state.date.toLocaleTimeString()}</div>
          </div>
      )
  }
}
