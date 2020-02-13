import React, { useReducer, createContext, useEffect } from 'react';
import { fetchWishes } from './../api/Wishes';
import myWishesReducer, { LOAD_WISHES} from './../reducers/MyWishesReducer';

export const MyWishesContext = createContext();

function MyWishesContextProvider(props) {
  const initialState = {
    ...props,
    myWishes: []
  };

  const [state, dispatch] = useReducer(myWishesReducer, initialState);
  const value = { state, dispatch };

  const wishesLoaded = (wishes) => {
    dispatch({type: LOAD_WISHES, payload: wishes });
  }

  useEffect(() => {
    fetchWishes(state, wishesLoaded)
  }, []);

  return (
    <MyWishesContext.Provider value={value}>
      {props.children}
    </MyWishesContext.Provider>
  );
}
const MyWishesContextConsumer = MyWishesContext.Consumer;

export { MyWishesContextProvider, MyWishesContextConsumer };
