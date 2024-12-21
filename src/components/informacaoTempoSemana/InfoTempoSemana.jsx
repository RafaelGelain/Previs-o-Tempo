import './InfoTempoSemana.css'

function InfoTempoSemana({weather5day}){
    console.log(weather5day)

      // Verificação para evitar erros caso weather5day ou weather5day.list não estejam definidos
    if (!weather5day || !weather5day.list) {
      return null; // Não exibe nada enquanto os dados não estão disponíveis
    }

    let dailyForecast = {

    }
    for(let forecast of weather5day.list){
      const date = new Date(forecast.dt * 1000).toLocaleDateString()

      if(!dailyForecast[date]) {
        dailyForecast[date] = forecast
      }
    }

    const nextFiveDay = Object.values(dailyForecast).slice(0,4)

    function convertDate(date){
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday: 'long'})

    return newDate
    }
    return(

    <div className='clima-container'>
        <h3>Previsão de 4 dias</h3>

        <div className='weather-list'>
        {nextFiveDay.map(forecast => (
          <div key={forecast.dt} className='weather-item'>
            
            <p className='weather-day'><i class="fa-solid fa-calendar-days"></i>{convertDate(forecast)}</p>
            <img
            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt={forecast.weather[0].description}
            />
            <p className='weather-descricao'>{forecast.weather[0].description}</p>
            <p><i class="fa-solid fa-arrow-down"></i>{Math.round(forecast.main.temp_min)}° / <i class="fa-solid fa-arrow-up"></i>{Math.round(forecast.main.temp_max)}°</p>
            

          </div>
        ))}
      </div>
    </div>

    )
}

export default InfoTempoSemana