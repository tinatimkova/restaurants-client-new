import { Component } from 'react'
import styles from './App.module.css'
import RestaurantCard from '../components/RestaurantCard/RestaurantCard.js'
import Search from '../components/Search/Search.js'
import UserAlert from '../components/layout/Alert/UserAlert'
import spinner from '../spinner.gif';
import Navbar from '../components/layout/Navbar/Navbar'
import { getCityId, getCuisines, getRestaurants } from '../api/restaurants'
import Cuisines from '../components/Cuisines/Cuisines'

import RestaurantsState from '../context/restaurants/RestaurantsState'

class App extends Component {

  state={
    restaurants: [],
   // cuisines: null,
    loading: false,
    modal: false,
    content: null,
    user: null,
    list: [],
    alert: null,
   // location: null
  }

  //Search cuisines
 /* searchCuisines = (location) => {
    this.setState({ loading: true })

    getCityId(location)
    .then(res => {this.setState({location: res.data.location_suggestions[0]}); return getCuisines(res.data.location_suggestions[0].city_id)})
    .then(res => {this.setState({ cuisines: res.data.cuisines })})
    .then(() => this.setState({ loading: false }))
  }*/

  // Show sign in form
  showModal = (content) => {
    if (this.state.modal) {
      return this.setState({ modal: false, content: null })
    } else {
      return this.setState({ modal: true, content: content })
    }
  }

  // Clear search results 
  clearResults = (e) => {
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

  getListOfRestaurants = (location, cuisine) => {
    this.setState({ cuisines: null })
    this.setState({ loading: true })

    getRestaurants(location.city_id, cuisine)
    .then(res => this.setState({restaurants: res.data.restaurants}))
    .then(() => this.setState({ loading: false }))
  }

  render() {

    const { modal, user, content, restaurants, loading, alert, list, cuisines, location } = this.state

    return(
      <>
      <RestaurantsState>
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
        <header className={styles['restaurant-img']}>
        <h2 className={styles['header']}>Find your restaurant for any occasion</h2>
        <Search searchCuisines={this.searchCuisines}/>
        </header>
      { restaurants && restaurants.length > 0 && <button className={styles['back-to-search']} onClick={this.clearResults}>Clear results</button> }
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
        {loading && <img src={spinner} style={{ width: '250px' }} alt='Loading...' />}
       {cuisines && <Cuisines cuisines={cuisines} location={location} loading={loading} getListOfRestaurants={this.getListOfRestaurants} />}
      </main>
      {alert && <UserAlert alert={alert} />}
      </RestaurantsState>
      </>
    )
  }
}

export default App;
