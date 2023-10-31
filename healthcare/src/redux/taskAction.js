import axios from 'axios';
import { FETCH_MED_ITEMS_SUCCESS } from "./taskActionTypes";
// Rest of your action creator code

export const fetchMedItemsSuccess = (medItems) => ({
  type: FETCH_MED_ITEMS_SUCCESS,
  payload: medItems,
});

export const fetchMedItems = () => {
  return (dispatch) => {
    // Update the API URL according to your actual API endpoint
    axios.get('https://ehealthcareappapi.azurewebsites.net/api/MedItems')
      .then((response) => {
        dispatch(fetchMedItemsSuccess(response.data));
        console.log('meds received', response.data)
      })
      .catch((error) => {
        console.error('Error fetching med items:', error);
      });
  };
};


export default fetchMedItems;
