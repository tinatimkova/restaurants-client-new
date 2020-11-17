import './App.css'

function App() {
  return (
    <div className='restaurant-img'>
      <h2 className='header'>Find your restaurant for any occasion</h2>
      <form className='search'>
        <label htmlFor='search'></label>
        <input className='search-bar' autocomplete='off' type='text' id='search' name='search' placeholder='Location, Restaurant, or Cuisine'/>
        <button className='submit-btn' type='submit'>Let's Go</button>
      </form>
    </div>
  );
}

export default App;
