import React, { Component } from 'react'


//props 的校验

import Proptypes from 'prop-types'

export default class App extends Component {
  render() {
    return (
      <div>App

        <Bpp colors={["red","blue"]}></Bpp>
        <Cpp fn={()=>{}} filter={{area:"sd",price:12}}></Cpp>
      </div>
    )
  }
}


const Cpp = props=>{
  return (
    <div> props: 校验</div>
  )
}
Cpp.propTypes ={
  a: Proptypes.number,
  fn: Proptypes.func.isRequired,
  tag: Proptypes.element,
  filter: Proptypes.shape({
    area: Proptypes.string,
    price: Proptypes.number
  }).isRequired
}


const Bpp =props=>{
  const arr = props.colors
  const list = arr.map((item,index)=> <li key={index}>{item}</li>)
  return (<div>
    {props.pageSize}
    <ul>{list}</ul></div>) 
}

Bpp.propTypes={
  colors: Proptypes.array
}
Bpp.defaultProps={
  pageSize: 10
}



