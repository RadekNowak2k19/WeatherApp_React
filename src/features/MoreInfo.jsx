import { InfoElement } from "./InfoElement";
import styles from "./MoreInfo.module.scss";
export const MoreInfo = ({ main, sys, wind }) => {
	const { speed } = wind;
	const { pressure } = main;
	const { sunrise, sunset } = sys;

	const infoArr = [
		{
			id: 0,
			title: "Sunset",
			info: sunset,
		},
		{
			id: 1,
			title: "Sunrise",
			info: sunrise,
		},
		{
			id: 2,
			title: "Pressure",
			info: pressure,
		},
		{
			id: 3,
			title: "Wind speed",
			info: speed,
		},
	];

	return (
		<div className={styles.moreInfo}>
			{infoArr.map(info => (
				<InfoElement key={info.id} title={info.title} info={info.info} />
			))}
		</div>
	);
};
