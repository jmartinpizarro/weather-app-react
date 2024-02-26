import { useState, useEffect } from 'react';
import './App.css';

const API_KEY = `LEPAEYENMR9QWD2GPVE6Z535S`;

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null); // for saving the weather changes

  const handleClick = (event) => {
    event.preventDefault();
    setLocation(document.getElementById('input').value);
  };
  
  useEffect(() => {
    if (location) {
      useFetch(location)}
  }, [location])
  
  function useFetch(location) { // custom hook for fetch
    const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const { currentConditions } = data;
        setWeatherData(currentConditions);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <main>
      <header>
        <h1 className='main-h1'>weatherChecker = true</h1>
      </header>

      <form>
        <input type="text" placeholder='What city are you looking for?' className='input-form' id='input'/>
        <button className='input-btn' onClick={handleClick}>Show me the weather!</button>
      </form>

      {/* if data is available */}
      {weatherData && (
        <div>
          <h2>Weather for {location}</h2>
        </div>
      )}
    </main>
  );
}

export default App;
