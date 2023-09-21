import { useEffect, useReducer, useState } from "react";
import { ACTIONS } from "./utils/actions";
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
// const URL = `https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=${API_KEY}&units=${UNITS}`;
// const FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=Warsaw&appid=f19cccf1d9b5d6373110845d2578547c&units=${UNITS}`;

// useReducer
const initialState = {
	currentWeather: {},
	currentCity: "Warsaw",
	// loading, error, ready
	status: "loading",
	forecast: [],
};
function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.DATA_RECIVED:
			return { ...state, currentWeather: action.payload, status: "ready" };
		case ACTIONS.DATA_FORECAST_RECIVED:
			return { ...state, forecast: action.payload, status: "ready" };
		case ACTIONS.DATA_FAILED:
			return { ...state, status: "error" };
		case ACTIONS.SEARCH_CITY:
			return { ...state, currentCity: action.payload, status: "ready" };
		default:
			throw new Error("Unknown error :(");
	}
}
function App() {
	const [city, setCity] = useState("");
	const [state, dispatch] = useReducer(reducer, initialState);
	const { currentWeather, status, forecast, currentCity } = state;

	// useEffect currentWeather
	useEffect(
		function () {
			async function weatherFetch() {
				try {
					const res = await fetch(
						`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}&units=${UNITS}`
					);
					const data = await res.json();
					dispatch({ type: ACTIONS.DATA_RECIVED, payload: data });
				} catch (err) {
					dispatch({ type: ACTIONS.DATA_FAILED });
				}
			}
			weatherFetch();
		},
		[currentCity]
	);
	// useEffect forecastWeather
	useEffect(
		function () {
			async function weatherFetch() {
				try {
					const res = await fetch(
						`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=f19cccf1d9b5d6373110845d2578547c&units=${UNITS}`
					);
					const data = await res.json();
					dispatch({ type: ACTIONS.DATA_FORECAST_RECIVED, payload: data });
				} catch (err) {
					dispatch({ type: ACTIONS.DATA_FAILED });
				}
			}
			weatherFetch();
		},
		[currentCity]
	);

	const { name, sys, main, weather, wind } = currentWeather;
	const forecastArr = forecast.list;
	return (
		<>
			<Header dispatch={dispatch} city={city} setCity={setCity} />
			<MainContainer>
				{status === "loading" && <Loading />}
				{status === "error" && <Error />}
				{status === "ready" && (
					<WeatherApp
						main={main}
						wind={wind}
						weather={weather}
						name={name}
						sys={sys}
						forecastArr={forecastArr}
					/>
				)}
			</MainContainer>
			<Footer />
		</>
	);
}

export default App;
