
import sunIcon from '../assets/icons/sun.png';
import rainIcon from '../assets/icons/rain.png';
import cloudyIcon from '../assets/icons/cloud.png';


function Forecast ({data}){

    const days = data.list.slice(0, 5).map((item) => {
        let weatherIcon;

        switch (item.weather[0].main) {
            case 'Clear':
                weatherIcon = sunIcon;
                break;
            case 'Rain':
                weatherIcon = rainIcon;
                break;
            case 'Clouds':
                weatherIcon = cloudyIcon;
                break;
            default:
                weatherIcon = sunIcon;
        };


        return (
        <div className='day' key={item.dt}>
            <img src={weatherIcon} alt={item.weather[0].description}/>
            <p>{new Date(item.dt_txt).toLocaleDateString('en-US', {weekday: 'long'})}</p>
            <p>{Math.round(item.main.temp)}ºC</p>
        </div>
        );
    });

    return <div className='forecast'>{days}</div>
};


export default Forecast;