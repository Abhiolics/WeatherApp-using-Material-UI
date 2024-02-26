import SearchBox from "./SearchBox"
import Infobox from "./InfoBox"
import { useState } from "react"


export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city : "Wonderland",
        feelsLike : 24.03,
        temp: 24.33,
        tempMin : 22,
        tempMax: 88,
        humidity: 33,
        weather: "Haze"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return(
        <div style={{textAlign: "center"}}>
            <h2 >Weather app by Abhay</h2>
            <SearchBox updateInfo={updateInfo}/>
            <Infobox info ={weatherInfo}/>
            </div>
    )
}