import React from 'react'
import './Cuisines.css'
import spinner from '../../spinner.gif'

function Cuisines({ cuisines, getRestaurants, loading }) {

    const listOfCuisines = cuisines.map(i => 
            <li key={i.cuisine.cuisine_id} className='cuisine'><span className='cuisine-name' onClick={getRestaurants}>{i.cuisine.cuisine_name}</span></li>
        )

    return (
        <>
        {loading && <img src={spinner} style={{ width: '250px' }}/>}
        <h1 className='cuisine-title'>Choose a Cuisine</h1>
        <ul className='list-of-cuisines'>{listOfCuisines}</ul>
        </>
    )
}

export default Cuisines
