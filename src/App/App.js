import react, { Component } from 'react'
import styles from './App.module.css'
import RestaurantCard from '../components/RestaurantCard/RestaurantCard.js'
import Search from '../components/Search/Search.js'
import { cuisines } from '../mockData'
import axios from 'axios'
import Navbar from '../components/layout/Navbar/Navbar'

class App extends Component {

  state={
    restaurants: [],
    loading: false,
    modal: false
  }

 // componentDidMount() {
   // axios.get('https://radiant-meadow-15877.herokuapp.com/restaurants')
   // .then(res => this.setState({restaurants: res.data.restaurants, loading: true}))
   // .then(() => this.setState({loading: false}))
  // }

  //Search restaurants
  searchRestaurants = (location, cuisine) => {
    let cuisineId
    let locationId
    cuisines.map(i => {
      if (i['cuisine']['cuisine_name'] === cuisine) {
        cuisineId = i['cuisine']['cuisine_id'].toString()
      }
    })

    axios({
      method: 'GET',
      url: `https://developers.zomato.com/api/v2.1/locations?query=${location}`,
      headers: {
        'user-key': '3db78ccb4d5aca6f67f342f16abd68ac',
        'content-type': 'application/json'
      }
    })
    .then(res => locationId = res.data.location_suggestions[0].city_id)
    .then(axios({
      method: 'GET',
       url: `https://developers.zomato.com/api/v2.1/search?entity_id=${locationId}&cuisines=${cuisineId}`,
       headers: {
        'user-key': '3db78ccb4d5aca6f67f342f16abd68ac',
        'content-type': 'application/json'
       }
     })
     .then(res => 
      { console.log(res)
        this.setState({ restaurants: res.data.restaurants, loading: true})})
     .then(() => this.setState({ loading: false })))
  }

  // Show sign in form
  showModal = (e) => {
    if (this.state.modal) {
      return this.setState({ modal: false })
    }else {
      return this.setState({ modal: true })
    }
  }

  render() {
    return(
      <>
      <Navbar showModal={this.showModal} modal={this.state.modal} />
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
