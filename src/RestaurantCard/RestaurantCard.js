
const RestaurantCard = ({ restaurant }) => {
    return(
      <div>
        <img src={restaurant.image} />
        <h4>{restaurant.name}</h4>
      </div>
    )
}

export default RestaurantCard
