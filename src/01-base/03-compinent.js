import React, { Component } from 'react'

function Navbar(){
  return (
    <div>
      nav bar
    </div>
  )
}
function Swiper(){
  return (
    <div>
     swiper 
    </div>
  )
}
const Tabbar =()=><div>tabbar</div>

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
