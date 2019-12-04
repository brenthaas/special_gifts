import React, { useState } from 'react'
import PropTypes from 'prop-types'

const WishForm = ({wish = {}, onSubmit}) => {
  const [formWish, setWish] = useState(wish);

  const handleChange = event => {
    const {name, value} = event.target;
    setWish({...formWish, [name]: value});
  };

  const handleSubmit = () => {
    onSubmit(formWish);
  };

  return (
    <div>
      <form className="wish-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="wish-fields">
            <input className="wish-title-input"
              type="text"
              placeholder="Title"
              name='title'
              onChange={handleChange}
              maxLength="50" />
            <input className="wish-title-input"
              type="text"
              placeholder="Description"
              name='description'
              onChange={handleChange}
              maxLength="70" />
          </div>
          <div className="wish-actions">
            <button className="make-wish-button"
              type="submit">
              Make Wish
            </button>
          </div>
      	</div>
      </form>
    </div>
  );
}

export default WishForm
