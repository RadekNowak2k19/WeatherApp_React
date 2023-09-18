export const ForecastElement = ({ weather }) => {
	const temperature = weather.main.temp;
	const { icon, description } = weather.weather[0];
	return (
		<div>
			<div>
				<img
					src={`../src/assets/images/${icon}.png`}
					alt={`Weather icon ${description}`}
				/>
			</div>
			<span>{temperature}</span>
		</div>
	);
};
