export const initialState = {
  rating: 0,
  hoveredRating: 0,
  isFav: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RATING':
      return { ...state, rating: action.payload };
    case 'SET_HOVERED_RATING':
      return { ...state, hoveredRating: action.payload };
    case 'TOGGLE_FAVORITE':
      return { ...state, isFav: !state.isFav };
    case 'SET_IS_FAV':
      return { ...state, isFav: action.payload };
    default:
      return state;
  }
};
