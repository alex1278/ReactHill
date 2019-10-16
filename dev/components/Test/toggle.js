import React, {Component} from 'react'

class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false
    };
    this.toggleShow = this.toggleShow.bind(this);
  }
  toggleShow() {
    console.log(this.state);
    const {isShow} = this.state

    console.log('before change', this.state.isShow)
    this.setState({
      isShow: !isShow
    }, () => {
      console.log('state change', this.state.isShow)
    })
    console.log('after change', this.state.isShow)
  }

  render() {
    const {isShow} = this.state;
    return (
      <>
        <button onClick={this.toggleShow}>show/hide</button>
        {
          isShow ? (
            <p>Lorem ipsum dolor sit amet</p>
          ) : null
        }
      </>
    );
  }
}
export default Toggle;
