// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickIncrease = () => {
    const random = Math.floor(Math.random() * 101)
    this.setState(prevState => ({count: prevState.count + random}))
  }

  render() {
    const {count} = this.state
    const oddEven = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="App-container">
        <div className="container">
          <h1>Count {count}</h1>
          <p>Count is {oddEven}</p>
          <button
            type="button"
            className="button"
            onClick={this.onClickIncrease}
          >
            Increment
          </button>
          <p>*Increase By Random Number Between o to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
