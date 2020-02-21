import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { MyWishesContext } from './../contexts/MyWishesContext';

const FriendsList = () => {
  const { state } = useContext(MyWishesContext);

  debugger;

  return (
    <div>
      <p> You currently have { state.friends.length } friends</p>
      <ul>
        {state.friends.map(friend => (
          <li key={'friend-' + friend.id} className='friend-item'>
            <Link to={'friend/' + friend.id}>{friend.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
