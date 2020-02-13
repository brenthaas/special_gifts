async function fetchWishes(state, loaded_callback) {
  try {
    const myWishesURL = `${state.host}${state.apiPath}/users/${state.userid}/wishes`
    const fetchedWishes = await fetch(myWishesURL);
    const myWishes = await fetchedWishes.json();

    if (!fetchedWishes.ok) {
      throw new Error('Error response code - ', fetchWishes.status);
    }
    loaded_callback(myWishes);
  } catch (err) {
    console.error('Error fetching Wishes: ', err);
  }
}

export { fetchWishes };
