import { useState } from 'react'
import './App.css'

const API_KEY = `LEPAEYENMR9QWD2GPVE6Z535S`


function App() {

  const [location, setLocation] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    setLocation(document.getElementById('input').value)
  }

  useFetch(location)

  function useFetch(location){ /* custom hook for fetching */
    const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      const {currentConditions} = data
      console.log(currentConditions)
    })
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
   </main>
  )
}

export default App
