import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super()
    this.textRef = React.createRef()
  }

  state={
    name:"",
    txt: "",
    city: "gz",
    isChecked: false
  }

  changeName = e =>{
    this.setState({
      name: e.target.value
    })
  }

  changeText= e=>{
    this.setState({
      txt: e.target.value
    })
  }

  changeCity=e=>{
    this.setState({
      city: e.target.value
    })
  }
  changeChecked=e=>{
    this.setState({
      isChecked: e.target.checked
    })
  }

  //优化
  changeForm=e=>{
      const value = e.target.type === "chceckbox"? e.target.checked: e.target.value
      const name = e.target.name
      this.setState({
        [name] : value
      })

  }

  render() {
    return (
      <div>

        <input type="text" value={this.state.name} name="name" onChange={this.changeForm}/>

        <hr/>

        <textarea value={this.state.txt} name="txt" onChange={this.changeForm}/>

        <hr/>

        <select value={this.state.city} name="city" onChange={this.changeForm}>
          <option value="sh">shanghai</option>
          <option value="bj">beijing</option>
          <option value="gz">guangzhou</option>
        </select>

        <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.changeForm}/>

       <hr/>
       <p>非受控组件</p>

       <input type="text" ref={this.textRef}/>
       <button onClick={()=> { console.log(this.textRef.current.value)}} >click me </button>
       
      </div>
    )
  }
}
