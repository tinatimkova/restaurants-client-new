import react, { Component } from 'react'
import './App.css'
import RestaurantCard from '../components/RestaurantCard/RestaurantCard.js'
import Search from '../components/Search/Search.js'
import axios from 'axios'

class App extends Component {

  state={
    restaurants: [],
    loading: false
  }

  componentDidMount() {
    axios.get('https://radiant-meadow-15877.herokuapp.com/restaurants')
    .then(res => this.setState({restaurants: res.data.restaurants, loading: true}))
    .then(() => this.setState({loading: false}))
  }

  render() {
    return(
      <main className='mainContent'>
      <header className='restaurant-img'>
        <h2 className='header'>Find your restaurant for any occasion</h2>
        <Search />
      </header>
      <section className='cards'>
          <RestaurantCard restaurants={this.state.restaurants} loading={this.state.loading} />
      </section>
      </main>
    )
  }
}

export default App;
