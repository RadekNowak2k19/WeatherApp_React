// Hooks
import { useEffect, useState } from "react";
// Components
import { Header } from "./components/Header";
import { MainContainer } from "./components/MainContainer";
import { Footer } from "./components/Footer";
import { WeatherApp } from "./features/WeatherApp";
// OpenWeatherMap
const API_KEY = "f19cccf1d9b5d6373110845d2578547c";
const UNITS = "metric";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=${API_KEY}&units=${UNITS}`;
const FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=Warsaw&appid=f19cccf1d9b5d6373110845d2578547c&units=${UNITS}`;
function App() {
	const [currentWeather, setCurrentWeather] = useState({});

	// useEffects
	useEffect(function () {
		async function weatherFetch() {
			try {
				const res = await fetch(URL);
				const data = await res.json();
				setCurrentWeather(data);
			} catch (err) {
				throw new Error(err);
			}
		}
		weatherFetch();
	}, []);
	useEffect(function () {
		async function weatherFetch() {
			try {
				const res = await fetch(FORECAST);
				const data = await res.json();
				console.log(data);
			} catch (err) {
				throw new Error(err);
			}
		}
		weatherFetch();
	}, []);

	// cod, name, id, wind: {speed, deg}, timezone, main: {temp, temp_max, temp_min, pressure, feels_like}, sys: {country, sunrise, sunset}, weather: [{description, mian, id , icon}]
	console.log(currentWeather);

	return (
		<>
			<Header />
			<MainContainer>
				<WeatherApp weather={currentWeather} />
			</MainContainer>
			<Footer />
		</>
	);
}

export default App;
