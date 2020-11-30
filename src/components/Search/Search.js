import React, { Component } from 'react';
import './Search.module.css'

class Search extends Component {
    state={
     location: '',
     cuisine: ''
    }

    onChange = e => {
        this.setState({ [ e.target.name ]: e.target.value })
    }

    render() {
        return (
        <form className='search'>
        <label htmlFor='location' autoComplete='off' type='text'></label>
          <input className='search-bar' autoComplete='off' type='text' id='location' name='location' value={this.state.location} onChange={this.onChange} placeholder='Location'/>
        <label htmlFor='cuisine' autoComplete='off' type='text'></label>
          <input className='search-bar' autoComplete='off' type='text' id='cuisine' name='cuisine' value={this.state.cuisine} onChange={this.onChange} placeholder='Cuisine'/>
          <button className='submit-btn' type='submit'>Let's Go</button>
        </form>
        )
    }
}

export default Search
