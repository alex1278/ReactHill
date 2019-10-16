import React, {Component} from 'react'

class Test extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment() {
    const { count} = this.state;
    this.setState({
      count: count+1
    })
  }

  decrement() {
    const {count} = this.state
    this.setState({
      count: count - 1
    })
  }

  /* метод 2 в 1 */
  changeNum(num){
    const {count} = this.state
    this.setState({
      count: count+num
    })
  }
  render() {
    const {count} = this.state;
    return (
      <div style={{
        marin: '100px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <button onClick={()=> this.changeNum(1)}> + 1</button>
        {count}
        <button onClick={()=> this.changeNum(-1)}> - 1</button>
      </div>
    );
  }
}
export default Test;
