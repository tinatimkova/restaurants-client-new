import {GET_CITY_ID, SET_LOADING, GET_CUISINES} from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_CITY_ID:
        return {
            ...state,
            location: action.payload
        }
        case GET_CUISINES:
            return {
                ...state,
                cuisines: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}