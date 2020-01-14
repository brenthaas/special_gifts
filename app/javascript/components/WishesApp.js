import React from 'react';
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { CookiesProvider, withCookies } from 'react-cookie';

import AddWish from './AddWish';
import Wish from './Wish';
import MyWishList from './MyWishList';
import { MyWishesContextProvider } from './../contexts/MyWishesContext';

const routes = [
  { path: "/my_wishes", main: () => <MyWishList /> },
  { path: "/wish/:id", main: () => <Wish /> },
  { path: "/add_wish", main: () => <AddWish /> }
];

const history = createBrowserHistory();

function WishesApp(props) {
  const { cookies, allCookies, ...state} = props

  return (
    <CookiesProvider>
      <MyWishesContextProvider {...state}>
        <Router history={history}>
          <div className='wishlist-app'>
            <div className='sidebar'>
              <ul className='sidebar-nav'>
                <li className='sidebar-nav-item' key='myWishes'>
                  <Link to='/my_wishes'>My Wishes</Link>
                </li>
                <ul>
                  <li className='sidebar-nav-item' key='AddWish'>
                    <Link to='/add_wish'>Add Wish</Link>
                  </li>
                </ul>
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
          </div>
        </Router>
      </MyWishesContextProvider>
    </CookiesProvider>
  );
}

export default withCookies(WishesApp);
