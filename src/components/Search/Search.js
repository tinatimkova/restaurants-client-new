import React, { Component } from 'react';
import styles from './Search.module.css';

class Search extends Component {
    state={
     location: '',
     cuisines: null
    }

    onSubmit = e => {
      e.preventDefault()
        this.props.searchRestaurants(this.state.location)
        this.setState({ location: '', cuisines: null})
    }

    onChange = e => this.setState({ [ e.target.name ]: e.target.value })

    render() {
        return (
        <form className={styles['search']} onSubmit={this.onSubmit}>
        <label htmlFor='location' autoComplete='off' type='text'></label>
          <input className={styles['search-bar']} autoComplete='off' type='text' id='location' name='location' value={this.state.location} onChange={this.onChange} placeholder='Enter location' required />
          <button className={styles['submit-btn']} type='submit'>Let's Go</button>
        </form>
        )
    }
}

export default Search
