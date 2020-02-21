export const ADD_WISH = "ADD_WISH";
export const WISHES_FETCHED = "WISHES_FETCHED";

export const FRIENDS_FETCHED = "FRIENDS_FETCHED";

const myWishesReducer = (state, { type, payload }) => {
  switch (type) {
    case WISHES_FETCHED: {
      return { ...state, myWishes: payload };
    }
    case ADD_WISH: {
      // state.myWishes = [...state.myWishes, payload];
      const updatedWishes = [...state.myWishes, payload];
      return { ...state, myWishes: updatedWishes };
    }
    case FRIENDS_FETCHED: {
      return { ...state, friends: payload };
    }
    default:
      return state;
  }
}

export default myWishesReducer;
