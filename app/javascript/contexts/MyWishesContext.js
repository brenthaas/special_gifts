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

  useEffect(() => {
    fetchWishes(state, dispatch)
  }, []);

  return (
    <MyWishesContext.Provider value={value}>
      {props.children}
    </MyWishesContext.Provider>
  );
}
const MyWishesContextConsumer = MyWishesContext.Consumer;

export { MyWishesContextProvider, MyWishesContextConsumer };
