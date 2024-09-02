import "./styles.css";

function WeatherInfo({ infoWeather }) {
  return (
    <div className="weather-container">
      <div className="weather-city">
        <h2>{infoWeather.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${infoWeather.weather[0].icon}.png`}
        />
        <p>{Math.round(infoWeather.main.temp)}°C</p>
      </div>

      <p className="description">{infoWeather.weather[0].description}</p>

      <div className="details">
        <section>
          <p>Sensação térmica: {Math.round(infoWeather.main.feels_like)}°C</p>
        </section>
        <section>
          <p>Umidade: {Math.round(infoWeather.main.humidity)}%</p>
        </section>
        <section>
          <p>Pressão: {Math.round(infoWeather.main.pressure)}</p>
        </section>
      </div>
    </div>
  );
}

export default WeatherInfo;
