import React, { Component } from 'react';
import WishesContainer from './WishesContainer'

class WishesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_wishes: []
    };
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Wish List</h1>
          <div>
            <ul>
              { this.state.user_wishes.map( wish =>
                <li key={wish.title} className='wish-item'>
                  <span className='wish-title'>{wish.title}</span>
                  &nbsp; &mdash; &nbsp;
                  <span className='wish-description'>{wish.description}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
        <WishesContainer />
      </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users/1/wishes')
      .then(response => response.json())
      .then((data) => {
        this.setState({ user_wishes: data })
        console.log('got data!' + data)
      })
  }
}

export default WishesApp;
