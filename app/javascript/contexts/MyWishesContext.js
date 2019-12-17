import React, { useReducer, createContext, useEffect } from 'react';
import myWishesReducer, { LOAD_WISHES, ADD_WISH } from './../reducers/MyWishesReducer';

export const MyWishesContext = createContext();

const initialState = {
  myWishes: []
};

function MyWishesContextProvider(props) {
  const [state, dispatch] = useReducer(myWishesReducer, initialState);
  const value = { state, dispatch };

  async function fetchWishes() {
    try {
      // Placeholder URL to get this working for the timebeing
      const fetchedWishes = await fetch('http://localhost:3000/api/v1/users/1/wishes');

      const myWishes = await fetchedWishes.json();

      if (!fetchedWishes.ok) {
        throw new Error('Error response code - ' + fetchWishes.status)
      }
      dispatch({type: LOAD_WISHES, payload: myWishes })
    } catch (err) {
      console.error('Error fetching Wishes: ' + err)
    }
  };

  useEffect(() => {
    fetchWishes()
  }, []);

  return (
    <MyWishesContext.Provider value={value}>
      {props.children}
    </MyWishesContext.Provider>
  );
}
const MyWishesContextConsumer = MyWishesContext.Consumer;

export { MyWishesContextProvider, MyWishesContextConsumer };
