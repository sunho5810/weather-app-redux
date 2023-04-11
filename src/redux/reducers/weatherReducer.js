let initState = {
    weather: null
}

function weatherReducer(state = initState, action){
    let {type, payload} = action;

    switch (type) {
        case "GET_WEATHER_BY_CURRENT_LOCATION_SUCCESS":
            return {
                ...state,
                weather: payload.data
            }
        case "GET_WEATHER_BY_CITY_SUCCESS":
            return {
                ...state,
                weather: payload.data
            }
    
        default:
            return {
                ...state
            }
    }
}

export default weatherReducer;