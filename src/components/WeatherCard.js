
import cloudIcon from '../assets/icons/cloud.png';
import fogIcon from '../assets/icons/fog.png';
import rainIcon from '../assets/icons/rain.png';
import snowIcon from '../assets/icons/snow.png';
import sunIcon from '../assets/icons/sun.png';
import stormIcon from '../assets/icons/storm.png';
import windyIcon from '../assets/icons/windy.png';



function WeatherCard ({data}){
    const {main, weather, wind} = data;
    const temperature = main.temp;
    const humidity = main.humidity;
    const windSpeed = wind.speed;
    const weatherDescription = weather[0].description;

    let weatherIcon;
    switch (weather[0].main) {
        case 'Clear':
            weatherIcon = sunIcon;
            break;
        case 'Rain':
            weatherIcon = rainIcon;
            break;
        case 'Clouds':
            weatherIcon = cloudIcon;
            break;
        case 'Snow':
            weatherIcon = snowIcon;
            break;
        case 'Wind':
            weatherIcon = windyIcon;
            break;
        case 'Thunder':
            weatherIcon = stormIcon;
            break;
        case 'Fog':
            weatherIcon = fogIcon;
            break;
        default:
            weatherIcon = sunIcon;
    }

    return (
        <div className='weather-card'>
        <h2>{data.name}</h2>
        <p><img src={weatherIcon} alt={weatherDescription}/>{temperature}ºC</p>
        <p>{weatherDescription}</p>
        <p>
            <img src={windyIcon} alt='Humidity Icon'/>
            Humidity: {humidity}%
        </p>
        <p>
            <img src={weatherIcon} alt='Wind Icon'/>
            Wind Speed: {windSpeed} km/h
        </p>
        <p>
            <img src={sunIcon} alt='Heat Index Icon'/>
            Heat Index: {main.feels_like}ºC
        </p>
    </div>
    );
};

export default WeatherCard;