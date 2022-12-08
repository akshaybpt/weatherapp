import React, { useState } from 'react'
import Navbar from './component/Navbar';
import WeatherResult from './component/WeatherResult';
const App = () => {
  const [search, setSearch] = useState('Delhi')
  const [weather, setWeather] = useState({});
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2b542e28a9msh5618b4f88f477a3p1458eajsn4f2adc785e49',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  const wdata = async () => {
    const response = await fetch(`${url}${search}`, options);
    const data = await response.json();
    console.log(data);
    setWeather(data);
    console.log(weather);
  }

  const handelChange = (e) => {
    setSearch(e.target.value);
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    wdata();
  }
  return (
    <>
      <Navbar handelChange={handelChange} handelSubmit={handelSubmit} />
      <WeatherResult search={search} wdata={wdata} weather={weather} />
    </>
  )
}

export default App