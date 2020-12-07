import './RestaurantCard.module.css'
import spinner from '../../spinner.gif'
import placeholder from './Placeholder_500x500.jpg'

const RestaurantCard = ({ restaurants, loading }) => {
  if (loading) {
    return <img src={spinner} alt="Loading..." />
  } else {
    return(
      restaurants.map(i => (
        <ul style={{'listStyleType': 'none'}} key={i.restaurant.id}>
          <img className='card-img' src={i.restaurant.featured_image.length !== 0 ? i.restaurant.featured_image : placeholder } alt='featured image'/>
          <h3>{i.restaurant.name}</h3>
          <li>{i.restaurant.location.address}</li>
          <li>{i.restaurant.price_range}</li>
          <li>{i.restaurant.user_rating.aggregate_rating}</li>
        </ul>
      ))
    )
  }
}

export default RestaurantCard
