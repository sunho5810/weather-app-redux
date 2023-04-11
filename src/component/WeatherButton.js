import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, selectedCity, handleCityChange}) => {
  console.log("cities?", cities);
  return (
    <div>
      <Button 
        variant={`${selectedCity == null ? "success" : "warning"}`}
        onClick={()=>handleCityChange("current")}>
          Current Location
      </Button>

      {cities.map((city , index)=>(
        <Button 
          variant={`${selectedCity == city ? "success" : "warning"}`}
          key={index} 
          onClick={()=>handleCityChange(city)}>
            {city}
        </Button>
      ))}
    </div>
  )
}

export default WeatherButton