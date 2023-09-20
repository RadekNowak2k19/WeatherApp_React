import { convertTime } from "../utils/convertTime";
import { InfoElement } from "./InfoElement";
import styles from "./MoreInfo.module.scss";
export const MoreInfo = ({ main, sys, wind }) => {
	const { speed } = wind;
	const { pressure } = main;
	const { sunrise, sunset } = sys;

	const infoArr = [
		{
			id: 0,
			title: "Sunrise",
			info: convertTime(sunrise),
		},
		{
			id: 1,
			title: "Sunset",
			info: convertTime(sunset),
		},
		{
			id: 2,
			title: "Pressure",
			info: `${pressure} mb`,
		},
		{
			id: 3,
			title: "Wind speed",
			info: `${speed} km/h`,
		},
	];

	return (
		<div className={`${styles.moreInfo} weatherComponent`}>
			{infoArr.map(info => (
				<InfoElement key={info.id} title={info.title} info={info.info} />
			))}
		</div>
	);
};
