import { useReducer } from 'react';
import axios from 'axios';
import RestaurantsContext from './restaurantsContext';
import RestaurantsReducer from './restaurantsReducer';

import { GET_CITY_ID, SET_LOADING, GET_CUISINES, GET_RESTAURANTS } from '../types';

const RestaurantsState = props => {
    const initialState = {
        restaurants: null,
        cuisines: null,
        location: null,
        loading: false
    }

    const [state, dispatch] = useReducer(RestaurantsReducer, initialState);

    // Search a location ID
    const getCityId = async (location) => {
        setLoading()

        const res = await axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/locations?query=${location}`,
            headers: {
              'user-key': "3db78ccb4d5aca6f67f342f16abd68ac",
              'content-type': 'application/json'
            }
          })  

          dispatch({ type: GET_CITY_ID, payload: res.data.location_suggestions[0]})
    }


    // Get a list of cuisines
    const getCuisines = async (locationId) => {
        const res = await axios({
          method: 'GET',
          url: `https://developers.zomato.com/api/v2.1/cuisines?city_id=${locationId}`,
          headers: {
            'user-key': "3db78ccb4d5aca6f67f342f16abd68ac",
            'content-type': 'application/json'
          }
        })

        dispatch({ type: GET_CUISINES, payload: res.data.cuisines })
      }

    // Get restaurants

    // Set loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <RestaurantsContext.Provider value={{
        restaurants: state.restaurants,
        cuisines: state.cuisines,
        location: state.location,
        loading: state.loading,
        getCityId, getCuisines
    }}>{props.children}</RestaurantsContext.Provider>
}

export default RestaurantsState;