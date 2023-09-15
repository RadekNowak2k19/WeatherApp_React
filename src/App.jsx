// Hooks
import { useEffect, useReducer } from "react";
// Components
import { Header } from "./components/Header";
import { MainContainer } from "./components/MainContainer";
import { Footer } from "./components/Footer";
import { WeatherApp } from "./features/WeatherApp";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";
// OpenWeatherMap
const API_KEY = "f19cccf1d9b5d6373110845d2578547c";
const UNITS = "metric";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${API_KEY}&units=${UNITS}`;
// const FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=Warsaw&appid=f19cccf1d9b5d6373110845d2578547c&units=${UNITS}`;÷

const initialState = {
	currentWeather: {},
	// loading, error, ready
	status: "loading",
};
function reducer(state, action) {
	switch (action.type) {
		case "dataRecived":
			return { ...state, currentWeather: action.payload, status: "ready" };
		case "dataFailed":
			return { ...state, status: "error" };
		default:
			throw new Error("Unknown error :(");
	}
}
function App() {
	// const [currentWeather, setCurrentWeather] = useState({});
	const [state, dispatch] = useReducer(reducer, initialState);
	const { currentWeather, status } = state;

	// useEffect currentWeather
	useEffect(function () {
		async function weatherFetch() {
			try {
				const res = await fetch(URL);
				const data = await res.json();
				dispatch({ type: "dataRecived", payload: data });
			} catch (err) {
				dispatch({ type: "dataFailed" });
			}
		}
		weatherFetch();
	}, []);
	// useEffect forecastWeather
	// useEffect(function () {
	// 	async function weatherFetch() {
	// 		try {
	// 			const res = await fetch(FORECAST);
	// 			const data = await res.json();
	// 			console.log(data);
	// 		} catch (err) {
	// 			throw new Error(err);
	// 		}
	// 	}
	// 	weatherFetch();
	// }, []);

	// cod, name, id, wind: {speed, deg}, timezone, main: {temp, temp_max, temp_min, pressure, feels_like}, sys: {country, sunrise, sunset}, weather: [{description, mian, id , icon}]
	console.log(currentWeather);
	const { name, sys, main, weather } = currentWeather;

	return (
		<>
			<Header />
			<MainContainer>
				{status === "loading" && <Loading />}
				{status === "error" && <Error />}
				{status === "ready" && (
					<WeatherApp main={main} weather={weather} name={name} sys={sys} />
				)}
			</MainContainer>
			<Footer />
		</>
	);
}

export default App;
