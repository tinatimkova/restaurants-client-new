import react, { Fragment } from 'react'

const RestaurantCard = ({ restaurants, loading }) => {
  if (loading) {
    return <h4>'Loading...'</h4>
  } else {
    return <div>
      {restaurants.map((restaurant, index) => <div key={index}>{console.log(restaurant)}</div>)}
      </div>
  }    
}

export default RestaurantCard
