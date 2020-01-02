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
import MyWishList from './MyWishList';
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
    main: () => <AddWish />
  }
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
          </div>
        </Router>
      </MyWishesContextProvider>
    </CookiesProvider>
  );
}

export default withCookies(WishesApp);
