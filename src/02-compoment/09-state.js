import React, { Component } from 'react'

export default class App extends Component {
  
  state={
    count: 0
  }
  plusOne=()=>{
    // this.setState({
    //   count: this.state.count +1
    // })
    // console.log(this.state.count)

    this.setState((state,props)=>{
      return {count: state.count +1}
    },()=>{ console.log(this.state.count)})
    
  }
  render() {
    return (
      <div>
         <p>count: {this.state.count}</p> 
         <button onClick={this.plusOne}> +1 </button>
      </div>
    )
  }
}
