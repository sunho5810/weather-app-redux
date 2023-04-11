import { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";


// 1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다
// 2. 날씨정보에는 도시, 섭씨, 화씨 날씨 상태가 보인다
// 3. 5개의 버튼이 있다 (1개는 현재위치, 4개는 다른도시)
// 4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다

// 7. redux로 바꾸기

const cities = ["london", "manchester", "barcelona", "madrid"];

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      const {latitude, longitude} = position.coords;

      getWeatherByCurrentLocation(latitude, longitude);
    });
  }
 
  const getWeatherByCurrentLocation = async(lat, lon) => { //async 비동기 함수
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b4dec0b00158074b48ddf6955854d65&units=metric`;
    let response = await fetch(url);
    let data = await response.json();

    setWeather(data);
    setLoading(false);
  }

  const getWeatherByCity = async(city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b4dec0b00158074b48ddf6955854d65&units=metric`;
    let response = await fetch(url);
    let data = await response.json();

    setWeather(data);
    console.log("getWeatherByCity data?", data);
    setLoading(false);
  }

  useEffect(()=>{
    if(city == null){
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity(city);
    }
  }, [city]);

  const handleCityChange = (city) => {
    console.log("city?", city);
    if(city == "current"){
      setCity(null);
    } else {
      setCity(city);
    }
  }

  return (
    <div>
      {
        loading ? (
          <div className='container'>
            <ClipLoader color="#f88c6b" loading={loading} size={150} />
          </div>
        ) : (
          <div className='container'>
            <WeatherBox weather={weather}/>
            <WeatherButton cities={cities} handleCityChange={handleCityChange} selectedCity={city}/>
          </div>
        )
      }
    </div>
  );
}

export default App;
