export const ADD_WISH = "ADD_WISH";
export const LOAD_WISHES = "LOAD_WISHES";

const myWishesReducer = (state, { type, payload }) => {
  switch (type) {
    case LOAD_WISHES: {
      return { ...state, myWishes: payload };
    }
    case ADD_WISH: {
      // state.myWishes = [...state.myWishes, payload];
      const updatedWishes = [...state.myWishes, payload];
      return { ...state, myWishes: updatedWishes };
    }
    default:
      return state;
  }
}

export default myWishesReducer;
