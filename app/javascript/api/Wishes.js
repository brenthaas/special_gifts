import { LOAD_WISHES } from './../reducers/MyWishesReducer';

async function fetchWishes(state, dispatch) {
  try {
    const myWishesURL = `${state.host}${state.apiPath}/users/${state.userid}/wishes`
    const fetchedWishes = await fetch(myWishesURL);
    const myWishes = await fetchedWishes.json();

    if (!fetchedWishes.ok) {
      throw new Error('Error response code - ', fetchWishes.status);
    }
    dispatch({type: LOAD_WISHES, payload: myWishes });
  } catch (err) {
    console.error('Error fetching Wishes: ', err);
  }
}

export { fetchWishes };
