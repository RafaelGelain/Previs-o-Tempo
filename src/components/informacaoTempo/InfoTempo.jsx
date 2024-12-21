import './infotempo.css'

function InfoTempo({weather}){
    if (!weather || !weather.main) {
      return null;
      }
    

    return(

    <div className='clima-container'>
      <h2><i class="fa-solid fa-location-dot"></i>{weather.name}</h2>
      <p className='temperature'>{Math.round(weather.main.temp)}°C</p>

      <div className='info-weather'>
      {weather.weather && weather.weather[0] && (
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
      )}
      <p className='descricao'>{weather.weather[0].description}</p>
      </div>



      <div className='detalhes'>

      <p><i class="fa-solid fa-droplet"></i>Umidade: {weather.main.humidity} %</p>
      <p><i class="fa-solid fa-wind"></i>Vento: {Math.round(weather.wind.speed)} km/h</p>

      </div>

    </div>

    )
}

export default InfoTempo