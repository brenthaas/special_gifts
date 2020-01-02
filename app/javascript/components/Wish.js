import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MyWishesContext } from './../contexts/MyWishesContext';

const Wish = ({ id, title, description }) => {
  const { dispatch } = useContext(MyWishesContext);
  return (
    <li key={id} className='wish-item'>
      <span className='wish-title'>{title}</span>
      &nbsp; &mdash; &nbsp;
      <span className='wish-description'>{description}</span>
    </li>
  );
}

Wish.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default Wish;
