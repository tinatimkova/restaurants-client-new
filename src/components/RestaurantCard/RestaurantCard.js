import { useState } from 'react';
import './RestaurantCard.module.css';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import spinner from '../../spinner.gif'
import placeholder from './restaurant_placeholder.png'
import styles from './RestaurantCard.module.css'

const RestaurantCard = ({ restaurant, loading, user, addToList, list}) => {

  if (loading) {
    return <img src={spinner} alt="Loading..." />
  } else {
    return(
        <div className={styles['restaurant-card']}>
          {/* { user && */}
          <FormGroup className={styles['like-form']}>
          <FormControlLabel style={{ margin: '0px'}}
           control={<Checkbox icon={<FavoriteBorder />}
           checkedIcon={<Favorite />}
           id={restaurant.id}
           name="liked"
           value={JSON.stringify(restaurant.R)} onClick={addToList}
           checked={list.length > 0 && list.findIndex(i => i.id === restaurant.id) !== -1 && true} />} />
          </FormGroup>
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
