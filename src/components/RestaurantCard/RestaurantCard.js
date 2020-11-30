import react, { Fragment } from 'react'
import './RestaurantCard.module.css'

const RestaurantCard = ({ restaurants, loading }) => {
  if (loading) {
    return <h4>'Loading...'</h4>
  } else {
    return(
      restaurants.map(restaurant => (
        <ul key={restaurant.id}>
          <li>{restaurant.name}</li>
          <li>{restaurant.address}</li>
          <li>{restaurant.description}</li>
          <li>{restaurant.rating}</li>
        </ul>
      ))
      
    )
  }

}

export default RestaurantCard
