import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SerachBox.css" ;
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "88e24eadb318292a0e6e9e4bb1f88a39";

let getWeartherInfo = async () => {
    try{
        let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json();
        console.log(jsonResponse);
      
        let result = {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelsLike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description,
      
        }
        console.log(result);
        return result;
    } catch(err) {
       throw(err);
    }
 
}
    let handleChange =(event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
           let newInfo =  await getWeartherInfo();
           updateInfo(newInfo);
        } catch(err) {
            setError(true);
        }
        
    }
    return (
        <div className="SearchBox">
            {/* <h2>Search for the Weather</h2> */}
            <form onSubmit={handleSubmit} action="">
            <TextField onChange={handleChange} id="city" label="City Name" variant="outlined" required  value={city}/>
            <br />
            <br />
            <Button variant="contained" type='submit' >
        Search
      </Button>
      {error && <p> No such place exist! </p>}
            </form>
        </div>
    )
}