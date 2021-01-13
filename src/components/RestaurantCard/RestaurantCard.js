import { useState } from 'react';
import './RestaurantCard.module.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import spinner from '../../spinner.gif'
import placeholder from './restaurant_placeholder.png'
import styles from './RestaurantCard.module.css'

const RestaurantCard = ({ restaurant, loading, user }) => {

  const [list, setList] = useState([])

  const addToList = (e) => {
      e.preventDefault()

      setList(restaurant.id)
      console.log(list)
    }

  if (loading) {
    return <img src={spinner} alt="Loading..." />
  } else {
    return(
        <div className={styles['restaurant-card']} key={restaurant.id}>
          { user &&
          <div className={styles['icon-wrapper']} onClick={addToList}>
            <AddCircleOutlineIcon className={styles['add-icon']} />
            <span className={styles['icon-description']}>Add to my list</span>
          </div>}
          <img className={styles['card-img']} src={restaurant.featured_image.length !== 0 ? restaurant.featured_image : placeholder } alt='featured restaurant'/>
          <div className={styles['restaurant-info']}>
          <li className={styles['name']}><a href={restaurant.url} target='_blank' rel="noreferrer">{restaurant.name}</a></li>
          <li>{restaurant.location.city}</li>
          <li className={styles["stars"]} style={{'--rating': `${restaurant.user_rating.aggregate_rating}`}} aria-label={`Rating of this restaurant is ${restaurant.user_rating.aggregate_rating} out of 5.`}><span className={styles['reviews']}>{restaurant.all_reviews_count} reviews</span></li>
          <li>{restaurant.cuisines}<span className={styles['dollars']} style={{'--price': `${restaurant.price_range}`}} aria-label={`Price range of this restaurant is ${restaurant.price_range} out of 4.`}></span></li>
          </div>
        </div>
    )
  }
}

export default RestaurantCard
