import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchBox = ({ updatedInfo }) => {
  const [City, setCity] = useState("");
  const [error, setError] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "e58f7834ee9abdbf2cf41cc0b5ab4728";

  const WeatherData = async () => {
    try {
      const res = await fetch(
        `${API_URL}?q=${City}&appid=${API_KEY}&units=metric`
      );

      // Handle network or HTTP-level errors
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error(
            "City not found. Please check the name and try again."
          );
        } else {
          throw new Error("Failed to fetch weather data. Try again later.");
        }
      }

      const Data = await res.json();

      // Validate data before using it
      if (!Data.main || !Data.weather) {
        throw new Error("Incomplete weather data received.");
      }

      return {
        city: City,
        temp: Data.main.temp,
        tempMin: Data.main.temp_min,
        tempMax: Data.main.temp_max,
        humidity: Data.main.humidity,
        feelslike: Data.main.feels_like,
        weather: Data.weather[0].description,
      };
    } catch (err) {
      // console.error(err);
      setError(err.message);
      setCity("");
      return null;
    }
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setError(""); // clear previous errors

    if (!City.trim()) {
      setError("Please enter a city name.");
      return;
    }

    const newInfo = await WeatherData();
    if (newInfo) {
      updatedInfo(newInfo);
      setCity("");
    }
  };

  return (
    <div>
      <h3>Search For The Weather</h3>
      <form onSubmit={SubmitHandler}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          onChange={(e) => setCity(e.target.value)}
          value={City}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>

      {/* Display error message if any */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>⚠️ {error}</p>}
    </div>
  );
};

export default SearchBox;
