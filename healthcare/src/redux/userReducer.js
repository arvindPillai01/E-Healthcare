import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from './userActionType';

const initialState = {
    user: null,
    isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        // You can update other user-related state properties here if needed
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        userName: action.payload.userName,
        // You can update other user-related state properties here if needed
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        // You can reset other user-related state properties here if needed
      };
    default:
      return state;
  }
};

export default userReducer;
