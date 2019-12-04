import React, { useReducer, createContext, useEffect } from 'react';
import myWishesReducer, { LOAD_WISHES, ADD_WISH } from './../reducers/MyWishesReducer';

const MyWishesContext = createContext();

const initialState = {
  myWishes: []
};

function addWish(wish) {
  debugger;
}

function MyWishesContextProvider(props) {
  const [state, dispatch] = useReducer(myWishesReducer, initialState);
  const value = { state, dispatch };

  const fetchMyWishes = () => {
    function fetchData() {
      fetch('http://localhost:3000/api/v1/users/1/wishes')
        .then(response => response.json())
        .then((data) => {
          dispatch({type: LOAD_WISHES, payload: data })
        });
    };
    fetchData();
  };

  useEffect(() => {
    fetchMyWishes()
  }, []);

  return (
    <MyWishesContext.Provider value={value}>
      {props.children}
    </MyWishesContext.Provider>
  );
}
const MyWishesContextConsumer = MyWishesContext.Consumer;

export { addWish, MyWishesContext, MyWishesContextProvider, MyWishesContextConsumer };
