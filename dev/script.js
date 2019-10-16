import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Title from './components/Title'
import Form from './components/Form'
import CommentsList from './components/CommentsList'

export  default class App extends Component{
  render(){
    return(
      <>
        {/*<Test author="жжет"/>*/}
        <div className="box">
          <Title/>
          <Form/>
          <CommentsList/>
        </div>
      </>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
