import React, { Component } from 'react';
import WishForm from './WishForm'

class WishesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myWishes: [],
      isLoading: true
    };
  }

  render() {
    if (this.state.isLoading) {
      return ( <p> Loading... </p> )
    }
    
    return (
      <div className="container">
        <div className="header">
          <h1>Wish List</h1>
          <div>
            <ul>
              { this.state.myWishes.map( wish =>
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

  componentDidMount() {
    this.state.isLoading = true

    fetch('http://localhost:3000/api/v1/users/1/wishes')
      .then(response => response.json())
      .then((data) => {
        this.setState({ myWishes: data, isLoading: false })
      })
  }
}

export default WishesApp;
