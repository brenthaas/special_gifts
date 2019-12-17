import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import myWishesReducer, { ADD_WISH } from './../reducers/MyWishesReducer';
import { MyWishesContext } from './../contexts/MyWishesContext';
import { useCookies } from 'react-cookie';
import WishForm from './WishForm'

const AddWish = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['CSRF-TOKEN']);
  const globalState = useContext(MyWishesContext);
  const { dispatch } = globalState;

  const history = useHistory();

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

      const responseBody = await response.json();

      if (!response.ok) {
        if ('errors' in responseBody) {
          throw new Error(JSON.stringify(responseBody['errors']));
        }
        throw new Error('Unable to create wish')
      }
      dispatch({ type: ADD_WISH, payload: responseBody })
      history.push('/my_wishes')
    } catch(err) {
      console.error('Error contacting API: ' + err);
    }
  }

  return (
    <WishForm wish={{}} onSubmit={addWish}/>
  );
}

export default AddWish;
