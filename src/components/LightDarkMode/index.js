// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDark: true,
  }

  clickButton = () => {
    const {isDark} = this.state
    this.setState({isDark: !isDark})
  }

  render() {
    const {isDark} = this.state
    const bgColor = isDark ? 'bg-dark' : 'bg-light'
    const heading = isDark ? 'heading color-light' : 'heading color-dark'

    return (
      <div className="bg-container">
        <div className={`card-container ${bgColor}`}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.clickButton}>
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
