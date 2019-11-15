import React from 'react';
import WishForm from './WishForm'
import MyWishList from './MyWishList'
import { MyWishesContextProvider } from './../contexts/MyWishesContext';

function WishesApp() {
  return (
    <MyWishesContextProvider>
      <div className='container'>
        <div className='header'>
          <h1>Wish List</h1>
          <div>
            <MyWishList />
          </div>
        </div>
        <WishForm />
      </div>
    </MyWishesContextProvider>
  );
}

export default WishesApp;
