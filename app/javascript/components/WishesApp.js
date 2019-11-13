import React, { useState, useEffect } from 'react';
import WishForm from './WishForm'

function WishesApp() {
  const [myWishes, setMyWishes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch('http://localhost:3000/api/v1/users/1/wishes')
        .then(response => response.json())
        .then((data) => {
          setMyWishes(data)
        });
    };
    fetchData();
  });

  return (
    <div className="container">
      <div className="header">
        <h1>Wish List</h1>
        <div>
          <ul>
            { myWishes.map( wish =>
              <li key={wish.title} className='wish-item'>
                <span className='wish-title'>{wish.title}</span>
                &nbsp; &mdash; &nbsp;
                <span className='wish-description'>{wish.description}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
      <WishForm />
    </div>
  );
}

export default WishesApp;
