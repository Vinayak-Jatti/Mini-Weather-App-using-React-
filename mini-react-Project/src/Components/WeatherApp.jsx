import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

const WeatherApp = () => {
  const [Weatherinfo, setWeatherInfo] = useState({
    city: "Vijayapura",
    feelslike: 23.4,
    temp: 23.2,
    tempMin: 32.4,
    tempMax: 34.4,
    humidity: 32,
    weather: "Could",
  });

  let updatedInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="parent">
      <SearchBox updatedInfo={updatedInfo} />
      <InfoBox info={Weatherinfo} />
    </div>
  );
};

export default WeatherApp;
