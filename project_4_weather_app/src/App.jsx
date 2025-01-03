import { use } from "react"
import { useState } from "react"
import axios from "axios"

function App() {
    const api_key = "19b15efc74b01eb7cc0574d85791c65c"

    const [weather, setWeather] = useState({})
    const [query, setQuery] = useState("")

    const queryUpdate = (event) => {
        setQuery(event.target.value)
    }

    const weatherSearch = async (event) => {
        if (event.key == "Enter") {
            try {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${api_key}&units=metric&q=${query}`)
                setWeather(res.data)
            }
            catch (err) {
                alert("Oops! City not found!")
            }
        }
    }

    return (
        <div className="app">
            <div className="search">
                <input placeholder="Type city name" type="text" onChange={queryUpdate} onKeyDown={weatherSearch} />
            </div>
            <div className="container">

                <div className="top">
                    <div className="location">
                        <p>{weather.name ? weather.name : "Amman"}</p>
                    </div>
                    <div className="temp">
                        <h1>
                            {weather.main ? weather.main.temp : 7} <sup><small>&deg;C</small></sup>
                        </h1>
                    </div>
                    <div className="desc">
                        <p>{weather.weather ? weather.weather[0].main : "Rain"}</p>
                    </div>
                </div>

                <div className="bottom">
                    <div className="feels">
                        <p>{weather.main ? weather.main.feels_like : 4}</p>
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        <p>{weather.main ? weather.main.humidity : 20}%</p>
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        <p className="bold">{weather.wind ? weather.wind.speed : 20} KPH</p>
                        <p>Wind Speed</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default App
