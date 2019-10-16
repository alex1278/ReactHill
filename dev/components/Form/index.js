import React, {Component} from 'react'

export default class Form extends Component{

  constructor(props) {
    super()
    this.state = {
      name: props.author,
      text: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // this.inputName = React.createRef();
    // this.inputText = React.createRef();
  }
  handleChange(e){
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // const data = {
    //   name: this.inputName.current.value,
    //   text: this.inputText.current.value
    // }
    const data = this.state
    console.log('submit', data)
    console.log(this.inputText)
    console.log(this.inputText.current.value)

}
  render() {
    const {name, text} = this.state
    return(
      <form
        className="form"
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={this.handleChange}
          ref={this.inputName}
          defaultValue = {this.props.author}
          value={name}
        />
        <label htmlFor="text">Comment</label>
        <textarea
          name="text"
          id="text"
          value={text}
          onChange = {this.handleChange}
          // ref={this.inputText}
        >{text}</textarea>

        <button className="button">post</button>
      </form>
    )
  }
}
