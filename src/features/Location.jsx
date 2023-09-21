import { currentDate } from "../utils/time";
import styles from "./Location.module.scss";
import { useWeather } from "../context/WeatherContext";
export const Location = () => {
	const { currentWeatherName, currentWeatherSys } = useWeather();

	return (
		<div className={`${styles.location} weatherComponent`}>
			<div className={styles.currentTime}>
				<p>{currentDate}</p>
			</div>
			<div className={styles.city}>
				<p>
					<span>{currentWeatherName}</span>,{" "}
					<strong>{currentWeatherSys.country}</strong>{" "}
				</p>
			</div>
		</div>
	);
};
