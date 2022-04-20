import React, { Component } from 'react'
import img from './Icon.png'
import PropType from 'prop-types'

class Mouse extends Component{
  state={
    x: 0,
    y: 0
  }
  
  getMousePos=e=>{
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }


  
  render(){
    return this.props.children(this.state)
  }
  componentDidMount(){
  window.addEventListener('mousemove', this.getMousePos)
  }

  componentWillUnmount(){
    window.removeEventListener('mousemove',this.getMousePos)
  }
  
}
Mouse.propTypes={
  children: PropType.func.isRequired
} 





export default class App extends Component {
  render() {
    return (
      <div>
        <h1>render prop</h1>
        <Mouse >{(mouse) => <p>鼠标当前位置 {mouse.x}，{mouse.y}</p>}</Mouse>
        <Mouse >{(mouse) => <img src={img} alt="icon" style={{ position: 'absolute', top: mouse.y, left:mouse.x}}/>}</Mouse>
        </div>
    )
  }
}
