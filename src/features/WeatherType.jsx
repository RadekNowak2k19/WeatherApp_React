import styles from "./WeatherType.module.scss";
export const WeatherType = ({ weather }) => {
	const { main, description, icon } = weather[0];
	console.log(main);
	console.log(description);
	console.log(icon);

	return (
		<div className={styles.WeatherType}>
			<div>
				<img
					src={`../src/assets/images/${icon}.png`}
					alt={`Weather icon. ${main}`}
				/>
			</div>
			<div>
				<h6>{main}</h6>
				<p>{description}</p>
			</div>
		</div>
	);
};
