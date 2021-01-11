import react, { Component } from 'react'
import styles from './App.module.css'
import RestaurantCard from '../components/RestaurantCard/RestaurantCard.js'
import Search from '../components/Search/Search.js'
import { cuisines } from '../mockData'
import Navbar from '../components/layout/Navbar/Navbar'
import { getCityId, getRestaurants } from '../api/restaurants'

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
    let cuisineId
    let locationId

    cuisines.map(i => {
      if (i['cuisine']['cuisine_name'] === cuisine) {
        cuisineId = i['cuisine']['cuisine_id'].toString()
      }
    })

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
        <RestaurantCard restaurants={this.state.restaurants} loading={this.state.loading} />
      </section>
      </main>
      </>
    )
  }
}

export default App;
