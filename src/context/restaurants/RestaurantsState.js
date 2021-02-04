import { useReducer } from 'react';
import axios from 'axios';
import RestaurantsContext from './restaurantsContext';
import RestaurantsReducer from './restaurantsReducer';

import { SEARCH_CITY, SET_LOADING, GET_CUISINES, GET_RESTAURANTS } from '../types';

const RestaurantsState = props => {
    const initialState = {
        restaurants: null,
        cuisines: null,
        location: null,
        loading: false
    }

    const [state, dispatch] = useReducer(RestaurantsReducer, initialState);

    // Search a location

    // Get a list of cuisines

    // Get restaurants

    // Set loading

    return <RestaurantsContext.Provider value={{
        restaurants: state.restaurants,
        cuisines: state.cuisines,
        location: state.location,
        loading: state.loading
    }}>{props.children}</RestaurantsContext.Provider>
}

export default RestaurantsState;