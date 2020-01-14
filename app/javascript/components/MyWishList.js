import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { MyWishesContext } from './../contexts/MyWishesContext';

const MyWishList = () => {
  const { state } = useContext(MyWishesContext);

  return (
    <div>
      <p> You currently have { state.myWishes.length } wishes</p>
      <ul>
        {state.myWishes.map(wish => (
          <li key={wish.id} className='wish-item'>
            <Link to={'wish/' + wish.id}>{wish.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyWishList;
