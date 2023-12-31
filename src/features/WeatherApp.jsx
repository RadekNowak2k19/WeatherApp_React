import { Forecast } from "./Forecast";
import { Location } from "./Location";
import { MoreInfo } from "./MoreInfo";
import { Temperature } from "./Temperature";
import { Weather } from "./Weather";
import { WeatherType } from "./WeatherType";
import styles from "./WeatherApp.module.scss";
export const WeatherApp = () => {
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
