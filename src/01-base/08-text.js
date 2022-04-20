import React, { Component } from 'react'

export default class App extends Component {
  
  state = {
     author: '',
     txt: ''
  }

  render() {
    return (
      <div>
         

        <textarea></textarea>

        <button onClick={()=>{}}>publish</button>

        <ul>
          <li></li>
        </ul>

      </div>

    )

  
  }
}
