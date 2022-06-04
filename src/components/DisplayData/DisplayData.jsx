import React,{useContext} from 'react'
import { WeatherContext } from '../../context/WeatherContext'
import styledComponents from 'styled-components'

const DataContainer = styledComponents.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  padding: 100px 25px;
  
`

const TempContainer = styledComponents.div`
  background-color: rgba(255,255,255,0.25);
  width: 300px;
  height: 150px;
  border-radius: 15px;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.50);
  padding: 40px;
  text-align:center;
  
`

const TempData = styledComponents.h1`
  font-size:4rem;
  font-weight:500;
  color: white;
  text-shadow: 5px 5px 1px rgba(0,0,0,0.55);
` 

const CityTitle = styledComponents.h1`
  font-size:4rem;
  font-weight:400;
  color: white;
  text-shadow: 4px 2px 1px rgba(0,0,0,0.55);
`

const WaitingTitle = styledComponents.h1`
  font-size:4rem;
  color: rgba(0,0,0,0.8);
  font-weight:1000;
`

const DisplayData = () => {

  const {weather} = useContext(WeatherContext)
  const date = new Date().toLocaleDateString("fr-FR")
  
  return (
    <DataContainer>
      {weather.name ?
      (<>
        <div>   
          <CityTitle>{weather.name}</CityTitle> 
          <p style={{textAlign:"center",fontSize:"1.5rem"}}>{date}</p>
        </div>

        <TempContainer>
          <TempData>{parseInt(weather.main.temp)}°</TempData>
        </TempContainer>

        <div>
          <h2>{weather.weather[0].description}</h2>
        </div>

      </>)
      :
      (<WaitingTitle>Entrez le nom d'une ville</WaitingTitle>)  
      }
    </DataContainer>
      
  )
  
}

export default DisplayData