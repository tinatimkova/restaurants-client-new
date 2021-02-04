import React from 'react'
import './Cuisines.css'


function Cuisines({ cuisines, location, loading, getListOfRestaurants }) {

    const listOfCuisines = cuisines.map((i, index) => 
            <li key={index} className='cuisine'><span className='cuisine-name' onClick={() => getListOfRestaurants(location.city_id, i.cuisine.cuisine_id)}>{i.cuisine.cuisine_name}</span></li>
        )

    return (
        <>
        <h3 className='cuisine-title'>Searching for restaurants in {location.title}</h3>
        <ul className='list-of-cuisines'>{listOfCuisines}</ul>
        </>
    )
}

export default Cuisines
