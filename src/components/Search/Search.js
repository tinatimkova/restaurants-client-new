import React, { Component } from 'react';
import styles from './Search.module.css';

class Search extends Component {
    state={
     location: '',
     cuisine: ''
    }

    onSubmit = e => {
      e.preventDefault()
        this.props.searchRestaurants(this.state.location, this.state.cuisine)
        this.setState({ location: '', cuisine: ''})
    }

    onChange = e => this.setState({ [ e.target.name ]: e.target.value })

    render() {
        return (
        <form className={styles['search']} onSubmit={this.onSubmit}>
        <label htmlFor='location' autoComplete='off' type='text'></label>
          <input className={styles['search-bar']} autoComplete='off' type='text' id='location' name='location' value={this.state.location} onChange={this.onChange} placeholder='Location' required />
        <label htmlFor='cuisine' autoComplete='off' type='text'></label>
          <input className={styles['search-bar']} autoComplete='off' type='text' id='cuisine' name='cuisine' value={this.state.cuisine} onChange={this.onChange} placeholder='Cuisine' required/>
          <button className={styles['submit-btn']} type='submit'>Let's Go</button>
        </form>
        )
    }
}

export default Search
