import { InfoElement } from "./InfoElement";
import styles from "./Temperature.module.scss";
export const Temperature = ({ main }) => {
	const { temp_max, temp_min, feels_like, temp } = main;
	const tempArr = [
		{
			id: 0,
			title: "Max",
			temp: temp_max,
		},
		{
			id: 1,
			title: "Min",
			temp: temp_min,
		},
		{
			id: 2,
			title: "Feels",
			temp: feels_like,
		},
	];

	return (
		<div className={styles.temperature}>
			<div className={styles.currentTemp}>{temp}°C</div>
			<div className={styles.allDayTemp}>
				{tempArr.map(info => (
					<InfoElement key={info.id} temp={info.temp} title={info.title} />
				))}
			</div>
		</div>
	);
};
