
const RestaurantCard = ({ restaurant }) => {
    return(
      <div>
        <img src={restaurant.image} />
        <h4>{restaurant.name}</h4>
        <p>{restaurant.rating}</p>
        <ul>
          <li>{restaurant.cuisine}</li>
          <li>{restaurant.price}</li>
          <li>{restaurant.location}</li>
        </ul>
      </div>
    )
}

export default RestaurantCard
