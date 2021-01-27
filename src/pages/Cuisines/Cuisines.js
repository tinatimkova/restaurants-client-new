import React from 'react'
import './Cuisines.css'

function Cuisines({ cuisines }) {

    const listOfCuisines = cuisines.map(i => 
            <li className='cuisine'>{i.cuisine.cuisine_name}</li>
        )

    return (
        <ul className='list-of-cuisines'>{listOfCuisines}</ul>
    )
}

export default Cuisines
