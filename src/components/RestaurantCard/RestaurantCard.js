import { useState } from 'react';
import './RestaurantCard.module.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import spinner from '../../spinner.gif'
import placeholder from './restaurant_placeholder.png'
import styles from './RestaurantCard.module.css'

const RestaurantCard = ({ restaurants, loading, user }) => {

  if (loading) {
    return <img src={spinner} alt="Loading..." />
  } else {
    return(
      restaurants.map(i => (
        <div className={styles['restaurant-card']} key={i.restaurant.id}>
          { user &&
          <div className={styles['icon-wrapper']}>
            <AddCircleOutlineIcon className={styles['add-icon']} />
            <span className={styles['icon-description']}>Add to my list</span>
          </div>}
          <img className={styles['card-img']} src={i.restaurant.featured_image.length !== 0 ? i.restaurant.featured_image : placeholder } alt='featured restaurant'/>
          <div className={styles['restaurant-info']}>
          <li className={styles['name']}><a href={i.restaurant.url} target='_blank' rel="noreferrer">{i.restaurant.name}</a></li>
          <li>{i.restaurant.location.city}</li>
          <li className={styles["stars"]} style={{'--rating': `${i.restaurant.user_rating.aggregate_rating}`}} aria-label={`Rating of this restaurant is ${i.restaurant.user_rating.aggregate_rating} out of 5.`}><span className={styles['reviews']}>{i.restaurant.all_reviews_count} reviews</span></li>
          <li>{i.restaurant.cuisines}<span className={styles['dollars']} style={{'--price': `${i.restaurant.price_range}`}} aria-label={`Price range of this restaurant is ${i.restaurant.price_range} out of 4.`}></span></li>
          </div>
        </div>
      ))
    )
  }
}

export default RestaurantCard
