function getWeatherByCurrentLocation(lat, lon){
    return async(dispatch, getState) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b4dec0b00158074b48ddf6955854d65&units=metric`;
        let response = await fetch(url);
        let data = await response.json();

        dispatch({type: "GET_WEATHER_BY_CURRENT_LOCATION_SUCCESS", payload: {data}})
    }
}

function getWeatherByCity(city){
    return async(dispatch, getState) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b4dec0b00158074b48ddf6955854d65&units=metric`;
        let response = await fetch(url);
        let data = await response.json();

        dispatch({type: "GET_WEATHER_BY_CITY_SUCCESS", payload: {data}})
    }
}

export const weatherAction = {getWeatherByCurrentLocation, getWeatherByCity};