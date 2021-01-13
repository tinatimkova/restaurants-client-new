import react, { Component } from 'react'
import styles from './App.module.css'
import RestaurantCard from '../components/RestaurantCard/RestaurantCard.js'
import Search from '../components/Search/Search.js'

import Navbar from '../components/layout/Navbar/Navbar'
import { getCityId, getCuisineId, getRestaurants } from '../api/restaurants'

class App extends Component {

  state={
    restaurants: [],
    loading: false,
    modal: false,
    content: null,
    user: null
  }

  //Search restaurants
  searchRestaurants = (location, cuisine) => {
    this.setState({ loading: true })
    let locationId
    let cuisineId = getCuisineId(cuisine)

    getCityId(location)
    .then(res => locationId = res.data.location_suggestions[0].city_id)
    .then(() => getRestaurants(locationId, cuisineId))
    .then(res => {this.setState({ restaurants: res.data.restaurants })})
    .then(() => this.setState({ loading: false }))
  }

  // Show sign in form
  showModal = (content) => {
    if (this.state.modal) {
      return this.setState({ modal: false, content: null })
    }else {
      return this.setState({ modal: true, content: content })
    }
  }

  getUser = (user) => {
    return this.setState({ user: user })
  }


  render() {
    return(
      <>
      <Navbar showModal={this.showModal} modal={this.state.modal} content={this.state.content} getUser={this.getUser} user={this.state.user}/>
      <main className={styles['mainContent']}>
      <header className={styles['restaurant-img']}>
        <h2 className={styles['header']}>Find your restaurant for any occasion</h2>
        <Search searchRestaurants={this.searchRestaurants}/>
      </header>
      <section className={styles['cards']}>
        {this.state.restaurants.map(i => (
          <RestaurantCard restaurant={i.restaurant} loading={this.state.loading} user={this.state.user} />
        ))}
      </section>
      </main>
      </>
    )
  }
}

export default App;
