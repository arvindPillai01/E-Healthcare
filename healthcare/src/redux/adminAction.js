import axios from 'axios';
import {GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY, GET_ITEMS, ADD_ITEM, DELETE_ITEM,} from './adminActionType'


export const getCategories = () => async (dispatch) => {
  try {
    const response = await axios.get('https://ehealthcareappapi.azurewebsites.net/api/MedCategories'); // Replace with your API endpoint
    dispatch({ type: GET_CATEGORIES, payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log('no data received')
  }
};

export const addCategory = (categoryData) => async (dispatch) => {
  try {
    console.log(categoryData);
    const response = await axios.post('https://ehealthcareappapi.azurewebsites.net/api/MedCategories', categoryData); // Replace with your API endpoint
    dispatch({ type: ADD_CATEGORY, payload: response.data });
    console.log(response);
  } catch (error) {
    // Handle error
  }
};

export const deleteCategory = (categoryId) => async (dispatch) => {
  try {
    await axios.delete(`https://ehealthcareappapi.azurewebsites.net/api/MedCategories/${categoryId}`); // Replace with your API endpoint
    dispatch({ type: DELETE_CATEGORY, payload: categoryId });
  } catch (error) {

  }
};


export const getItems = () => async (dispatch) => {
  try {
    const response = await axios.get('https://ehealthcareappapi.azurewebsites.net/api/MedItems');
    dispatch({ type: GET_ITEMS, payload: response.data }); // Use GET_ITEMS here
    console.log(response.data);
  } catch (error) {
    // Handle error
  }
};

export const addItem = (itemData) => async (dispatch) => {
  try {
    const response = await axios.post('https://ehealthcareappapi.azurewebsites.net/api/MedItems', itemData);
    dispatch({ type: ADD_ITEM, payload: response.data }); // Use ADD_ITEM here
  } catch (error) {
    // Handle error
  }
};

export const deleteItem = (itemId) => async (dispatch) => {
  try {
    await axios.delete(`https://ehealthcareappapi.azurewebsites.net/api/MedItems/${itemId}`);
    dispatch({ type: DELETE_ITEM, payload: itemId }); // Use DELETE_ITEM here
  } catch (error) {
    // Handle error
  }

};
