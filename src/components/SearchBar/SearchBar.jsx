import React,{useContext} from 'react'
import { WeatherContext } from '../../context/WeatherContext'
import styledComponents from 'styled-components'

const InputContainer = styledComponents.div`
    width:100%;
`

const StyledInput = styledComponents.input`
    width:50%;
    height:50px;
    margin:auto;
    display: block;
    outline: none;
    border-radius: 0 0 15px 15px;
    border-top:none;
    font-size:1.5rem;
    padding: 1em;
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.50);
  
`

const SearchBar = () => {

    const {search,setQuery,query} = useContext(WeatherContext)

  return (
    <InputContainer>
        <StyledInput
        value={query} 
        onChange={e => setQuery(e.target.value)}
        onKeyPress={search}
        >            
        </StyledInput>
    </InputContainer>
  )
}

export default SearchBar