import react, { Component } from 'react'
import './App.css'
import RestaurantCard from '../RestaurantCard/RestaurantCard.js'
import axios from 'axios'

class App extends Component {

  state={
    restaurants: [],
    loading: false
  }

  componentDidMount() {
    axios.get('https://radiant-meadow-15877.herokuapp.com/restaurants')
    .then(res => this.setState({restaurants: res.data, loading: true}))
    .then(() => this.setState({loading: false}))
    .then(() => console.log(this.state.restaurants))
  }

  render() {
    return(
      <main className='mainContent'>
      <header className='restaurant-img'>
        <h2 className='header'>Find your restaurant for any occasion</h2>
        <form className='search'>
        <label htmlFor='location' autoComplete='off' type='text'></label>
          <input className='search-bar' autoComplete='off' type='text' id='location' name='location' placeholder='Location'/>
        <label htmlFor='cuisine' autoComplete='off' type='text'></label>
          <input className='search-bar' autoComplete='off' type='text' id='cuisine' name='cuisine' placeholder='Cuisine'/>
          <button className='submit-btn' type='submit'>Let's Go</button>
        </form>
      </header>
      <section className='cards'>
          <RestaurantCard restaurants={this.state.restaurants} loading={this.state.loading} />
      </section>
      </main>
    )
  }
}

export default App;
