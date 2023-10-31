import axios from 'axios';
import {GET_CART, ADD_CART, DELETE_CART,} from './cartActionType'

export const getCartItems = () => async (dispatch) => {
  try {
    const response = await axios.get('https://ehealthcareappapi.azurewebsites.net/api/MedCarts');
    dispatch({ type: GET_CART, payload: response.data }); // Use GET_CART here
    console.log("recieved file",response.data);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    // Handle error
  }
};


export const addToCart = (itemData) => async (dispatch) => {
    try {
      const response = await axios.post('https://ehealthcareappapi.azurewebsites.net/api/MedCarts', itemData);
      dispatch({ type: ADD_CART, payload: response.data });
      console.log("cartActionadding",itemData);
    } catch (error) {
      // Handle error
    }
  };
  

export const deleteCartItem = (itemId) => async (dispatch) => {
  try {
    await axios.delete(`https://ehealthcareappapi.azurewebsites.net/api/MedCarts/${itemId}`);
    dispatch({ type: DELETE_CART, payload: itemId }); // Use DELETE_CART here
  } catch (error) {
    // Handle error
  }

};
