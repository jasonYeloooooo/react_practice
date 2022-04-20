import React, { Component } from 'react'
import Clock from './11_clock'


export default class App extends Component {
  state={
    name: "",
    context:"",
    comments: [
      {id:1,name:"jason",context:"hello"},
      {id:2,name:"yellow",context:"bye"}
    ]
  }

   //优化
   changeForm=e=>{
    const value = e.target.type === "chceckbox"? e.target.checked: e.target.value
    const name = e.target.name
    this.setState({
      [name] : value
    })
  }

  addComment=()=>{
    const {name,context,comments} = this.state
    if(name===""||context===""){
      alert("fuck you")
      return
    }

    const newComments = [
      {
        id: Math.random,
        name: name,
        context: context
      },...comments
    ]
    this.setState({
      comments: newComments,
      name:"",
      context:""
    })
  }

  render() {
    return (
      <div>
        <Clock></Clock>
        <br/>
        <input type="text" value={this.state.name} onChange={this.changeForm} name="name" placeholder='enter name'/>
        <br/><br/>
        <textarea rows="20" cols="50" value={this.state.context} onChange={this.changeForm} name="context" placeholder='enter comment'/>
        <br/><br/>
       
        <button onClick={()=>{this.addComment()}}>publish</button>

        <br/><br/>
        
      
     

      {
        this.state.comments.length ===0 ? <p>no comment, go and comment</p>:
        <ul>
        {this.state.comments.map( item =>( <li key={item.id}>
          <p>{item.name}</p>
          <p>{item.context}</p>
        </li>
        ))}
        </ul>
      }
        
      </div>
    )
  }
}
