import React, {useState, useContext} from 'react';
import styles from './Search.module.css';
import RestaurantsContext from '../../context/restaurants/restaurantsContext'

const Search = () => {

  const restaurantsContext = useContext(RestaurantsContext)

  const [text, setText] = useState('')
  const { getCityId, getCuisines, location} = restaurantsContext

  const searchCuisines = (text) => {
    getCityId(text)
    .then(() => get(location))
}

   const onSubmit = e => {
      e.preventDefault()
      searchCuisines(text)
   }

    const onChange = e => setText(e.target.value)

        return (
        <form className={styles['search']} onSubmit={onSubmit}>
        <label htmlFor='location' autoComplete='off' type='text'></label>
          <input className={styles['search-bar']} autoComplete='off' type='text' id='location' name='location' value={text} onChange={onChange} placeholder='Enter location' required />
          <button className={styles['submit-btn']} type='submit'>Let's Go</button>
        </form>
        )
}

export default Search
