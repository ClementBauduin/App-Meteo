import styledComponents from "styled-components";
import GlobalStyle from "./globalStyles"
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherProvider from "./context/WeatherContext";
import DisplayData from "./components/DisplayData/DisplayData";
import Background from "../src/assets/background/skyBg.jpg"

const AppContainer = styledComponents.div`
  width:45vw;
  height:90vh;
  margin: 4vh auto;
  border: 1px solid;
  border-radius: 20px;
  background: no-repeat url(${Background}) center;
  background-size:cover;
`

function App() {
  return (
    <AppContainer>
      <GlobalStyle/>
      <WeatherProvider>
      <SearchBar/>
      <DisplayData/>
      </WeatherProvider>
    </AppContainer>
  );
}

export default App;
