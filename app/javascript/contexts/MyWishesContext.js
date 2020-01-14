import React, { useReducer, createContext, useEffect } from 'react';
import { fetchWishes } from './../api/Wishes';
import myWishesReducer from './../reducers/MyWishesReducer';

export const MyWishesContext = createContext();

function MyWishesContextProvider(props) {
  const initialState = {
    ...props,
    myWishes: []
  };

  const [state, dispatch] = useReducer(myWishesReducer, initialState);
  const value = { state, dispatch };

  async function fetchWishes(state) {
    try {
      const myWishesURL = `${state.host}${state.apiPath}/users/${state.userid}/wishes`
      const fetchedWishes = await fetch(myWishesURL);
      const myWishes = await fetchedWishes.json();

      if (!fetchedWishes.ok) {
        throw new Error('Error response code - ', fetchWishes.status);
      }
      dispatch({type: LOAD_WISHES, payload: myWishes });
    } catch (err) {
      console.error('Error fetching Wishes: ', err);
    }
  }

  useEffect(() => {
    fetchWishes(state)
  }, []);

  return (
    <MyWishesContext.Provider value={value}>
      {props.children}
    </MyWishesContext.Provider>
  );
}
const MyWishesContextConsumer = MyWishesContext.Consumer;

export { MyWishesContextProvider, MyWishesContextConsumer };
