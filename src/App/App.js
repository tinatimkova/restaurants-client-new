import { Component } from 'react'
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

  // Return to search 
  goBackToSearch = (e) => {
    e.preventDefault()
    this.setState({ restaurants: [] })
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

    const { modal, user, content, restaurants, loading, alert, list } = this.state

    return(
      <>
      <Navbar
        showModal={this.showModal}
        modal={modal}
        content={content}
        getUser={this.getUser}
        user={user}
        showAlert={this.showAlert}
        list={list}
        />
      <main className={styles['mainContent']}>
        {!restaurants.length && 
        <header className={styles['restaurant-img']}>
        <h2 className={styles['header']}>Find your restaurant for any occasion</h2>
        <Search searchRestaurants={this.searchRestaurants}/>
        </header>}
      { restaurants.length > 0 && <button className={styles['back-to-search']} onClick={this.goBackToSearch}>Back To Search</button> }
      <section className={styles['cards']}>
        {restaurants.map(i => (
          <RestaurantCard
          key={i.restaurant.id}
          restaurant={i.restaurant} 
          loading={loading} 
          user={user}
          addToList={this.addToList}
          list={list}
          />
        ))}
      </section>
      </main>
      {alert && <UserAlert alert={alert} />}
      </>
    )
  }
}

export default App;
