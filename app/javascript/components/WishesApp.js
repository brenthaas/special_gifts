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
    sidebar_link_name: 'Home',
    main: () => <h2>Home</h2>
  },
  {
    path: "/my_wishes",
    sidebar_link_name: 'My Wishes',
    main: () => <MyWishList />
  },
  {
    path: "/add_wish",
    sidebar_link_name: 'Add A Wish',
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
            {routes.map((route, index) => (
              <li className='sidebar-nav-item' key={index}>
                <Link to={route.path}>{route.sidebar_link_name}</Link>
              </li>
            ))}
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
