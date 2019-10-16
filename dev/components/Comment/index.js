import React, {Component} from 'react'

export default class Comment extends Component{
  render() {
    console.log(this.props.author)
    console.log(this.props.text)
    const {author, text}  = this.props

    return (
      <>
        {/*react fragment, что бы не создавать общую обертку, если в компоненте несколько элементов одного уровня */}
        <li className="item">
          {
            this.props.image ? (
              <img src={this.props.image} alt={author}/>
            ) : null
          }
          <header className="item__head">
            <h3 className="item__title">{author}</h3>
            <div className="item__action">
              <button className="button button--small">edit</button>
              <button className="button button--small">delete</button>
            </div>
          </header>
          <p>{text}</p>
        </li>
      </>
    )
  }
}
/* default props, если не передано другое значение */
Comment.defaultProps = {
    author: "noname",
    text: "lorem Ipsum"
}
