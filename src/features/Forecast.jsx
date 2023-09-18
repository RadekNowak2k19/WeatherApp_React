import { ForecastElement } from "./ForecastElement";

export const Forecast = ({ forecastArr }) => {
	if (!forecastArr) return;
	else {
		const newArr = [...forecastArr].slice(0, 10);
		return (
			<div>
				{newArr.map((weather, index) => {
					return <ForecastElement key={index} weather={weather} />;
				})}
			</div>
		);
	}
};
