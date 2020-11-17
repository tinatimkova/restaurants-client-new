import { Fragment } from 'react'
import './App.css'
import RestaurantCard from '../RestaurantCard/RestaurantCard.js'
import { data } from '../mockData.js'

const App = () => {
  return(
    <Fragment>
    <div className='restaurant-img'>
      <h2 className='header'>Find your restaurant for any occasion</h2>
      <form className='search'>
        <label htmlFor='search'></label>
        <input className='search-bar' autoComplete='off' type='text' id='search' name='search' placeholder='Location, Restaurant, or Cuisine'/>
        <button className='submit-btn' type='submit'>Let's Go</button>
      </form>
    </div>
    <div>
    {data.map((restaurant, index) => (
      <li key={index}>
        <RestaurantCard restaurant={restaurant} />
      </li>
    ))}
    </div>
    </Fragment>
  )
}

export default App;
