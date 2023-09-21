import { ForecastElement } from "./ForecastElement";
import styles from "./Forecast.module.scss";
import { useWeather } from "../context/WeatherContext";
export const Forecast = () => {
	const { forecastArr } = useWeather();

	if (!forecastArr) return;
	else {
		const newArr = [...forecastArr].slice(0, 10);
		return (
			<div className={`${styles.forecast} weatherComponent`}>
				{newArr.map((weather, index) => {
					return <ForecastElement key={index} weather={weather} />;
				})}
			</div>
		);
	}
};
