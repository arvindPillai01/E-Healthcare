import axios from 'axios';
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from './userActionType';

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://ehealthcareappapi.azurewebsites.net/api/UserControls', userData);
      console.log(userData);
      console.log(response);

      if (response.status === 201) {
        // Registration is successful
        dispatch({ type: REGISTER_USER, payload: response.data });
        return response.data; // Return the response data
      }

      // Handle other success codes or messages here
      return { error: 'User registration error: ' + response.data };
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return { error: 'Username already exists. Please choose a different username.' };
      }

      if (error.response && error.response.status === 400) {
        // HTTP status code 400 indicates a bad request
        return { error: 'Bad request. Please check your registration data.' };
      }

      // Handle other registration errors
      console.error('Registration error:', error);
      return { error: 'Registration failed. Please try again.' };
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      // Make an API request to log in the user
      const response = await axios.post('https://ehealthcareappapi.azurewebsites.net/api/UserControls/login', userData);
      dispatch({ type: LOGIN_USER, payload: response.data });
      console.log(userData);
    } catch (error) {
      // Handle login error
    }
  };
};

export const logoutUser = () => {
  return { type: LOGOUT_USER };
};
