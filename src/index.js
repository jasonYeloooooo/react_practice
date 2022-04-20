import React from 'react'
import ReactDOM  from 'react-dom'
import './01-base/01-class'
//import App from './02-compoment/09-state'
import {BrowserRouter as Router, Route,Link, Routes}from 'react-router-dom'

//router学习


const First=()=>{ <p>第一页</p>}

class Bpp extends React.Component{

  render(){
    return(
      <Router>
          <div>
          <p>React Router</p>
          <Link to="/firstpage"></Link>
         
          <Routes>         
          <Route path="/firstpage" component={First}>       </Route>
          </Routes>
         
   
          </div>
          

      </Router>
    )
  }
}



ReactDOM.render(<Bpp></Bpp>,document.getElementById("root"))



/*

jsx == js + xml
*/