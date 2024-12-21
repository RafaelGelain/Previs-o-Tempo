import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import InfoTempo from './components/informacaoTempo/infoTempo'
import InfoTempoSemana from './components/informacaoTempoSemana/InfoTempoSemana'

function App() {
  const [weather, setWeather] = useState({})
  const [weather5day, setWeather5day] = useState({})

  const inputRef = useRef()

  async function buscarCidade(){
    const cidade = inputRef.current.value
    const key = "e61b14d0683e4fdf1688d7dde73d755b"
    //Pegando dados na API sobre a cidade / Tempo Atual
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
    //Pegando dados na API sobre a cidade / Proximos 5 Dias
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${key}&lang=pt_br&units=metric`

    const dados = await axios.get(url)
    const dadosForecast = await axios.get(urlForecast)
    setWeather(dados.data)
    setWeather5day(dadosForecast.data)
  }

  return (

      <div className='container'>
        <h1><i class="fa-solid fa-cloud"></i>Previsão do Tempo</h1>
        <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
        <button onClick={buscarCidade}>Buscar</button>
        
        {weather && <InfoTempo weather={weather}/>}
        {weather5day && <InfoTempoSemana weather5day={weather5day}/>}
        </div>
  )
}

export default App
