import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import myWishesReducer, { ADD_WISH } from './../reducers/MyWishesReducer';
import { MyWishesContext } from './../contexts/MyWishesContext';
import { useCookies } from 'react-cookie';
import WishForm from './WishForm';

const AddWish = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['CSRF-TOKEN']);
  const { state, dispatch } = useContext(MyWishesContext);

  const history = useHistory();

  const handleSubmit = wish => {
    async function addWish(wish, url) {
      try {
        const response = await fetch(url, {
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
          throw new Error('Unable to create wish');
        }
        dispatch({ type: ADD_WISH, payload: responseBody });
        history.push('/my_wishes');
      } catch(err) {
        console.error('Error contacting API: ' + err);
      }
    }

    addWish(wish, `${state.host}${state.apiPath}/users/${state.userid}/wishes`)
  }

  return (
    <WishForm wish={{}} onSubmit={handleSubmit}/>
  );
}

export default AddWish;
