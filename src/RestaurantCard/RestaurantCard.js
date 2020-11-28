import react, { Fragment } from 'react'

const RestaurantCard = ({ restaurants }) => {
    return(
      <Fragment>
        {console.log(restaurants)}
        {/* <img src={restaurant.image} /> 
        <h4>{restaurant.name}</h4>
        <p>{restaurant.rating}</p>
        <ul>
          <li>{restaurant.cuisine}</li>
          <li>{restaurant.price}</li>
          <li>{restaurant.location}</li>
        </ul>*/}
      </Fragment>
    )
}

export default RestaurantCard
