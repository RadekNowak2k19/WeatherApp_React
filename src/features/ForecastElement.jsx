import { convertTime } from "../utils/convertTime";
import styles from "./ForecastElement.module.scss";
export const ForecastElement = ({ weather }) => {
	const temperature = weather.main.temp;
	const { icon, description } = weather.weather[0];
	return (
		<div className={styles.forecastElement}>
			<span>{convertTime(weather.dt)}</span>
			<div className={styles.image}>
				<img
					src={`../src/assets/images/${icon}.png`}
					alt={`Weather icon ${description}`}
				/>
			</div>
			<span className={styles.temperature}>{temperature}</span>
		</div>
	);
};
