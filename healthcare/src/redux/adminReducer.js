import {GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY, GET_ITEMS, ADD_ITEM, DELETE_ITEM,} from './adminActionType'
  


const initialState = {
  categories: [],
  items: [],
};
  

  const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CATEGORIES:
        return { ...state, categories: action.payload };
      case ADD_CATEGORY:
        return { ...state, categories: [...state.categories, action.payload] };
      case DELETE_CATEGORY:
        return {
          ...state,
          categories: state.categories.filter((category) => category.CategoryId !== action.payload),
        };
  
      // Cases for items
      case GET_ITEMS:
        return { ...state, items: action.payload };
      case ADD_ITEM:
        return { ...state, items: [...state.items, action.payload] };
      case DELETE_ITEM:
        return {
          ...state,
          items: state.items.filter((item) => item.ItemId !== action.payload),
        };
      default:
        return state;
    }
  };
  
  
  export default adminReducer;
  