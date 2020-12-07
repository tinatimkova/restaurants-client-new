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

 // componentDidMount() {
   // axios.get('https://radiant-meadow-15877.herokuapp.com/restaurants')
   // .then(res => this.setState({restaurants: res.data.restaurants, loading: true}))
   // .then(() => this.setState({loading: false}))
  // }

  //Search restaurants
  searchRestaurants = (location, cuisine) => {
    axios({
      method: 'GET',
      url: `https://developers.zomato.com/api/v2.1/search?entity_type=city&q=${location}&cuisines=${cuisine}`,
      headers: {
        'user-key': '3db78ccb4d5aca6f67f342f16abd68ac',
        'content-type': 'application/json'
      }
    })
    .then(res => this.setState({ restaurants: res.data.restaurants, loading: true}))
    .then(() => this.setState({ loading: false }))
  }

  render() {
    return(
      <main className='mainContent'>
      <header className='restaurant-img'>
        <h2 className='header'>Find your restaurant for any occasion</h2>
        <Search searchRestaurants={this.searchRestaurants}/>
      </header>
      <section className='cards'>
        <RestaurantCard restaurants={this.state.restaurants} loading={this.state.loading} />
      </section>
      </main>
    )
  }
}

export default App;
