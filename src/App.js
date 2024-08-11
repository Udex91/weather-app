import axios from 'axios';
import Forecast from './components/Forecast';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import '../src/App.css'
import { useState } from 'react';


function App (){

const [weatherData, setWeatherData] = useState(null);
const [forecastData, setForecastData] = useState(null);
const [location, setLocation] = useState('');
const [error, setError] = useState(null);


const fetchWeatherData = async (location) =>{
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`;

  try {
    const weatherResponse = await axios.get (weatherUrl);
    const forecastResponse = await axios.get (forecastUrl);

    setWeatherData(weatherResponse.data);
    setForecastData(forecastResponse.data);
    setError(null); // Clear any previous errors
  } catch (error) {
    setError('Error fetching weather data');
    setWeatherData(null);
    setForecastData(null);
    console.error('Error fetching weather data:', error);
  }
};

const handleSearch = (searchLocation) => {
  setLocation(searchLocation);
  fetchWeatherData(searchLocation);
};

    return (
      <div className={`App ${weatherData && weatherData.weather[0].main.toLowerCase()}`}>
        <SearchBar onSearch={handleSearch}/>
        {error && <div className='error'>{error}</div>}
        {weatherData && <WeatherCard data={weatherData}/>}
        {forecastData && <Forecast data={forecastData}/>}
      </div>
    )
};





export default App;