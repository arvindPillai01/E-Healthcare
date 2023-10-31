import {GET_CART, ADD_CART, DELETE_CART} from './cartActionType'
  
const initialState = {
  cartItems: [],
};
  

  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CART:
        return { ...state, cartItems: action.payload };
      case ADD_CART:
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      case DELETE_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.ItemId !== action.payload),
        };
      default:
        return state;
    }
  };
  
  
  export default cartReducer;
  