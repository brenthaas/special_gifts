import React, { useContext } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { MyWishesContext } from './../contexts/MyWishesContext';

const Wish = () => {
  const history = useHistory();
  const { state } = useContext(MyWishesContext);
  const { id } = useParams();

  const wish = state.myWishes.find( wish => wish.id == id );

  if (wish) {
    return (
      <div>
        <h3>{wish.title}</h3>
        <dl>
          <dt>Description:</dt>
          <dd>{wish.description}</dd>
        </dl>
      </div>
    );
  } else {
    return (
      <div>Nothing to see here</div>
    );
  }
}

export default Wish;
