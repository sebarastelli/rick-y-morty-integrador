import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";


export const addFavorite = (character) => {
  try {
    const endpoint = "https://rymserverdeploy.onrender.com/rickandmorty/fav";
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character)
      return dispatch({
        type: "ADD_FAVORITE",
        payload: data,
      });
    };
  // eslint-disable-next-line no-unreachable
  } catch (error){ console.log(error.message) }
};
  


export const remFavorite = (id) => {
   try {
      const endpoint = 'https://rymserverdeploy.onrender.com/rickandmorty/fav/' + id;
   return async(dispatch) => {
     const {data} = await axios.delete(endpoint)
         return dispatch({
            type: 'REMOVE_FAVORITE',
            payload: data,
      });
   }
   } catch (error) {
      console.log(error.message)
   } 
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (orden) => {
  return { type: ORDER, payload: orden };
};
