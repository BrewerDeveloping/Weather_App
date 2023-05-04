import { useState, useEffect } from "react";
import CurrentWeather from "./current-weather/current-weather";
import Search from "./search/search";
import Forecast from "./forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./weather.css";
import axios from "axios";
import { currUser } from "../utilities";

function Weather() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [searchData, setSearchData] = useState(null);

  const handleOnSearchChange = (data) => {
    const [lat, lon] = data.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude={minutely,hourly,daily,alerts}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: data.label, ...weatherResponse });
        setForecast({ city: data.label, ...forecastResponse });
        setSearchData(data);
      })
      .catch(console.log);
  };

  useEffect(() => {
    if (currentWeather && searchData) {
      axios
        .post(`/weather/weather/`, {
          weather: currentWeather,
          user: currUser,
          forecast: forecast,
          location_name: searchData.label,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.respose.data);
        });
    }
  }, [currentWeather]);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default Weather;
