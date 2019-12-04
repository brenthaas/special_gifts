import React from 'react'
import WishForm from './WishForm'

const AddWish = () => {

  function addWish(wish) {
    fetch('http://localhost:3000/api/v1/users/1/wishes', {
        method: 'POST',
        body: JSON.stringify(wish),
        headers: {
          'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => {
      console.log("ERROR" + err)
    });
  }

  return (
    <WishForm wish={{}} onSubmit={addWish}/>
  );
}

export default AddWish
