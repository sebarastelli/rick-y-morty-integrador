import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.allCharactersFav, action.payload],
        allCharactersFav: [...state.allCharactersFav, action.payload],
      };
    case REMOVE_FAVORITE:
        const filtered = state.allCharactersFav.filter(
            (fav) => fav.id !== action.payload
          )
      return {
        ...state,
        myFavorites: filtered,
        allCharactersFav: filtered
      };
    case FILTER:
      const allCharactersFavFiltred = state.allCharactersFav.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "allCharacters"
            ? [...state.allCharactersFav]
            : allCharactersFavFiltred,
      };
    case ORDER:
      const allCharactersFavOrder = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersFavOrder.sort((a, b) => a.id - b.id)
            : allCharactersFavOrder.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
