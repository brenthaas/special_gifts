import React, { useContext } from 'react';
import Wish from './Wish';
import { MyWishesContext } from './../contexts/MyWishesContext';

const MyWishList = () => {
  const { state } = useContext(MyWishesContext);

  return (
    <div>
      <p> You currently have { state.myWishes.length } wishes</p>
      <ul>
        {state.myWishes.map(wish => (
          <Wish key={wish.id} {...wish} />
        ))}
      </ul>
    </div>
  );
};

export default MyWishList;
