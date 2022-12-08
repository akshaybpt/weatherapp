import React, { useEffect,useState } from 'react'


const WeatherResult = (props) => {
    const { weather, search, wdata } = props
    useEffect(() => {
        wdata();
        wddata();
        wcdata();
        wmdata();
        wkdata();
        // eslint-disable-next-line
    }, [])

    const [dweather, setdweather] = useState({})
    const [cweather, setcweather] = useState({})
    const [mweather, setmweather] = useState({})
    const [kweather, setkweather] = useState({})
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2b542e28a9msh5618b4f88f477a3p1458eajsn4f2adc785e49',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    const wddata = async () => {
      const response = await fetch(`${url}Delhi`, options);
      const data = await response.json();
      console.log(data);
      setdweather(data);
      console.log(weather);
    }
    const wmdata = async () => {
        const response = await fetch(`${url}Mumbai`, options);
        const data = await response.json();
        console.log(data);
        setmweather(data);
        console.log(weather);
      }
      const wcdata = async () => {
        const response = await fetch(`${url}Chennai`, options);
        const data = await response.json();
        console.log(data);
        setcweather(data);
        console.log(weather);
      }
      const wkdata = async () => {
        const response = await fetch(`${url}Kolkata`, options);
        const data = await response.json();
        console.log(data);
        setkweather(data);
        console.log(weather);
      }

    return (
        <div>
            <div className="container mt-5">
                <h1 className='text-center'>
                    Weather For {search}
                </h1>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Temprature</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">{weather.temp}<small className="text-muted fw-light">°C</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Temprature:  {weather.temp} °C</li>
                                    <li>Min Temprature:  {weather.min_temp} °C</li>
                                    <li>Max Temprature:  {weather.max_temp} °C</li>

                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Humidity</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">{weather.humidity} <small className="text-muted fw-light">%</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Wind Degree: {weather.wind_degrees}</li>
                                    <li>Feels Like: {weather.feels_like}</li>
                                    <li>Humidity: {weather.humidity}</li>

                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-primary">
                            <div className="card-header py-3 text-bg-primary border-primary">
                                <h4 className="my-0 fw-normal">Wind Info</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">{weather.wind_speed}<small className="text-muted fw-light">KM/hr</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Wind Speed: {weather.wind_speed} </li>
                                    <li>SunRise: {weather.sunrise}</li>
                                    <li>SunSet:  {weather.sunset}</li>

                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="display-6 text-center mb-4">Other Cities</h2>
                <div className="table-responsive">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th style={{ width:  '22%' }}> </th>
                                <th style={{ width:  '22%' }}> cloud_pct</th>
                                <th style={{ width:  '22%' }}> temp</th>
                                <th style={{ width:  '22%' }}> feels_like</th>
                                <th style={{ width:  '22%' }}> humidity</th>
                                <th style={{ width:  '22%' }}> min_temp</th>
                                <th style={{ width:  '22%' }}> max_temp</th>
                                <th style={{ width:  '22%' }}> wind_speed</th>
                                <th style={{ width:  '22%' }}> wind_degrees</th>
                                <th style={{ width:  '22%' }}> sunrise</th>
                                <th style={{ width:  '22%' }}> sunset</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-start">Delhi</th>
                                <td>{dweather.cloud_pct}   </td>
                                <td>{dweather.temp}        </td>
                                <td>{dweather.feels_like}  </td>
                                <td>{dweather.humidity}    </td>
                                <td>{dweather.min_temp}    </td>
                                <td>{dweather.max_temp}    </td>
                                <td>{dweather.wind_speed}  </td>
                                <td>{dweather.wind_degrees}</td>
                                <td>{dweather.sunrise}     </td>
                                <td>{dweather.sunset}      </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Mumbai</th>
                                <td>{mweather.cloud_pct}   </td>
                                <td>{mweather.temp}        </td>
                                <td>{mweather.feels_like}  </td>
                                <td>{mweather.humidity}    </td>
                                <td>{mweather.min_temp}    </td>
                                <td>{mweather.max_temp}    </td>
                                <td>{mweather.wind_speed}  </td>
                                <td>{mweather.wind_degrees}</td>
                                <td>{mweather.sunrise}     </td>
                                <td>{mweather.sunset}      </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Kolkata</th>
                                <td>{kweather.cloud_pct}   </td>
                                <td>{kweather.temp}        </td>
                                <td>{kweather.feels_like}  </td>
                                <td>{kweather.humidity}    </td>
                                <td>{kweather.min_temp}    </td>
                                <td>{kweather.max_temp}    </td>
                                <td>{kweather.wind_speed}  </td>
                                <td>{kweather.wind_degrees}</td>
                                <td>{kweather.sunrise}     </td>
                                <td>{kweather.sunset}      </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Chennai</th>
                                <td>{cweather.cloud_pct}   </td>
                                <td>{cweather.temp}        </td>
                                <td>{cweather.feels_like}  </td>
                                <td>{cweather.humidity}    </td>
                                <td>{cweather.min_temp}    </td>
                                <td>{cweather.max_temp}    </td>
                                <td>{cweather.wind_speed}  </td>
                                <td>{cweather.wind_degrees}</td>
                                <td>{cweather.sunrise}     </td>
                                <td>{cweather.sunset}      </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default WeatherResult