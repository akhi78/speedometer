import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  Increase = () => {
    this.setState(prevState => {
      let speed = 0
      if (prevState.count >= 200) {
        speed = {count: 200}
      } else {
        speed = {count: prevState.count + 10}
      }
      return speed
    })
  }

  Decrease = () => {
    this.setState(prevState => {
      let speed = 0
      if (prevState.count > 0) {
        speed = {count: prevState.count - 10}
      } else {
        speed = {count: 0}
      }
      return speed
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="Bg-Container">
        <h1 className="Main-heading">SPEEDOMETER</h1>
        <img
          className="imageclass"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-limit-heading">
          Speed is <span className="speed-limit">{count}mph</span>
        </h1>
        <p className="instruction">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-con">
          <button
            type="button"
            className="accelarate btn"
            onClick={this.Increase}
          >
            Accelerate
          </button>
          <button type="button" className="break btn" onClick={this.Decrease}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
