import React, { Component } from 'react'
import tom from './tom.gif'
import jerry from './jerry.gif'

function withMove(WrappedComponent){

  class Move extends Component{
    // 公共的状态
    state = {
      speedX: 0,
      // 定时器id
      timeId: null,
      // 步进
      step: 5
  }
  constructor() {
    super()
    // 给函数绑定this
    this.speedUp = this.speedUp.bind(this)
    this.speedDown = this.speedDown.bind(this)
} 
// 当页面加载的时候,获取元素不同的位置,设置给state
componentDidMount() {
    // 两个组件初始化的位置不同，通过组件的自定义属性来获取
    this.setState({
        speedX: parseInt(document.getElementById(WrappedComponent.name + 'Div').dataset.left)
    })
}
   // 公共的方法
        // 点击加速按钮，让元素加速移动
        speedUp() {
          console.log('触发了', window.innerWidth);
          this.state.step += 5
          // 移除定时器
          clearInterval(this.state.timeId)
          // 开启定时器
          this.state.timeId = setInterval(() => {
              if (this.state.speedX >= window.innerWidth) {
                  alert('到达终点了')
                  clearInterval(this.state.timeId)
                  return
              }
              this.setState({
                  state: this.state.speedX += this.state.step
              })
          }, 500)
      }
      // 点击减速按钮，让元素减速移动
      speedDown() {
          // 移除定时器
          clearInterval(this.state.timeId)
          // 点击一次前进的步进减少5个像素
          this.state.step -= 5
          if (this.state.step < 5) {
              // 最低的步进就是5个像素
              this.state.step = 5
          }
          // 开启定时器
          this.state.timeId = setInterval(() => {
              if (this.state.speedX >= window.innerWidth) {
                  alert('到达终点了')
                  clearInterval(this.state.timeId)
                  return
              }
              this.setState({
                  state: this.state.speedX += this.state.step
              })
          }, 500)
      }
       // 当组件移除的时候注销事件
       componentWillUnmount() {
        clearInterval(this.state.timeId)
    }
    render() {
      return (
          <div>
              {/* 传递过去状态，还需要传递过去点击事件触发的函数 */}
              <WrappedComponent {...this.state} {...this.props} speedUp={this.speedUp} speedDown={this.speedDown} />
          </div>
      )
  }
   
  }
   // 设置别名
   Move.displayName = `WithMouse${getDisplayName(WrappedComponent)}`
   return Move
}

/**
 * 提供获取别名的方法
 * @param {*} WrappedComponent 
 */
 function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

/**
 * Tom的组件
 */
 class Tom extends React.Component {
  render() {
      return (
          <div id="TomDiv" data-left='0' style={
              {
                  'position': 'absolute',
                  'left': this.props.speedX + 'px',
                  "width":'175px'
              }
          }>
              <div  >
                  <button onClick={this.props.speedUp}>加速</button>
                  <button onClick={this.props.speedDown}>减速</button>
              </div>
              <img src={tom} alt="tom" />
          </div>
      )
  }
}
/**
* Jerry的组件
*/
class Jerry extends React.Component {
  render() {
      return (
          <div id="JerryDiv" data-left='175' style={
              {
                  'position': 'absolute',
                  'left': this.props.speedX + 'px'
              }
          }>
              <div  >
                  <button onClick={this.props.speedUp}>加速</button>
                  <button onClick={this.props.speedDown}>减速</button>
              </div>
              <img src={jerry} style={
                  {
                      'position': 'absolute',
                      'top': '68px'
                  }
              } alt="jerry"/>
          </div>
      )
  }
}

// 包装一下Tom组件
const TomMove = withMove(Tom)
// 包装一下Jerry组件
const JerryMove = withMove(Jerry)


export default class App extends Component {
  render() {
    return (
        <div>
            <h1 style={{ 'textAlign': 'center' }}>汤姆And杰瑞</h1>
            <TomMove />
            <JerryMove />
        </div>
    )
  }
}
