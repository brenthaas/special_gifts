import React from 'react'
import myWishesReducer, { ADD_WISH } from './../reducers/MyWishesReducer';
import { useCookies } from 'react-cookie';
import WishForm from './WishForm'

const AddWish = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['CSRF-TOKEN']);

  async function addWish(wish) {
    try {
      // Placeholder URL to get this working for the timebeing
      const response = await fetch('http://localhost:3000/api/v1/users/1/wishes', {
        method: 'POST',
        body: JSON.stringify(wish),
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': cookies['CSRF-TOKEN']
        }
      });
      const created_wish = await response.json();
      dispatch({ type: ADD_WISH, payload: created_wish })
    } catch(error) {
      console.error('Error contacting API:', error);
    }
  }

  return (
    <WishForm wish={{}} onSubmit={addWish}/>
  );
}

export default AddWish
