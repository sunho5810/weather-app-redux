import React from 'react'

const WeatherBox = ({weather}) => {
  console.log("weather?", weather)
  return (
    <div className='wheatherBox'>
        <div>{weather?.name}</div>
        <h2>섭씨 {weather && weather.main?.temp}도 / 화씨 {((weather && weather.main?.temp) * 1.8) + 32}</h2>
        <h3>{weather && weather.weather[0]?.description}</h3>
    </div>
  )
}

export default WeatherBox