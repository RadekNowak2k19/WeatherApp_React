import { ForecastElement } from "./ForecastElement";
import styles from "./Forecast.module.scss";
export const Forecast = ({ forecastArr }) => {
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
