import { Forecast } from "./Forecast";
import { Location } from "./Location";
import { MoreInfo } from "./MoreInfo";
import { Temperature } from "./Temperature";
import { Weather } from "./Weather";
import styles from "./WeatherApp.module.scss";
import { WeatherType } from "./WeatherType";
export const WeatherApp = ({ weather }) => {
	return (
		<div className={styles.weatherApp}>
			<Location />
			<Weather>
				<Temperature />
				<WeatherType />
			</Weather>
			<MoreInfo />
			<Forecast />
		</div>
	);
};
