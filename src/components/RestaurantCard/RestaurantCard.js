import './RestaurantCard.module.css'
import spinner from '../../spinner.gif'
import placeholder from './placeholder.png'

const RestaurantCard = ({ restaurants, loading }) => {
  if (loading) {
    return <img src={spinner} alt="Loading..." />
  } else {
    return(
      restaurants.map(i => (
        <ul style={{'listStyleType': 'none'}} key={i.restaurant.id}>
          <img className='card-img' src={i.restaurant.featured_image.length !== 0 ? i.restaurant.featured_image : placeholder } alt='featured image'/>
          <li className='name'>{i.restaurant.name}</li>
          <li>{i.restaurant.location.city}</li>
      <li className="stars" style={{'--rating': `${i.restaurant.user_rating.aggregate_rating}`}} aria-label={`Rating of this restaurant is ${i.restaurant.user_rating.aggregate_rating} out of 5.`}><span className='reviews'>{i.restaurant.all_reviews_count} reviews</span></li>
          <li>{i.restaurant.cuisines}<span className='dollars' style={{'--price': `${i.restaurant.price_range}`}} aria-label={`Price range of this restaurant is ${i.restaurant.price_range} out of 4.`}></span></li>
        </ul>
      ))
    )
  }
}

export default RestaurantCard
