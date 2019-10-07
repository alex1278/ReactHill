import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Title from './components/Title'
import Form from './components/Form'
import CommentsList from './components/CommentsList'

export  default class App extends Component{
  render(){
    return(
      <div>
        <Title/>
        <Form/>
        <CommentsList/>
      </div>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementsByClassName('box')[0]
)
