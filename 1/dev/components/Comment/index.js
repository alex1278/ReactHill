import React, {Component} from 'react'

export default class Comment extends Component{
  render() {
    return (
      <li className="item">
        <header className="item__head">
          <h3 className="item__title">Николай</h3>
          <div className="item__action">
            <button className="button button--small">edit</button>
            <button className="button button--small">delete</button>
          </div>
        </header>
        <p>олололололололо</p>
      </li>
    )
  }
}
