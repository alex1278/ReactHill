import React, {Component} from 'react'


import Comment from '../Comment'
import Test from '../Test'

export default class CommentsLIst extends Component{
  render() {
    return (
      <>
        <ul className="list">
          <Comment author="Николай" text="всем привет"/>
          <Comment author="Юрий" text="ололололо"/>
          <Comment text="ололололо"/>
        </ul>
        <Test text="Автор Жжет"/>
      </>
    )
  }
}
