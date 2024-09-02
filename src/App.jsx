import { useState, useRef } from "react";
import axios from "axios";

import WeatherInfo from "./components/WeatherInfo";
import WeatherFiveDays from "./components/WeatherFiveDays";

import "./App.css";

function App() {
  const [weather, setWeather] = useState();
  const [weatherFiveDays, setWeatherFiveDays] = useState();
  const inputCity = useRef();

  async function searchCity() {
    const city = inputCity.current.value;
    const key = "4f71ee49d89f9415d0d47a8697b3f851";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang={pt_br}&units=metric`;
    const urlFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang={pt_br}&units=metric`;

    const apiInfo = await axios.get(url);
    const apiInfoFiveDays = await axios.get(urlFiveDays);

    setWeather(apiInfo.data);
    setWeatherFiveDays(apiInfoFiveDays.data);
  }

  return (
    <div className="container">
      <h1>Previsão do tempo</h1>
      <input ref={inputCity} type="text" placeholder="Digite a cidade" />
      <button onClick={searchCity}>Buscar</button>

      {weather && (
        <>
          <WeatherInfo infoWeather={weather} />
        </>
      )}

      {weatherFiveDays && (
        <WeatherFiveDays infoWeatherFiveDays={weatherFiveDays} />
      )}
    </div>
  );
}

export default App;
