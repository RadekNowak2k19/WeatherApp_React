import { Forecast } from "./Forecast";
import { Location } from "./Location";
import { MoreInfo } from "./MoreInfo";
import { Temperature } from "./Temperature";
import { Weather } from "./Weather";
import styles from "./WeatherApp.module.scss";
import { WeatherType } from "./WeatherType";
export const WeatherApp = ({ name, sys, main, weather, wind }) => {
	return (
		<div className={styles.weatherApp}>
			<Location name={name} sys={sys} />
			<Weather>
				<Temperature main={main} />
				<WeatherType weather={weather} />
			</Weather>
			<MoreInfo main={main} sys={sys} wind={wind} />
			<Forecast />
		</div>
	);
};
