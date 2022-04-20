import React, { Component } from 'react'

export default class App extends Component {
  
  //最先执行的 初始state 为事件处理绑定this
  constructor(props){
    super()
    console.warn("生命周期钩子函数：constructor")
  }

  //每次组件渲染都会触发， 渲染UI（不能调用setState（））
  render() {
    console.warn("生命周期钩子函数：render")
    return (
      <div>
        <h1 id="title">Count hit bean value</h1>
        <button id="btn"> hit the bean </button>
      </div>
    )
  }
  //在render渲染完成后（组件挂载后，完成dom渲染后） 发送网络请求ajax(获取远程数据) dom操作
  componentDidMount(){
    console.warn("生命周期钩子函数：componentdidmount")
    console.log(document.getElementById("title"))
  }
}
