import react, { Fragment } from 'react'

const RestaurantCard = ({ restaurants }) => {
  if (restaurants.length) {
    return(
      <Fragment>
        <h4>{restaurants.name}</h4>
        {/*<p>{restaurant.rating}</p>
        <ul>
          <li>{restaurant.cuisine}</li>
          <li>{restaurant.price}</li>
          <li>{restaurant.location}</li>
    </ul>*/}
      </Fragment>
  )
  } else {
    return (
    <h4>'Loading...'
      {console.log(restaurants)}
    </h4>
    )
  }    
}

export default RestaurantCard
