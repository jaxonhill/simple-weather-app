import SearchBar from "./components/SearchBar";
import WeatherSection from "./components/WeatherSection";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState("");

  console.log(weatherData);

  return (
    <div className="font-poppins font-medium w-screen h-screen bg-gray-100 flex flex-col items-center pt-16">
      <h1 className="text-gray-800 text-5xl font-bold mb-16">Simple Weather App</h1>
      <SearchBar setWeatherData={setWeatherData} setStatus={setStatus} />
      <WeatherSection weatherData={weatherData} status={status} />
    </div>
  );
}

export default App;
