import { useWeather } from "../context/WeatherContext";
import styles from "./Error.module.scss";
export const Error = () => {
	const { errorMessage } = useWeather();
	return (
		<div className={styles.error}>
			<p>{errorMessage}</p>
		</div>
	);
};
