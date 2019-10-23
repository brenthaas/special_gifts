import React from "react"
import PropTypes from "prop-types"
class Wishes extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Your Wishes</h1>
        <ul>
          {this.props.wishes.map(wish => (
            <li key={wish.id}>
              <a href={wish.link_to_show}>{wish.title}</a> - {wish.description}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

Wishes.propTypes = {
  wishes: PropTypes.array
};
export default Wishes
