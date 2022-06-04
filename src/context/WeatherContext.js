import { createContext,useState } from "react";

export const WeatherContext = createContext()
const api = {
    key:"76be1009a69fd15fbff8a5397b88cedb",
    base: "https://api.openweathermap.org/data/2.5/weather?"
}

const WeatherProvider = ({children}) => {

    const [query,setQuery]= useState("")
    const [weather,setWeather] = useState({})

    const search = (e) => {
        
        if(e.key === "Enter") {
            
           fetch(`${api.base}q=${query}&units=metric&lang=fr&appid=${api.key}`)
            .then(response => response.json())
            .then(res => {
            setWeather(res)
            setQuery("") 
        })
        }
    }

    return (
        <WeatherContext.Provider value={{setQuery,search,weather}}>{children}</WeatherContext.Provider>
    )
}

export default WeatherProvider