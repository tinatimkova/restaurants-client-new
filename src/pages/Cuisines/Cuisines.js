import React from 'react'
import './Cuisines.css'
import spinner from '../../spinner.gif'

function Cuisines({ cuisines, location, loading, getListOfRestaurants }) {

    const listOfCuisines = cuisines.map((i, index) => 
            <li key={index} className='cuisine'><span className='cuisine-name' onClick={() => getListOfRestaurants(location.city_id, i.cuisine.cuisine_id)}>{i.cuisine.cuisine_name}</span></li>
        )

    return (
        <>
        {loading && <img src={spinner} style={{ width: '250px' }} alt='Loading...' />}
        <h4 className='cuisine-title'>Searching for restaurants in {location.title}</h4>
        <ul className='list-of-cuisines'>{listOfCuisines}</ul>
        </>
    )
}

export default Cuisines
