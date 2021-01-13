import react, { Component } from 'react'
import styles from './App.module.css'
import RestaurantCard from '../components/RestaurantCard/RestaurantCard.js'
import Search from '../components/Search/Search.js'
import UserAlert from '../components/layout/Alert/UserAlert'

import Navbar from '../components/layout/Navbar/Navbar'
import { getCityId, getCuisineId, getRestaurants } from '../api/restaurants'

class App extends Component {

  state={
    restaurants: [],
    loading: false,
    modal: false,
    content: null,
    user: null,
    list: [],
    alert: null
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
    } else {
      return this.setState({ modal: true, content: content })
    }
  }

  addToList = (e) => {
    if (e.target.checked) {
      // Add a restaurant to the wish list
      return this.setState({ list: [...this.state.list, { 'id': e.target.id, 'value': e.target.value }]}, () => console.log(this.state.list))
    } else {
      // Remove restaurant from the list
      // let remove = this.state.list.indexOf(e.target.value)
      this.setState({ list: this.state.list.filter(i => i.id !== e.target.id) }, () => console.log(this.state.list))
    } 
  }

  // Show alert
  showAlert = (type, msg) => {
    this.setState({ alert: { type, msg }}) 
    setTimeout(() => this.setState({ alert: null}), 3000)
  }


  getUser = (user) => {
    return this.setState({ user: user })
  }

  render() {
    return(
      <>
      <Navbar
        showModal={this.showModal}
        modal={this.state.modal}
        content={this.state.content}
        getUser={this.getUser}
        user={this.state.user}
        showAlert={this.showAlert}
        />
      <main className={styles['mainContent']}>
      <header className={styles['restaurant-img']}>
        <h2 className={styles['header']}>Find your restaurant for any occasion</h2>
        <Search searchRestaurants={this.searchRestaurants}/>
      </header>
      <section className={styles['cards']}>
        {this.state.restaurants.map(i => (
          <RestaurantCard
          key={i.restaurant.id}
          restaurant={i.restaurant} 
          loading={this.state.loading} 
          user={this.state.user}
          addToList={this.addToList}
          />
        ))}
      </section>
      </main>
      {this.state.alert && <UserAlert alert={this.state.alert} />}
      </>
    )
  }
}

export default App;
