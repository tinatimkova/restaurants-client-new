import React from 'react'
import './Cuisines.css'
import spinner from '../../spinner.gif'
import { getRestaurants } from '../../api/restaurants'

function Cuisines({ cuisines, loading }) {

    const listOfCuisines = cuisines.map((i, index) => 
            <li key={index} className='cuisine'><span className='cuisine-name' onClick={() => getRestaurants(i.cuisine.cuisine_id)}>{i.cuisine.cuisine_name}</span></li>
        )

    return (
        <>
        {loading && <img src={spinner} style={{ width: '250px' }} alt='Loading...' />}
        <h1 className='cuisine-title'>Choose a Cuisine</h1>
        <ul className='list-of-cuisines'>{listOfCuisines}</ul>
        </>
    )
}

export default Cuisines
