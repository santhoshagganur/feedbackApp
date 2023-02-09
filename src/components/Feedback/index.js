// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClickedEmoji: false}

  onChangeInteraction = () => {
    this.setState({
      isClickedEmoji: true,
    })
  }

  renderContainer = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            How satisfied are you with our <br />
            customer support performance ?
          </h1>
          <ul className="list-container">
            {emojis.map(each => (
              <li
                className="items"
                key={each.id}
                onClick={this.onChangeInteraction}
              >
                <div>
                  <img src={each.imageUrl} alt={each.name} className="image" />
                  <p> {each.name} </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  successContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="container">
          <img src={loveEmojiUrl} alt="love emoji" className="image" />
          <h1 className="heading"> Thank You! </h1>
          <p> We will use your feedback to customer support performance </p>
        </div>
      </div>
    )
  }

  render() {
    const {isClickedEmoji} = this.state
    return (
      <div>
        {isClickedEmoji ? this.successContainer() : this.renderContainer()}
      </div>
    )
  }
}

export default Feedback
