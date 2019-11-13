import React, { Component } from "react"
import PropTypes from "prop-types"

class WishForm extends Component {
  render () {
    return (
      <div>
      	<div className="inputContainer">
      	  <input className="wishInput" type="text"
            placeholder="Add a wish" maxLength="50" />
      	</div>
      	<div className="listWrapper">
      	   <ul className="taskList">
      	   </ul>
      	</div>
      </div>
    );
  }
}

export default WishForm
