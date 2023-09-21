import styles from "./WeatherType.module.scss";

import { useWeather } from "../context/WeatherContext";
export const WeatherType = () => {
	const { currentWeatherWeather } = useWeather();
	const { main, description, icon } = currentWeatherWeather[0];

	return (
		<div className={styles.WeatherType}>
			<div className={styles.image}>
				<img
					src={`../src/assets/images/${icon}.png`}
					alt={`Weather icon. ${main}`}
				/>
			</div>
			<div className={styles.text}>
				<h6>{main}</h6>
				<p>Description: {description}</p>
			</div>
		</div>
	);
};
