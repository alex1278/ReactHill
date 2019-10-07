import React, {Component} from 'react'


import Comment from '../Comment'

export default class CommentsLIst extends Component{
  render() {
    return (
      <ul className="list">
        <Comment/>
        <Comment/>
      </ul>

    )
  }
}
