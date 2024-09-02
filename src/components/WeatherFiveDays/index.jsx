import "./styles.css";

function WeatherFiveDays({ infoWeatherFiveDays }) {
  let dailyForecast = {};

  for (let forecast of infoWeatherFiveDays.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();
    console.log(date);

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const nextFiveDays = Object.values(dailyForecast).slice(1, 6);

  console.log(nextFiveDays);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });

    return newDate;
  }

  return (
    <div className="weatherFive-container">
      <h3>Proximos 4 dias</h3>
      <div className="weather-list">
        {nextFiveDays.map((forecast) => (
          <div className="weather-item" key={forecast.dt}>
            <p>{convertDate(forecast)}</p>

            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            />

            <p>{forecast.weather[0].description}</p>
            <p>
              {Math.round(forecast.main.temp_min)}°C min /
              {Math.round(forecast.main.temp_max)}°C max
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherFiveDays;
