import React, { Component } from 'react'
import PropTypes from 'prop-types'

class WishForm extends Component {
  render () {
    return (
      <div>
        <div className="inputContainer">
          <div className="wish-fields">
            <input className="wish-title-input"
              type="text"
              placeholder="Title"
              maxLength="50" />
            <input className="wish-title-input"
              type="text"
              placeholder="Description"
              maxLength="70" />
          </div>
          <div className="wish-actions">
            <button className="make-wish-button" type="submit">
              Make Wish
            </button>
          </div>
      	</div>
      </div>
    );
  }
}

export default WishForm
