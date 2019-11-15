import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import WishForm from './WishForm'
import MyWishList from './MyWishList'
import { MyWishesContextProvider } from './../contexts/MyWishesContext';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/my_wishes",
    sidebar: () => <div>My Wishes</div>,
    main: () => {
      return (
        <div className='header'>
          <h1>Wish List</h1>
          <div>
            <MyWishList />
          </div>
        </div>
      );
    }
  },
  {
    path: "/add_wish",
    sidebar: () => <div>Add a Wish</div>,
    main: () => {
      return (
        <WishForm />
      );
    }
  }
];

function WishesApp() {
  return (
    <MyWishesContextProvider>
      <Router>
        <div className='sidebar'>
          <ul className='sidebar-nav'>
            <li className='sidebar-nav-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='sidebar-nav-item'>
              <Link to='/my_wishes'>My Wishes</Link>
            </li>
            <li className='sidebar-nav-item'>
              <Link to='/add_wish'>Add A Wish</Link>
            </li>
          </ul>
        </div>

        <div className='main'>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </MyWishesContextProvider>
  );
}

export default WishesApp;
