import axios from 'axios';
import { cuisines } from '../mockData';

export const getCityId = (location) => {
    return axios({
        method: 'GET',
        url: `https://developers.zomato.com/api/v2.1/locations?query=${location}`,
        headers: {
          'user-key': '3db78ccb4d5aca6f67f342f16abd68ac',
          'content-type': 'application/json'
        }
      })  
}

export const getRestaurants = (locationId, cuisineId) => {
    return axios({
        method: 'GET',
         url: `https://developers.zomato.com/api/v2.1/search?entity_id=${locationId}&entity_type=city&cuisines=${cuisineId}`,
         headers: {
          'user-key': '3db78ccb4d5aca6f67f342f16abd68ac',
          'content-type': 'application/json'
         }
       })
}

export const getCuisineId = (cuisine) => {
  const cuisineInfo = cuisines.find(item => item['cuisine']['cuisine_name'] === cuisine)
  const cuisineId = cuisineInfo['cuisine']['cuisine_id'].toString()
  return cuisineId
}