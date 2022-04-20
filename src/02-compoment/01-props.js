import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}

// export default function App(props){
//   console.log(props)
//   return(
//     <div> {props.name}</div>
//   )
// }

