import React, { Component } from 'react'

function withMouse(WrappedComponent){
  class Mouse extends Component{
    state={
      x:0,
      y:0
    }

    getMousePos=e=>{
      this.setState({
        x: e.clientX,
        y:e.clientY
      })
    }

    componentDidMount(){
      window.addEventListener('mousemove',this.getMousePos)
    }
    componentWillUnmount(){
      window.removeEventListener('mousemove',this.getMousePos)
    }

    render(){
      return <WrappedComponent {...this.state} {...this.props}></WrappedComponent>
    }
    
  }
  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`
  return Mouse
}

function getDisplayName(WrappedComponent){
  return WrappedComponent.displayName ||WrappedComponent.name ||'componement' ;
}

const Postion =props=>(
  <p>mouse position: {props.x} {props.y}</p>
)

const MousePosition = withMouse(Postion)

export default class App extends Component {
  render() {
    return (
      <div>
        
        <p>高阶组件</p>
        <MousePosition/>
        
        </div>
    )
  }
}
