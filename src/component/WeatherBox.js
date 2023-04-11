import React from 'react'
import { useSelector } from 'react-redux';

const WeatherBox = () => {
  const weather = useSelector((state) => state.weather.weather);

  return (
    <div className='wheatherBox'>
        <div>{weather?.name}</div>
        <h2>섭씨 {weather && weather.main?.temp}도 / 화씨 {((weather && weather.main?.temp) * 1.8) + 32}</h2>
        <h3>{weather && weather.weather[0]?.description}</h3>
    </div>
  )
}

export default WeatherBox