import styles from "./WeatherType.module.scss";
export const WeatherType = ({ weather }) => {
	const { main, description, icon } = weather[0];

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
