async function fetchFriends(state, loaded_callback) {
  try {
    const friendsURL = `${state.host}${state.apiPath}/users/${state.userid}/friends`
    const fetchedFriends = await fetch(friendsURL);
    const friends = await fetchedFriends.json();

    if (!fetchedFriends.ok) {
      throw new Error('Error response code - ', fetchFriends.status);
    }
    loaded_callback(friends);
  } catch (err) {
    console.error('Error fetching Friends: ', err);
  }
}

export { fetchFriends };
