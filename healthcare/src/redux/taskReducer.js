import * as types from "./taskActionTypes";

const initialState = {
  medItems: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MED_ITEMS_SUCCESS:
      return { 
         ...state,
         medItems: action.payload,
         error: null,
        };
    default:
      return state;
  }
};

export default taskReducer;
