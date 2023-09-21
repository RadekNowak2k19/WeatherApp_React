import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from "react";
import { ACTIONS } from "../utils/actions";

// OpenWeatherMap
const API_KEY = "f19cccf1d9b5d6373110845d2578547c";
const UNITS = "metric";

// Create Context
const WeatherContext = createContext();

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
// --- WeatherProvider component ---
const WeatherProvider = ({ children }) => {
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
		<WeatherContext.Provider
			value={{
				// --- Header ---
				dispatch,
				city,
				setCity,
				// --- MainContainer ---
				currentWeatherMain: main,
				currentWeatherWind: wind,
				currentWeatherWeather: weather,
				currentWeatherName: name,
				currentWeatherSys: sys,
				forecastArr,
				status,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};
const useWeather = () => {
	const context = useContext(WeatherContext);
	if (context === undefined)
		throw new Error("WeatherContext was used outside of the WeatherProvider");
	return context;
};
export { WeatherProvider, useWeather };
