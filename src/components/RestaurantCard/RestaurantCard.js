import './RestaurantCard.module.css'
import spinner from '../../spinner.gif'
import placeholder from './placeholder.png'
import styles from './RestaurantCard.module.css'

const RestaurantCard = ({ restaurants, loading }) => {
  if (loading) {
    return <img src={spinner} alt="Loading..." />
  } else {
    return(
      restaurants.map(i => (
        <a href={i.restaurant.url}  key={i.restaurant.id} target='_blank'><ul className={styles['restaurant-card']}>
          <img className={styles['card-img']} src={i.restaurant.featured_image.length !== 0 ? i.restaurant.featured_image : placeholder } alt='featured restaurant'/>
          <div className={styles['restaurant-info']}>
          <li className={styles['name']}>{i.restaurant.name}</li>
          <li>{i.restaurant.location.city}</li>
          <li className={styles["stars"]} style={{'--rating': `${i.restaurant.user_rating.aggregate_rating}`}} aria-label={`Rating of this restaurant is ${i.restaurant.user_rating.aggregate_rating} out of 5.`}><span className={styles['reviews']}>{i.restaurant.all_reviews_count} reviews</span></li>
          <li>{i.restaurant.cuisines}<span className={styles['dollars']} style={{'--price': `${i.restaurant.price_range}`}} aria-label={`Price range of this restaurant is ${i.restaurant.price_range} out of 4.`}></span></li>
          </div>
        </ul></a>
      ))
    )
  }
}

export default RestaurantCard
