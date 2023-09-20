import { Forecast } from "./Forecast";
import { Location } from "./Location";
import { MoreInfo } from "./MoreInfo";
import { Temperature } from "./Temperature";
import { Weather } from "./Weather";
import { WeatherType } from "./WeatherType";
import styles from "./WeatherApp.module.scss";
export const WeatherApp = ({ name, sys, main, weather, wind, forecastArr }) => {
	return (
		<div className={styles.weatherApp}>
			<Location name={name} sys={sys} />
			<Weather>
				<Temperature main={main} />
				<WeatherType weather={weather} />
			</Weather>
			<MoreInfo main={main} sys={sys} wind={wind} />
			{/* <Forecast forecastArr={forecastArr} /> */}
		</div>
	);
};
