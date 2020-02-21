import React, { useReducer, createContext, useEffect } from 'react';
import { fetchWishes } from './../api/Wishes';
import { fetchFriends } from './../api/Friends';
import myWishesReducer, { WISHES_FETCHED, FRIENDS_FETCHED } from './../reducers/MyWishesReducer';

export const MyWishesContext = createContext();

function MyWishesContextProvider(props) {
  const initialState = {
    ...props,
    myWishes: [],
    friends: []
  };

  const [state, dispatch] = useReducer(myWishesReducer, initialState);
  const value = { state, dispatch };

  const wishesLoaded = (wishes) => {
    dispatch({type: WISHES_FETCHED, payload: wishes });
  }

  const friendsLoaded = (friends) => {
    dispatch({type: FRIENDS_FETCHED, payload: friends });
  }

  useEffect(() => {
    fetchWishes(state, wishesLoaded)
    fetchFriends(state, friendsLoaded)
  }, []);


  return (
    <MyWishesContext.Provider value={value}>
      {props.children}
    </MyWishesContext.Provider>
  );
}
const MyWishesContextConsumer = MyWishesContext.Consumer;

export { MyWishesContextProvider, MyWishesContextConsumer };
